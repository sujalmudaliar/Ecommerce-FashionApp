import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native'
import LinearGradient from 'react-native-linear-gradient'

const ProductDetailScreen = ({ navigation }) => {
  const route = useRoute()
  const { item } = route.params

  return (
    <LinearGradient colors={['#FDF0F3', '#FFFBFC']} style={styles.container}>
      <Text>{item.title}</Text>
      <Text>{item.price}</Text>
    </LinearGradient>
  )
}

export default ProductDetailScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
