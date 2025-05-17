
import { Product } from '@/types';

export const products: Product[] = [
  {
    id: '1',
    name: 'Eco-friendly Water Bottle',
    price: 25.99,
    image: '/placeholder.svg',
    description: 'Reusable stainless steel water bottle with insulation technology. Keeps drinks cold for 24 hours or hot for 12 hours.',
    category: 'kitchen'
  },
  {
    id: '2',
    name: 'Organic Cotton Towel Set',
    price: 39.99,
    image: '/placeholder.svg',
    description: 'Set of 4 plush bath towels made from 100% organic cotton. Soft, absorbent, and eco-friendly.',
    category: 'bathroom'
  },
  {
    id: '3',
    name: 'Multi-purpose Cleaner Spray',
    price: 12.50,
    image: '/placeholder.svg',
    description: 'Natural all-purpose cleaning spray for countertops, appliances, and surfaces. Plant-based formula with essential oils.',
    category: 'cleaning'
  },
  {
    id: '4',
    name: 'LED Desk Lamp',
    price: 34.95,
    image: '/placeholder.svg',
    description: 'Energy-efficient LED desk lamp with adjustable brightness and color temperature. Includes USB charging port.',
    category: 'electronics'
  },
  {
    id: '5',
    name: 'Bamboo Dish Brush',
    price: 7.99,
    image: '/placeholder.svg',
    description: 'Sustainable dish brush with bamboo handle and plant-based bristles. Biodegradable and eco-friendly.',
    category: 'kitchen'
  },
  {
    id: '6',
    name: 'Reusable Shopping Bags',
    price: 15.99,
    image: '/placeholder.svg',
    description: 'Set of 5 foldable shopping bags made from recycled materials. Sturdy, washable, and compact.',
    category: 'household'
  },
  {
    id: '7',
    name: 'Ceramic Coffee Mug',
    price: 18.50,
    image: '/placeholder.svg',
    description: 'Handcrafted ceramic mug with minimalist design. Microwave and dishwasher safe.',
    category: 'kitchen'
  },
  {
    id: '8',
    name: 'Air Purifying Plant',
    price: 29.99,
    image: '/placeholder.svg',
    description: 'Indoor plant known for its air purifying qualities. Comes in a decorative ceramic pot.',
    category: 'home-decor'
  },
];

export const categories = [
  { id: 'all', name: 'All Products' },
  { id: 'kitchen', name: 'Kitchen' },
  { id: 'bathroom', name: 'Bathroom' },
  { id: 'cleaning', name: 'Cleaning' },
  { id: 'electronics', name: 'Electronics' },
  { id: 'household', name: 'Household' },
  { id: 'home-decor', name: 'Home Decor' },
];
