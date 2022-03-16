// declare constructor function
const Developer = function (name, tech) {
  this.name = name;
  this.tech = tech;

  const introduction = () => {
    // print the name and tech of developer
    console.log(`${this.name} loves ${this.tech}!!`);
  };

  this.introduction = introduction;
};

// create a new object of Developer
const developer = new Developer('Bob Smith', 'HTML');

// call the introduction method on the Developer object
developer.introduction();
