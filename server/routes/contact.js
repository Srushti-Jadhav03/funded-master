const express = require('express');
const router = express.Router();
router.post('/', (req, res) => {
  const { name, email, message } = req.body;
  if (!name || !email || !message) return res.status(400).json({ message: 'All fields required' });
  console.log('Contact form:', { name, email, message });
  res.json({ message: 'Message received! We will get back to you soon.' });
});
module.exports = router;
