import { StyleSheet, Text, View,Image, TouchableOpacity } from 'react-native'
import React from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { useCart } from '../context/CartContext'

const CartCard = ({ item }) => {
  const { removeFromCart } = useCart();
  return (
    <View style={styles.container}>
      <Image source={item.image} style={styles.coverImage}></Image>

      <View style={styles.cardContent}>
        <Text> {item.title}</Text>
        <Text>Size: {item.selectedSize}</Text>
        <View style={styles.colorContainer}>
          <Text>Color: </Text>
          <View style={[styles.colorCircle, { backgroundColor: item.selectedColor }]} />
        </View>
        <Text> ${item.price}</Text>
      </View>
      <TouchableOpacity onPress={() => removeFromCart(item.id)} style={styles.removeButton}>
        <MaterialCommunityIcons name="delete" size={24} color="#eb7474" />
      </TouchableOpacity>
    </View>
  )
}

export default CartCard

const styles = StyleSheet.create({
  container:{
   flexDirection:'row',
    marginVertical:10,
  },
  coverImage:{
    width: 100,
    height: 135,
    borderRadius: 20,
  },
  cardContent:{
    flex:1,
    marginLeft:15,
    justifyContent:'center',

  },
  removeButton: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  colorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  colorCircle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    marginLeft: 5,
  }
})
