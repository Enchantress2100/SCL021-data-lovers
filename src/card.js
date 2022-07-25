import { example } from "./data.js";
import data from "./data/ghibli/ghibli.js";
import movies from "./data/ghibli/titulos.js";

//menú colapsable
let menu = document.getElementsByClassName("collapsible");
let i;
for (i = 0; i < menu.length; i++) {
  menu[i].addEventListener("click", function () {
    this.classList.toggle("active");
    let content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}
