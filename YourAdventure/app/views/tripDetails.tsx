import AsyncStorage from '@react-native-async-storage/async-storage'
import React, { useEffect, useState } from 'react'
import { ImageBackground, Text, View, StyleSheet } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Adventue } from '../models/adventure'
import { getPeriodString } from '../utils/stringFomatters'
import { PropertyView } from './propertyView'
import * as Location from 'expo-location'
import { CreateParticipant, LogLocation } from '../services/participant-service'
import openMap from 'react-native-open-maps'

export const TripDetails= (
    setCurrentAdventure: React.Dispatch<Adventue | undefined>,
    setCurrentGeoLocationWatchId: React.Dispatch<number | undefined>,) => (args: { route: any, navigation: any}) => {
    const eventItem: Adventue = args.route.params.item
    const image = { uri: eventItem.cover?.source }
    const [isStrated, setIsStarted] = useState(true)
    const [currentWathcID, setCurrentWathcID] = useState<number | undefined>(undefined)
    const startAdventure = async () => {
        try {
            await AsyncStorage.setItem('currentAdventure', JSON.stringify(eventItem)).then(() => {
                setIsStarted(true)
                setCurrentAdventure(eventItem)
                CreateParticipant(eventItem)
                Location.watchPositionAsync({accuracy: Location.LocationAccuracy.Balanced}, loc => {
                    LogLocation(loc.coords.latitude, loc.coords.longitude)
                    console.log(loc)

                })
            })
          } catch(e) {
          }
    }

    const finishAdventure = async () => {
        try {
            await AsyncStorage.removeItem('currentAdventure')
            setIsStarted(false)
            setCurrentAdventure(undefined)
            setCurrentGeoLocationWatchId(undefined)
            if(currentWathcID)
            {
            }
          } catch(e) {
          }
    }

    useEffect(() => {
        AsyncStorage.getItem('currentAdventure').then(value => setIsStarted(value != null && JSON.parse(value).id === eventItem.id))
    }, [args])

    return <View style={styles.container}>
        <ImageBackground source={image} style={styles.image}>
            <Text style={styles.text}>{eventItem.name}</Text>
        </ImageBackground>
        <View style={styles.detailContainer}>
            <Text style={styles.header}>Details</Text>
            <Text>{PropertyView('', getPeriodString(eventItem.start_time, eventItem.end_time), undefined, undefined, styles.date)}</Text>
            <Text>Location: {eventItem.place?.location?.city}</Text>
            <Text>Event by: {eventItem.parent_group?.name}</Text>
            <Text>Tickets: {eventItem.ticket_uri}</Text>
            <Text>Going: {eventItem.attending_count}, Maybe: {eventItem.maybe_count}, Interesting: {eventItem.interested_count}</Text>
            <Text style={{marginTop: 10}}>{eventItem.description}</Text>
            <TouchableOpacity onPress={() => {openMap({latitude: eventItem.place.location.latitude, longitude: eventItem.place.location.longitude})}}>
                <Text>Open map</Text>
            </TouchableOpacity>
            <View style={{flexDirection: 'row'}}>
            {
            !isStrated && (
            <TouchableOpacity onPress={() => startAdventure()}>
                <Text>Start</Text>
            </TouchableOpacity>)
            }
            {
            isStrated && (
            <TouchableOpacity onPress={finishAdventure}>
                <Text>Finish</Text>
            </TouchableOpacity>)
            }
            </View>
        </View>
    </View>
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: "column"
    },
    image: {
      flex: 1,
      resizeMode: "cover",
      justifyContent: "center"
    },
    text: {
      color: "white",
      fontSize: 42,
      fontWeight: "bold",
      textAlign: "center",
      alignSelf: 'center',
      backgroundColor: "#000000a0",
      flexDirection: 'column'
    },
    detailContainer:{
        flex: 2,
        backgroundColor:'#dcd7d1',
        borderWidth: 1,
        borderColor: '#D0cbc5'
      },
      header:{
          fontSize: 20,
          fontWeight: 'bold'
      },
      date: {
          fontSize: 14,
          color:'red'
      }
  });