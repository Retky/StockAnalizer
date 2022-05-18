import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

const Detail = () => {
  const coin = useSelector((store) => store.detail);

  return (
    <section>
      <NavLink className="back" to="/">
        Back
      </NavLink>

      <div className="detail">
        <h2>{coin.symbol}</h2>
        <p>{coin.name}</p>
      </div>
      <div className="detailList">
        <div>
          Rank
        </div>
        <div>
          {' #'}
          {coin.rank}
        </div>
        <div>
          Price
        </div>
        <div>
          {' $'}
          {coin.priceUsd}
          {' USD'}
        </div>
        <div>
          Volume 24h
        </div>
        <div>
          {' $'}
          {coin.volumeUsd24Hr}
        </div>
        <div>
          Total Supply
        </div>
        <div>
          {' '}
          {coin.supply}
          {' '}
          {coin.symbol}
        </div>
      </div>
    </section>
  );
};

export default Detail;
