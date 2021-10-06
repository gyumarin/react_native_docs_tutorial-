import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import StackNavigation from '~/StackNavigation';
// import NewStack from '~/NewStack';
import 'react-native-gesture-handler';
import NestedDrawer from '~/NestedDrawer';

const App = () => {
  return (
    <NavigationContainer>
      <StackNavigation />
      {/* <NewStack /> */}
      {/* <NestedDrawer /> */}
    </NavigationContainer>
  );
};

export default App;
