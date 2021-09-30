import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import Navigation from './Navigation';

const Stack = createStackNavigator();

const App = () => {
  return <Navigation />;
};

export default App;
