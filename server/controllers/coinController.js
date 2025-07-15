


import axios from 'axios';
import CurrentData from '../models/currentDataModel.js';
import HistoryData from '../models/historyDataModel.js';

// ✅ Get single coin details from CoinGecko
export const getSingleCoin = async (req, res) => {
  try {
    const { coinId } = req.params;
    const { data } = await axios.get(
      `https://api.coingecko.com/api/v3/coins/${coinId}`
    );
    res.json(data);
  } catch (err) {
    console.error('❌ getSingleCoin error:', err.message);
    res.status(500).json({ message: err.message });
  }
};

// ✅ Get historical data for chart
export const getHistoricalData = async (req, res) => {
  try {
    const { coinId } = req.params;
    const currency = req.query.currency || 'usd';
    const { data } = await axios.get(
      `https://api.coingecko.com/api/v3/coins/${coinId}/market_chart`,
      { params: { vs_currency: currency, days: 10, interval: 'daily' } }
    );
    res.json(data);
  } catch (err) {
    console.error('❌ getHistoricalData error:', err.message);
    res.status(500).json({ message: err.message });
  }
};

// ✅ Fetch & save current top coins (100 for better search)
export const fetchAndSaveCoins = async (req, res) => {
  try {
    const { data } = await axios.get(
      'https://api.coingecko.com/api/v3/coins/markets',
      { params: { vs_currency: 'usd', order: 'market_cap_desc', per_page: 100, page: 1 } }
    );

    await CurrentData.deleteMany();

    const formatted = data.map(c => ({
      id: c.id,
      name: c.name,
      symbol: c.symbol,
      current_price: c.current_price,
      market_cap: c.market_cap,
      market_cap_rank: c.market_cap_rank,
      market_cap_change_percentage_24h: c.market_cap_change_percentage_24h,
      last_updated: c.last_updated,
      image: c.image
    }));

    await CurrentData.insertMany(formatted);

    res.json(formatted);
  } catch (err) {
    console.error('❌ fetchAndSaveCoins error:', err.message);
    res.status(500).json({ message: err.message });
  }
};

// ✅ Save snapshot to history (cron job)
export const saveHistory = async () => {
  try {
    const current = await CurrentData.find();
    if (current.length) {
      await HistoryData.insertMany(current);
      console.log("✅ History data saved");
    }
  } catch (err) {
    console.error('❌ saveHistory error:', err.message);
  }
};


