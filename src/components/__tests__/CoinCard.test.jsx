import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import store from '../../redux/configureStore';
import CoinCard from '../CoinCard';

const coin = {
  changePercent24Hr: '-2.8770796633988240',
  id: 'bitcoin',
  priceUsd: '29067.8651115798164805',
  symbol: 'BTC',
};

describe('CoinCard component', () => {
  test('component match with the snapshot', () => {
    const tree = renderer.create(
      <BrowserRouter>
        <Provider store={store}>
          <CoinCard
            key={coin.id}
            id={coin.id}
            symbol={coin.symbol}
            price={coin.priceUsd.substring(0, 8)}
            change={coin.changePercent24Hr}
          />
        </Provider>
      </BrowserRouter>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
