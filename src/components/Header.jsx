import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { useNavigation } from '@react-navigation/native'

const Header = ({ isCart }) => {
  const navigation = useNavigation()
  
  return (
    <View>
      <SafeAreaView style={styles.container}>
        {/* Left Section - Menu/Back Icon */}
        <View style={styles.leftSection}>
          <TouchableOpacity 
            onPress={() => navigation.navigate("HOME")} 
            style={styles.menuIconContainer}
          >
            {isCart ? (
              <Ionicons name="chevron-back" size={24} color="#eb7474" />
            ) : (
              <Image style={styles.menu} source={require('../assets/menuIcon.png')} />
            )}
          </TouchableOpacity>
        </View>

        {/* Center Section - Cart Text */}
        {isCart && (
          <View style={styles.cartTextContainer}>
            <Text style={styles.myCart}>My Cart</Text>
          </View>
        )}

        {/* Right Section - User Icon */}
        <View style={styles.rightSection}>
          <Image style={styles.userIcon} source={require('../assets/userIcon.png')} />
        </View>
      </SafeAreaView>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
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
  menu: {
    width: 24,
    height: 24,
  },
  userIcon: {
    width: 32,
    height: 32,
  },
  menuIconContainer: {
    height: 44,
    width: 44,
    borderRadius: 22,
    justifyContent: 'center',
    alignItems: 'center',
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
  }
})