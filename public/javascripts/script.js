function openNav() {
  const nav = document.getElementById("myNav");
  nav.classList.add("open");
  document.querySelector(".menu").style.display = "none";
}

function closeNav() {
  const nav = document.getElementById("myNav");
  nav.classList.remove("open");
  document.querySelector(".menu").style.display = "inline-block";
}