import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import React from 'react';
import { Provider } from 'react-redux';
// import TestRenderer from "react-test-renderer";
import store from '../../redux/configureStore';
import Navigation from '../Navbar/Navbar';

describe('Navigation test', () => {
  test('snapshot', () => {
    const tree = render(
      <React.StrictMode>
        <Provider store={store}>
          <Router>
            <Navigation />
          </Router>
        </Provider>
      </React.StrictMode>,
    );
    expect(tree).toMatchSnapshot();
  });
});
