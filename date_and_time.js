let myDate = new Date()
// console.log(myDate) // returns in [2025-09-19T14:59:29.278Z] format
// console.log(myDate.toDateString()) // returns in [Fri Sep 19 2025] format
// console.log(myDate.toLocaleString()) // returns in [19/9/2025, 8:29:29 pm] format

// Datatype of date is object

// let createdDate = new Date(2027, 9, 9) // months in js start from 0 (if writing in single digit)
// let createdDate = new Date(2027, 9, 9, 14, 50) // new Date(year, month, date, time(hrs)[24hr format], min)
// let createdDate = new Date("yyyy-mm-dd") // NOTE: if mm = 2 digits then start from 01
let createdDate = new Date("10-09-2027") // ("mm-dd-yyyy")
console.log(createdDate.toLocaleString());
