//task 1

function sumTo(n) { //циклом
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}

function sumTo(n) { //рекурсия
  if (n === 1) return 1;
  return n + sumTo(n - 1);
}

function sumTo(n) { //арифм. прогрессия
  return ((1 + n) / 2) * n;
}

//task 2

function factorial(n) {
  if (n === 1) return n;
  return n * factorial(n - 1);
}

//task 3

function fib(n) {
  return n <= 1 ? n : fib(n - 1) + fib(n - 2);
}

//task 4

let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
};

function printList(list) { // цикл
  while(list) {
    console.log(list.value);
    list = list.next;
  }
}

function printList(list) { //рекурсия
  console.log(list.value);
  list.next ? printList(list.next)  : null;
}

//task 5

function printReverseList(list) { // цикл
  let values = [];

  while(list) {
    values.push(list.value);
    list = list.next;
  }
  values.reverse().forEach(v => console.log(v));
}



function printReverseList(list) { // рекурсия
  
  if (list.next) {
    console.log('некст ещё есть!!!');
    
    printReverseList(list.next);
  }
 console.log(list.value);
}
