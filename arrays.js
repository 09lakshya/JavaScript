// let myArr = new Array(0, 1, 2, 3, "Lakshya", true) // another method to declare
let myArr = [0, 1, 2, 3, 4, 5]
// console.log(myArr);

// ============= Array Methods ====================

myArr.push(6,7) // adds at the end of array, Arguments are required
// console.log(myArr);
myArr.pop() // removes the last element, No argument required
// console.log(myArr);

// myArr.unshift(9) // adds element at the starting
// myArr.shift() // removes first element, No argument required
// console.log(myArr.includes(0)) // returns true (or) flase
// console.log(myArr.indexOf(3)) // returns the index of element

let newArr = myArr.join() // joins 2 arrays, converets and returns them as string
// console.log(typeof newArr);

let newArr1 = myArr.slice(2,5) // slices the array from start index to (end - 1) index, Returns a new array with the copied elements, doesnot change original array
console.log(`[${newArr1}]: sliced array`);

let newArr2 = myArr.splice(2,4) // changes original array and returns removed elements
console.log(`[${newArr2}]: spliced array`);
console.log(`[${myArr}]: original array after splicing`);
