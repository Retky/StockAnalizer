const apiCoin = 'https://api.coincap.io/v2/assets';
const mainList = '?limit=100';

const FETCHCOINS = 'FETCHCOINS';
const FILTERCOINS = 'FILTERCOINS';
const initialState = [];

const fetchCoins = async () => {
  const get = await fetch(apiCoin + mainList, { method: 'GET' });
  const toJs = await get.json();
  const coins = toJs.data;
  return coins;
};

export const coinList = () => async (dispatch) => {
  const coins = await fetchCoins();
  const firstCoins = coins.slice(0, 51);
  dispatch({
    type: FETCHCOINS,
    newState: firstCoins,
  });
};

export const coinFilter = (filter) => async (dispatch) => {
  const coins = await fetchCoins();
  if (filter === 'name') {
    coins.sort((a, b) => a.name.localeCompare(b.name));
  } else if (filter === 'vol') {
    coins.sort((a, b) => b.priceUsd - a.priceUsd);
  }
  const firstCoins = coins.slice(0, 51);
  dispatch({
    type: FILTERCOINS,
    filterState: firstCoins,
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHCOINS:
      return action.newState;
    case FILTERCOINS:
      return action.filterState;
    default:
      return state;
  }
};

export default reducer;
