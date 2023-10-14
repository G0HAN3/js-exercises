// 1
console.log("The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another");

// 2
console.log("\"Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.\" by Mother Teresa");

// 3
const str1 = '10';
if (typeof str1 !== 'number') {
  str1 = parseInt(str1);
}

// 4
const str2 = '9.8';
if (parseFloat(str2) !== 10) {
  str2 = 10;
}

// 5
const pythonString = 'python';
const jargonString = 'jargon';
const containsOn = pythonString.includes('on') && jargonString.includes('on');

// 6
const sentence = "I hope this course is not full of jargon.";
const containsJargon = sentence.includes('jargon');

// 7
const randomNum1 = Math.floor(Math.random() * 101); 

// 8
const randomNum2 = Math.floor(Math.random() * 51) + 50; 

// 9
const randomNum3 = Math.floor(Math.random() * 256); 

// 10
const randomIndex = Math.floor(Math.random() * challenge.length);
const randomChar = challenge.charAt(randomIndex);

// 11
console.log("1 1 1 1 1\n2 1 2 4 8\n3 1 3 9 27\n4 1 4 16 64\n5 1 5 25 125");

// 12
const sentenceToSlice = "You cannot end a sentence with because because because is a conjunction";
const slicedPhrase = sentenceToSlice.substr(sentenceToSlice.indexOf('because') + 8, 7);
console.log(slicedPhrase);
