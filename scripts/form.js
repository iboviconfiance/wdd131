// Product data array
const products = [
  { id: "fc-1888", name: "Flux Capacitor", averagerating: 4.5 },
  { id: "fc-2050", name: "Power Laces", averagerating: 4.7 },
  { id: "fs-1987", name: "Time Circuits", averagerating: 3.5 },
  { id: "ac-2000", name: "Low Voltage Reactor", averagerating: 3.9 },
  { id: "jj-1969", name: "Warp Equalizer", averagerating: 5.0 }
];

// Footer last modified
const date = new Date(document.lastModified);
document.getElementById("lastModified").textContent =
  `Last Modification: ${date.toLocaleDateString()} ${date.toLocaleTimeString()}`;

// Populate select options dynamically
document.addEventListener("DOMContentLoaded", () => {
  const select = document.getElementById("productName");
  products.forEach(product => {
    const opt = document.createElement("option");
    opt.value = product.id;
    opt.textContent = product.name;
    select.appendChild(opt);
  });
});
