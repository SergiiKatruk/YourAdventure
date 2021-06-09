import React, { useEffect, useState } from 'react'
import { Home }  from './app/views/home'
import { Contact } from './app/views/contact'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import MenuContants from './app/constants/menu'
import { Adventures } from './app/views/adventures'
import { TripDetails } from './app/views/tripDetails'
import { adventureStatus } from './app/views/adventureStatus'
import { Adventue } from './app/models/adventure'
import AsyncStorage from '@react-native-async-storage/async-storage'

const Stack = createStackNavigator()

export default function App() {
  const [currentAdventure, setCurrentAdventure] = useState<Adventue | undefined>(undefined)
  const refresh = () => AsyncStorage.getItem('currentAdventure').then(currentAdventureJson =>
    setCurrentAdventure(currentAdventureJson == null ? null : JSON.parse(currentAdventureJson))
  ).catch(err => console.log(err))
  useEffect(() => { refresh() }, [])    
  
  return (
    <NavigationContainer>
      <Stack.Navigator mode='modal' initialRouteName={MenuContants.Home}>
        <Stack.Screen name={MenuContants.Home} component={Home} 
        options={{
          headerRight: adventureStatus(currentAdventure)
        }}
        />
        <Stack.Screen name={MenuContants.Adventures} component={Adventures} 
        options={{
          headerRight: adventureStatus(currentAdventure)
        }}
        />
        <Stack.Screen name={MenuContants.TripDetails} component={TripDetails(setCurrentAdventure)} 
        options={{
          headerRight: adventureStatus(currentAdventure)
        }}
        />
        <Stack.Screen name={MenuContants.Contact} component={Contact} 
        options={{
          headerRight: adventureStatus(currentAdventure)
        }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
