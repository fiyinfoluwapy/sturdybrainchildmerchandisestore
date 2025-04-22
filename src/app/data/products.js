// src/data/products.js

const products = [
    {
      id: '1',
      name: 'Daredevil Leather Jacket',
      price: 29999,
      category: 'jackets', 
      image: 'https://i.pinimg.com/736x/27/be/b2/27beb27b4bf6497ab20e36a971235b7f.jpg',
      sizes: ['M', 'L', 'XL'
        ],
      colors: ['Black', 'Red'
        ],
      inStock: true,
    },
    {
      id: '2',
      name: 'Urban Combat Tee',
      price: 7999,
      category: 'tees',
      image: 'https://i.pinimg.com/736x/97/b5/e4/97b5e4407f4ff1fa79dd164b6ab710a4.jpg',
      sizes: ['S', 'M', 'L'
        ],
      colors: ['White', 'Black', 'Grey'
        ],
      inStock: true,
    },
    {
      id: '3',
      name: 'Midnight Hoodie',
      price: 14999,
      category: 'hoodies',
      image: 'https://i.pinimg.com/736x/c4/56/14/c45614223b0926dd26121ece69377336.jpg',
      sizes: ['M', 'L', 'XL'
        ],
      colors: ['Black', 'Gray'
        ],
      inStock: true,
    },
    {
      id: '4',
      name: 'Tactical Cargo Pants',
      price: 12999,
      category: ['pants', 'Tee'],
      image: 'https://i.pinimg.com/736x/43/19/36/431936df6fc0c68d7eba9b5c949e015a.jpg',
      sizes: ['S', 'M', 'L', 'XL'
        ],
      colors: ['Green', 'Black'
        ],
      inStock: false,
    },
    {
      id: '5',
      name: 'Sturdy Gym Sleeveless',
      price: 6999,
      category: ['gym', 'Tee'],
      image: 'https://i.pinimg.com/736x/43/b9/ea/43b9ea7d49714d3f5abe8575992a4ed8.jpg',
      sizes: ['S', 'M', 'L'
        ],
      colors: ['Gray', 'Black'
        ],
      inStock: true,
    },
    {
      id: '6',
      name: 'Speed Demon Biker Set',
      price: 49999,
      category: 'bike gear',
      image: 'https://i.pinimg.com/736x/aa/46/de/aa46dee274f048c8633d3bdf609d76f5.jpg',
      sizes: ['M', 'L', 'XL'
        ],
      colors: ['Black', 'Red'
        ],
      inStock: true,
    },
    {
      id: '7',
      name: 'Rebel Tracksuit',
      price: 21999,
      category: 'tracksuits',
      image: 'https://i.pinimg.com/736x/41/49/01/41490104c6a93aa4f3dc4f5d54ab46c1.jpg',
      sizes: ['S', 'M', 'L'
        ],
      colors: ['Black', 'White'
        ],
      inStock: true,
    },
    {
      id: '8',
      name: 'Mt-09 Windsheild',
      price: 32850,
      category: 'accessories',
      image: 'https://i.pinimg.com/736x/1e/22/9d/1e229d5b5219f42242ebee24737c5fcf.jpg',
      sizes: ['One Size'
        ],
      colors: ['Black', 'Red'
        ],
      inStock: true,
    },
    {
      id: '9',
      name: 'Sturdy Snapback',
      price: 13999,
      category: 'pants',
      image: 'https://i.pinimg.com/736x/f0/75/96/f0759691fa6632a24b1ec0e18b3ab61f.jpg',
      sizes: ['M', 'L', 'XL'
        ],
      colors: ['Gray', 'Black'
        ],
      inStock: true,
    },
    {
      id: '10',
      name: 'Bulletproof Vibes Vest',
      price: 17999,
      category: 'vests',
      image: 'https://i.pinimg.com/736x/67/30/85/6730853068fea93b14b81e25a461410c.jpg',
      sizes: ['S', 'M', 'L'
        ],
      colors: ['Black'
        ],
      inStock: true,
    },
    {
      id: '11',
      name: 'Dark Phantom Face Mask',
      price: 2999,
      category: 'accessories',
      image: 'https://i.pinimg.com/736x/67/c6/20/67c62027f5ea2bb883c0da6e057351bd.jpg',
      sizes: ['One Size'
        ],
      colors: ['Black'
        ],
      inStock: true,
    },
    {
      id: '12',
      name: 'Custom Bike Wrap – Shark Attack',
      price: 74999,
      category: 'custom wraps',
      image: 'https://i.pinimg.com/736x/81/57/bb/8157bb9c9054979ed9531f21d5f6a352.jpg',
      sizes: [],
      colors: ['Red', 'Black', 'Blue', 'Grey'
        ],
      inStock: true,
    },
    {
      id: '13',
      name: 'Custom Bike Wrap – Venom',
      price: 79999,
      category: 'custom wraps',
      image: 'https://i.pinimg.com/736x/93/fc/43/93fc43f5ce1ce2a50adbf03b26e47d39.jpg',
      sizes: [],
      colors: ['Black', 'Gray'
        ],
      inStock: true,
    },
    {
      id: '14',
      name: 'Vintage Graffiti Tee',
      price: 10999,
      category: 'tees',
      image: 'https://i.pinimg.com/736x/ce/10/3b/ce103b22d0568d4cf1114228e81f26bd.jpg',
      sizes: ['S', 'M', 'L', 'XL'
        ],
      colors: ['White', 'Black', 'Grey'
        ],
      inStock: false,
    },
    {
      id: '15',
      name: 'Red Flame Compression Top',
      price: 10999,
      category: 'gym',
      image: 'https://i.pinimg.com/736x/51/f8/22/51f82292547817b98f516ea4633ec437.jpg',
      sizes: ['M', 'L'
        ],
      colors: ['Red'
        ],
      inStock: true,
    },
    {
      id: '16',
      name: 'Stealth Biker Helmet',
      price: 35999,
      category: 'bike gear',
      image: 'https://i.pinimg.com/736x/31/b5/77/31b57783ea9f7ce73389847d9738bfff.jpg',
      sizes: ['One Size'
        ],
      colors: ['Black'
        ],
      inStock: true,
    },
    {
      id: '17',
      name: 'Ghost Shadow Longsleeve',
      price: 10999,
      category: 'tees',
      image: 'https://i.pinimg.com/736x/92/96/a7/9296a7bb9b8810f277d29bd12e180975.jpg',
      sizes: ['M', 'L', 'XL'
        ],
      colors: ['Black', 'Gray'
        ],
      inStock: true,
    },
    {
      id: '18',
      name: 'Alpha Performance Shorts',
      price:99,
      category: 'gym',
      image: 'https://i.pinimg.com/736x/a2/1b/0f/a21b0fbf3aa40eb5d06185ad9c97d536.jpg',
      sizes: ['S', 'M', 'L'
        ],
      colors: ['Black'
        ],
      inStock: true,
    },
    {
      id: '19',
      name: 'Redline Bike Gloves',
      price: 5999,
      category: 'bike gear',
      image: 'https://i.pinimg.com/736x/c7/c6/1c/c7c61cb92f50df80ff1ecb753130aea0.jpg',
      sizes: ['M', 'L'
        ],
      colors: ['Red', 'Black'
        ],
      inStock: true,
    },
    {
      id: '20',
      name: 'Jetstream Hoodie',
      price: 15999,
      category: 'hoodies',
      image: 'https://i.pinimg.com/736x/29/18/9b/29189be26dbd116a98522b13e1a0f651.jpg',
      sizes: ['S', 'M', 'L', 'XL'
        ],
      colors: ['White', 'Gray'
        ],
      inStock: true,
    },
    {
      id: '21',
      name: 'Blackout Zip Jacket',
      price: 24999,
      category: 'jackets',
      image: 'https://i.pinimg.com/736x/f3/7c/36/f37c36f8d75cf2dce2af24ee6fc8cf17.jpg',
      sizes: ['M', 'L', 'XL'
        ],
      colors: ['Black'
        ],
      inStock: true,
    },
    {
      id: '22',
      name: 'Beast Mode Tank',
      price: 6999,
      category: 'gym',
      image: 'https://i.pinimg.com/736x/99/ec/91/99ec91897a3c4d44377c6192c1838988.jpg',
      sizes: ['S', 'M', 'L'
        ],
      colors: ['Black', 'Gray'
        ],
      inStock: true,
    },
    {
      id: '23',
      name: 'Underground Drip Hoodie',
      price: 14999,
      category: 'hoodies',
      image: 'https://i.pinimg.com/736x/d3/59/40/d359406835a9f235794de923db754be8.jpg',
      sizes: ['M', 'L'
        ],
      colors: ['Black', 'Grey'
        ],
      inStock: true,
    },
    {
      id: '24',
      name: 'Steelcore Shin Guards',
      price: 12999,
      category: 'bike gear',
      image: 'https://i.pinimg.com/736x/fa/a5/4e/faa54e80ec5b3064d4296a92d58adc51.jpg',
      sizes: ['M', 'L'
        ],
      colors: ['Black'
        ],
      inStock: true,
    },
    {
      id: '25',
      name: 'Off the ledge Windbreaker',
      price: 19999,
      category: 'jackets',
      image: 'https://i.pinimg.com/736x/56/00/8f/56008fb28da5552aeade794affc39b19.jpg',
      sizes: ['M', 'L', 'XL'
        ],
      colors: ['Red', 'Black', 'Grey'
        ],
      inStock: true,
    },
];
  
  export default products;
  