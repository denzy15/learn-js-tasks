//Task 1


//let a = +prompt("a?", 0);
//let b = +prompt("b?", 0);
//alert(a + b);


//Task 3

function readNumber() {
  let num;
  do {
    num = prompt("Введите число", 0);
    if (num === null || num === "") return null;
  } while (!isFinite(num));

  return +num;
}

//Task 5

function random(min, max) {
  return min + Math.random() * (max - min);
}

//Task 6

function randomInteger(min, max) {
  return Math.floor(min + Math.random() * (max + 1 - min));
}
