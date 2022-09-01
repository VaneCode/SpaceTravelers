import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import React from 'react';
import store from '../../redux/configureStore';
import Rocket from '../Rocket/Rocket';

describe('Rocket component', () => {
  test('Renders Rocket component', () => {
    const rocket = {
      id: 1,
      rocket_name: 'Falcon1',
      description: 'Fake description',
      flickr_images: 'https://api.spacexdata.com/v3/rockets',
    };
    const tree = render(
      <React.StrictMode>
        <Provider store={store}>
          <Router>
            <Rocket rocket={rocket} />
          </Router>
        </Provider>
      </React.StrictMode>,
    );
    expect(tree).toMatchSnapshot();
  });
});
