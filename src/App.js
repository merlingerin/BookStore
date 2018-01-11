import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/index';

import Layout from './components/Layout';

const App = () => (
  <Provider store={store}>
    <Router>
      <Route path="/" component={Layout} />
    </Router>
  </Provider>
)

export default App;
