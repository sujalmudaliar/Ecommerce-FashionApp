import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import LinearGradient from 'react-native-linear-gradient'
import Header from '../components/Header'

const Homescreen = () => {
  return (
    <LinearGradient colors={['#FDF0F3', "#FFFBFC"]} style={styles.container}>
      <Header />
    </LinearGradient>
   
    
  )
}

export default Homescreen

const styles = StyleSheet.create({

  container: {
    flex: 1
  }
})