import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Menu } from '../sections/menu'

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