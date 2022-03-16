const carNoise = "Honk";

const goFast = (speed) => {
  const makeNoise = (sound) => {
    console.log(`My speed is at ${speed}, time to ${sound}`);
  };

  makeNoise(carNoise);
};

if (confirm("Do you want to go fast?")) {
  goFast(80);
}
