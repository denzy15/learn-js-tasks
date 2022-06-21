//task 1

function unique(arr) {
  let set = new Set(arr);
  return Array.from(set);
}

let values = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

//task 2

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

function aclean(arr){
  let set = new Set();
  arr.forEach(str => set.add(str.toLowerCase().split('').sort().join('')));
  return Array.from(set);
}

//Task 3

