//Task 1

function ucFirst(str) {
  if (str) return str[0].toUpperCase() + str.slice(1);
}

//Task 2

function checkSpam(str){
  return str.toLowerCase().includes('viagra') ||  str.toLowerCase().includes('xxx');
}

//Task 3

function truncate(str, maxlength){
  if (str.length > maxlength) {
    return str.slice(0, maxlength - 1) + '…';
  }
  return str
}

//Task 4  

function extractCurrencyValue(str){
  return +str.slice(1)
}
