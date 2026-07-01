/* MERIDIAN — placeholder fleet data (from specs.md §7).
   Provisional sample content for the visual prototype. No backend. */
window.MERIDIAN_FLEET = [
  {
    id: 'huracan-evo',
    name: 'Lamborghini Huracán EVO',
    category: 'Exotic',
    group: 'Exotic',
    price: '1,200',
    available: true,
    featured: true,
    selfDrive: true,
    meta: '2 seats · Auto · 630 hp',
    specs: { seats: '2', transmission: 'Automatic', power: '630 hp', year: '2024', top: '202 mph', mileage: '150 mi/day incl.' },
    img: 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?auto=format&fit=crop&w=1400&q=80',
      'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1400&q=80',
      'https://images.unsplash.com/photo-1526726538690-5cbf956ae2fd?auto=format&fit=crop&w=1400&q=80',
      'https://images.unsplash.com/photo-1614026480209-cd5814cabd88?auto=format&fit=crop&w=1400&q=80'
    ],
    desc: 'The Huracán EVO distils Lamborghini\'s racing pedigree into a naturally-aspirated V10 that sings to 8,000 rpm. Rear-biased all-wheel drive and predictive dynamics make it as composed on Ocean Drive as it is theatrical. A weekend statement in the truest sense.'
  },
  {
    id: 'ghost',
    name: 'Rolls-Royce Ghost',
    category: 'Luxury',
    group: 'Luxury',
    price: '1,500',
    available: true,
    featured: true,
    selfDrive: false,
    meta: '5 seats · Auto · Chauffeur avail.',
    specs: { seats: '5', transmission: 'Automatic', power: '563 hp', year: '2024', top: 'Chauffeur available', mileage: '100 mi/day incl.' },
    img: 'https://images.unsplash.com/photo-1631295868223-63265b40d9e4?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1631295868223-63265b40d9e4?auto=format&fit=crop&w=1400&q=80',
      'https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=1400&q=80',
      'https://images.unsplash.com/photo-1553440569-bcc63803a83d?auto=format&fit=crop&w=1400&q=80',
      'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1400&q=80'
    ],
    desc: 'Whisper-quiet and effortlessly composed, the Ghost is the definitive statement of arrival. Planar suspension floats over the city while the Starlight headliner turns every evening transfer into an occasion. Available self-drive, or with a MERIDIAN chauffeur.'
  },
  {
    id: 'g63',
    name: 'Mercedes-Benz G 63 AMG',
    category: 'Luxury SUV',
    group: 'SUV',
    price: '850',
    available: true,
    featured: true,
    selfDrive: true,
    meta: '5 seats · Auto · 577 hp',
    specs: { seats: '5', transmission: 'Automatic', power: '577 hp', year: '2024', top: '149 mph', mileage: '150 mi/day incl.' },
    img: 'https://images.unsplash.com/photo-1520031441872-265e4ff70366?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1520031441872-265e4ff70366?auto=format&fit=crop&w=1400&q=80',
      'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&w=1400&q=80',
      'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?auto=format&fit=crop&w=1400&q=80',
      'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1400&q=80'
    ],
    desc: 'The icon that refuses to age. A hand-built AMG V8 in a body that commands any street or valet line, the G 63 pairs genuine off-road hardware with a cabin of quilted leather. Presence, engineered.'
  },
  {
    id: '911-carrera',
    name: 'Porsche 911 Carrera',
    category: 'Sports',
    group: 'Convertible',
    price: '700',
    available: true,
    featured: true,
    selfDrive: true,
    meta: '4 seats · Auto · 379 hp',
    specs: { seats: '4', transmission: 'PDK Automatic', power: '379 hp', year: '2024', top: '182 mph', mileage: '150 mi/day incl.' },
    img: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1400&q=80',
      'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1400&q=80',
      'https://images.unsplash.com/photo-1614026480209-cd5814cabd88?auto=format&fit=crop&w=1400&q=80',
      'https://images.unsplash.com/photo-1526726538690-5cbf956ae2fd?auto=format&fit=crop&w=1400&q=80'
    ],
    desc: 'The everyday exotic. Half a century of refinement makes the 911 as usable on a morning coffee run as it is devastating on the causeway. Flat-six response, telepathic steering, and a badge that never needs explaining.'
  },
  {
    id: 'range-rover',
    name: 'Range Rover Autobiography',
    category: 'Luxury SUV',
    group: 'SUV',
    price: '600',
    available: true,
    featured: false,
    selfDrive: true,
    meta: '5 seats · Auto · Delivery',
    specs: { seats: '5', transmission: 'Automatic', power: '523 hp', year: '2024', top: '155 mph', mileage: '150 mi/day incl.' },
    img: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?auto=format&fit=crop&w=1400&q=80',
      'https://images.unsplash.com/photo-1520031441872-265e4ff70366?auto=format&fit=crop&w=1400&q=80',
      'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&w=1400&q=80',
      'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1400&q=80'
    ],
    desc: 'The Autobiography is a lounge that happens to move. Massaging rear seats, near-silent cabin isolation and commanding poise make it the default for families, executives and anyone who values arriving unruffled.'
  },
  {
    id: 'model-s-plaid',
    name: 'Tesla Model S Plaid',
    category: 'Premium EV',
    group: 'Luxury',
    price: '450',
    available: true,
    featured: false,
    selfDrive: true,
    meta: '5 seats · Auto · 1,020 hp',
    specs: { seats: '5', transmission: 'Single-speed', power: '1,020 hp', year: '2024', top: '1.99s 0–60', mileage: '200 mi/day incl.' },
    img: 'https://images.unsplash.com/photo-1560958089-b8a1929cea89?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1560958089-b8a1929cea89?auto=format&fit=crop&w=1400&q=80',
      'https://images.unsplash.com/photo-1617704548623-340376564e68?auto=format&fit=crop&w=1400&q=80',
      'https://images.unsplash.com/photo-1553260168-69b041873e65?auto=format&fit=crop&w=1400&q=80',
      'https://images.unsplash.com/photo-1536700503339-1e4b06520771?auto=format&fit=crop&w=1400&q=80'
    ],
    desc: 'Silent, savage acceleration and a glass cockpit from the future. The Plaid dispatches supercars from a standstill, then returns to serene, whisper-quiet cruising — all with zero tailpipe. The thinking driver\'s statement car.'
  },
  {
    id: 'bmw-5',
    name: 'BMW 5 Series',
    category: 'Executive',
    group: 'Everyday',
    price: '220',
    available: true,
    featured: false,
    selfDrive: true,
    meta: '5 seats · Auto · Business travel',
    specs: { seats: '5', transmission: 'Automatic', power: '335 hp', year: '2024', top: '130 mph', mileage: '200 mi/day incl.' },
    img: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=1400&q=80',
      'https://images.unsplash.com/photo-1523983388277-336a66bf9bcd?auto=format&fit=crop&w=1400&q=80',
      'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1400&q=80',
      'https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?auto=format&fit=crop&w=1400&q=80'
    ],
    desc: 'The benchmark executive sedan. Poised, quietly quick and impeccably finished, the 5 Series is the sensible luxury choice for a working week — refined enough for the client dinner, easy enough for the daily commute.'
  },
  {
    id: 'escalade',
    name: 'Cadillac Escalade',
    category: 'Group / Events',
    group: 'SUV',
    price: '400',
    available: true,
    featured: false,
    selfDrive: false,
    meta: '7 seats · Auto · Chauffeur avail.',
    specs: { seats: '7', transmission: 'Automatic', power: '420 hp', year: '2024', top: 'Chauffeur available', mileage: '150 mi/day incl.' },
    img: 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&w=1400&q=80',
      'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?auto=format&fit=crop&w=1400&q=80',
      'https://images.unsplash.com/photo-1520031441872-265e4ff70366?auto=format&fit=crop&w=1400&q=80',
      'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1400&q=80'
    ],
    desc: 'Seven seats of first-class space with a 38-inch curved OLED and executive-grade quiet. The Escalade is the default for group arrivals, events and airport runs where everyone travels together — in comfort, with a chauffeur if you wish.'
  }
];
