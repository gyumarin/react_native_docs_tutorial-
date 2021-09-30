import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Contacts from '~/Screens/Contacts';
import ContactInput from '~/Screens/ContactInput';

const ContactsNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HOME"
        component={Contacts}
        options={{
          title: 'HOME',
          // headerTransparent: true,
          headerTintColor: '#4c9ce3',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
      <Stack.Screen
        name="ADD"
        component={ContactInput}
        options={{
          title: 'ADD',
          headerTransparent: true,
          headerTintColor: '#4c9ce3',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
      <Stack.Screen
        name="UPDATE"
        component={ContactInput}
        options={{
          title: 'UPDATE',
          headerTransparent: true,
          headerTintColor: '#4c9ce3',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
    </Stack.Navigator>
  );
};

const Stack = createStackNavigator();

export default () => {
  return <NavigationContainer>{<ContactsNavigator />}</NavigationContainer>;
};
