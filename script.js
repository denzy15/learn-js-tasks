//task 1

/*document.onclick = function (e) {
  // показывает координаты точки клика
  coords.innerHTML = e.clientX + ":" + e.clientY;
};

const field = document.getElementById('field');
let firstCoord = {
  x: field.getBoundingClientRect().x,
  y: field.getBoundingClientRect().y
}
let secondCoord = {
  x: field.getBoundingClientRect().right,
  y: field.getBoundingClientRect().bottom
}

let thirdCoord = {
  x: field.getBoundingClientRect().x + parseInt(getComputedStyle(field).borderTopWidth),
  y: field.getBoundingClientRect().y + parseInt(getComputedStyle(field).borderTopWidth)
}

let fourthCoord = {
  x: field.getBoundingClientRect().right - parseInt(getComputedStyle(field).borderTopWidth) ,
  y: field.getBoundingClientRect().bottom - parseInt(getComputedStyle(field).borderTopWidth)
}
*/

//task 2
/*
function showNote(anchor, position, html) {
  let note = document.createElement("div");
  note.className = "note";
  note.innerHTML = html;
  document.body.append(note);

  positionAt(anchor, position, note);
}

let blockquote = document.querySelector("blockquote");

showNote(blockquote, "top", "note above");
showNote(blockquote, "right", "note at the right");
showNote(blockquote, "bottom", "note below");

function positionAt(anchor, position, elem) {
  switch (position) {
    case "top":
      elem.style.top =
        anchor.getBoundingClientRect().y - elem.offsetHeight + "px";
      elem.style.left = anchor.getBoundingClientRect().x + "px";
      break;
    case "right":
      elem.style.top = anchor.getBoundingClientRect().y + "px";
      elem.style.left = anchor.getBoundingClientRect().right + "px";
      break;
    case "bottom":
      elem.style.top =
        anchor.getBoundingClientRect().y + anchor.clientHeight + "px";
      elem.style.left = anchor.getBoundingClientRect().x + "px";
      break;
    default:
      break;
  }
}*/

//task 3

/*document.body.style.height = "2000px";
let notes = document.getElementsByClassName("note");
for (const note of notes) {
  note.style.position = "absolute";
}*/

//task 4

function showNote(anchor, position, html) {
  let note = document.createElement("div");
  note.className = "note";
  note.innerHTML = html;
  document.body.append(note);

  positionAt(anchor, position, note);
}

let blockquote = document.querySelector("blockquote");

function positionAt(anchor, position, elem) {
  switch (position) {
    case "top-out":
      elem.style.top =
        anchor.getBoundingClientRect().y - elem.offsetHeight + "px";
      elem.style.left = anchor.getBoundingClientRect().x + "px";
      break;

    case "right-out":
      elem.style.top = anchor.getBoundingClientRect().y + "px";
      elem.style.left = anchor.getBoundingClientRect().right + "px";
      break;

    case "bottom-out":
      elem.style.top =
        anchor.getBoundingClientRect().y + anchor.clientHeight + "px";
      elem.style.left = anchor.getBoundingClientRect().x + "px";
      break;

    case "top-in":
      elem.style.left = anchor.getBoundingClientRect().left + "px";
      elem.style.top = anchor.getBoundingClientRect().top + "px";
      break;

    case "right-in":
      elem.style.left =
        anchor.getBoundingClientRect().left +
        anchor.offsetWidth -
        elem.offsetWidth +
        "px";
      elem.style.top = anchor.getBoundingClientRect().top + "px";
      break;

    case "bottom-in":
      elem.style.left = anchor.getBoundingClientRect().left + "px";
      elem.style.top =
        anchor.getBoundingClientRect().top +
        anchor.offsetHeight -
        elem.offsetHeight +
        "px";
      break;
  }
}

showNote(blockquote, "top-in", "note top-in");
showNote(blockquote, "top-out", "note top-out");
showNote(blockquote, "right-out", "note right-out");
showNote(blockquote, "bottom-in", "note bottom-in");

document.body.style.height = "2000px";
let notes = document.getElementsByClassName("note");
for (const note of notes) {
  note.style.position = "absolute";
}
