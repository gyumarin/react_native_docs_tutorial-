import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Home, Profile, Settings} from '~/components';
import Tab from '~/Tab';

const Stack = createStackNavigator();

const NewStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Tab}
        options={{
          //navigation의 중첩된 코드를 해결 방법.
          headerShown: false,
        }}
      />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Settings" component={Settings} />
    </Stack.Navigator>
  );
};

export default NewStack;
