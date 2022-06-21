//task 2

let styles = ["Джаз", "Блюз"];
styles.push("Рок-н-ролл");
styles[Math.floor(styles.length / 2)] = "Классика";
alert(styles.shift());
styles.unshift("Рэп", "Регги");

//Task 4

function sumInput() {
  const nums = [];
  let sum = 0;
  do {
    let num = prompt("Введите число");
    if (num === null || num === "" || !isFinite(num)) break;
    nums.push(+num);
  } while (true);
  nums.forEach((n) => (sum += n));
  return sum;
}

//Task 5

function getMaxSubSum(arr) {
  let sum = 0;
  let tempSum = 0;
  for (let num of arr) {
    tempSum += num;
    sum = Math.max(sum, tempSum);
    if (tempSum < 0) tempSum = 0;
  }

  return sum;
}
