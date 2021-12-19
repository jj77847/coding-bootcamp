const arg1 = process.argv[2];
const arg2 = process.argv[3];

if (arg1 && arg2 && arg1 === arg2) {
  console.log('SAME');
} else {
  console.log('NOT SAME');
}
