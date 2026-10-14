
const btn = document.querySelector("#theme-toggle");


btn.addEventListener("click", function () {


  document.body.classList.toggle("dark");

  
  if (document.body.classList.contains("dark")) {
    btn.textContent = "Light Mode";
  } else {
    btn.textContent = "Dark Mode";
  }
});