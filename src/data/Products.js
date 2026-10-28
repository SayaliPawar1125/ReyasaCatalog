

const shirtAssets = import.meta.glob(
  '../assets/Shirt/*',
  {
    eager: true,
    query: '?url',
    import: 'default',
  }
);

const tshirtAssets = import.meta.glob(
  '../assets/Tshirt/*',
  {
    eager: true,
    query: '?url',
    import: 'default',
  }
);

// =====================================================
// IMAGE HELPER
// =====================================================

function findImage(assets, folder, filename) {
  const path = `../assets/${folder}/${filename}`;
  return assets[path] || null;
}

// =====================================================
// SHIRT IMAGES — 18 SHIRTS
// =====================================================

const shirtImageFiles = {
  1: [
    '1 img pp.jpg',
    '2 img pp.jpg',
    '3 img pp.jpg',
    '4 img pp.jpg',
    '5 img pp.jpg',
  ],
  2: [
    '1 bb img.jpg',
    '2 bb img.jpg',
    '3 bb img.jpg',
    '4 bb img.jpg',
    '5 bb img.jpg',
  ],
  3: [
    '1 cc img.jpg',
    '2 cc img.jpg',
    '3 cc img.jpg',
    '4 cc img.jpg',
    '5 cc img.jpg',
  ],
  4: [
    'dd 1.jpg',
    'dd 2.jpg',
    'dd3 3.jpg',
    'dd4.jpg',
    'dd5.jpg',
  ],
  5: [
    'ff1.jpg',
    'ff2.jpg',
    'ff3.jpg',
    'ff4.jpg',
    'ff5.jpg',
  ],
  6: [
    'll1.jpg',
    'll2.jpg',
    'll3.jpg',
    'll4.jpg',
    'll5.jpg',
  ],
  7: [
    'ww1.jpg',
    'ww2.jpg',
    'ww3.jpg',
    'ww4.jpg',
    'ww5.jpg',
  ],
  8: [
    'aa1.jpg',
    'aa2.jpg',
    'aa3.jpg',
    'aa4.jpg',
    'aa5.jpg',
  ],
  9: [
    'b1.jpg',
    'b2.jpg',
    'b3.jpg',
  ],
  10: [
    'c1.jpg',
    'c2.jpg',
    'c3.jpg',
    'c4.jpg',
    'c5.jpg',
  ],
  11: [
    'd1.jpg',
    'd2.jpg',
    'd3.jpg',
    'd4.jpg',
    'd5.jpg',
  ],
  12: [
    'e1.jpg',
    'e2.jpg',
    'e3.jpg',
  ],
  13: [
    'f1.jpg',
    'f2.jpg',
    'f3.jpg',
    'f4.jpg',
    'f5.jpg',
  ],
  14: [
    'g4.jpg',
    'g1.jpg',
    'g2.jpg',
    'g3.jpg',
    'g5.jpg',
  ],
  15: [
    'h1.jpg',
    'h2.jpg',
    'h3.jpg',
    'h4.jpg',
    'h5.jpg',
  ],
  16: [
    'j1.jpg',
    'j2.jpg',
    'j3.jpg',
  ],
  17: [
    'k1.jpg',
    'k2.jpg',
    'k3.jpg',
    'k4.jpg',
    'k5.jpg',
  ],
  18: [
    'l1.jpg',
    'l2.jpg',
    'l3.jpg',
    'l4.jpg',
    'l5.jpg',
  ],
};

function getShirtImages(shirtNumber) {
  const filenames = shirtImageFiles[shirtNumber] || [];

  return filenames
    .map((filename) =>
      findImage(shirtAssets, 'Shirt', filename)
    )
    .filter(Boolean);
}

// =====================================================
// T-SHIRT IMAGES — 9 STYLES
// =====================================================

const tshirtImageFiles = {
  1: ['tt1.jpg', 'tt2.jpg'],
  2: ['xx1.jpg', 'xx2.jpg'],
  3: ['zz1.jpg', 'zz2.jpg'],
  4: ['cc1.jpg', 'cc2.jpg'],
  5: ['vv1.jpg', 'vv2.jpg'],
  6: ['zx1.jpg', 'zx2.jpg'],
  7: ['ss1.jpg', 'ss2.jpg'],
  8: ['as1.jpg', 'as2.jpg'],
  9: ['ds1.jpg', 'I2.dspg'],
};

function getTshirtImages(tshirtNumber) {
  const filenames = tshirtImageFiles[tshirtNumber] || [];

  return filenames
    .map((filename) =>
      findImage(tshirtAssets, 'Tshirt', filename)
    )
    .filter(Boolean);
}

// =====================================================
// SHIRT NAMES — 18 PRODUCTS
// =====================================================

const shirtNames = [
  'Kingfisher ',
  'Ajrakh Collar ',
  'Son Chaffa',
  'Bagru  Buti',
  'Jamdani Buti',
  'Dvik',
  'Sky Blue Casual Shirt',
  'Kusum',
  'White Kurta',
  'Charkha ',
  'Botanical  Oddity',
  'Botanical  Oddity',
  'BLUE × WHITE — Woven Accents',
  'Jamdhani Bloom ',
  'Son Chaffa — Floral Expression',
  'Sunrise Strpies',
  'SINGLE IKAT — Timeless in Black',
  'Jamdani Hues ',
];

// =====================================================
// SHIRT DESCRIPTIONS
// =====================================================

const shirtDescriptions = [
  'A Moment in the Wild. Inspired by the kingfisher’s vibrant colours and quiet connection with nature, this print captures a fleeting moment of beauty through bold forms, earthy textures, and handcrafted expression.',
  'A contemporary blue shirt featuring traditional Ajrakh fabric detailing on the collar, sleeve cuffs, and hem, complemented by hand embroidery. A blend of traditional textile craft and modern menswear.',
  'An all-over floral print inspired by the delicate beauty of the Son Chaffa flower, bringing together natural elegance and artistic expression in a contemporary shirt design.',
  'A timeless shirt design featuring delicate all-over buti motifs created through traditional Bagru block printing, celebrating the beauty of Indian hand-printing traditions through understated patterns.',
  'A light grey shirt adorned with black buti motifs, created using the traditional Jamdani weaving technique. A subtle interplay of contrast and craftsmanship brings timeless Indian textile heritage into contemporary menswear.',
  'Two heads, One power,Inspired by the mythical Gandabherunda, DVIK celebrates strength and duality through a bold back print and a subtle front motif.',
  'This kurta draws inspiration from the simplicity of traditional Indian clothing and the beauty of natural textures. The subtle fabric pattern, wooden button, and distinctive pleat detailing create a unique design that feels both timeless and contemporary. It celebrates the idea that true elegance lies in simplicity, where every detail adds character without being overwhelming.',
  'A statement shirt featuring an all-over geometric buti pattern created through traditional block printing. The earthy palette and repeating motifs bring together artisanal craftsmanship and contemporary menswear.',
  'A modern silhouette with a clean and refined finish.',
  'Threads of Tradition A shirt featuring hand-embroidered abstract motifs inspired by the traditional cartwheel, bringing a touch of cultural heritage into contemporary menswear through thoughtful craftsmanship..',
  'A pista-green shirt featuring an unconventional motif that merges human legs with floral heads, creating a surreal blend of human form and botanical elements.',
  ' Earthy Edition An earthy brown shirt featuring the same surreal print, blending human legs with floral heads to create an unconventional fusion of human anatomy and botanical forms.',
  'A blue shirt featuring white extra-warp weaving, creating subtle linear textures and visual contrast. The interplay of colour and woven detail highlights textile craftsmanship in contemporary menswear.',
   'A pink shirt featuring delicate white Jamdani motifs, celebrating the elegance of traditional Indian textile craftsmanship through a soft colour palette and contemporary design.',
    ' A navy-blue shirt featuring Son Chaffa floral motifs in three colours, creating a striking contrast against the deep base. The design celebrates the flower’s natural beauty through vibrant colour and contemporary textile expression.',
     'A golden-yellow shirt featuring red extra-warp woven stripes, creating a bold interplay of colour and texture. The design highlights traditional weaving techniques through a contemporary menswear aesthetic',
          'A black shirt featuring traditional single Ikat weaving, bringing subtle patterns and rich textile heritage into contemporary menswear through understated elegance and craftsmanship.',
               'A vibrant yellow shirt featuring three-colour Jamdani weaving along the lower panel. The intricate woven detailing creates a beautiful contrast against the solid base, celebrating traditional craftsmanship through contemporary design.'

];

// =====================================================
// CREATE SHIRT PRODUCTS
// =====================================================

const shirts = shirtNames.map((name, index) => {
  const shirtNumber = index + 1;
  const images = getShirtImages(shirtNumber);

  return {
    id: `shirt-${String(shirtNumber).padStart(2, '0')}`,
    type: 'shirt',
    name,
    description:
      shirtNumber === 2
        ? 'A distinctive embroidered shirt with a relaxed silhouette, designed for effortless everyday styling.'
        : shirtDescriptions[index % shirtDescriptions.length],
    img: images[0] || null,
    images,
    exampleImage: images[0] || null,
  };
});

// =====================================================
// T-SHIRT NAMES — 9 PRODUCTS
// =====================================================

const tshirtNames = [
  'Great Auk ',
  'Pinta Island Giant Tortoise ',
  'Tasmanian Tiger ',
  'Eskimo Curlew',
  'Passenger Pigeon',
  'Woolly Mammoth',
  'Moa',
  'Dodo',
  'Stephen Island Wren',
];

// =====================================================
// T-SHIRT DESCRIPTIONS
// =====================================================

const tshirtDescriptions = [
  'The Great Auk (Pinguinus impennis) was a flightless seabird of the North Atlantic, valued for its feathers, meat, and eggs. Intensive hunting and egg collection drove the species to extinction, with the last confirmed pair killed in 1844.',
  '(Chelonoidis abingdonii) Native to Ecuador’s Galápagos Islands, this giant tortoise became a symbol of conservation through Lonesome George, the last known individual of its kind. It became extinct in 2012, primarily due to overhunting and the introduction of non-native animals to its habitat.',
  'The Tasmanian tiger (Thylacinus cynocephalus) was a carnivorous marsupial native to Tasmania, mainland Australia, and New Guinea, recognised by its distinctive dark stripes across its back and tail. It became extinct in 1936, when the last known individual died in captivity, largely due to hunting, habitat changes, and human persecution.',
  'Scientific name: Numenius borealis A migratory shorebird once found in huge numbers across North America, the Eskimo Curlew suffered a severe decline due to hunting and habitat loss. It is now considered critically endangered and possibly extinct',
  'Scientific name: Ectopistes migratorius Once found in enormous flocks across North America, this pigeon became extinct in 1914, largely because of intensive commercial hunting and habitat loss.',
  'Scientific name: Mammuthus primigenius This Ice Age relative of modern elephants had a thick coat of fur and long, curved tusks. Most populations disappeared around 10,000 years ago, although some survived much longer.',
  'Moa (Dinornithiformes) Moa were giant, flightless birds native to New Zealand, with some species reaching heights of over 3 metres. They became extinct around the 15th century, mainly due to human hunting and habitat destruction.',
  'The dodo was a flightless bird native to Mauritius that became extinct in the late 17th century. Its extinction was driven by human hunting and introduced animals that destroyed its eggs and habitat.',
  'Stephen Island Wren (Traversia lyalli) A tiny, flightless bird native to Stephens Island, New Zealand, known for its ability to live among rocky habitats. It became extinct around 1895 due to introduced predators, particularly cats.',
];

// =====================================================
// CREATE T-SHIRT PRODUCTS
// =====================================================

const tshirts = tshirtNames.map((name, index) => {
  const tshirtNumber = index + 1;
  const images = getTshirtImages(tshirtNumber);

  return {
    id: `tshirt-${String(tshirtNumber).padStart(2, '0')}`,
    type: 'tshirt',
    name,
    description: tshirtDescriptions[index],
    img: images[0] || null,
    images,
    exampleImage: images[0] || null,
  };
});

// =====================================================
// EXPORT ALL PRODUCTS
// =====================================================

export const productsData = [
  ...shirts,
  ...tshirts,
];

// =====================================================
// HELPER FUNCTIONS
// =====================================================

export function getProductById(id) {
  return productsData.find(
    (product) => product.id === id
  );
}

export function getProductsByType(type) {
  return productsData.filter(
    (product) => product.type === type
  );
}

export function getShirts() {
  return getProductsByType('shirt');
}

export function getTshirts() {
  return getProductsByType('tshirt');
}
