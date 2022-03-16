const { Project, User } = require("../../models");

const renderSignUpPage = (req, res) => {
  // render page only if user is not logged in
  if (!req.session.loggedIn) {
    return res.render("signUp");
  }

  return res.redirect("/");
};

const renderLoginPage = (req, res) => {
  // render page only if user is not logged in
  if (!req.session.loggedIn) {
    return res.render("login");
  }

  return res.redirect("/");
};

const renderSingleProjectPage = async (req, res) => {
  // get logged in user info from session
  const { loggedIn, user } = req.session;
  const { id } = req.params;
  const projectFromDB = await Project.findByPk(id, {
    include: [
      {
        model: User,
        attributes: ["name", "email", "id"],
      },
    ],
  });

  const project = projectFromDB.get({ plain: true });

  const isMyProject = loggedIn && user.id === project.user.id;

  return res.render("singleProject", { loggedIn, project, isMyProject });
};

const renderHomePage = async (req, res) => {
  // get logged in user info from session
  const { loggedIn } = req.session;
  const projectsFromDB = await Project.findAll({
    include: [
      {
        model: User,
        attributes: ["name", "email"],
      },
    ],
  });

  const projects = projectsFromDB.map((project) =>
    project.get({ plain: true })
  );

  return res.render("home", { loggedIn, projects });
};

module.exports = {
  renderSignUpPage,
  renderLoginPage,
  renderSingleProjectPage,
  renderHomePage,
};
