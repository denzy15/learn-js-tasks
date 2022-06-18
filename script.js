
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
