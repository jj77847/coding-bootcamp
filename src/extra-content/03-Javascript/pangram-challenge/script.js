// prompt the user to input the sentence
const sentence = prompt('Enter a sentence:');

// declare isPangram function
const isPangram = function (sentence) {
  if (sentence) {
    const alphabets = 'abcdefghijklmnopqrstuvwxyz';
    const alphabetsArray = alphabets.split('');
    const sentenceArray = sentence
      .toLowerCase()
      .replace(/[^a-zA-Z]/g, '')
      .split('');

    let result = true;
    let i = 0;

    while (i < alphabetsArray.length) {
      // get alphabet from alphabets array
      const alphabet = alphabetsArray[i];

      // check if in sentenceArray
      if (!sentenceArray.includes(alphabet)) {
        result = false;
        break;
      }

      i++;
    }

    return result;
  } else {
    alert('Please enter a string');
    return false;
  }
};

// store result of isPangram function call in result
const result = isPangram(sentence);

// log result
console.log(result);
