//task 1

function work(a, b) {
  console.log(a + b); // произвольная функция или метод
}

function spy(func) {
  wrapper.calls = [];
  function wrapper(...args) {
    wrapper.calls.push(args);
    return func.apply(this, arguments);
  }

  return wrapper;
}

/*work = spy(work);

work(1, 2); // 3
work(4, 5); // 9

for (let args of work.calls) {
  console.log("call:" + args.join()); // "call:1,2", "call:4,5"
}*/

//task 2

/*function delay(f, ms) {
  return function () {
    setTimeout(() => f.apply(this, arguments), ms);
  };
}

function f(x) {
  console.log(x);
}

// создаём обёртки
let f1000 = delay(f, 1000);
let f5500 = delay(f, 5500);

f1000("test"); // показывает "test" после 1000 мс
f5500("test"); // показывает "test" после 1500 мс
*/
//task 3

/*function debounce(f, ms) {
  let cd = false;
  return function () {
    if (cd) return;
    cd = true;
    f.call(this, ...arguments);
    setTimeout(() => (cd = false), ms);
  };
}

let f = debounce(alert, 1000);

f(1); // выполняется немедленно
f(2); // проигнорирован

setTimeout(() => f(3), 100); // проигнорирован (прошло только 100 мс)
setTimeout(() => f(4), 1100); // выполняется
setTimeout(() => f(5), 1500); // проигнорирован (прошло только 400 мс от последнего вызова)*/

//task 4

function throttle(func, ms) {
  let isThrottled = false,
    tempArgs,
    tempThis;

  function wrapper() {
    if (isThrottled) {
      tempArgs = arguments;
      tempThis = this;
      return;
    }
    func.apply(this, arguments);
    isThrottled = true;
    setTimeout(function () {
      isThrottled = false;
      if (tempArgs) {
        wrapper.apply(tempThis, tempArgs);
        tempArgs = null;
        tempThis = null;
      }
    }, ms);
  }
  return wrapper;
}

function f(a) {
  console.log(a);
}

// f1000 передаёт вызовы f максимум раз в 1000 мс
let f1000 = throttle(f, 1000);

f1000(1); // показывает 1
f1000(2); // (ограничение, 1000 мс ещё нет)
f1000(3);
