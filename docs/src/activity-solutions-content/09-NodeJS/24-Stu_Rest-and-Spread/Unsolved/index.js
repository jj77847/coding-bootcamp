const songs = ['Creep', 'Everlong', 'Bulls On Parade', 'Song 2', 'What I Got'];

const newSongs = [...songs];

console.log(songs);
console.log(newSongs);

const addition = (x, y, z) => {
  const array = [x, y, z];
  return array.reduce((acc, each) => acc + each, 0);
};

console.log(addition(1, 2, 3));

const additionSpread = (...array) => {
  return array.reduce((acc, each) => acc + each, 0);
};

console.log(additionSpread(1, 2, 3));
console.log(additionSpread(1, 2, 3, 4, 100));
