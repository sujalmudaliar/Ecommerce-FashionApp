import { StyleSheet, Text, View, Image } from 'react-native'
import React, { useEffect } from 'react'
import LinearGradient from 'react-native-linear-gradient'
import { useAuth } from '../context/AuthContext'

const SplashScreen = ({ navigation }) => {
  const { user, loading } = useAuth()

  useEffect(() => {
    const timer = setTimeout(() => {
      if (user) {
        navigation.replace('MainApp')
      } else {
        navigation.replace('Auth')
      }
    }, 2500) // 2.5 seconds delay

    return () => clearTimeout(timer)
  }, [navigation, user, loading])

  return (
    <LinearGradient colors={['#FDF0F3', '#FFFBFC']} style={styles.container}>
      <View style={styles.content}>
        <Image source={require('../assets/spalsh.png')} style={styles.logo} />
        <Text style={styles.title}>Drip House</Text>
        <Text style={styles.subtitle}> Get That Drip On!</Text>
      </View>
    </LinearGradient>
  )
}

export default SplashScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    alignItems: 'center',
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#eb7474',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    color: '#666',
  },
})
