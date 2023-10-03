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
  "https://script.google.com/macros/s/AKfycbyU-Q9uD102Dqz2-_H-VTTpUGgJQkvpLsnVtyxoRN5ZARai4TsQ9mXmJLNatW7ExMnVYQ/exec";

document.addEventListener("DOMContentLoaded", function () {
  const form = document.forms["submit-to-google-sheet"];
  const msg = document.getElementById("msg");

  if (!msg) {
    console.error("Error: 'msg' element not found in the DOM");
    return;
  }

  if (!form) {
    console.error(
      "Error: Form with name 'submit-to-google-sheet' not found in the DOM"
    );
    return;
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    fetch(scriptURL, { method: "POST", body: new FormData(form) })
      .then((res) => {
        msg.innerHTML = "Your Message Submitted!";
        setTimeout(function () {
          msg.innerHTML = "";
        }, 5000);
        form.reset();
      })
      .catch((error) => {
        console.error("Error!", error.message);
        console.log(error);
      });
  });
});
