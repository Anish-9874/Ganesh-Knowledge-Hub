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



document.addEventListener("DOMContentLoaded", function() {
    const searchInput = document.getElementById("bookSearchInput");
    if (!searchInput) return; // only run on products page

    searchInput.addEventListener("input", function() {
        const query = searchInput.value.toLowerCase();
        const cards = document.querySelectorAll(".card");

        cards.forEach(card => {
            const title = card.querySelector(".card-title").textContent.toLowerCase();
            const author = card.querySelector("p").textContent.toLowerCase();
            if (title.includes(query) || author.includes(query)) {
                card.parentElement.style.display = "block"; // show
            } else {
                card.parentElement.style.display = "none"; // hide
            }
        });
    });
});
