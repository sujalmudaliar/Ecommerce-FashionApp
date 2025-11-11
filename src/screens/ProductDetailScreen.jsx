import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { useRoute } from '@react-navigation/native'
import LinearGradient from 'react-native-linear-gradient'
import Header from '../components/Header'
import { useCart } from '../context/CartContext'
import Toast from 'react-native-toast-message'

// const ProductDetailScreen = ({ navigation }) => {
//   const route = useRoute()
//   const { item } = route.params
const sizes = ['S', 'M', 'L', 'XL']
const colorArray = ["#91A1B0", "#e35252ff", "#061743ff", "#ebb27dff", "#26e787f7"]
const ProductDetailScreen = () => {
  const route = useRoute();
  const { item } = route.params;
  const { addToCart } = useCart();

  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);
  return (
    <LinearGradient colors={['#FDF0F3', '#FFFBFC']} style={styles.contentContainer}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Product details content will go here */}
        <View style={styles.headerContainer}>
          <Header />
        </View>
        <Image style={styles.coverImage} source={item.image}></Image>
        <View style={styles.descriptionContainer}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={[styles.title, styles.price]}>${item.price}</Text>
        </View>
        {/*Size container*/}

        <Text style={[styles.title, styles.sizeText]}>
          Size
        </Text>
        <View style={styles.sizeContainer}>
          {
            sizes.map((size) => {
              return (
                <TouchableOpacity style={[styles.sizeValueContainer, selectedSize == size && styles.selectedSize]} onPress={() => {
                  setSelectedSize(size)
                }}>
                  <Text style={[styles.sizeValue, selectedSize == size && { color: '#eb7474' }]}> {size} </Text>
                </TouchableOpacity>

              )
            })
          }
        </View>
        <Text style={[styles.title, styles.colorText]} >Colors</Text>
        <View style={styles.colorContainer}>

          {
            colorArray.map((color) => {
              return (
                <TouchableOpacity style={[styles.sizeValueContainer, { backgroundColor: color }, selectedColor == color && styles.selectedColor]} onPress={() => {
                  setSelectedColor(color)
                }}>
                </TouchableOpacity>
              )
            })
          }
        </View>
        {/* Add to cart button */}
        <TouchableOpacity style={styles.button} onPress={() => {
          if (selectedSize && selectedColor) {
            addToCart(item, selectedSize, selectedColor);
            Toast.show({
              type: 'success',
              text1: 'Added to Cart!',
              text2: `${item.title} (${selectedSize}) added successfully.`,
              position: 'bottom',
              visibilityTime: 3000,
            });
          } else {
            Toast.show({
              type: 'error',
              text1: 'Selection Required',
              text2: 'Please select both size and color.',
              position: 'bottom',
              visibilityTime: 3000,
            });
          }
        }}>
          <Text style={styles.buttonText}> Add to Cart </Text>
        </TouchableOpacity >
      </ScrollView>
    </LinearGradient>



  )
}

export default ProductDetailScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentContainer: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 8,
  },
  coverImage: {
    width: '100%',
    height: 430,
    resizeMode: 'cover',
  },
  descriptionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginVertical: 20
  },

  title: {
    fontSize: 20,
    color: '#444444',
    fontWeight: '500'
  },

  price: {
    color: '#4D4C4C'
  },
  sizeText: {
    marginHorizontal: 20
  },
  sizeContainer: {
    flexDirection: 'row',

    marginHorizontal: 20,
    marginVertical: 10
  },

  sizeValue: {
    fontSize: 18,
    color: '#777777',
    fontWeight: 600
  },

  sizeValueContainer: {
    height: 36,
    width: 36,
    borderRadius: 18,
    backgroundColor: "#ffffffff",
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#fcfcfcff',
    marginHorizontal: 10,
  },
  selectedSize: {
    borderWidth: 2,
    borderColor: '#eb7474',
  },
  selectedColor: {
    borderWidth: 2,
    borderColor: '#eb7474',
  },
  colorText: {
    marginHorizontal: 20,
    marginTop: 10
  },
  colorContainer: {
    flexDirection: 'row',
    marginHorizontal: 20,
    marginVertical: 10
  },
  button: {
    backgroundColor: "#eb7474",
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 20,
    marginVertical: 20,
  },

  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  }
})
