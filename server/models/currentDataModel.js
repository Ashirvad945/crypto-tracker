import mongoose from 'mongoose';

const schema = new mongoose.Schema({
  id: String,
  name: String,
  symbol: String,
  current_price: Number,
  market_cap: Number,
  market_cap_rank: Number,
  market_cap_change_percentage_24h: Number,
  last_updated: String,
  image: String
});
export default mongoose.model('CurrentData', schema);

