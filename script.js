//task 1

function makeCounter() {
  let count = 0;
  function counter() {
    return count++;
  }
  counter.set = function (n) {
    count = n;
  };
  counter.decrease = () => {
    return count--;
  };

  return counter;
}

/*let counter = makeCounter();

console.log(counter()); // 0
console.log(counter()); // 1

counter.set(10); // установить новое значение счётчика

console.log(counter()); // 10

counter.decrease(); // уменьшить значение счётчика на 1

console.log(counter()); // 10 (вместо 11)
*/

//task 2

function sum(a) {
  let currentSum = a;

  function f(b) {
    currentSum += b;
    return f;
  }

  f.toString = function () {
    return currentSum;
  };

  return f;
}

alert(sum(2)(9));

//let x = sum(1)(2);
//console.log( x().toString() );
