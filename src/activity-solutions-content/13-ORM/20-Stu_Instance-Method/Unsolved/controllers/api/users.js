const { getPayloadWithValidFieldsOnly } = require('../../helpers');
const User = require('../../models/User');

const getUserById = async (req, res) => {
  try {
    const { id } = req.params;

    const user = await User.findByPk(id);

    if (user) {
      return res.json(user);
    }

    return res.status(404).json({ message: 'No user with this id!' });
  } catch ({ message = 'Something went wrong' }) {
    return res.status(500).json({ message });
  }
};

const createUser = async (req, res) => {
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

const updateUserById = async (req, res) => {
  try {
    const payload = getPayloadWithValidFieldsOnly(
      ['username', 'email', 'password'],
      req.body
    );

    if (!Object.keys(payload).length) {
      return res
        .status(400)
        .json({ message: 'Please provide a valid request' });
    }

    const { id } = req.params;

    const user = await User.update(payload, {
      where: { id },
      individualHooks: true,
    });

    if (!user[0]) {
      return res.status(404).json({ message: 'No user with this id!' });
    }

    return res.json({ message: 'Successfully updated user' });
  } catch ({ message = 'Something went wrong' }) {
    return res.status(500).json({ message });
  }
};

const login = async (req, res) => {
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
    const isValidPassword = await user.checkPassword(payload.password);

    if (!isValidPassword) {
      return res.status(401).json({ message: 'Failed to login user' });
    }

    return res.json({ message: 'Successfully logged in' });
  } catch ({ message = 'Something went wrong' }) {
    return res.status(500).json({ message });
  }
};

module.exports = {
  getUserById,
  createUser,
  updateUserById,
  login,
};
