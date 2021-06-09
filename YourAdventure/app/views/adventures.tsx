import React, { useEffect, useState } from 'react'
import { Text, View } from 'react-native'
import { Adventue } from '../models/adventure'
import { useNavigation } from '@react-navigation/core'
import { FlatList } from 'react-native-gesture-handler'
import { AdventureItem } from './adventureItem'

export const Adventures = () => {
    const [eventsList, setAdventuresList] = useState(new Array<Adventue>())
    const [isLoading, setIsLoading] = useState(true)
    const navigation = useNavigation()
    const refresh = () => 
    fetch("http://ws525:5000/api/Events")
    .then(response => response.json())
    .then(jsonObj => {
        setAdventuresList(Array.from<Adventue>(jsonObj))
        setIsLoading(false)
    }
    ).catch(er => console.error(er))

    useEffect(() => {refresh()}, [])

    const NoAdventures = () => (<Text style={{ color: '#FF0000' }}>No adventures are found!</Text>)
    
    
    return (<View>
        {
            isLoading && (
                <Text>Loading</Text>
            )
        }
        {
            !isLoading && (
                <View>
                    <FlatList
                        data={eventsList}
                        renderItem={({ item }) => AdventureItem(item, navigation)}
                        keyExtractor={item => item.id.toString()}
                        ListEmptyComponent={NoAdventures()}
                    />
                </View>
            )
        }
    </View>)
}