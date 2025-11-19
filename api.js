// server/routes/api.js
const express = require('express');
const router = express.Router();

const Product = require('../models/Product');
const Inquiry = require('../models/Inquiry');

// GET /api/products  -> list products
router.get('/products', async (req, res) => {
  try {
    const products = await Product.find().sort({ createdAt: -1 });
    res.json({ success: true, data: products });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Server error', error: err.message });
  }
});

// GET /api/products/:id
router.get('/products/:id', async (req, res) => {
  try {
    const prod = await Product.findById(req.params.id);
    if(!prod) return res.status(404).json({ success:false, message: 'Product not found' });
    res.json({ success: true, data: prod });
  } catch (err) {
    res.status(500).json({ success:false, message: 'Server error', error: err.message });
  }
});

// POST /api/inquiries -> create contact/inquiry
router.post('/inquiries', async (req, res) => {
  try {
    const { name, phone, email, message, productInterested } = req.body;
    if (!name) return res.status(400).json({ success:false, message: 'Name is required' });

    const inquiry = new Inquiry({ name, phone, email, message, productInterested });
    await inquiry.save();

    // TODO: optionally send email notification here

    res.json({ success: true, message: 'Inquiry received', data: inquiry });
  } catch (err) {
    res.status(500).json({ success:false, message: 'Server error', error: err.message });
  }
});

module.exports = router;