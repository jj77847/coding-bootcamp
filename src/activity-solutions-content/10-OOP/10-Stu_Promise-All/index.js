const apiCallDurations = [3000, 4000, 5000, 6000];
const maxDuration = 9999;

const callAPI = (duration) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      if (duration >= maxDuration) {
        reject(new Error('This request timed out'));
      } else {
        resolve(`Response received: ${duration} ms`);
      }
    }, duration);
  });

const promises = apiCallDurations.map((duration) => callAPI(duration));

console.log('Promises array before the timeouts have finished: ', promises);

Promise.all(promises)
  .then((responses) => console.log('Response from all promises: ', responses))
  .catch((error) => console.error(error.message));
