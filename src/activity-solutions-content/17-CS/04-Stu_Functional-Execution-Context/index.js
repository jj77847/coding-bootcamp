function avg(array) {
  let total = 0;

  function sum() {
    for (let i = 0; i < array.length; i++) {
      total += array[i];
    }
  }

  sum();

  return total / array.length;
}

module.exports = avg;
