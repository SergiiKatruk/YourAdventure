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
import * as Location from 'expo-location'
import AsyncStorage from '@react-native-async-storage/async-storage'

const Stack = createStackNavigator()

export default function App() {
  const [currentAdventure, setCurrentAdventure] = useState<Adventue | undefined>(undefined)
  const [currentGeoLocationWatchId, setCurrentGeoLocationWatchId] = useState<string | undefined>(undefined)
  const refresh = () => {
    AsyncStorage.getItem('currentAdventure').then(currentAdventureJson =>
    setCurrentAdventure(currentAdventureJson == null ? null : JSON.parse(currentAdventureJson))
    ).catch(err => console.log(err))
    

}
  useEffect(() => { 
    refresh() 
    return function cleanup() {
      if(currentGeoLocationWatchId)
        Location.stopLocationUpdatesAsync(currentGeoLocationWatchId)
  }
  }, [])    
  
  return (
    <NavigationContainer>
      <Stack.Navigator mode='modal' initialRouteName={MenuContants.Home} 
        screenOptions={{headerRight: adventureStatus(currentAdventure)}}>
        <Stack.Screen name={MenuContants.Home} component={Home} />
        <Stack.Screen name={MenuContants.Adventures} component={Adventures} />
        <Stack.Screen name={MenuContants.TripDetails} component={TripDetails(setCurrentAdventure, setCurrentGeoLocationWatchId)} />
        <Stack.Screen name={MenuContants.Contact} component={Contact} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
