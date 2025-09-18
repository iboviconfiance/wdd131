// Dynamically set current year
const yearSpan = document.getElementById("currentyear");
yearSpan.textContent = new Date().getFullYear();

// Dynamically set last modified date
const lastModified = document.getElementById("lastModified");
lastModified.textContent = `Last Modified: ${document.lastModified}`;

function toggleMenu() {
    const menu = document.getElementById("menu");
    const hamburger = document.querySelector(".hamburger");

    menu.classList.toggle("active");

    if (menu.classList.contains("active")) {
      hamburger.innerHTML = "&#10006;"; // X
    } else {
      hamburger.innerHTML = "&#9776;"; // ☰
    }
  }