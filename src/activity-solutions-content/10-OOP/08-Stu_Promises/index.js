const userInput = process.argv[2];

console.log('Current user activity:', userInput);

if (!userInput) {
  console.error(
    '\nPlease enter your current activity\nUsage: `node index.js <activity>`'
  );
  process.exit();
}

const isNotCoding = userInput !== 'coding';

const practiceCoding = () =>
  new Promise((resolve, reject) =>
    isNotCoding
      ? reject(new Error('Coding stopped - Student is distracted'))
      : resolve('We are coding in promises!')
  );

const callback = (message) => console.log(message);
const errorCallback = (error) =>
  console.error(`Promise rejected: Error: ${error.message}`);

practiceCoding().then(callback).catch(errorCallback);
