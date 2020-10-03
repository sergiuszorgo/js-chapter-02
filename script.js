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
// const cards = ["card-1", "card-2", "card-3", "card-4", "card-5"];
// console.log(cards);
// cards.splice(2, 0, "card-10");
// console.log(cards);
// ---
// Выносим варианты в массив
// const redFruits = ["apple", "strawberry", "cherry", "cranberries"];
// const fruit = "cherry";

// if (redFruits.includes(fruit)) {
//   console.log("It ts a red fruit!");
// }
// ---
// const add = function (a, b) {
//   const result = a + b;
//   return result;
// };
// const r1 = add(15, 17);
// console.log(r1);
// ---
// const count = function (countFrom = 0, countTo = 10, step = 1) {
//   console.log(`countFrom = ${countFrom}, countTo = ${countTo}, step = ${step}`);

//   for (let i = countFrom; i <= countTo; i += step) {
//     console.log(i);
//   }
// };
// count();
// ---
// const staff = ["Mango", "Poly", "Ajax", "Kiwi"];
// const cards = ["card-1", "card-2", "card-3", "card-4", "card-5"];
// const logItems = function (items) {
//   for (const item of items) {
//     console.log(item);
//   }
// };
// logItems(staff);
// ---
// const friends = ["Mango", "Poly", "Ajax", "Kiwi"];

// const findFriends = function (allFriends, name) {
//   console.log(allFriends);
//   console.log(name);

//   for (const friend of allFriends) {
//     if (name === friend) {
//       console.log("Нашли такого");
//       return "Нашли такого";
//     }
//   }
//   return "Не нашли";
// };

// const r1 = findFriends(friends, "Thdjg");
// console.log(r1);
// ---

// const title = "Top 10 benefits of react Framework";
// const word = title.toLowerCase().split(" ");
// const slug = word.join("-");
// console.log(slug);
// ---
// Массив слагов
// const slugify = function (string) {
//   const words = string.toLowerCase().split(" ");
//   const slug = words.join("-");

//   return slug;
// };

// const articles = [
//   "Top 10 benefits of react Framework",
//   "Top 10 ldfkbgdflkgh of react Framework",
//   "Top 10 benefits of dfgfdgh Framework",
//   "Top 10 benefits dfghgfrhg react Framework",
// ];

// const slugs = [];

// for (const article of articles) {
//   const slug = slugify(article);

//   slugs.push(slug);
// }

// console.log(slugs);
// ---
// Меньшее число
// const numbers = [67, 45, -3, 1, 78, 90, 2];
// let smallestNumber = numbers[0];

// const findSmallestNumber = function (items) {
//   let smallestNumber = items[0];
//   for (let i = 1; i < items.length; i += 1) {
//     if (items[i] < smallestNumber) {
//       smallestNumber = items[i];
//     }
//   }
//   return smallestNumber;
// };

// const r1 = findSmallestNumber(numbers);
// console.log(r1);
// ---
// ПОИСК ИМЕНИ В МАССИВЕ
// const staff = ["Mango", "Poly", "Ajax", "Kiwi"];

// const findFriends = function (allFriends, name) {
//   const isInFriends = allFriends.includes(name);
//   return isInFriends ? "Нашли такого" : "Не нашли";
// };

// const r1 = findFriends(staff, "Poly");
// console.log(r1);
// ---
