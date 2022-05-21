import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleLeft } from '@fortawesome/free-regular-svg-icons';
import { coinDetail } from '../redux/coin/detailReducer';

const Detail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const coin = useSelector((store) => store.detail);
  useEffect(() => {
    dispatch(coinDetail(id));
  }, []);

  return (
    <section>
      <NavLink to="/">
        <FontAwesomeIcon icon={faCircleLeft} size="xl" className="back" />
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
          <p>Rank</p>
        </div>
        <div>
          <p>
            {' #'}
            {coin.rank}
          </p>
        </div>
        <div className="dark">
          <p>Price</p>
        </div>
        <div className="dark">
          <p>
            {' $'}
            {coin.priceUsd}
            {' USD'}
          </p>
        </div>
        <div>
          <p>Volume 24h</p>
        </div>
        <div>
          <p>
            {' $'}
            {coin.volumeUsd24Hr}
          </p>
        </div>
        <div className="dark">
          <p>Total Supply</p>
        </div>
        <div className="dark">
          <p>
            {' '}
            {coin.supply}
            {' '}
            {coin.symbol}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Detail;
