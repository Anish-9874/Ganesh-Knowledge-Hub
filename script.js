function loadHTML(id, file) {
  fetch(file)
    .then(response => response.text())
    .then(data => {
      document.getElementById(id).innerHTML = data;
    });
}

document.addEventListener("DOMContentLoaded", function () {
  loadHTML("header", "header.html");  // loads header.html into <div id="header">
  loadHTML("footer", "footer.html");  // loads footer.html into <div id="footer">
});
