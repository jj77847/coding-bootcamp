const student = (name, gradeYear) => {
  const studentInfo = {
    name,
    gradeYear,
  };

  const greet = () => {
    console.log(
      `My name is ${studentInfo.name} and I am in ${studentInfo.gradeYear} grade`
    );
  };

  return {
    greet,
  };
};

module.exports = student;

// const newStudent = student("Bob", "11th");
// newStudent.greet();
