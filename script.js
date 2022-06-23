//task 2

/*function clear(elem) {
  elem.innerHTML = "";
}

let elem = document.querySelector("#elem");

clear(elem);*/

//task 4

/*function createList() {
  let ul = document.createElement("ul");
  ul.className = "created list";
  document.body.append(ul);
  do {
    let li = prompt("Текст", "");
    if (!li || li === "") break;
    ul.insertAdjacentHTML("beforeend", `<li>${li}</li>`);
  } while (true);
}*/

//task 5

/*let data = {
  Рыбы: {
    форель: {},
    лосось: {},
  },

  Деревья: {
    Огромные: {
      секвойя: {},
      дуб: {},
    },
    Цветковые: {
      яблоня: {},
      магнолия: {},
    },
  },
};

function createTree(container, data) {
  container.innerHTML = createTreeText(data);
}

function createTreeText(data) {
  let li = "";
  let ul;
  for (let key in data) {
    li += "<li>" + key + createTreeText(data[key]) + "</li>";
  }
  if (li) {
    ul = "<ul>" + li + "</ul>";
  }
  return ul || "";
}

createTree(document.getElementById("tree"), data);*/

//task 6

/*let lis = document.getElementsByTagName("li");

for (let li of lis) {
  let count = li.getElementsByTagName("li").length;
  if (count > 0) {
    li.firstChild.data += ` ~ ${count} ~`;
  }
}*/

//task 7

function createCalendar(elem, year, month) {
  function getDay(date) {
    let day = date.getDay();
    if (day == 0) day = 7;
    return day - 1;
  }

  month -= 1;
  let date = new Date(year, month);
  let day = getDay(date);
  let table =
    "<table><tr><th>пн</th><th>вт</th><th>ср</th><th>чт</th><th>пт</th><th>сб</th><th>вс</th></tr><tr>";
  for (let i = 0; i < day; i++) {
    table += "<td></td>";
  }

  while (date.getMonth() === month) {
    table += "<td>" + date.getDate() + "</td>";

    if (getDay(date) % 7 == 6) {
      table += "</tr><tr>";
    }

    date.setDate(date.getDate() + 1);
  }

  if (getDay(date) != 0) {
    for (let i = day; i < 7; i++) {
      table += "<td></td>";
    }
  }
  table += "</tr></table>";

  elem.innerHTML = table;
}

/*let tree = document.getElementById("tree");
createCalendar(tree, 2012, 9);
*/

//task 8

/*let timerId;

function clock() {
  let clock = document.querySelector("#clock");
  let date = new Date();

  let hours = date.getHours();
  if (hours < 10) hours = "0" + hours;
  clock.children[0].innerHTML = hours;
  //clock.replaceWith(hours, document.getElementsByClassName("hour"));

  let minutes = date.getMinutes();
  if (minutes < 10) minutes = "0" + minutes;
  clock.children[1].innerHTML = minutes;

  let seconds = date.getSeconds();
  if (seconds < 10) seconds = "0" + seconds;
  clock.children[2].innerHTML = seconds;
}

function clockStart() {
  if (!timerId) {
    timerId = setInterval(clock, 1000);
  }
  clock();
}

function clockStop() {
  clearInterval(timerId); 
}*/

//task 9

/*let firstLi = document.getElementById('one');
let insert = '<li>2</li><li>3</li>';
firstLi.insertAdjacentHTML("afterend", insert);*/

//task 10
let table = document.querySelector("table");
table.rows[0].cells[0];
let rows = Array.from(table.rows).slice(1);
table.tBodies[0].append(...rows.sort((a, b) => (a.cells[0].innerHTML > b.cells[0].innerHTML ? 1 : -1)));
