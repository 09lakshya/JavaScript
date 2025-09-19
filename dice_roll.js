let min = 1;
let max = 6;
console.log(Math.ceil(Math.random() * (max - min + 1)) + min); // ceil is not used because it causes the result to go from 2 to 7 instead of 1 to 6.

// ================ EXPLAINATION =================================
// Math.random() returns a random number between 0 and 1
// Math.floor() rounds it off in -ve direction
// (max - min) is used to set a range and 1 is added to avoid 0 case
// min is added to make sure the result starts at 1, not 0.