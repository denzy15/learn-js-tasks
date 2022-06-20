//Task 2

//function checkAge(age) {
//  return age > 18 ? true : confirm('Родители разрешили?');
//}

function checkAge(age) {
  return age > 18 || confirm('Родители разрешили?');
}

//Task 3

function min(a, b) {
  return a > b ? b : a;
}

//Task 4 

function pow(x, n) {
  let result = 1;
  for (let i = 0; i < n; i++) {
    result *= x;
  }
  return result;
}

let x = prompt('Введите х', 1);
let n = prompt('Введите n', 1);

if (n >= 1) alert(pow(x, n));
