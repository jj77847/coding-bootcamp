const bcrypt = require('bcrypt');

const { getPayloadWithValidFieldsOnly } = require('../../helpers');
const User = require('../../models/User');

const loginUser = async (req, res) => {
  try {
    // get payload from req body
    const payload = getPayloadWithValidFieldsOnly(
      ['email', 'password'],
      req.body
    );

    // check if payload has correct number of fields
    if (Object.keys(payload).length !== 2) {
      return res
        .status(400)
        .json({ message: 'Please provide email and password' });
    }

    // get user by email from DB
    const user = await User.findOne({ where: { email: payload.email } });

    // check if user exists
    if (!user) {
      return res.status(404).json({ message: 'User does not exist' });
    }

    // validate the password by comparing password from req
    const databasePassword = user.password;
    const clientPassword = payload.password;

    const isValidPassword = await bcrypt.compare(
      clientPassword,
      databasePassword
    );

    if (!isValidPassword) {
      return res.status(401).json({ message: 'Failed to login user' });
    }

    return res.json({ message: 'Successfully logged in' });
  } catch ({ message = 'Something went wrong' }) {
    return res.status(500).json({ message });
  }
};

module.exports = {
  loginUser,
};
