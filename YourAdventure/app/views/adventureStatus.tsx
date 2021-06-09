import AsyncStorage from '@react-native-async-storage/async-storage'
import { useFocusEffect, useNavigation } from '@react-navigation/core'
import React, { useEffect, useState } from 'react'
import { Button, View } from 'react-native'
import MenuConstants from '../constants/menu'
import { FbEvent } from '../models/fbEvent'

export const adventureStatus = (currentAdventure: FbEvent | undefined) => () => {
    const navigation = useNavigation()
    
    return (<View> 
        { currentAdventure != null && ( 
    <Button
        onPress={() => navigation.navigate(MenuConstants.TripDetails, {item: currentAdventure})}
        title={currentAdventure.name}
        color="#00cc00"
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