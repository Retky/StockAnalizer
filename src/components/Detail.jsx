import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleLeft } from '@fortawesome/free-regular-svg-icons';

const Detail = () => {
  const coin = useSelector((store) => store.detail);

  return (
    <section>
      <NavLink to="/">
        <FontAwesomeIcon icon={faCircleLeft} size="2x" className="back" />
      </NavLink>

      <div className="detail">
        <h2>{coin.symbol}</h2>
        <p>{coin.name}</p>
      </div>
      <div className="title">
        Details
      </div>
      <div className="detailList">
        <div>
          Rank
        </div>
        <div>
          {' #'}
          {coin.rank}
        </div>
        <div className="dark">
          Price
        </div>
        <div className="dark">
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
        <div className="dark">
          Total Supply
        </div>
        <div className="dark">
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
