import React from 'react'
import { useState } from 'react'
import {StyleSheet, Text, View} from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useFocusEffect } from '@react-navigation/core'

export const Header = (props: any) => {
    const isLoggedInF = () => AsyncStorage.getItem("@userName").then(v => {
        setUserName(String(v))
        v == undefined ? setisLoggedIn(false) : setisLoggedIn(true)
    })
    const [isLoggedIn, setisLoggedIn] = useState(false)
    const [userName, setUserName] = useState('')
    useFocusEffect(() => {
        isLoggedInF()
    })
    const isLogged = () => isLoggedIn ? userName : props.message
    
    let Toggleuser = () => {
        isLoggedIn ?
        AsyncStorage.removeItem("@userName").then(() => isLoggedInF()) : AsyncStorage.setItem("@userName", 'someValue').then(() => isLoggedInF())
    }

    return(
        <View style={styles.headStyle}>
            <Text style={styles.headerText} onPress={() => Toggleuser()}>{isLogged()}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    headerText: {
        textAlign: 'right',
        color: '#ffffff',
        fontSize: 20,
        alignSelf: 'flex-end'
    },
    headStyle: {
        paddingBottom: 10,
        paddingRight: 10,
        paddingTop: 30,
        backgroundColor: '#35605a',
        flex: 1
    }
})