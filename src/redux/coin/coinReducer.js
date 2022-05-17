const apiCoin = 'https://api.coincap.io/v2/assets';
const mainList = '?limit=11';

const FETCHCOINS = 'FETCHCOINS';
const initialState = [];

const fetchCoins = async () => {
  const get = await fetch(apiCoin + mainList, { method: 'GET' });
  const coins = await get.json();
  return coins;
};

fetchCoins().then((loo) => console.log(loo.data));

export const coinList = () => async (dispatch) => {
  const coins = await fetchCoins();
  dispatch({
    type: FETCHCOINS,
    newState: coins.data,
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHCOINS:
      return action.newState;
    default:
      return state;
  }
};

export default reducer;
