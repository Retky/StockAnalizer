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
      <div>{coin.symbol}</div>
    </section>
  );
};

export default Detail;
