import React from 'react';
import { Home }  from './app/views/home'
import { Contact } from './app/views/contact'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import MenuContants from './app/constants/menu'

const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator mode='modal' initialRouteName={MenuContants.Home}>
        <Stack.Screen name={MenuContants.Home} component={Home} />
        <Stack.Screen name={MenuContants.Contact} component={Contact} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
