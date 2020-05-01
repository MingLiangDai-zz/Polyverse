const burger = document.querySelector(".burger");
burger.addEventListener("click", () => {
  const nav = document.querySelector(".nav");
  nav.classList.toggle("hide-mobile");
});
