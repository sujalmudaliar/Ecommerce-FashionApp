import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Header from '../components/Header'

const ReorderScreen = () => {
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.body}>
        <Text style={styles.text}>Reorder Screen (placeholder)</Text>
      </View>
    </View>
  )
}

export default ReorderScreen

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  body: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  text: { fontSize: 16, color: '#333' }
})