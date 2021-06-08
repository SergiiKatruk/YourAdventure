import React from 'react'
import { ImageBackground, Text, View, StyleSheet } from 'react-native'
import { FbEvent } from '../models/fbEvent'

export const TripDetails = (args: { route: any, navigation: any}) => {
    const eventItem: FbEvent = args.route.params.item
    const image = { uri: eventItem.cover.source };
    return <View style={styles.container}>
        <ImageBackground source={image} style={styles.image}>
            <Text style={styles.text}>{eventItem.name}</Text>
        </ImageBackground>
        <View style={styles.detailContainer}>
            <Text style={styles.header}>Details</Text>
            <Text>Event by: {eventItem.parent_group?.name}</Text>
            <Text>Location: {eventItem.place?.location?.city}</Text>
            <Text>Tickets: {eventItem.ticket_uri}</Text>
            <Text>Going: {eventItem.attending_count}, Maybe: {eventItem.maybe_count}, Interesting: {eventItem.interested_count}</Text>
            <Text style={{marginTop: 10}}>{eventItem.description}</Text>
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
      }
  });