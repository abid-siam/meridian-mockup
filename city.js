/* MERIDIAN — active-city module (New York City / Miami).
   Default: New York City. Persists choice in localStorage and drives
   city-specific copy, fleet photography, airport services and a subtle
   map-grid backdrop across every page. */

window.MERIDIAN_CITIES = {
  nyc: {
    id: 'nyc',
    name: 'New York City',
    short: 'New York',
    region: 'Greater New York · Manhattan to the Hamptons',
    airports: 'JFK · LaGuardia · Newark',
    airportCopy: 'Met at JFK, LaGuardia or Newark — curbside to the driver’s seat in minutes, not queues.',
    phone: '+1 (212) 555-0110',
    phoneHref: '+12125550110',
    heroImg: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=2000&q=80',
    heroAlt: 'A luxury sports car in a dark, cinematic setting',
    heroPos: '50% 50%',
  },
  miami: {
    id: 'miami',
    name: 'Miami',
    short: 'Miami',
    region: 'Greater Miami · South Beach to the Keys',
    airports: 'Miami Intl (MIA) · Fort Lauderdale (FLL)',
    airportCopy: 'Met at Miami International or Fort Lauderdale (FLL) — curbside to the driver’s seat in minutes, not queues.',
    phone: '+1 (305) 555-1234',
    phoneHref: '+13055551234',
    heroImg: 'https://images.unsplash.com/photo-1631295868223-63265b40d9e4?auto=format&fit=crop&w=2000&q=80',
    heroAlt: 'A white Rolls-Royce beneath palm trees in Miami',
    heroPos: '50% 68%',
  },
};

/* current city (localStorage → default nyc) */
(function () {
  let saved = null;
  try { saved = localStorage.getItem('meridian_city'); } catch (e) {}
  window.MERIDIAN_CITY = (saved === 'miami' || saved === 'nyc') ? saved : 'nyc';
})();

function currentCity() { return window.MERIDIAN_CITY || 'nyc'; }
function cityCfg() { return window.MERIDIAN_CITIES[currentCity()]; }

/* ---------- Map-grid backdrop (subtle, city-specific) ---------- */
function cityMapSVG(id) {
  const gold = '#C6A56B';
  if (id === 'miami') {
    // looser grid + coastal water + causeways + label
    return `<svg viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
      <defs><pattern id="mmg" width="58" height="58" patternUnits="userSpaceOnUse">
        <path d="M58 0H0V58" fill="none" stroke="${gold}" stroke-width="1"/></pattern></defs>
      <rect width="1440" height="900" fill="url(#mmg)"/>
      <path d="M980 0 C1120 220 1180 520 1300 900 L1440 900 L1440 0 Z" fill="${gold}" opacity="0.16"/>
      <path d="M0 300 C420 300 620 250 1030 470" fill="none" stroke="${gold}" stroke-width="2.5"/>
      <path d="M0 560 C480 560 760 640 1150 700" fill="none" stroke="${gold}" stroke-width="2.5"/>
      <text x="54" y="836" font-family="'Cormorant Garamond',serif" font-size="150" fill="${gold}" opacity="0.5">MIAMI</text>
    </svg>`;
  }
  // NYC: dense rectilinear grid + Broadway diagonal + East River band + label
  return `<svg viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
    <defs><pattern id="nyg" width="42" height="64" patternUnits="userSpaceOnUse">
      <path d="M42 0H0V64" fill="none" stroke="${gold}" stroke-width="1"/></pattern></defs>
    <rect width="1440" height="900" fill="url(#nyg)"/>
    <path d="M1240 -40 L1440 -40 L1440 940 L1330 940 Z" fill="${gold}" opacity="0.16"/>
    <line x1="1120" y1="-40" x2="240" y2="960" stroke="${gold}" stroke-width="2.5"/>
    <text x="54" y="836" font-family="'Cormorant Garamond',serif" font-size="170" fill="${gold}" opacity="0.5">NYC</text>
  </svg>`;
}

/* ---------- Apply city to the DOM ---------- */
function applyCity() {
  const C = cityCfg();

  // text bindings
  document.querySelectorAll('[data-city-text]').forEach(el => {
    const key = el.getAttribute('data-city-text');
    if (C[key] != null) el.textContent = C[key];
  });

  // phone links
  document.querySelectorAll('a.city-phone').forEach(a => {
    a.textContent = C.phone;
    a.setAttribute('href', 'tel:' + C.phoneHref);
  });

  // hero image swap (+ per-city focal point so the vehicle stays centered, uncropped)
  document.querySelectorAll('[data-city-hero]').forEach(img => {
    if (img.getAttribute('src') !== C.heroImg) img.setAttribute('src', C.heroImg);
    img.setAttribute('alt', C.heroAlt);
    if (C.heroPos) img.style.objectPosition = C.heroPos;
    img.style.display = '';
  });

  // toggle active state
  document.querySelectorAll('.city-btn').forEach(b => {
    b.setAttribute('aria-pressed', String(b.getAttribute('data-city-set') === C.id));
  });

  // map backdrop
  const map = document.getElementById('cityMap');
  if (map) map.innerHTML = cityMapSVG(C.id);

  // let pages re-render dynamic, city-aware content
  document.dispatchEvent(new CustomEvent('citychange', { detail: C }));
}

function setCity(id) {
  if (!window.MERIDIAN_CITIES[id] || id === currentCity()) {
    if (window.MERIDIAN_CITIES[id]) applyCity();
    return;
  }
  window.MERIDIAN_CITY = id;
  try { localStorage.setItem('meridian_city', id); } catch (e) {}
  applyCity();
}

/* ---------- Toggle UI ---------- */
function renderCityToggles() {
  const html = ['nyc', 'miami'].map(id =>
    `<button type="button" data-city-set="${id}" class="city-btn" aria-pressed="false">${window.MERIDIAN_CITIES[id].short}</button>`
  ).join('');
  document.querySelectorAll('[data-city-toggle]').forEach(el => {
    el.setAttribute('role', 'group');
    el.setAttribute('aria-label', 'Choose your city');
    el.innerHTML = html;
  });
}

function initMeridianCity() {
  // ensure backdrop element exists
  if (!document.getElementById('cityMap')) {
    const d = document.createElement('div');
    d.id = 'cityMap';
    d.setAttribute('aria-hidden', 'true');
    document.body.insertBefore(d, document.body.firstChild);
  }
  renderCityToggles();
  document.addEventListener('click', e => {
    const btn = e.target.closest('[data-city-set]');
    if (btn) setCity(btn.getAttribute('data-city-set'));
  });
  applyCity();
}
