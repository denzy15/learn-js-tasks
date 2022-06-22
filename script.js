//task 1
/*if (!Function.prototype.defer) {
  Function.prototype.defer = function(ms){
    setTimeout(this, ms);
  }
}

function f() {
  alert("Hello!");
}

f.defer(1000);*/

//task 2

if (!Function.prototype.defer) {
  Function.prototype.defer = function (ms) {
    let func = this;
    function wrapper(...args){
      setTimeout(() => func.apply(this, args), ms);
    }
    return wrapper
  };
}

function f(a, b) {
  console.log(a + b);
}

f.defer(1000)(1, 2);
