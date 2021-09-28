// Declare Sentence

const sentence = "Javascript ain't so bad!!";

// convert string to lowercase and then to an array

const sentenceArray = sentence.split("");

// Declare Vowels
const VowelsArray = ['a', 'e', 'i', 'o', 'u']

// Declare Vowels Count
le vowelsCount = 0

// Loop threw the Sentence

for (let i=0; i<sentenceArray.length; i++) {

    // Get Character

    const character = sentenceArray[i]
    // Check if character is vowel

    if (VowelsArray.includes(character)) {
        // if Yes increment VowelCount
        VowelsCount+= 1;
    }
}   

// Display Vowels Count
console.log('There are ' + VowelsCount + ' vowels in that sentence.')