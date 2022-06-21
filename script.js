//task 1

/*let date = new Date(2012, 1, 20, 3, 12);
alert(date);*/

//task 2

function getWeekDay(date) {
  let daysOfWeek = ["ВС", "ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ"];
  const day = date.getDay();
  return daysOfWeek[day];
}

// task 3

function getLocalDay(date) {
  let day = date.getDay();
  if (day === 0) {
    day = 7;
  }
  return day;
}

//task 4
function getDateAgo(date, days) {
  let newDate = new Date(date);
  newDate.setDate(date.getDate() - days);
  return newDate.getDate();
}

//task 5

function getLastDayOfMonth(year, month) {
  return new Date(year, month + 1, 0).getDate();
}

//task 6

function getSecondsToday() {
  let now = new Date();
  let today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  return Math.round((now - today) / 1000);
}

//task 7

function getSecondsToTomorrow() {
  let now = new Date();
  let tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
  return Math.round((tomorrow - now) / 1000);
}

//task 8

function formatDate(date) {
  let msec = new Date() - date;
  if (msec < 1000) {
    return "прямо сейчас";
  }
  let sec = Math.floor(msec / 1000);
  if (sec < 60) {
    return `${sec} секунд назад`;
  }

  let min = Math.floor(sec / 60);
  if (min < 60) {
    return `${min} минут назад`;
  }

  let newDate = new Date(date);
  return `${newDate.getDate()}.${
    newDate.getMonth() < 10
      ? "0" + (newDate.getMonth() + 1)
      : newDate.getMonth() + 1
  }.${newDate.getFullYear()}, ${
    newDate.getHours() < 10 ? "0" + newDate.getHours() : newDate.getHours()
  }:${
    newDate.getMinutes() < 10
      ? "0" + newDate.getMinutes()
      : newDate.getMinutes()
  }`;
}
