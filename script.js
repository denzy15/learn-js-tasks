//Таблицу с id="age-table"
const ageTable = document.querySelector("#age-table");

//Все элементы label внутри этой таблицы (их три)
const labels = ageTable.getElementsByTagName("label");

//Первый td в этой таблице (со словом «Age»).
const td = ageTable.querySelector("td");

//Форму form с именем name="search".
const form = document.querySelector("form");

//Инпуты в form
let inputs = form.getElementsByTagName('input');

//Первый input в этой форме.
const firstInput = inputs[0];

//Последний input в этой форме.
const secondInput = inputs[inputs.length-1];




