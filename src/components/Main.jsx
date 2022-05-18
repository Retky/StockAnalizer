import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { coinList, coinFilter } from '../redux/coin/coinReducer';
import CoinCard from './CoinCard';

const Main = () => {
  const dispatch = useDispatch();
  const cList = useSelector((store) => store.coin);
  useEffect(() => {
    dispatch(coinList());
  }, []);

  const changeHandler = (e) => {
    dispatch(coinFilter(e.target.value));
    console.log(e.target.value);
  };

  return (
    <section>
      <select className="filter" onChange={changeHandler}>
        <option value="price"> Price </option>
        <option value="name"> Name </option>
        <option value="vol"> 24h% </option>
      </select>
      <ul className="coinList">
        {cList.map((coin) => (
          <CoinCard
            key={coin.id}
            id={coin.id}
            symbol={coin.symbol}
            price={coin.priceUsd.substring(0, 8)}
            change={coin.changePercent24Hr}
          />
        ))}
      </ul>
    </section>
  );
};

export default Main;
