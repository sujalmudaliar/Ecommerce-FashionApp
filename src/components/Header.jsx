import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const Header = () => {
  return (
    <View>
      <SafeAreaView style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', }}>
        <View style={styles.menuIconContainer}>
          <View styles={styles.userIconContainer}>
            <Image style={styles.menu} source={require('../assets/menuIcon.png')} />
          </View>
        </View>


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
    marginLeft: 16,
    marginTop: 16,
  },
  userIcon: {
    width: 32,
    height: 32,
    position: 'absolute',
    right: 16,
    top: 45,
  },
  menuIconContainer: {
    backgroundColor: '#fff',
    height: 44,
    width: 44,
    borderRadius: 22,
    justifyContent: 'center',
    alignItems: 'center',
  }

})