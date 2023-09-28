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