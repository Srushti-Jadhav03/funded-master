const express = require('express');
const router = express.Router();

const payouts = [
  { name: 'John Bartlett', country: 'Poland', amount: '$3,423.39', time: '1 Hour', avatar: 'JB' },
  { name: 'Thomas Vargas', country: 'Austria', amount: '$9,423.39', time: '4 Hours', avatar: 'TV' },
  { name: 'James Colon', country: 'Norway', amount: '$14,291.76', time: '8 Hours', avatar: 'JC' },
  { name: 'Joseph Hurst', country: 'Poland', amount: '$1,117.97', time: '6 Hours', avatar: 'JH' },
  { name: 'Richard Miles', country: 'Iraq', amount: '$6,142.12', time: '20 Hours', avatar: 'RM' },
];

router.get('/', (req, res) => res.json(payouts));
module.exports = router;
