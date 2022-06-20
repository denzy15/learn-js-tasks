//Task 1

let user = {};

user.name = 'John';
user.surname = 'Smith';
user.name = 'Pete';
delete user.name;

//Task 2

function isEmpty(obj){
  for (const key in obj) {
    return false;
  }
  return true;
}

console.log(isEmpty({}));

//Task 4

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}

let sum = 0;

for (const salary in salaries) {
  sum += salaries[salary];
}

//Task 5

function  multiplyNumeric(obj) {
  for (const key in obj) {
    if (typeof obj[key] === 'number') obj[key] *= 2;
  }
  return obj
}

let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

multiplyNumeric(menu);

console.log(menu);
