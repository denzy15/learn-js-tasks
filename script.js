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
