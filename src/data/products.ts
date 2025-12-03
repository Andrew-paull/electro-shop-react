export interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  brand: string;
  rating: number;
  description: string;
  image: string;
  specs: string[];
  inStock: boolean;
  featured: boolean;
}

export interface Category {
  id: number;
  name: string;
  icon: string;
  count: number;
}

export const products: Product[] = [
  {
    id: 1,
    name: "iPhone 15 Pro Max",
    price: 1199,
    category: "Smartphones",
    brand: "Apple",
    rating: 4.9,
    description: "The most powerful iPhone ever with A17 Pro chip, titanium design, and advanced camera system with 5x optical zoom.",
    image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=500",
    specs: ["A17 Pro Chip", "256GB Storage", "6.7\" Display", "48MP Camera"],
    inStock: true,
    featured: true
  },
  {
    id: 2,
    name: "Samsung Galaxy S24 Ultra",
    price: 1299,
    category: "Smartphones",
    brand: "Samsung",
    rating: 4.8,
    description: "Galaxy AI powered smartphone with S Pen, 200MP camera, and titanium frame for ultimate durability.",
    image: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=500",
    specs: ["Snapdragon 8 Gen 3", "512GB Storage", "6.8\" QHD+", "200MP Camera"],
    inStock: true,
    featured: true
  },
  {
    id: 3,
    name: "MacBook Pro 16\" M3 Max",
    price: 3499,
    category: "Laptops",
    brand: "Apple",
    rating: 4.9,
    description: "Supercharged by M3 Max chip with up to 128GB unified memory. The most powerful MacBook Pro ever.",
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500",
    specs: ["M3 Max Chip", "36GB RAM", "1TB SSD", "16\" Liquid Retina XDR"],
    inStock: true,
    featured: true
  },
  {
    id: 4,
    name: "Dell XPS 15",
    price: 1899,
    category: "Laptops",
    brand: "Dell",
    rating: 4.7,
    description: "Premium ultrabook with stunning 3.5K OLED display, Intel Core i9, and NVIDIA GeForce RTX 4070.",
    image: "https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=500",
    specs: ["Intel Core i9", "32GB RAM", "1TB SSD", "RTX 4070"],
    inStock: true,
    featured: false
  },
  {
    id: 5,
    name: "Sony WH-1000XM5",
    price: 399,
    category: "Audio",
    brand: "Sony",
    rating: 4.8,
    description: "Industry-leading noise cancellation headphones with exceptional sound quality and 30-hour battery life.",
    image: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=500",
    specs: ["30hr Battery", "Active Noise Cancellation", "Hi-Res Audio", "Multipoint Connection"],
    inStock: true,
    featured: true
  },
  {
    id: 6,
    name: "AirPods Pro 2",
    price: 249,
    category: "Audio",
    brand: "Apple",
    rating: 4.7,
    description: "Active Noise Cancellation, Adaptive Audio, and Personalized Spatial Audio with dynamic head tracking.",
    image: "https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?w=500",
    specs: ["H2 Chip", "6hr Battery", "USB-C Charging", "IP54 Rating"],
    inStock: true,
    featured: true
  },
  {
    id: 7,
    name: "Sony A7 IV",
    price: 2499,
    category: "Cameras",
    brand: "Sony",
    rating: 4.9,
    description: "Full-frame mirrorless camera with 33MP sensor, Real-time Eye AF, and 4K 60fps video recording.",
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=500",
    specs: ["33MP Full-Frame", "4K 60fps", "759 AF Points", "10fps Burst"],
    inStock: true,
    featured: false
  },
  {
    id: 8,
    name: "Canon EOS R6 Mark II",
    price: 2299,
    category: "Cameras",
    brand: "Canon",
    rating: 4.8,
    description: "Professional mirrorless camera with 24.2MP sensor, 40fps burst shooting, and 6K oversampled 4K video.",
    image: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=500",
    specs: ["24.2MP Full-Frame", "4K 60fps", "40fps Burst", "IBIS"],
    inStock: true,
    featured: false
  },
  {
    id: 9,
    name: "PlayStation 5 Slim",
    price: 499,
    category: "Gaming",
    brand: "Sony",
    rating: 4.9,
    description: "Next-gen gaming console with 4K gaming, ray tracing, haptic feedback, and lightning-fast SSD.",
    image: "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=500",
    specs: ["4K 120fps", "1TB SSD", "Ray Tracing", "DualSense Controller"],
    inStock: true,
    featured: true
  },
  {
    id: 10,
    name: "Xbox Series X",
    price: 499,
    category: "Gaming",
    brand: "Microsoft",
    rating: 4.8,
    description: "The most powerful Xbox ever with 12 teraflops of processing power and Quick Resume feature.",
    image: "https://images.unsplash.com/photo-1621259182978-fbf93132d53d?w=500",
    specs: ["4K 120fps", "1TB SSD", "Ray Tracing", "Quick Resume"],
    inStock: true,
    featured: false
  },
  {
    id: 11,
    name: "Nintendo Switch OLED",
    price: 349,
    category: "Gaming",
    brand: "Nintendo",
    rating: 4.7,
    description: "Versatile gaming console with vibrant 7-inch OLED screen for handheld and TV gaming.",
    image: "https://images.unsplash.com/photo-1578303512597-81e6cc155b3e?w=500",
    specs: ["7\" OLED Screen", "64GB Storage", "9hr Battery", "Dock Included"],
    inStock: true,
    featured: false
  },
  {
    id: 12,
    name: "Apple Watch Ultra 2",
    price: 799,
    category: "Wearables",
    brand: "Apple",
    rating: 4.9,
    description: "The most rugged Apple Watch with 49mm titanium case, precision GPS, and 36-hour battery.",
    image: "https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?w=500",
    specs: ["49mm Titanium", "Always-On Display", "36hr Battery", "100m Water Resistant"],
    inStock: true,
    featured: true
  },
  {
    id: 13,
    name: "Samsung Galaxy Watch 6",
    price: 329,
    category: "Wearables",
    brand: "Samsung",
    rating: 4.6,
    description: "Advanced health monitoring smartwatch with body composition analysis and sleep coaching.",
    image: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=500",
    specs: ["Super AMOLED", "40hr Battery", "Body Composition", "Wear OS"],
    inStock: true,
    featured: false
  },
  {
    id: 14,
    name: "iPad Pro 12.9\" M2",
    price: 1099,
    category: "Tablets",
    brand: "Apple",
    rating: 4.8,
    description: "Ultimate iPad experience with M2 chip, Liquid Retina XDR display, and Apple Pencil hover.",
    image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=500",
    specs: ["M2 Chip", "12.9\" XDR Display", "256GB Storage", "Face ID"],
    inStock: true,
    featured: false
  },
  {
    id: 15,
    name: "Samsung Galaxy Tab S9 Ultra",
    price: 1199,
    category: "Tablets",
    brand: "Samsung",
    rating: 4.7,
    description: "Premium Android tablet with 14.6\" Dynamic AMOLED 2X display and S Pen included.",
    image: "https://images.unsplash.com/photo-1561154464-82e9adf32764?w=500",
    specs: ["Snapdragon 8 Gen 2", "14.6\" Display", "256GB Storage", "S Pen Included"],
    inStock: true,
    featured: false
  },
  {
    id: 16,
    name: "Bose QuietComfort Ultra",
    price: 429,
    category: "Audio",
    brand: "Bose",
    rating: 4.8,
    description: "Premium wireless headphones with world-class noise cancellation and immersive audio.",
    image: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=500",
    specs: ["24hr Battery", "CustomTune", "Immersive Audio", "USB-C"],
    inStock: true,
    featured: false
  },
  {
    id: 17,
    name: "DJI Mini 4 Pro",
    price: 759,
    category: "Drones",
    brand: "DJI",
    rating: 4.8,
    description: "Compact drone with 4K/60fps video, omnidirectional obstacle sensing, and 34-min flight time.",
    image: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=500",
    specs: ["4K 60fps", "34min Flight", "249g Weight", "10km Range"],
    inStock: true,
    featured: false
  },
  {
    id: 18,
    name: "GoPro HERO12 Black",
    price: 399,
    category: "Cameras",
    brand: "GoPro",
    rating: 4.7,
    description: "Ultimate action camera with 5.3K video, HyperSmooth 6.0 stabilization, and HDR photos.",
    image: "https://images.unsplash.com/photo-1564466809058-bf4114d55352?w=500",
    specs: ["5.3K Video", "27MP Photos", "Waterproof", "HyperSmooth 6.0"],
    inStock: true,
    featured: false
  },
  {
    id: 19,
    name: "Razer BlackWidow V4 Pro",
    price: 229,
    category: "Accessories",
    brand: "Razer",
    rating: 4.6,
    description: "Premium mechanical gaming keyboard with Razer Green switches and customizable RGB.",
    image: "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?w=500",
    specs: ["Mechanical Switches", "RGB Lighting", "Wrist Rest", "Media Keys"],
    inStock: true,
    featured: false
  },
  {
    id: 20,
    name: "Logitech MX Master 3S",
    price: 99,
    category: "Accessories",
    brand: "Logitech",
    rating: 4.8,
    description: "Advanced wireless mouse with MagSpeed scrolling, 8K DPI tracking, and quiet clicks.",
    image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=500",
    specs: ["8000 DPI", "70-day Battery", "USB-C", "Bluetooth"],
    inStock: true,
    featured: false
  },
  {
    id: 21,
    name: "Samsung 49\" Odyssey G9",
    price: 1299,
    category: "Monitors",
    brand: "Samsung",
    rating: 4.7,
    description: "Massive curved gaming monitor with 240Hz refresh rate and 1ms response time.",
    image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=500",
    specs: ["49\" Curved", "240Hz", "1ms Response", "DQHD Resolution"],
    inStock: true,
    featured: false
  },
  {
    id: 22,
    name: "LG UltraGear 27GP950",
    price: 899,
    category: "Monitors",
    brand: "LG",
    rating: 4.8,
    description: "4K gaming monitor with 144Hz refresh rate, HDMI 2.1, and Nano IPS technology.",
    image: "https://images.unsplash.com/photo-1585792180666-f7347c490ee2?w=500",
    specs: ["27\" 4K", "144Hz", "HDMI 2.1", "Nano IPS"],
    inStock: true,
    featured: false
  },
  {
    id: 23,
    name: "Anker 737 Power Bank",
    price: 149,
    category: "Accessories",
    brand: "Anker",
    rating: 4.7,
    description: "High-capacity 24,000mAh power bank with 140W output for laptops and phones.",
    image: "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=500",
    specs: ["24,000mAh", "140W Output", "Smart Display", "USB-C PD"],
    inStock: true,
    featured: false
  },
  {
    id: 24,
    name: "Samsung T7 Shield SSD",
    price: 159,
    category: "Storage",
    brand: "Samsung",
    rating: 4.8,
    description: "Rugged portable SSD with 1050MB/s transfer speeds and IP65 water resistance.",
    image: "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=500",
    specs: ["1TB Capacity", "1050MB/s", "IP65 Rating", "USB 3.2"],
    inStock: true,
    featured: false
  },
  {
    id: 25,
    name: "Google Pixel 8 Pro",
    price: 999,
    category: "Smartphones",
    brand: "Google",
    rating: 4.7,
    description: "Google's flagship with Tensor G3 chip, best-in-class camera AI, and 7 years of updates.",
    image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=500",
    specs: ["Tensor G3", "128GB Storage", "6.7\" LTPO", "50MP Camera"],
    inStock: true,
    featured: false
  },
  {
    id: 26,
    name: "ASUS ROG Strix G16",
    price: 1799,
    category: "Laptops",
    brand: "ASUS",
    rating: 4.6,
    description: "High-performance gaming laptop with RTX 4070 and 240Hz display for competitive gaming.",
    image: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=500",
    specs: ["Intel Core i9", "RTX 4070", "32GB RAM", "240Hz Display"],
    inStock: true,
    featured: false
  },
  {
    id: 27,
    name: "Sony WF-1000XM5",
    price: 299,
    category: "Audio",
    brand: "Sony",
    rating: 4.8,
    description: "World's smallest and lightest premium noise-cancelling earbuds with exceptional sound.",
    image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=500",
    specs: ["8hr Battery", "Hi-Res Audio", "IPX4 Rating", "Multipoint"],
    inStock: true,
    featured: false
  },
  {
    id: 28,
    name: "Meta Quest 3",
    price: 499,
    category: "Gaming",
    brand: "Meta",
    rating: 4.7,
    description: "Advanced VR headset with mixed reality capabilities and improved graphics performance.",
    image: "https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?w=500",
    specs: ["128GB Storage", "Mixed Reality", "Snapdragon XR2", "4K+ Resolution"],
    inStock: true,
    featured: false
  }
];

export const categories: Category[] = [
  { id: 1, name: "Smartphones", icon: "📱", count: 4 },
  { id: 2, name: "Laptops", icon: "💻", count: 4 },
  { id: 3, name: "Audio", icon: "🎧", count: 5 },
  { id: 4, name: "Cameras", icon: "📷", count: 3 },
  { id: 5, name: "Gaming", icon: "🎮", count: 5 },
  { id: 6, name: "Wearables", icon: "⌚", count: 2 },
  { id: 7, name: "Tablets", icon: "📲", count: 2 },
  { id: 8, name: "Accessories", icon: "🔌", count: 4 },
];

export const brands: string[] = [
  "Apple", "Samsung", "Sony", "Dell", "Canon", "Microsoft", 
  "Nintendo", "Bose", "DJI", "GoPro", "Razer", "Logitech",
  "LG", "Anker", "Google", "ASUS", "Meta"
];