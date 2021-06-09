import { useNavigation } from '@react-navigation/core'
import React from 'react'
import { Button, View } from 'react-native'
import MenuConstants from '../constants/menu'
import { Adventue } from '../models/adventure'

export const adventureStatus = (currentAdventure: Adventue | undefined) => () => {
    const navigation = useNavigation()
    
    return (<View> 
        { currentAdventure != null && ( 
    <Button
        onPress={() => navigation.navigate(MenuConstants.TripDetails, {item: currentAdventure})}
        title={currentAdventure.name}
        color="#c9783a"
    />)
    }
    { currentAdventure == null && (
    <Button
        onPress={() => navigation.navigate(MenuConstants.Adventures)}
        title="Chose adventuree"
        color="#00cc00"
    />)
    } 
    </View>)
}