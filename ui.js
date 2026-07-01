/* MERIDIAN — shared UI helpers (icons, card renderer, header, menu, reveal) */

/* ---------- Icon set (Lucide-style inline SVG) ---------- */
const ICON = {
  users: '<path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13A4 4 0 0116 11"/>',
  gauge: '<path d="M12 14l4-4"/><path d="M3.34 19a10 10 0 1117.32 0"/>',
  wheel: '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="2.5"/><path d="M12 3v6.5M4.5 8l5.5 3M19.5 8L14 11"/>',
  key: '<circle cx="7.5" cy="15.5" r="4.5"/><path d="M10.6 12.4L20 3M17 6l2 2M14 9l2 2"/>',
  calendar: '<rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>',
  camera: '<path d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z"/><circle cx="12" cy="13" r="4"/>',
  sparkles: '<path d="M12 3l1.8 4.2L18 9l-4.2 1.8L12 15l-1.8-4.2L6 9l4.2-1.8z"/><path d="M5 16l.9 2.1L8 19l-2.1.9L5 22l-.9-2.1L2 19l2.1-.9z"/>',
  map: '<path d="M9 20l-6 2V6l6-2m0 16l6 2m-6-2V4m6 18l6-2V4l-6 2m0 16V6"/>',
  tag: '<path d="M20 12l-8.6 8.6a2 2 0 01-2.8 0L2 14V4h10l8 8z"/><circle cx="7.5" cy="7.5" r="1.5" fill="currentColor" stroke="none"/>',
  briefcase: '<rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2"/>',
  star: '<path d="M12 2l2.9 6.3 6.6.6-5 4.4 1.5 6.5L12 17l-6 3.3 1.5-6.5-5-4.4 6.6-.6z"/>',
  concierge: '<path d="M12 3a7 7 0 017 7v1H5v-1a7 7 0 017-7z"/><path d="M3 11h18M12 3V1M8 20h8M12 15v5"/>',
  seat: '<path d="M6 4h6a3 3 0 013 3v6H9a3 3 0 01-3-3z"/><path d="M6 13v5a2 2 0 002 2h9M18 20v-4"/>',
  bolt: '<path d="M13 2L4 14h7l-1 8 9-12h-7z"/>',
  route: '<circle cx="6" cy="19" r="3"/><circle cx="18" cy="5" r="3"/><path d="M9 19h6a3 3 0 003-3v-1M15 5H9a3 3 0 00-3 3v8"/>',
  shield: '<path d="M12 2l8 4v6c0 5-3.5 8-8 10-4.5-2-8-5-8-10V6z"/><path d="M9 12l2 2 4-4"/>',
  arrow: '<path d="M5 12h14M13 6l6 6-6 6"/>',
};
const svg = (name, cls = '') =>
  `<svg class="${cls}" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round">${ICON[name] || ''}</svg>`;
const arrowSvg = (s = 18) =>
  `<svg width="${s}" height="${s}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">${ICON.arrow}</svg>`;

/* ---------- City-aware photography ----------
   Per-vehicle city photography plugs in here: when the client supplies
   real New York / Miami shoots as v.photos[city], each card and gallery
   swaps automatically with the active city. Until then we show each
   vehicle's primary (correct) shot in both cities to avoid mismatched
   placeholder stock. The marquee homepage hero still swaps per city. */
function galleryOf(v) {
  if (v.photos && v.photos[window.MERIDIAN_CITY] && v.photos[window.MERIDIAN_CITY].length) {
    return v.photos[window.MERIDIAN_CITY];
  }
  return (v.gallery && v.gallery.length) ? v.gallery : [v.img];
}
function heroFor(v) { return galleryOf(v)[0]; }
function orderedGallery(v) { return galleryOf(v).slice(); }

/* ---------- Vehicle card ---------- */
function vehicleCard(v, extraClass = '') {
  return `
  <a href="vehicle.html?id=${v.id}" class="group reveal ${extraClass} block rounded-2xl border hairline bg-surface overflow-hidden hover:border-gold/60 transition-colors duration-300 cursor-pointer">
    <div class="photo card-zoom relative aspect-[3/2] overflow-hidden" data-name="${v.name}">
      <img src="${heroFor(v)}" alt="${v.name}" loading="lazy" class="absolute inset-0 h-full w-full object-cover" onerror="this.remove()" />
      <span class="absolute top-3 left-3 z-10 label text-[10px] bg-base/70 backdrop-blur px-2.5 py-1 rounded-full text-ink/90">${v.category}</span>
      ${v.available ? `<span class="absolute top-3 right-3 z-10 inline-flex items-center gap-1.5 text-[11px] bg-base/70 backdrop-blur px-2.5 py-1 rounded-full text-sage"><span class="h-1.5 w-1.5 rounded-full bg-sage"></span>Available</span>` : ''}
    </div>
    <div class="p-5">
      <h3 class="font-display text-2xl leading-tight group-hover:text-gold transition-colors">${v.name}</h3>
      <p class="mt-1.5 text-[13px] text-muted">${v.meta}</p>
      <div class="mt-4 flex items-center justify-between">
        <p class="text-gold font-medium tabular-nums"><span class="text-[13px] text-muted font-normal">from</span> $${v.price}<span class="text-[13px] text-muted font-normal">/day</span></p>
        <span class="text-ink/60 group-hover:text-gold transition-colors">${arrowSvg(18)}</span>
      </div>
    </div>
  </a>`;
}

/* ---------- Header condense on scroll ---------- */
function initHeader() {
  const header = document.getElementById('siteHeader');
  if (!header) return;
  const onScroll = () => header.classList.toggle('condensed', window.scrollY > 20);
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });
}

/* ---------- Mobile menu ---------- */
function initMenu() {
  const menu = document.getElementById('mobileMenu');
  const btn = document.getElementById('menuBtn');
  const close = document.getElementById('menuClose');
  if (!menu || !btn) return;
  const open = () => { menu.classList.remove('hidden'); btn.setAttribute('aria-expanded', 'true'); document.body.style.overflow = 'hidden'; };
  const shut = () => { menu.classList.add('hidden'); btn.setAttribute('aria-expanded', 'false'); document.body.style.overflow = ''; };
  btn.addEventListener('click', open);
  close && close.addEventListener('click', shut);
  menu.querySelectorAll('a').forEach(a => a.addEventListener('click', shut));
  document.addEventListener('keydown', e => { if (e.key === 'Escape' && !menu.classList.contains('hidden')) shut(); });
}

/* ---------- Scroll reveal ---------- */
function initReveal() {
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const els = document.querySelectorAll('.reveal');
  if (reduce || !('IntersectionObserver' in window)) {
    els.forEach(el => el.classList.add('in'));
    return;
  }
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
  }, { threshold: 0.12 });
  els.forEach(el => io.observe(el));
}

function initMeridianUI() { initHeader(); initMenu(); initReveal(); }
