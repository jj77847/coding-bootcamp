const counter = () => {
  let count = 0;

  const increment = () => {
    count += 1;
    return count;
  };

  const getCount = () => count;

  return {
    increment,
    getCount,
  };
};

module.exports = counter;

// const sc1 = counter();
// const sc2 = counter();

// sc1.increment();

// sc2.increment();
// sc2.increment();
// sc2.increment();

// console.log("SC1 value", sc1.getCount());
// console.log("SC2 value", sc2.getCount());
