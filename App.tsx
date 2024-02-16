import React from 'react';
import {LogBox} from 'react-native';
import {Provider} from 'react-redux';
import Navigation from './src/Navigation';
import {store} from './src/redux/store';

LogBox.ignoreAllLogs();
const App = () => {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
};

export default App;
