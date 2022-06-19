//Task 4

/*for (let i = 2; i <= 10; i++) {
  if (i % 2 == 0) {
    alert(i);
  }
}*/

//Task 5

/*let i = 0;
while (i < 3) {
  alert(`number ${i}!`);
  ++i;
}*/

//Task 6

/*while (true) {
	let num = prompt('Введите число больше 100', 101);
	debugger
	if (+num >= 100 || num === null) {
		break;
	}
}*/

//Task 7

let num = +prompt("Введите число", 2);

if (num > 1) {
  debugger;
  metka: for (let i = 2; i <= num; i++) {
    for (let j = 2; j < i; j++) {
      if (i % j == 0) continue metka;
    }
    alert(i);
  }
}

