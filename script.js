function showNotification(options) {
  const div = document.createElement("div");
  div.innerHTML = options.html;
  div.className = options.className;
  div.style.cssText = `
    position: absolute;
    top: ${options.top}px;
    right: ${options.right}px;
    width: 60%;
    height: 50px;
    background-color: green;
    display: flex;
    align-items: center;
    justify-content: center;
  `;
  document.body.append(div);
  setTimeout(() => {
    div.style.display = "none";
  }, 1500);
}

showNotification({
  top: 10,
  right: 10,
  html: "Hello!",
  className: "welcome",
});
