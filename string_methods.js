// v    i    r    a    t         k    o    h    l    i
// 0    1    2    3    4    5    6    7    8    9    10
// -11 -10  -9    -8   -7   -6   -5   -4   -3   -2   -1

// ==============================================================
let name = "virat kohli";

console.log(name.toUpperCase()); // returns the string in uppercase
console.log(name.toLowerCase()); // returns the string in lowercase
console.log(name.charAt(3)); // returns character at index 3
console.log(name.indexOf("k")); // returns index of character k
console.log(name.split(' ')); // divides a string into substrings and returns an array

let newName = name.substring(0, 4); // returns the string all the way from 0 to 4-1
console.log(newName); // -ve values are not allowed for substrings

const sliceNewName = name.slice(-7, 9); // starts from -7 and goes till 8
console.log(sliceNewName);

const newString = "   Lakshya   ";
console.log(newString.trim()); // trims all the whitespaces and line terminators

const url = "https://lakshya.com/lakshya%20hindocha";
console.log(url.replace("%20", "-")); // replaces "%20" with "-"
console.log(url.includes("lakshya")); // returns true or false