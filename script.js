"use strict";
// const staff = ["Mango", "Poly", "Ajax", "Kiwi"];
// const query = "Ajax";
// const result = staff.includes(query) ? "На работе" : "Нет такого";
// console.log(result);
// ---
// const oldStaff = ["Mango", "Poly", "Ajax"];
// const newStaff = ["Chelsy", "Kiwi"];

// const staff = oldStaff.concat(newStaff);
// console.log("oldStaff", oldStaff);
// console.log("newStaff", newStaff);
// console.log(staff);

// console.log([...oldStaff, ...newStaff]);
// ---
const cards = ["card-1", "card-2", "card-3", "card-4", "card-5"];

console.log(cards);

// const cardToRemove = "card-3";
// const index = cards.indexOf(cardToRemove);
// cards.splice(index, 1);
// console.log(cards);
cards.splice(2, 0, "card-10");
console.log(cards);
