const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  // --- 3 added temples (exemples supplémentaires) ---
  {
    templeName: "Salt Lake Temple",
    location: "Salt Lake City, Utah, United States",
    dedicated: "1893, April, 6",
    area: 253000,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/salt-lake/400x250/salt_lake_temple_exterior.jpg"
  },
  {
    templeName: "Bern Switzerland",
    location: "Gümligen, Bern, Switzerland",
    dedicated: "1955, September, 11",
    area: 10346,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/bern-switzerland/400x250/bern-switzerland-temple.jpg"
  },
  {
    templeName: "Ávila Spain",
    location: "Ávila, Spain",
    dedicated: "2002, October, 27",
    area: 8900,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/avila-spain/400x250/avila-spain-temple.jpg"
  }
];

const container = document.getElementById('temples-container');
const sectionTitle = document.getElementById('section-title');
const menu = document.getElementById('main-menu');
const hamburger = document.getElementById('hambtn');

function getDedicatedYear(dedicatedStr) {
  // first token before comma is year in the provided data
  const parts = dedicatedStr.split(',');
  const year = parseInt(parts[0], 10);
  return Number.isFinite(year) ? year : null;
}

function displayTemples(list) {
  container.innerHTML = ''; // clear

  if (!list || list.length === 0) {
    container.innerHTML = `<p style="grid-column:1/-1; text-align:center; color:#555; padding:1rem;">Aucun temple trouvé pour ce filtre.</p>`;
    return;
  }

  list.forEach(temple => {
    const article = document.createElement('article');
    article.className = 'card';

    // title
    const h3 = document.createElement('h3');
    h3.textContent = temple.templeName;
    article.appendChild(h3);

    // meta info (location, dedicated, size)
    const meta = document.createElement('div');
    meta.className = 'meta';
    meta.innerHTML = `
      <div><strong>Location:</strong> ${temple.location}</div>
      <div><strong>Dedicated:</strong> ${temple.dedicated}</div>
      <div><strong>Size:</strong> ${temple.area.toLocaleString()} sq ft</div>
    `;
    article.appendChild(meta);

    // figure / image
    const fig = document.createElement('figure');
    const img = document.createElement('img');
    img.setAttribute('src', temple.imageUrl);
    img.setAttribute('alt', `${temple.templeName} photo`);
    img.setAttribute('loading', 'lazy'); // native lazy loading
    img.setAttribute('decoding', 'async');
    fig.appendChild(img);

    // optional caption under image
    const caption = document.createElement('div');
    caption.className = 'caption';
    caption.textContent = temple.location;
    fig.appendChild(caption);

    article.appendChild(fig);

    container.appendChild(article);
  });
}


function filterTemples(criteria) {
  let filtered = temples.slice(); // copy
  let title = 'HOME';

  switch (criteria) {
    case 'old':
      filtered = filtered.filter(t => {
        const y = getDedicatedYear(t.dedicated);
        return y !== null && y < 1900;
      });
      title = 'OLD (Before 1900)';
      break;

    case 'new':
      filtered = filtered.filter(t => {
        const y = getDedicatedYear(t.dedicated);
        return y !== null && y > 2000;
      });
      title = 'NEW (After 2000)';
      break;

    case 'large':
      filtered = filtered.filter(t => t.area > 90000);
      title = 'LARGE ( > 90,000 sq ft )';
      break;

    case 'small':
      filtered = filtered.filter(t => t.area < 10000);
      title = 'SMALL ( < 10,000 sq ft )';
      break;

    case 'home':
    default:
      filtered = temples.slice();
      title = 'HOME';
      break;
  }

  // update section title and display
  sectionTitle.textContent = title;
  displayTemples(filtered);
}

/* -------------------------
   Menu event handlers
   ------------------------- */
function onMenuClick(e) {
  if (!e.target.matches('[data-filter]')) return;
  e.preventDefault();

  const filter = e.target.getAttribute('data-filter');

  // update active link style
  menu.querySelectorAll('a').forEach(a => a.classList.remove('active'));
  e.target.classList.add('active');

  // close mobile menu if open
  if (menu.classList.contains('open')) toggleMobileMenu();


  filterTemples(filter);
}

function toggleMobileMenu() {
  const expanded = hamburger.getAttribute('aria-expanded') === 'true';
  hamburger.setAttribute('aria-expanded', String(!expanded));
  menu.classList.toggle('open');
  // toggle the hamburger symbol
  if (menu.classList.contains('open')) {
    hamburger.innerHTML = '&#10006;'; // X
  } else {
    hamburger.innerHTML = '&#9776;'; // ☰
  }
}

// Dynamically set current year
const yearSpan = document.getElementById("currentyear");
yearSpan.textContent = new Date().getFullYear();

// Dynamically set last modified date
const lastModified = document.getElementById("lastModified");
lastModified.textContent = `Last Modified: ${document.lastModified}`;


document.addEventListener('DOMContentLoaded', () => {
  // initial render: all temples
  displayTemples(temples);

  // event delegation for menu
  menu.addEventListener('click', onMenuClick);

  // hamburger for mobile
  hamburger.addEventListener('click', (e) => {
    e.stopPropagation();
    toggleMobileMenu();
  });

  // click outside to close mobile menu
  document.addEventListener('click', (evt) => {
    if (!menu.contains(evt.target) && menu.classList.contains('open')) {
      toggleMobileMenu();
    }
  });

  // keyboard accessibility: close menu on Escape
  document.addEventListener('keydown', (ev) => {
    if (ev.key === 'Escape' && menu.classList.contains('open')) {
      toggleMobileMenu();
    }
  });

});