const btn = document.querySelector("#theme-toggle");

btn.addEventListener("click", function () {
  document.body.classList.toggle("dark");
});