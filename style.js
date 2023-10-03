var tabLinks = document.getElementsByClassName("tab-links");
var tabContents = document.getElementsByClassName("tab-contents");

function openTab(tabName) {
  for (tabLink of tabLinks) {
    tabLink.classList.remove("active-link");
  }

  for (tabContent of tabContents) {
    tabContent.classList.remove("active-tab");
  }

  event.currentTarget.classList.add("active-link");
  document.getElementById(tabName).classList.add("active-tab");
}

function openMenu() {
  var sideMeu = document.getElementById("sideMenu");
  sideMeu.style.right = "0";
}

function closeMenu() {
  var sideMeu = document.getElementById("sideMenu");
  sideMeu.style.right = "-200px";
}

const scriptURL =
  "https://script.google.com/macros/s/AKfycbxX009Nbd2Kza_-3nKVvx06XwM7Z-zv9R3D3Q1-dOBkHjKUyhvDPsgXjDeEO8yregWH9Q/exec";

const form = document.forms["submit-to-google-sheet"];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => console.log("Success!", response))
    .catch((error) => console.error("Error!", error.message));

  console.log(scriptURL);
});
