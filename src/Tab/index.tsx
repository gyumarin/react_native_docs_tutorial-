import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Feed, King, Messages} from '~/components';

const Tab = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator>
      <Tab.Screen name="Feed" component={Feed} options={{headerShown: false}} />
      <Tab.Screen
        name="Messages"
        component={Messages}
        options={{headerShown: false}}
      />
      <Tab.Screen name="King" component={King} options={{headerShown: false}} />
    </Tab.Navigator>
  );
};

export default Tab;
