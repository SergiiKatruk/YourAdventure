import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Header } from '../sections/header'
import { Menu } from '../sections/menu'
import { adventureStatus } from './adventureStatus'

export const Home = (args: {navigation: any}) => (
    <View style={styles.container}>
      <Menu navigation={args.navigation}/>
    </View>
  )

const styles = StyleSheet.create({
    container:{
        flex: 1
    }
})