// function to create initials for a full name
const createInitials = (fullName) => {
  // remove whitespaces, convert to uppercase and convert str to arr
  const fullNameArray = fullName.trim().toUpperCase().split(' ');

  // get first name from array
  const firstName = fullNameArray[0];

  // get last name from array
  const lastName = fullNameArray.pop();

  const firstNameChar = firstName.charAt(0);
  const lastNameChar = lastName.charAt(0);

  return `${firstNameChar}.${lastNameChar}`;
};

const createInitials1 = (fullName) =>
  fullName
    .trim()
    .toUpperCase()
    .split(' ')
    .map((name) => name.charAt(0))
    .join('.');

// happy path test 1
console.log(createInitials('Bob smith'));

// happy path test 2
console.log(createInitials('patrick feeney'));

// happy path test 3
console.log(createInitials('    patrick feeney  '));
