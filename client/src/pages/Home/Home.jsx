



import React, { useContext, useEffect, useState } from 'react';
import './Home.css';
import { CoinContext } from '../../context/CoinContext';
import { Link } from 'react-router-dom';

const Home = () => {
  const { allCoin, currency } = useContext(CoinContext);
  const [displayCoin, setDisplayCoin] = useState([]);
  const [input, setInput] = useState('');

  const inputHandler = (event) => {
    setInput(event.target.value);
    if (event.target.value === "") {
      setDisplayCoin(allCoin || []);
    }
  };

  const searchHandler = (event) => {
    event.preventDefault();
    const coins = (allCoin || []).filter((item) =>
      item?.name?.toLowerCase().includes(input.toLowerCase())
    );
    setDisplayCoin(coins);
  };

  useEffect(() => {
    setDisplayCoin(allCoin || []);
  }, [allCoin]);

  return (
    <div className='home'>
      <div className='hero'>
        <h1>Largest <br /> Crypto Marketplace</h1>
        <p>Welcome to the world's largest cryptocurrency marketplace. Sign up to explore more about cryptos.</p>
        <form onSubmit={searchHandler}>
          <input
            onChange={inputHandler}
            list='coinlist'
            value={input}
            type="text"
            placeholder='Search crypto..'
            required
            className='search-input'
          />
          <datalist id='coinlist'>
            {(allCoin || []).map((item, index) => (
              <option key={index} value={item?.name} />
            ))}
          </datalist>
          <button type='submit' className='search-button'>Search</button>
        </form>
      </div>

      <div className="crypto-table">
        <div className="table-layout table-header">
          <p>#</p>
          <p>Coins</p>
          <p>Price</p>
          <p style={{ textAlign: "center" }}>24H Change</p>
          <p className='market-cap'>Market Cap</p>
          <p>Last Updated</p>
        </div>

        {(displayCoin && displayCoin.length > 0) ? (
          displayCoin.slice(0, 10).map((item, index) => (
            <Link to={`/coin/${item?.id}`} className="table-layout" key={index}>
              <p>{item?.market_cap_rank ?? '-'}</p>
              <div className='coin-info'>
                <img src={item?.image || ''} alt={item?.name || 'coin'} />
                <p>{item?.name || '-'} _ {item?.symbol?.toUpperCase() || '-'}</p>
              </div>
              <p>
                {currency.symbol} {item?.current_price != null 
                  ? item.current_price.toLocaleString() 
                  : '-'}
              </p>
              <p className={item?.market_cap_change_percentage_24h > 0 ? "green" : "red"}>
                {item?.market_cap_change_percentage_24h != null
                  ? (Math.floor(item.market_cap_change_percentage_24h * 100) / 100) + "%"
                  : '-'}
              </p>
              <p className='market-cap'>
                {currency.symbol} {item?.market_cap != null 
                  ? item.market_cap.toLocaleString() 
                  : '-'}
              </p>
              <p>
                {item?.last_updated
                  ? new Date(item.last_updated).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
                  : '-'}
              </p>
            </Link>
          ))
        ) : (
          <p className="loading">Loading data...</p>
        )}
      </div>
    </div>
  );
};

export default Home;








