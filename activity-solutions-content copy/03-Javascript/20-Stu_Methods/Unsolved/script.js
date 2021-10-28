var constellations = ['Orion', 'Scorpius', 'Lyra', 'Ursa Major', 'Ursa Minor'];
var planets = ['Earth', 'Saturn', 'Mars', 'Jupiter', 'Uranus', 'Venus'];
var star = 'polaris';

// add 'Canis Major' in to constellations array
console.log(constellations);
constellations.unshift('Canis Major');
console.log(constellations);

// remove 'Venus' from the planets array
console.log(planets);
planets.pop();
console.log(planets);

// create a new array which joins constellations and planets array
var newArray = constellations.concat(planets);
console.log(newArray);
console.log(constellations);
console.log(planets);

// convert 'polaris' to 'POLARIS'
console.log(star);
var newString = star.toUpperCase();
console.log(newString);
console.log(star);
