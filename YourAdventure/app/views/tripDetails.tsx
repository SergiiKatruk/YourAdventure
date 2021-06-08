import React from 'react'
import { ImageBackground, Text, View, StyleSheet } from 'react-native'
import { FbEvent } from '../models/fbEvent'

export const TripDetails = (args: { route: any, navigation: any}) => {
    const eventItem: FbEvent = args.route.params.item
    const image = { uri: eventItem.cover.source };
    return <View style={styles.container}>
        <ImageBackground source={image} style={styles.image}>
            <Text style={styles.text}>{eventItem.description}</Text>
        </ImageBackground>
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
      backgroundColor: "#000000a0"
    }
  });