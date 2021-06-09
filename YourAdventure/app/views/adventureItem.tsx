import { StyleSheet, View } from "react-native"
import React from 'react'
import { TouchableOpacity } from "react-native-gesture-handler"
import MenuConstants from "../constants/menu"
import { Adventue } from "../models/adventure"
import { PropertyView } from "./propertyView"
import Moment from 'moment'

export const AdventureItem = (item: Adventue, navigation: any) => (
    <View style={styles.container}>
        <TouchableOpacity onPress={() => navigation.navigate(MenuConstants.TripDetails, { item })} style={styles.itemContainer}>
            {PropertyView('', getPeriodString(item.start_time, item.end_time), undefined, undefined, styles.date)}
            {PropertyView('', item.name, undefined, undefined, styles.caption)}
            {PropertyView('', item.description, undefined, undefined, styles.description)}
        </TouchableOpacity>
    </View>
)

const getPeriodString = (from: Date, to?: Date): string => to == null 
    ? `${Moment(from).calendar()}` 
    : `${Moment(from).calendar()} - ${Moment(to).calendar()}`

const styles = StyleSheet.create(
    {
        container: {
            flexDirection: 'row', 
            marginTop: 20, 
            borderBottomColor:'black', 
            borderBottomWidth: 2,
            alignItems: 'center',
            flex: 1,
            justifyContent: 'center'
        },
        itemContainer: {
            alignSelf: 'center',
            justifyContent: 'center',
            alignItems: 'center'
        },
        date: {
            fontSize: 14,
            color:'red'
        },
        caption: {
            fontSize: 16,
            fontStyle: 'normal',
            fontWeight: 'bold'
        },
        description: {
            fontSize: 14
        }
    }
)