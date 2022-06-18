//Task 6

/*if (age >= 14 && age <= 90) console.log('В диапазоне');*/

//Task 7

/*if (!(age >= 14 && age <= 90)) console.log('Вне диапазона');
if (age < 14 || age > 90) console.log('Вне диапазона');*/

//Task 9

let user = prompt("Ваш логин?", "");

if (user === null || user == '') {
  alert("Отменено");
} else if (user === "Админ") {
  let password = prompt("Ваш пароль?", "");

  if (password === null || password == '') {
    alert("Отменено");
  }
  else if (password === "Я Главный") {
    alert("Здравствуйте!");
  } else {
    alert("Неверный пароль");
  }
} else {
  alert("Я вас не знаю");
}
