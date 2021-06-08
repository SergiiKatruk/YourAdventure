import React from 'react'
import { Home }  from './app/views/home'
import { Contact } from './app/views/contact'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import MenuContants from './app/constants/menu'
import { Adventures } from './app/views/adventures'
import { TripDetails } from './app/views/tripDetails'
import { Button } from 'react-native'

const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator mode='modal' initialRouteName={MenuContants.Home}>
        <Stack.Screen name={MenuContants.Home} component={Home} 
        options={{
          headerRight: () => (
            <Button
              onPress={() => alert('Current adventure')}
              title="Adventure"
              color="#00cc00"
            />
          ),
        }}/>
        <Stack.Screen name={MenuContants.Adventures} component={Adventures} />
        <Stack.Screen name={MenuContants.TripDetails} component={TripDetails} />
        <Stack.Screen name={MenuContants.Contact} component={Contact} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
