import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Header from '../components/Header'

const CartScreen = () => {
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.body}>
        <Text style={styles.text}>Cart Screen (placeholder)</Text>
      </View>
    </View>
  )
}

export default CartScreen

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  body: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  text: { fontSize: 16, color: '#333' }
})