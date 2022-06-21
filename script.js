//task 1

function sumSalaries(salaries) {
  let sum = 0;
  for (const salary of Object.values(salaries)) {
    sum += salary;
  }
  return sum;
}

//task 2

let user = {
  name: 'John',
  age: 30
};

function count(obj){
  return Object.entries(obj).length;
}

console.log(count(user));

