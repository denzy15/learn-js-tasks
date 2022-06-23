//task 1

//элемент <div> =>

/*console.log(document.body.firstElementChild);

//<ul> =>

console.log(document.body.firstElementChild.nextElementSibling);

//второй <li> (с именем Пит) =>

console.log(document.body.firstElementChild.nextElementSibling.lastElementChild);*/

//task 3

let table = document.body.firstElementChild;

for (let i = 0; i < table.rows.length; i++) {
  table.rows[i].cells[i].style.backgroundColor  = 'red';  
}
