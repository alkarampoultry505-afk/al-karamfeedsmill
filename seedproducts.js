// server/seed/seedProducts.js
require('dotenv').config();
const mongoose = require('mongoose');
const Product = require('../models/Product');

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/alkaram_db';

const products = [
  {
    name: 'Broiler Feed (Finisher Feed)',
    subtitle: 'High-Energy Broiler Feed – More Weight, Less Feed',
    description: 'High-energy finishing formula for best weight gain and FCR.',
    features: ['High-energy formula', 'Better meat quality', 'Complete vitamins & minerals'],
    imageUrl: 'https://i.ibb.co/PGvtHVWZ/3.jpg'
  },
  {
    name: 'Starter Feed (For Day-Old Chicks)',
    subtitle: 'Premium Starter Feed – Strong Chicks, Strong Future',
    description: 'Finely textured starter feed with high protein and immunity boosters.',
    features: ['Fine texture', 'High protein', 'Immunity booster'],
    imageUrl: 'https://i.ibb.co/39d6KxBZ/2.jpg'
  },
  {
    name: 'Grower Feed (For Mid-Age Broilers)',
    subtitle: 'Grower Feed for Healthy Growth & Better Performance',
    description: 'Balanced protein and energy for steady development.',
    features: ['Balanced protein', 'Improves digestion', 'Prepares for finishing stage'],
    imageUrl: 'https://i.ibb.co/7J2zsFDv/1.jpg'
  }
];

async function seed() {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log('MongoDB connected for seeding');
    await Product.deleteMany({});
    await Product.insertMany(products);
    console.log('Products seeded!');
    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}

seed();