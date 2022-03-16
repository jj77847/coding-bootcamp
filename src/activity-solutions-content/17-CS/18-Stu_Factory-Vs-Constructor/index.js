// class Lesson {
//   constructor(title, description) {
//     this.title = title;
//     this.description = description;
//   }

//   information() {
//     console.log(this.title, this.description);
//   }
// }

// const csForJS1 = new Lesson("Unit 17 - Computer Science", "CS for JS");
// csForJS1.information();

// factory function
const lesson = (title, description) => {
  const information = () => {
    console.log(title, description);
  };

  return {
    information,
  };
};

const csForJSLesson = lesson("Unit 17 - Computer Science", "CS for JS");
csForJSLesson.information();
