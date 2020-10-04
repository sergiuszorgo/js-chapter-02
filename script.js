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
// УДАЛЕНИЕ КАРТЫ
// const cards = ["card-1", "card-2", "card-3", "card-4", "card-5"];
// console.log(cards);

// const removeCard = function (allCards, cardToRemove) {
//   const index = allCards.indexOf(cardToRemove);
//   allCards.splice(index, 1);
// };
// removeCard(cards, "card-3");
// console.log(cards);
// ---
// ДОБАВЛЯЕМ КАРТУ
// const cards = ["card-1", "card-2", "card-3", "card-4", "card-5"];
// console.log(cards);

// const addCard = function (allCards, cardToInsert, index) {
//   allCards.splice(index, 0, cardToInsert);
// };

// addCard(cards, "card-100", 2);
// console.log(cards);
// ---
// 2 - 2  ПОДСЧЁТ СТОИМОСТИ ГРАВИРОВКИ СЛОВ
// const calculateEngravingPrice = (message = "", pricePerWord = 0) =>
//   message.split(" ").length * pricePerWord;

// console.log(
//   calculateEngravingPrice(
//     "Proin sociis natoque et magnis parturient montes mus",
//     10
//   )
// );
// ---
// 2 - 3  ПОИСК САМОГО ДЛИННОГО СЛОВА
// function findLongestWord(string = "") {
//   let words = string.split(" ");
//   let longWord = words[0];
//   for (let i = 0; i < words.length; i += 1) {
//     if (longWord.length < words[i].length) {
//       longWord = words[i];
//     }
//   }
//   return longWord;
// }

// console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));
// ---
// 2 - 4  Форматирование строки в зависимости от длинны строки
// function formatString(string, maxLength = 40) {
//   return string.length < maxLength
//     ? string
//     : string.slice(0, maxLength) + "...";
// }

// console.log(formatString("Vestibulum facilisis, purus nec pulvinar iaculis."));
// ---
// 2 - 5  ПРОВЕРКА НА НАЛИЧИЕ СЛОВ
// function checkForSpam(str) {
//   "use strict";
//   return (
//     str.toLowerCase().includes(`spam`) || str.toLowerCase().includes(`sale`)
//   );
// }

// console.log(checkForSpam("Get best sale offers now!")); //true
// console.log(checkForSpam("Latest technology news")); // false
// ---
// ? ? ? ? ? ? ? ? ? ? ? ? ?? ? ? ? ? ?? ? ? ? ?? ? ?
// const getItemString = function (array) {
//   "use strict";
//   let result = "";
//   for (let i = 0; i < array.length; i += 1) {
//     result += `${i + 1} - ${array[i]}\n`;
//   }
//   return result;
// };

// console.log(getItemString(["Mango", "Poly", "Ajax", "Kiwi"]));
// ---
// Задача 2-6
// function mapArray(array) {
//   "use strict";
//   const numbers = new Array(array.length);
//   for (let i = 0; i < array.length; i += 1) {
//     numbers[i] = array[i] * 10;
//   }
//   return numbers;
// }

// console.log(mapArray([-2, 0, 2])); // [-20, 0, 20]
// console.log(mapArray([-2.5, 0, 2.5])); // [-25, 0, 25]
// ---
// Задача 2-7
// function filterArray(array) {
//   "use strict";
//   const numbers = [];
//   for (let i = 0; i < array.length; i += 1) {
//     // Write code under this line
//     if (Number.isFinite(array[i])) {
//       numbers.push(array[i]);
//     }
//   }
//   return numbers;
// }

// console.log(filterArray([-2, 0, 2])); // [-2, 0, 2]
// ---
// Задача 2-8
// function reduceArray(array) {
//   "use strict";
//   let total = 0;
//   // Write code under this line
//   for (let i = 0; i < array.length; i += 1) {
//     total += array[i];
//   }
//   return total;
// }

// console.log(reduceArray([1, 2, 3])); // 6
// ---
// Задача 2-9
function isLoginValid(login, min = 4, max = 16) {
  // Write code under this line
  let LongUserName = login.length >= min && login.length <= max;
  return LongUserName;
}

function isLoginUnique(allLogins, login) {
  "use strict";
  // Write code under this line
  return allLogins.includes(login);
}

function addLogin(allLogins, login) {
  "use strict";
  const SUCCESS = "Логин успешно добавлен!";
  const REFUSAL = "Такой логин уже используется!";
  const ERROR = "Ошибка! Логин должен быть размером от 4 до 16 символов";
  let message;
  // Write code under this line
  if (isLoginValid(login) === false) {
    return (message = ERROR);
  } else if (isLoginUnique(allLogins, login) === false) {
    return (message = REFUSAL);
  } else {
    allLogins.push(login);
    return (message = SUCCESS);
  }
}

const logins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];

console.log(addLogin(logins, "Ajax"));
// 'Логин успешно добавлен!'
