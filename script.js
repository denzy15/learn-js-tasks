//task 1

let div = document.querySelector("[data-widget-name]");

//task 2

let links = document.querySelector("ul").querySelectorAll("a");
for (const link of links) {
  let attr = link.getAttribute("href");
  if (!link.href.startsWith("http://internal.com") && attr.includes("://")) {
    link.style.color = "orange";
  }
}
