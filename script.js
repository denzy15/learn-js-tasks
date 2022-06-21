//task 1

let user = { name: "John", years: 30 };

let {name, years : age, isAdmin = false} = user

//task 2

function topSalary(salaries){
  if (Object.entries(salaries).length === 0) {
    return null;
  }
  let maxSalary = 0;
  let maxSalaryName;
  for (const [name, salary] of Object.entries(salaries)) {
    if (salary > maxSalary) {
      maxSalary = salary;
      maxSalaryName = name;
    }
  }
  return maxSalaryName;
}

console.log(topSalary({}));