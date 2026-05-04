const express = require('express');
const router = express.Router();

const plans = {
  instant: [
    { size: '$5K', price: 49, profitTarget: '6%', maxDailyLoss: '2%', maxLoss: '8%', leverage: '30:1', split: '90%' },
    { size: '$10K', price: 89, profitTarget: '6%', maxDailyLoss: '2%', maxLoss: '8%', leverage: '30:1', split: '90%' },
    { size: '$25K', price: 197, profitTarget: '6%', maxDailyLoss: '2%', maxLoss: '8%', leverage: '30:1', split: '90%', popular: true },
    { size: '$50K', price: 297, profitTarget: '6%', maxDailyLoss: '2%', maxLoss: '8%', leverage: '30:1', split: '90%' },
    { size: '$100K', price: 497, profitTarget: '6%', maxDailyLoss: '2%', maxLoss: '8%', leverage: '30:1', split: '95%' },
    { size: '$200K', price: 897, profitTarget: '6%', maxDailyLoss: '2%', maxLoss: '8%', leverage: '30:1', split: '95%' },
  ],
  '1-step': [
    { size: '$5K', price: 39, profitTarget: '8%', maxDailyLoss: '4%', maxLoss: '8%', leverage: '20:1', split: '85%' },
    { size: '$10K', price: 69, profitTarget: '8%', maxDailyLoss: '4%', maxLoss: '8%', leverage: '20:1', split: '85%' },
    { size: '$25K', price: 149, profitTarget: '8%', maxDailyLoss: '4%', maxLoss: '8%', leverage: '20:1', split: '85%', popular: true },
    { size: '$50K', price: 249, profitTarget: '8%', maxDailyLoss: '4%', maxLoss: '8%', leverage: '20:1', split: '85%' },
    { size: '$100K', price: 399, profitTarget: '8%', maxDailyLoss: '4%', maxLoss: '8%', leverage: '20:1', split: '90%' },
    { size: '$200K', price: 699, profitTarget: '8%', maxDailyLoss: '4%', maxLoss: '8%', leverage: '20:1', split: '90%' },
  ],
  '2-step': [
    { size: '$5K', price: 29, profitTarget: '5%/4%', maxDailyLoss: '3%', maxLoss: '6%', leverage: '10:1', split: '80%' },
    { size: '$10K', price: 59, profitTarget: '5%/4%', maxDailyLoss: '3%', maxLoss: '6%', leverage: '10:1', split: '80%' },
    { size: '$25K', price: 119, profitTarget: '5%/4%', maxDailyLoss: '3%', maxLoss: '6%', leverage: '10:1', split: '80%', popular: true },
    { size: '$50K', price: 199, profitTarget: '5%/4%', maxDailyLoss: '3%', maxLoss: '6%', leverage: '10:1', split: '80%' },
    { size: '$100K', price: 349, profitTarget: '5%/4%', maxDailyLoss: '3%', maxLoss: '6%', leverage: '10:1', split: '85%' },
    { size: '$200K', price: 599, profitTarget: '5%/4%', maxDailyLoss: '3%', maxLoss: '6%', leverage: '10:1', split: '85%' },
  ],
};

router.get('/', (req, res) => res.json(plans));
router.get('/:type', (req, res) => {
  const plan = plans[req.params.type];
  if (!plan) return res.status(404).json({ message: 'Plan not found' });
  res.json(plan);
});

module.exports = router;
