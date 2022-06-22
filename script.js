//task 1

function printNumbers(from, to) { //setInterval
  const interval = setInterval(() => {
    console.log(from);
    if (from === to) {
      clearInterval(interval);
    }
    from++;
  }, 1000);
}

/*function printNumbers(from, to) { //setTimeout
  setTimeout(function setTm() {
    console.log(from);
    if (from < to) {
      setTimeout(setTm, 1000);
    }
    from++;
  }, 1000);
}*/


printNumbers(2, 5);