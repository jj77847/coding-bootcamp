const mongoose = require("mongoose");

const { School, Class, Professor } = require("../models");

const schoolData = require("./schoolData.json");
const classData = require("./classData.json");
const professorData = require("./professorData.json");

const seed = async () => {
  try {
    const mongoDbUrl =
      process.env.MONGODB_URI || "mongodb://localhost:27017/schools-db";

    await mongoose.connect(mongoDbUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    await School.deleteMany({});
    await Class.deleteMany({});
    await Professor.deleteMany({});

    const schools = await School.insertMany(schoolData);
    const classes = await Class.insertMany(classData);
    const professors = await Professor.insertMany(professorData);

    for (newClass of classes) {
      // randomly add each class to a school
      const tempSchool = schools[Math.floor(Math.random() * schools.length)];
      tempSchool.classes.push(newClass._id);
      await tempSchool.save();

      // randomly add a professor to each class
      const tempProfessor =
        professors[Math.floor(Math.random() * professors.length)];
      newClass.professor = tempProfessor._id;
      await newClass.save();

      // reference class on professor model, too
      tempProfessor.classes.push(newClass._id);
      await tempProfessor.save();
    }

    console.log("Data seeded successfully");
  } catch (error) {
    console.log(`Failed to seed database | ${error.message}`);
  }

  process.exit(0);
};

seed();
