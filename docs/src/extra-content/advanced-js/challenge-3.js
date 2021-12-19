// function will transcribe DNA to RNA
const dnaSequencer1 = (dnaSequence) => {
  // convert dnaSequence string to array
  const dnaSequenceArray = dnaSequence.trim().toUpperCase().split('');

  // reduce dnaSequenceArray to rnaSequenceArray
  const rnaSequenceArray = dnaSequenceArray.reduce((acc, each) => {
    if (each === 'A') acc.push('U');
    if (each === 'C') acc.push('G');
    if (each === 'T') acc.push('A');
    if (each === 'G') acc.push('C');

    return acc;
  }, []);

  // convert rnaSequenceArray to string
  const rnaSequence = rnaSequenceArray.join('');

  // return rnaSequenceString
  return rnaSequence;
};

const dnaSequencer = (dnaSequence) =>
  dnaSequence
    .trim()
    .toUpperCase()
    .split('')
    .reduce((acc, each) => {
      if (each === 'A') acc.push('U');
      if (each === 'C') acc.push('G');
      if (each === 'T') acc.push('A');
      if (each === 'G') acc.push('C');
      return acc;
    }, [])
    .join('');

const result = dnaSequencer('ACgTGGtCTTAaX');

console.log(result);
console.log(result === 'UGCACCAGAAUU');
