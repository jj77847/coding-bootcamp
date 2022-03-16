const { Project, User } = require("../../models");

const renderCreateProjectPage = (req, res) => {
  return res.render("createProject");
};

const renderProfilePage = async (req, res) => {
  const { loggedIn, user } = req.session;

  const projectsFromDB = await Project.findAll({
    where: {
      user_id: req.session.user.id,
    },
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

  return res.render("profile", { loggedIn, projects, user });
};

module.exports = {
  renderCreateProjectPage,
  renderProfilePage,
};
