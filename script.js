//Task  2

function Calculator() {
  this.read = () => {
    this.a = +prompt("a?:", 0);
    this.b = +prompt("b?:", 0);
  };
  this.sum = () => {
    return this.a + this.b;
  };
  this.mul = () => {
    return this.a * this.b;
  };
}

/*let calculator = new Calculator();

calculator.read();
alert("Sum=" + calculator.sum());
alert("Mul=" + calculator.mul());*/

//Task 3

function Accumulator(startingValue) {
  this.value = startingValue;
  this.read = () => {
    this.value += +prompt('Сколько нужно добавить?', 0); 
  }
}

/*let accumulator = new Accumulator(1); // начальное значение 1

accumulator.read(); // прибавит ввод prompt к текущему значению
accumulator.read(); // прибавит ввод prompt к текущему значению
alert(accumulator.value);
*/