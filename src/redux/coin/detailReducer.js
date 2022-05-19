const apiCoin = 'https://api.coincap.io/v2/assets/';

const FETCHDETAIL = 'FETCHDETAIL';
const initialState = [{ id: 1, symbol: 'TRY' }];

const fetchDetail = async (id) => {
  const get = await fetch(apiCoin + id, { method: 'GET' });
  const coins = await get.json();
  return coins;
};

export const coinDetail = (id) => async (dispatch) => {
  const cDetail = await fetchDetail(id);
  dispatch({
    type: FETCHDETAIL,
    detail: cDetail.data,
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHDETAIL:
      return action.detail;
    default:
      return state;
  }
};

export default reducer;
