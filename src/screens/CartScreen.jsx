import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Image } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
import { SafeAreaView } from 'react-native-safe-area-context'
import Ionicons from 'react-native-vector-icons/Ionicons'
import CartCard from '../components/CartCard'
import { useCart } from '../context/CartContext'

const CartScreen = ({ navigation }) => {
  const { cartItems } = useCart();

  const subtotal = cartItems.reduce((sum, item) => sum + item.price, 0);
  const deliveryCharges = 2; // Fixed delivery charge
  const total = subtotal + deliveryCharges;

  return (
    <LinearGradient colors={['#FDF0F3', '#FFFBFC']} style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header Section */}
        <View>
          <SafeAreaView style={styles.headerContainer}>
            {/* Left Section - Back Icon */}
            <View style={styles.leftSection}>
              <TouchableOpacity 
                onPress={() => navigation.navigate("HOME")} 
                style={styles.iconContainer}
              >
                <Ionicons name="chevron-back" size={24} color="#eb7474" />
              </TouchableOpacity>
            </View>

            {/* Center Section - Cart Text */}
            <View style={styles.cartTextContainer}>
              <Text style={styles.myCart}>My Cart</Text>
            </View>

            {/* Right Section - User Icon */}
            <View style={styles.rightSection}>
              <Image style={styles.userIcon} source={require('../assets/userIcon.png')} />
            </View>
          </SafeAreaView>
        </View>

        {/* Cart Items */}
        {cartItems.map((item) => (
          <CartCard key={item.id} item={item} />
        ))}

        {/* Summary Section */}
        {cartItems.length > 0 && (
          <View style={styles.summaryContainer}>
            <View style={styles.summaryRow}>
              <Text style={styles.summaryText}>Subtotal:</Text>
              <Text style={styles.summaryText}>${subtotal.toFixed(2)}</Text>
            </View>
            <View style={styles.summaryRow}>
              <Text style={styles.summaryText}>Delivery Charges:</Text>
              <Text style={styles.summaryText}>${deliveryCharges.toFixed(2)}</Text>
            </View>
            <View style={[styles.summaryRow, styles.totalRow]}>
              <Text style={styles.totalText}>Total:</Text>
              <Text style={styles.totalText}>${total.toFixed(2)}</Text>
            </View>
            <TouchableOpacity style={styles.checkoutButton}>
              <Text style={styles.checkoutButtonText}>Checkout</Text>
            </TouchableOpacity>
          </View>
        )}
      </ScrollView>
    </LinearGradient>
  )
}

export default CartScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    marginBottom: 20,
  },
  leftSection: {
    width: 44,
    height: 44,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  rightSection: {
    width: 44,
    height: 44,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  iconContainer: {
    height: 44,
    width: 44,
    borderRadius: 22,
    justifyContent: 'center',
    alignItems: 'center',
  },
  userIcon: {
    width: 32,
    height: 32,
  },
  myCart: {
    fontSize: 28,
    fontWeight: '700',
    color: '#000',
  },
  cartTextContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  summaryContainer: {
    marginTop: 20,
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  summaryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  summaryText: {
    fontSize: 16,
    color: '#444',
  },
  totalRow: {
    borderTopWidth: 1,
    borderTopColor: '#eee',
    paddingTop: 10,
    marginTop: 10,
  },
  totalText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#eb7474',
  },
  checkoutButton: {
    backgroundColor: "#eb7474",
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  checkoutButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  }
})