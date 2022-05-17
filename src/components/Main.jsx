import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { coinList } from '../redux/coin/coinReducer';
import CoinCard from './CoinCard';

const Main = () => {
  const dispatch = useDispatch();
  const cList = useSelector((store) => store.coin);
  useEffect(() => {
    dispatch(coinList());
  }, []);

  return (
    <section>
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
