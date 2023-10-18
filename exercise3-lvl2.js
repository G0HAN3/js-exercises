// 1
// const base = parseFloat(prompt("Enter the base:"));
// const height = parseFloat(prompt("Enter the height:"));

// const area = 0.5 * base * height;

// console.log(`The area of the triangle is ${area}`);




// Level-3 Q-1
const now = new Date();

const year = now.getFullYear();
const month = (now.getMonth() + 1).toString().padStart(2, '0');
const day = now.getDate().toString().padStart(2, '0');
const hours = now.getHours().toString().padStart(2, '0');
const minutes = now.getMinutes().toString().padStart(2, '0');

const formattedTime = `${year}-${month}-${day} ${hours}:${minutes}`;
console.log(formattedTime);
