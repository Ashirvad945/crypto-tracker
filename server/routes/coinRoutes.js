


import express from 'express';
import {
  getSingleCoin,
  getHistoricalData,
  fetchAndSaveCoins
} from '../controllers/coinController.js';

const router = express.Router();

// Get all top 10 coins (current data)
router.get('/', fetchAndSaveCoins);

// Get single coin detail
router.get('/:coinId', getSingleCoin);

// Get single coin historical data
router.get('/:coinId/history', getHistoricalData);

export default router;

