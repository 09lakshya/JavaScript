const mySym = Symbol("key1");
let userDetails = {
  //  key : value,        keys are always strings whereas values can be any Data-type
  name: "Lakshya",
  age: 19,
  email: "lakshya@gmail.com",
  isLoggedIn: true,
  daysLoggedIn: ["Monday", "Friday"],
  [mySym]: "key1", // if [] is not used then it is considered as string
};
// console.log(userDetails.age);
// console.log(userDetails["email"]); // better way to access. ["double quotes"] are used for strings (keys)
// console.log(userDetails[mySym]); // no need of "double quotes" for accessing symbols

userDetails.age = 20;
// Object.freeze(userDetails) // doesnot allow to change the values in the object
// userDetails.age = 25; doesnot work
// console.log(userDetails);

userDetails.greeting = function () {
  console.log("Hello JS user");
};
userDetails.greeting2 = function () {
  console.log(`Hello ${this.name}`);
};
// console.log(userDetails.greeting);  returns [Function (anonymous)]
console.log(userDetails.greeting());
console.log(userDetails.greeting2());
