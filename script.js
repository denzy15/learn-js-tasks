<<<<<<< HEAD
// Task 9

let login = prompt("Кто там?", "");

if (login === "" || login === null) {
  alert("Отменено");
} else if (login === "Админ") {
  let password = prompt("Пароль?", "");

  if (password === "Я главный") {
    alert("Здравствуйте!");
  } else if (password === "" || password === null) {
    alert("Отменено");
  } else {
    alert("Неверный пароль");
  }
} else {
  alert("Я вас не знаю");
}
=======
//Task 6
if (age >= 14 && age <= 90) console.log('В диапазоне');

//Task 7

if (!(age >= 14 && age <= 90)) console.log('Вне диапазона');
if (age < 14 || age > 90) console.log('Вне диапазона');

>>>>>>> 43df7cb048b8f030d6978926c149f9bb117dd1be
