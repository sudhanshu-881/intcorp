export const categories = [
  {
    title: 'Smartphones',
    slug: 'smartphones',
    description: 'Used phones, broken screens, battery issues',
    itemCount: 234
  },
  {
    title: 'Laptops & Computers',
    slug: 'laptops',
    description: 'Old laptops, desktop PCs, components',
    itemCount: 187
  },
  {
    title: 'Electronic Components',
    slug: 'components',
    description: 'PCBs, chips, processors, memory modules',
    itemCount: 456
  },
  {
    title: 'Home Appliances',
    slug: 'appliances',
    description: 'Refrigerators, washing machines, ACs',
    itemCount: 123
  },
  {
    title: 'Gaming Devices',
    slug: 'gaming',
    description: 'Consoles, controllers, gaming accessories',
    itemCount: 89
  },
  {
    title: 'Tablets & E-readers',
    slug: 'tablets',
    description: 'iPads, Android tablets, Kindle devices',
    itemCount: 67
  }
];

export const mockProducts = [
  {
    id: '1',
    name: 'iPhone 12 Pro - Cracked Screen',
    price: 25000,
    originalPrice: 35000,
    image: 'https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg',
    seller: 'TechFix Repairs',
    location: 'Mumbai, Maharashtra',
    weight: '2.5 kg',
    condition: 'Fair',
    rating: 4.2,
    category: 'smartphones',
    description: 'iPhone 12 Pro with cracked screen but fully functional. Battery health at 85%. All other features working perfectly. Great for parts or repair.',
    specifications: {
      'Storage': '128GB',
      'Color': 'Pacific Blue',
      'Battery Health': '85%',
      'IMEI Status': 'Clean'
    }
  },
  {
    id: '2',
    name: 'Dell Inspiron 15 - No Display',
    price: 15000,
    originalPrice: 22000,
    image: 'https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg',
    seller: 'Laptop Solutions',
    location: 'Bangalore, Karnataka',
    weight: '8.2 kg',
    condition: 'Poor',
    rating: 3.8,
    category: 'laptops',
    description: 'Dell Inspiron 15 laptop with display issues. Powers on, all other components working fine. Has Intel i5 processor, 8GB RAM, 256GB SSD.',
    specifications: {
      'Processor': 'Intel Core i5',
      'RAM': '8GB DDR4',
      'Storage': '256GB SSD',
      'Graphics': 'Intel UHD'
    }
  },
  {
    id: '3',
    name: 'Samsung Galaxy S20 - Water Damaged',
    price: 18000,
    originalPrice: 28000,
    image: 'https://images.pexels.com/photos/1034653/pexels-photo-1034653.jpeg',
    seller: 'Mobile Medics',
    location: 'Delhi, NCR',
    weight: '1.8 kg',
    condition: 'Poor',
    rating: 3.5,
    category: 'smartphones',
    description: 'Samsung Galaxy S20 with water damage. Phone does not power on. Screen and body in good condition. Excellent for parts recovery.',
    specifications: {
      'Storage': '128GB',
      'RAM': '8GB',
      'Camera': '64MP Triple',
      'Color': 'Cosmic Gray'
    }
  },
  {
    id: '4',
    name: 'MacBook Air 2019 - Keyboard Issues',
    price: 45000,
    originalPrice: 65000,
    image: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg',
    seller: 'Apple Care Center',
    location: 'Pune, Maharashtra',
    weight: '5.5 kg',
    condition: 'Good',
    rating: 4.5,
    category: 'laptops',
    description: 'MacBook Air 2019 with butterfly keyboard issues. Display, battery, and internals in excellent condition. Perfect for keyboard replacement.',
    specifications: {
      'Processor': 'Intel Core i5',
      'RAM': '8GB',
      'Storage': '256GB SSD',
      'Screen': '13.3" Retina'
    }
  },
  {
    id: '5',
    name: 'PlayStation 4 Console - HDMI Port Damaged',
    price: 12000,
    originalPrice: 18000,
    image: 'https://images.pexels.com/photos/275033/pexels-photo-275033.jpeg',
    seller: 'GameFix Station',
    location: 'Chennai, Tamil Nadu',
    weight: '6.8 kg',
    condition: 'Fair',
    rating: 4.0,
    category: 'gaming',
    description: 'PlayStation 4 console with damaged HDMI port. Console powers on, all other functionality intact. Comes with original controller.',
    specifications: {
      'Model': 'CUH-2016A',
      'Storage': '500GB',
      'Controllers': '1 included',
      'Cables': 'Power cable only'
    }
  },
  {
    id: '6',
    name: 'iPad Air 2 - Battery Swollen',
    price: 8000,
    originalPrice: 12000,
    image: 'https://images.pexels.com/photos/1334598/pexels-photo-1334598.jpeg',
    seller: 'Tablet Repair Hub',
    location: 'Hyderabad, Telangana',
    weight: '2.1 kg',
    condition: 'Poor',
    rating: 3.2,
    category: 'tablets',
    description: 'iPad Air 2 with swollen battery causing screen separation. Display and logic board in working condition. Great for parts or battery replacement.',
    specifications: {
      'Storage': '32GB',
      'Color': 'Space Gray',
      'WiFi': 'Yes',
      'Cellular': 'No'
    }
  }
];

export const getProductsByCategory = (category: string) => {
  return mockProducts.filter(product => product.category === category);
};

export const getProductById = (id: string) => {
  return mockProducts.find(product => product.id === id);
};

export const searchProducts = (query: string) => {
  const lowercaseQuery = query.toLowerCase();
  return mockProducts.filter(product => 
    product.name.toLowerCase().includes(lowercaseQuery) ||
    product.description.toLowerCase().includes(lowercaseQuery) ||
    product.category.toLowerCase().includes(lowercaseQuery)
  );
};