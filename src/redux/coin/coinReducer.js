const apiCoin = 'https://api.coincap.io/v2/assets';

const FETCHCOINS = 'FETCHCOINS';
const initialState = [];

let store = false;
export const fetchCoins = () => async (dispatch) => {
  const get = await fetch(`${apiCoin}?.limit=11`);
  const newState = await get.json();
  if (store) return;
  dispatch({
    type: FETCHCOINS,
    newState,
  });
  store = true;
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
