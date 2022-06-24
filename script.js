//task 1

function scrollBottom(elem) {
  return elem.scrollHeight - elem.scrollTop - elem.clientHeight;
}

//task 2

//чтобы появилась полоса прокрутки
/*document.getElementById('lorem').style.height = '200vh';

console.log(window.innerWidth - document.documentElement.clientWidth)*/

//task 3

const ball = document.querySelector('#ball');
const field = document.querySelector('#field');

ball.style.left = field.clientWidth / 2 - ball.clientWidth / 2 + 'px';
ball.style.top = field.clientHeight / 2 - ball.clientHeight / 2 + 'px';
