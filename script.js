//Task 2
let jsName = prompt('Какое "официальное" название JavaScript?', "");
if (jsName == "ECMAScript") {
  alert("Верно!");
} else {
  alert("Не знаете? ECMAScript!");
}

//Task 3
let num = prompt("Введите число", 0);
if (num > 0) {
  alert(1);
} else if (num < 0) {
  alert(-1);
} else {
  alert(0);
}

//Task 4

let result = a + b < 4 ? "Мало" : "Много";

//Task 5

let message =
  login == "Сотрудник"
    ? "Привет"
    : login == "Директор"
    ? "Здравствуйте"
    : login == ""
    ? "Нет логина"
    : "";
