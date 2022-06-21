//Task 1

function camelize(str) {
  let newStr = str.split("-");
  for (let i = 1; i < newStr.length; i++) {
    newStr[i] = newStr[i][0].toUpperCase() + newStr[i].slice(1);
  }
  return newStr.join("");
}

//Task 2

function filterRange(arr, a, b) {
  return arr.filter(num >= num >= a && num <= b);
}

//task 3

function filterRangeInPlace(arr, a, b) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < a || arr[i] > b) {
      arr.splice(i, 1);
      i--;
    }
  }
}

//task 4

//arr.sort((a, b) => b - a);

//task 5

function copySorted(arr) {
  return arr.slice().sort();
}

//task 6

function Calculator() {
  this.calculate = function(str) {
    let split = str.split(" "),
      a = +split[0],
      method = split[1],
      b = +split[2];

    if (!this.methods[method] || !isFinite(a) || !isFinite(b)) {
      return 'Что-то пошло не так';
    }

    return this.methods[method](a, b);
  };

  this.methods = {
    "-": (a, b) => a - b,
    "+": (a, b) => a + b,
  };

  this.addMethod = function(method, f) {
    this.methods[method] = f;
  };
}

//task 7

//let names = users.map(item => item.name)

//task 8

/*let usersMapped = users.map(item => ({
  fullName : item.name + ' ' + item.surname,
  id: item.id
}))
*/

//task 9

function sortByAge(arr){
  arr.sort((a, b) => a.age > b.age ? 1 : -1)
}

//task 10

function shuffle(arr) {
  arr.sort(() => Math.random() - 0.5);
}

//task 11

function getAverageAge(users) {
  let sum = 0;
  users.forEach(user => sum += user.age);
  return sum / users.length;
}

//task 12

function unique(arr) {
  const newArr = [];
  for (const item of arr) {
    if (!newArr.includes(item)) {
      newArr.push(item);
    }
  }
  return newArr;
}

