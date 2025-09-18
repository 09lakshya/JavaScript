let book1 = prompt("Enter price of book1: ");
let book2 = prompt("Enter price of book2: ");
let book3 = prompt("Enter price of book3: ");

let qty1 = prompt("Enter quantity of book1: ");
let qty2 = prompt("Enter quantity of book2: ");
let qty3 = prompt("Enter quantity of book3: ");

let sub_tot1 = book1 * qty1;
let sub_tot2 = book2 * qty2;
let sub_tot3 = book3 * qty3;

let total = sub_tot1 + sub_tot2 + sub_tot3;
let shipping = 9.99;
if (total >= 150) {
  console.log("You are eligible for Free Shipping, Your total is: $" + total);
} else {
  console.log("Your total is: $" + total);
  total += shipping;
  console.log(
    "You have to pay shipping charges of 9.99, Your new total is: $" + total
  );
}
let discount = 0;
if (total >= 170 && total < 200) {
  discount = total * 0.05;
  total -= discount;
  console.log(
    "You are eligible for a 5% discount\nYour total after discount is: $" +
      total
  );
} else if (total >= 200 && total < 300) {
  discount = total * 0.1;
  total -= discount;
  console.log(
    "You are eligible for a 10% discount\nYour total after discount is: $" +
      total
  );
} else if (total >= 300) {
  discount = total * 0.15;
  total -= discount;
  console.log(
    "You are eligible for a 15% discount\nYour total after discount is: $" +
      total
  );
}
