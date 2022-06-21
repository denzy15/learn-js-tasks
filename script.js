//task 5

function sum(a) {
  return function (b) {
    return a + b;
  };
}

//console.log(sum(6)(9))

//task 5

function inBetween(a, b) {
  return function (num) {
    if (num >= a && num <= b) return true;
    return false;
  };
}

function inArray(arr) {
  return function (num) {
    return arr.includes(num);
  };
}

/*let arr = [1, 2, 3, 4, 5, 6, 7];

console.log(arr.filter(inBetween(3, 6))); // 3,4,5,6

console.log(arr.filter(inArray([1, 2, 10]))); // 1,2*/

//task 6

function byField(key) {
  return function (a, b) {
    return a[key] > b[key] ? 1 : -1;
  };
}

let users = [
  { name: "John", age: 20, surname: "Johnson" },
  { name: "Pete", age: 18, surname: "Peterson" },
  { name: "Ann", age: 19, surname: "Hathaway" },
];

/*
console.log(users.sort(byField("name")));
console.log(users.sort(byField("age")));
*/

//task 7

function makeArmy() {
  let shooters = [];

  for (let i = 0; i < 10; i++) {
    let shooter = function () {
      // функция shooter
      console.log(i);
      // должна выводить порядковый номер
    };
    shooters.push(shooter);
    debugger;
  }
  return shooters;
}

let army = makeArmy();

army[0](); // у 0-го стрелка будет номер 10
army[5]();
