import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {
  CreatePostScreen,
  DetailScreen,
  HomeScreen,
  LogTitle,
  ProfileScreen,
} from '~/components';

const Stack = createStackNavigator();

const StackNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'My home',
          headerStyle: {
            backgroundColor: '#f4511e',
            height: 120,
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerTitle: (props: any) => <LogTitle {...props} />,
        }}
      />
      <Stack.Screen name="Detail" component={DetailScreen} />
      <Stack.Screen name="CreatePost" component={CreatePostScreen} />
      <Stack.Screen
        name="Profile"
        component={ProfileScreen}
        options={({route}: any) => ({title: route.params.name})}
      />
    </Stack.Navigator>
  );
};

export default StackNavigation;
