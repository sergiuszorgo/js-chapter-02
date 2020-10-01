"use strict";
const staff = ["Mango", "Poly", "Ajax", "Kiwi"];
const query = "Ajax";
// let result = "Сотрудника нет";

// for (const employee of staff) {
//   console.log(employee);
//   if (query === employee) {
//     result = "Сотрудник на работе";
//     break;
//   }
// }
// console.log(result);
const result = staff.includes(query) ? "На работе" : "Нет такого";
console.log(result);
