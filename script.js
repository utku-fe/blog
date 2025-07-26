// selectors
const toogleTheme = document.querySelector("#dark-theme-toggle");
const header = document.querySelector("header");
const main = document.querySelector("main");
const footer = document.querySelector("footer");

// dark theme
toogleTheme.addEventListener("click", () => {
  if (header.classList.contains("dark")) {
    header.classList.remove("dark");
    main.classList.remove("dark");
    footer.classList.remove("dark");
  } else {
    header.classList.add("dark");
    main.classList.add("dark");
    footer.classList.add("dark");
  }
});
