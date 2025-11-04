import { StyleSheet, Text, View, Image, Dimensions, TouchableOpacity } from 'react-native'
import React from 'react'
import { getImage } from '../services/productData'

const { width } = Dimensions.get('window');
const cardWidth = (width - 10) / 2; // Account for container padding and gap

const ProductCard = ({ image, imageName, title, price }) => {
  let imageSource;
  try {
    imageSource = image || (imageName ? getImage(imageName) : require('../assets/buisnessWoman.jpg'));
  } catch (error) {
    console.error('Error loading image:', error);
    imageSource = require('../assets/buisnessWoman.jpg');
  }

  return (
    <TouchableOpacity 
      style={styles.container} 
      activeOpacity={0.7}
      onPress={() => {}}
    >
      <Image 
        source={imageSource} 
        style={styles.image} 
        resizeMode="cover"
      />
      <View style={styles.info}>
        <Text style={styles.title} numberOfLines={1}>{title}</Text>
        <Text style={styles.price}>{price}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default ProductCard

const styles = StyleSheet.create({
  container: {
    
    width: cardWidth,
    backgroundColor: '#fff',
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 3,
    elevation: 2,
    overflow: 'hidden',
    transform: [{ scale: 1 }], // This helps with smoother touch animation
  },
  image: {
    width: '100%',
    height: cardWidth * 1.2,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    backgroundColor: '#f5f5f5', // Light gray background for loading state
  },
  info: {
    padding: 10,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 14,
    fontWeight: '500',
    color: '#222',
    marginBottom: 4,
  },
  price: {
    fontSize: 16,
    fontWeight: '600',
    color: '#eb7474',
  },
})