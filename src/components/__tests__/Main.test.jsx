import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import store from '../../redux/configureStore';
import Main from '../Main';

describe('Main component', () => {
  test('component match with the snapshot', () => {
    const tree = renderer.create(
      <Provider store={store}>
        <Main />
      </Provider>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
