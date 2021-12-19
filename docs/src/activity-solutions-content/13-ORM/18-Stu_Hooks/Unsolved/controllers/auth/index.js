const bcrypt = require('bcrypt');

const User = require('../../models/User');
const { getPayloadWithValidFieldsOnly } = require('../../helpers');

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
    const isValidPassword = await bcrypt.compare(
      payload.password,
      user.password
    );

    if (!isValidPassword) {
      return res.status(401).json({ message: 'Failed to login user' });
    }

    return res.json({ message: 'Successfully logged in' });
  } catch ({ message = 'Something went wrong' }) {
    return res.status(500).json({ message });
  }
};

const signupUser = async (req, res) => {
  try {
    // get payload from req body
    const payload = getPayloadWithValidFieldsOnly(
      ['email', 'password', 'username'],
      req.body
    );

    // check if all 3 fields are present
    if (Object.keys(payload).length !== 3) {
      return res
        .status(400)
        .json({ message: 'Please provide all required fields' });
    }

    const user = await User.create(payload);

    return res.json(user);
  } catch ({ message = 'Something went wrong' }) {
    return res.status(500).json({ message });
  }
};

const resetPassword = async (req, res) => {
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

    await User.update(
      { password: payload.password },
      { where: { email: payload.email }, individualHooks: true }
    );

    return res.json({ message: 'Successfully reset password' });
  } catch ({ message = 'Something went wrong' }) {
    return res.status(500).json({ message });
  }
};

module.exports = {
  loginUser,
  signupUser,
  resetPassword,
};
