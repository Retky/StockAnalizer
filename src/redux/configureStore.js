import {
  createStore,
  combineReducers,
  applyMiddleware,
} from 'redux';
import thunk from 'redux-thunk';
import coin from './coin/coinReducer';
import detail from './coin/detailReducer';

const reducer = combineReducers({
  coin,
  detail,
});

const store = createStore(
  reducer,
  applyMiddleware(thunk),
);

export default store;
