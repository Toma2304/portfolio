if (localStorage.getItem("theme"))
  document
    .querySelector("body")
    .classList.toggle(localStorage.getItem("theme")); //get theme from local storage and set it

const day_night = document.querySelectorAll(".version");
const icon = document.querySelectorAll(".ver use");

const night = document.querySelectorAll(".night");
const day = document.querySelectorAll(".day");

if (document.querySelector("body").classList.contains("dark")) {
  icon.forEach((element) => {
    element.setAttribute("xlink:href", "./img/sprite.svg#light");
  });
  night.forEach((element) => {
    element.style.display = "block";
  });
  day.forEach((element) => {
    element.style.display = "none";
  });
} else {
  night.forEach((element) => {
    element.style.display = "none";
  });
  day.forEach((element) => {
    element.style.display = "block";
  });
  icon.forEach((element) => {
    element.setAttribute("xlink:href", "./img/sprite.svg#dark");
  });
}

day_night.forEach((version) =>
  version.addEventListener("click", () => {
    if (document.querySelector("body").classList.contains("dark")) {
      document.querySelector("body").classList.remove("dark");
      night.forEach((element) => {
        element.style.display = "none";
      });
      day.forEach((element) => {
        element.style.display = "block";
      });
      icon.forEach((element) => {
        element.setAttribute("xlink:href", "./img/sprite.svg#dark");
      });

      let actualTheme = document.querySelector("body").className;
      localStorage.setItem("theme", actualTheme);
    } else {
      document.querySelector("body").classList.add("dark");
      night.forEach((element) => {
        element.style.display = "block";
      });
      day.forEach((element) => {
        element.style.display = "none";
      });
      icon.forEach((element) => {
        element.setAttribute("xlink:href", "./img/sprite.svg#light");
      });

      let actualTheme = document.querySelector("body").className;
      localStorage.setItem("theme", actualTheme);
    }
  })
);
