// image expanader
const panels = document.querySelectorAll(".panel");

panels.forEach((panel) => {
  panel.addEventListener("click", () => {
    removeActiveClass();
    panel.classList.add("active");
  });
});

function removeActiveClass() {
  panels.forEach((panel) => {
    panel.classList.remove("active");
  });
}

// login popup

document.getElementById("show-login").addEventListener("click", function () {
  document.querySelector(".pop-up-box").classList.add("popup");
  document.querySelector(".popup-login").classList.add("active");
});

document.querySelector(".close-btn").addEventListener("click", function () {
  document.querySelector(".pop-up-box").classList.remove("popup");
  document.querySelector(".popup-login").classList.remove("active", "popup");
});
