import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { useNavigation } from '@react-navigation/native'
const Header = ({isCart}) => {

  const navigation = useNavigation();
  return (
    <View>
      <SafeAreaView style={{ flexDirection: 'row', alignItems: 'center', }}>
        <TouchableOpacity onPress={()=> navigation.navigate ("HOME")} style={styles.menuIconContainer}>
          {
            isCart ? <Ionicons name="chevron-back" size={24} color="#eb7474" />
            :
            <Image style={styles.menu} source={require('../assets/menuIcon.png')} />
          }
        </TouchableOpacity>
        {
          isCart &&
          <View style={styles.cartTextContainer}>
            <Text style={styles.myCart}>My Cart</Text>
          </View>
        }

        <Image style={styles.userIcon} source={require('../assets/userIcon.png')} />

      </SafeAreaView>

    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  menu: {
    width: 24,
    height: 24,
  },
  userIcon: {
    width: 32,
    height: 32,
    position: 'absolute',
    right: 16,
    top: 70,
  },
  menuIconContainer: {
    height: 44,
    width: 44,
    borderRadius: 22,
    justifyContent: 'center',
    alignItems: 'center',
  },
  myCart:{
    fontSize: 28,
    fontWeight: '700',
  },
  cartTextContainer: {
    flex: 1,
    alignItems: 'center',
  }

})