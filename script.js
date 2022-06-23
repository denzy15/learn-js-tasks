//task 1
const listLis = document.querySelectorAll("li");
for (let li of listLis) {
  let name = li.firstChild.textContent.replace(/\s+/g, "");
  let count = li.getElementsByTagName("li").length;
  console.log(`${name}: ${count}`);
}


