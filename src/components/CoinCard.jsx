import React from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { coinDetail } from '../redux/coin/detailReducer';

const CoinCard = (props) => {
  const dispatch = useDispatch();
  const {
    id,
    symbol,
    price,
  } = props;

  const clickHandler = (id) => {
    dispatch(coinDetail(id));
  };

  return (
    <NavLink className="card" to="/detail" onClick={() => { clickHandler(id); }}>
      <h2>{symbol}</h2>
      <small>{id}</small>
      <p>
        $
        {price}
      </p>
    </NavLink>
  );
};

CoinCard.propTypes = {
  id: PropTypes.string.isRequired,
  symbol: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
};

export default CoinCard;
