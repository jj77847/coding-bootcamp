const { getPayloadWithValidFieldsOnly } = require("../../utils");
const { User } = require("../../models");

const signUp = async (req, res) => {
  try {
    // get the payload
    const payload = getPayloadWithValidFieldsOnly(
      ["name", "email", "password"],
      req.body
    );

    // verify payload
    if (Object.keys(payload).length !== 3) {
      // return status 400
      console.log(`[ERROR]: Failed to sign up | Invalid fields`);
      return res.status(400).json({ error: "Failed to sign up" });
    }

    // if ok create user
    const user = await User.create(payload);

    req.session.save(() => {
      // add loggedIn to session
      req.session.loggedIn = true;
      // add user info to session
      req.session.user = {
        id: user.get("id"),
        name: user.get("name"),
        email: user.get("email"),
      };
      return res.json({ message: "Successfully created user" });
    });
  } catch (error) {
    // catch error and return status 500
    console.log(`[ERROR]: Failed to sign up | ${error.message}`);
    return res.status(500).json({ error: "Failed to sign up" });
  }
};

const login = async (req, res) => {
  try {
    // get the payload
    const payload = getPayloadWithValidFieldsOnly(
      ["email", "password"],
      req.body
    );

    // verify payload
    if (Object.keys(payload).length !== 2) {
      // return status 400
      console.log(`[ERROR]: Failed to login | Invalid fields`);
      return res.status(400).json({ error: "Failed to login" });
    }

    // if ok get user by email
    const user = await User.findOne({
      where: {
        email: payload.email,
      },
    });

    // check if user exists
    if (!user) {
      console.log(`[ERROR]: Failed to login | User not found`);
      return res.status(401).json({ error: "Failed to login" });
    }

    // check if passwords match
    const isValidPassword = user.checkPassword(payload.password);

    if (!isValidPassword) {
      console.log(`[ERROR]: Failed to login | Invalid password`);
      return res.status(401).json({ error: "Failed to login" });
    }

    req.session.save(() => {
      // add loggedIn to session
      req.session.loggedIn = true;
      // add user info to session
      req.session.user = {
        id: user.get("id"),
        name: user.get("name"),
        email: user.get("email"),
      };
      return res.json({ message: "Successfully created user" });
    });
  } catch (error) {
    // catch error and return status 500
    console.log(`[ERROR]: Failed to login | ${error.message}`);
    return res.status(500).json({ error: "Failed to login" });
  }
};

const logout = (req, res) => {
  req.session.destroy();

  return res.redirect("/login");
};

module.exports = {
  signUp,
  login,
  logout,
};
