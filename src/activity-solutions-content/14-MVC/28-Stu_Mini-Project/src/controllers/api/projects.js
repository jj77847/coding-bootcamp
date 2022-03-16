const { Project } = require("../../models");
const { getPayloadWithValidFieldsOnly } = require("../../utils");

const createProject = async (req, res) => {
  try {
    // get the payload
    const payload = getPayloadWithValidFieldsOnly(
      ["name", "description", "needed_funding"],
      req.body
    );

    // verify payload
    if (Object.keys(payload).length !== 3) {
      // return status 400
      console.log(`[ERROR]: Failed to create project | Invalid fields`);
      return res.status(400).json({ error: "Failed to create project" });
    }

    // if ok create project
    await Project.create({
      ...payload,
      user_id: req.session.user.id,
    });

    return res.json({ message: "Successfully created project" });
  } catch (error) {
    // catch error and return status 500
    console.log(`[ERROR]: Failed to create project | ${error.message}`);
    return res.status(500).json({ error: "Failed to create project" });
  }
};

const deleteProject = async (req, res) => {
  try {
    // delete project
    await Project.destroy({
      where: {
        id: req.params.id,
      },
    });

    return res.json({ message: "Successfully deleted project" });
  } catch (error) {
    // catch error and return status 500
    console.log(`[ERROR]: Failed to delete project | ${error.message}`);
    return res.status(500).json({ error: "Failed to delete project" });
  }
};

module.exports = {
  createProject,
  deleteProject,
};
