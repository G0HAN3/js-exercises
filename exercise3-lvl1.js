// 1
const firstName = 'John';
const lastName = 'Doe';
const country = 'USA';
const city = 'New York';
const age = 30;
const isMarried = false;
const year = 2023;

console.log(typeof firstName); // string
console.log(typeof lastName); // string
console.log(typeof country); // string
console.log(typeof city); // string
console.log(typeof age); // number
console.log(typeof isMarried); // boolean
console.log(typeof year); // number

// 2
const strNum = '10';
console.log(typeof strNum === 'string'); // true
console.log(parseInt(strNum) === 10); // true

// 3
console.log(parseInt('9.8') === 10); // false

// 4
// Truthy values
console.log(Boolean(5)); // true
console.log(Boolean('Hello')); // true
console.log(Boolean([])); // true

// Falsy values
console.log(Boolean(0)); // false
console.log(Boolean('')); // false
console.log(Boolean(null)); // false

// 6
    // 1
    const result1 = 4 > 3;
    console.log(result1); // true

    // 2
    const result2 = 4 >= 3;
    console.log(result2); // true

    // 3
    const result3 = 4 < 3;
    console.log(result3); // false

    // 4
    const result4 = 4 <= 3;
    console.log(result4); // false

    // 5
    const result5 = 4 == 4;
    console.log(result5); // true

    // 6
    const result6 = 4 === 4;
    console.log(result6); // true

    // 7
    const result7 = 4 != 4;
    console.log(result7); // false

    // 8
    const result8 = 4 !== 4;
    console.log(result8); // false

    // 9
    const result9 = 4 != '4';
    console.log(result9); // false

    // 10
    const result10 = 4 == '4';
    console.log(result10); // true

    // 11
    const result11 = 4 === '4';
    console.log(result11); // false

    // 12
    const python = 'python';
    const jargon = 'jargon';
    const falsyComparison = python.length == jargon.length;
    console.log(falsyComparison); // false


//6
    // // 1
    // const result1 = 4 > 3 && 10 < 12; // true

    // // 2
    // const result2 = 4 > 3 && 10 > 12; // false

    // // 3
    // const result3 = 4 > 3 || 10 < 12; // true

    // // 4
    // const result4 = 4 > 3 || 10 > 12; // true

    // // 5
    // const result5 = !(4 > 3); // false

    // // 6
    // const result6 = !(4 < 3); // true

    // // 7
    // const result7 = !(false); // true

    // // 8
    // const result8 = !(4 > 3 && 10 < 12); // false

    // // 9
    // const result9 = !(4 > 3 && 10 > 12); // true

    // // 10
    // const result10 = !(4 === '4'); // true

    // // 11
    // const dragon = 'dragon';
    // const python = 'python';
    // const result11 = !(dragon.includes('on') && python.includes('on')); // true

    // console.log(result1);
    // console.log(result2);
    // console.log(result3);
    // console.log(result4);
    // console.log(result5);
    // console.log(result6);
    // console.log(result7);
    // console.log(result8);
    // console.log(result9);
    // console.log(result10);
    // console.log(result11);



// 7
const now = new Date();
const yearToday = now.getFullYear();
const monthToday = now.getMonth() + 1; // Months are 0-based
const dateToday = now.getDate();
const dayToday = now.getDay(); // 0 is Sunday, 1 is Monday, etc.
const hoursNow = now.getHours();
const minutesNow = now.getMinutes();
const secondsElapsed = now.getTime();

console.log(yearToday);
console.log(monthToday);
console.log(dateToday);
console.log(dayToday);
console.log(hoursNow);
console.log(minutesNow);
console.log(secondsElapsed);
