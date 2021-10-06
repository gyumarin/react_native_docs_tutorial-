import React from 'react';
import 'react-native-gesture-handler';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';
import {Feed, Home, Profile, Settings} from '~/components';
import Tab from '~/Tab';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

function Root() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={Tab} />
      <Drawer.Screen name="Profile" component={Profile} />
      <Drawer.Screen name="Settings" component={Settings} />
    </Drawer.Navigator>
  );
}

const NestedDrawer = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Root"
        component={Root}
        options={{headerShown: false}}
      />
      <Stack.Screen name="Feed" component={Feed} />
    </Stack.Navigator>
  );
};

export default NestedDrawer;
