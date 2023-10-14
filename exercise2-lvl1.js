// 1
const challenge = '30 Days Of JavaScript';

// 2
console.log(challenge);

// 3
console.log(challenge.length);

// 4
const uc = challenge.toUpperCase();

// 5
const lc = challenge.toLowerCase();

// 6
const rmvword = challenge.substr(challenge.indexOf(' ') + 1);
console.log(rmvword);

// 7
const sliced = challenge.substring(challenge.indexOf('Days'), challenge.indexOf('JavaScript') + 'JavaScript'.length);

// 8
const containsScript = challenge.includes('Script');

// 9
const wrdArray = challenge.split(' ');

// 10
const wrdArray2 = challenge.split(' ');

// 11
var str = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';
var arr = str.split(', ');

console.log(arr);

// 12
challenge = challenge.replace('JavaScript', 'Python');

// 13
const charAt15 = challenge.charAt(15);

// 14
const charCodeJ = challenge.charCodeAt(challenge.indexOf('J'));

// 15
const indexOfA = challenge.indexOf('a');

// 16
const lastIndexOfA = challenge.lastIndexOf('a');

// 17
const indexOfBecause = 'You cannot end a sentence with because because because is a conjunction'.indexOf('because');

// 18
const lastIndexOfBecause = 'You cannot end a sentence with because because because is a conjunction'.lastIndexOf('because');

// 19
const searchBecause = 'You cannot end a sentence with because because because is a conjunction'.search('because');

// 20
const trimmedString = ' 30 Days Of JavaScript '.trim();

// 21
const startsWithResult = challenge.startsWith('30 Days Of JavaScript');

// 22
const endsWithResult = challenge.endsWith('30 Days Of JavaScript');

// 23
const allAs = challenge.match(/a/g);

// 24
const mergedString = '30 Days of '.concat('JavaScript');

// 25
const repeatedString = challenge.repeat(2);

