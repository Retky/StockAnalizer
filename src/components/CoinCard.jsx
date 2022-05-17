import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

const CoinCard = (props) => {
  const {
    id,
    symbol,
    price,
  } = props;

  return (
    <NavLink className="card" to="/detail">
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
