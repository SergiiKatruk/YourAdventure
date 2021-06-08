import React from 'react'
import { Text, View } from 'react-native'


export const PropertyView = (label: string, text: any) => {
    return (
        <View style={{alignItems: 'flex-start', flexDirection:'row'}}>
            <Text>{label} </Text>
            <Text>{text} </Text>
        </View>
    )
}