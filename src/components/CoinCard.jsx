import React from 'react';
import PropTypes from 'prop-types';

const CoinCard = (props) => {
  const {
    id,
    symbol,
    price,
  } = props;

  return (
    <div className="card">
      <h2>{symbol}</h2>
      <small>{id}</small>
      <p>
        $
        {price}
      </p>
    </div>
  );
};

CoinCard.propTypes = {
  id: PropTypes.string.isRequired,
  symbol: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
};

export default CoinCard;
