import React, { useEffect, useState } from 'react'
import { Home }  from './app/views/home'
import { Contact } from './app/views/contact'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
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
  
  const Drawer = createDrawerNavigator()

  return (
    <NavigationContainer>
      <Drawer.Navigator 
        initialRouteName={MenuContants.Adventures} 
        screenOptions={{
          headerRight: adventureStatus(currentAdventure),
          headerShown: true
        }}
        drawerContent={(props) => {
          const filteredProps = {
            ...props,
            state: {
              ...props.state,
              routeNames: props.state.routeNames.filter(
                (routeName) => {
                  routeName !== MenuContants.TripDetails || (routeName == MenuContants.TripDetails && currentAdventure != undefined)
                }
              ),
              routes: props.state.routes.filter(
                (route) =>
                  route.name !== MenuContants.TripDetails || (route.name == MenuContants.TripDetails && currentAdventure != undefined)
              ),
            },
          };
          return (
            <DrawerContentScrollView {...filteredProps}>
              <DrawerItemList {...filteredProps} />
            </DrawerContentScrollView>
          );
        }}>
        <Drawer.Screen name={MenuContants.Home} component={Home} />
        <Drawer.Screen name={MenuContants.Adventures} component={Adventures} />
        <Drawer.Screen name={MenuContants.TripDetails} component={TripDetails(setCurrentAdventure, setCurrentGeoLocationWatchId)} />
        <Drawer.Screen name={MenuContants.Contact} component={Contact} />
      </Drawer.Navigator>
    </NavigationContainer>
  )
}
