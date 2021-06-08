import React from 'react'
import { Text, TextStyle, View, ViewStyle } from 'react-native'


export const PropertyView = (label: string, text: any, style?: ViewStyle, labelStyle?: TextStyle, valueStyle?: TextStyle) => {
    var viewStyle = style ?? {alignItems: 'flex-start', flexDirection:'row'}
    return (
        <View style={viewStyle}>
            <Text style={labelStyle}>{label} </Text>
            <Text style={valueStyle}>{text} </Text>
        </View>
    )
}