import {
  createStore,
  combineReducers,
  applyMiddleware,
} from 'redux';
import thunk from 'redux-thunk';
import coin from './coin/coinReducer';

const reducer = combineReducers({
  coin,
});

const store = createStore(
  reducer,
  applyMiddleware(thunk),
);

export default store;
