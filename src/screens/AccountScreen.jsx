import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Alert, Image } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useAuth } from '../context/AuthContext'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import LinearGradient from 'react-native-linear-gradient'
import Toast from 'react-native-toast-message'
import Header from '../components/Header'

const AccountScreen = () => {
  const { user, signOut } = useAuth()

  const handleSignOut = async () => {
    Alert.alert(
      'Sign Out',
      'Are you sure you want to sign out?',
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Sign Out',
          style: 'destructive',
          onPress: async () => {
            await signOut()
            // Cart will be automatically cleared when user changes
          }
        }
      ]
    )
  }

  const handleOrders = () => {
    Toast.show({
      type: 'info',
      text1: 'Orders',
      text2: 'Orders feature coming soon!',
    })
  }

  const handleBuyAgain = () => {
    Toast.show({
      type: 'info',
      text1: 'Buy Again',
      text2: 'Buy Again feature coming soon!',
    })
  }

  const handleAccount = () => {
    Toast.show({
      type: 'info',
      text1: 'Account',
      text2: 'Account settings coming soon!',
    })
  }

  const handleLiked = () => {
    Toast.show({
      type: 'info',
      text1: 'Liked Items',
      text2: 'Liked items feature coming soon!',
    })
  }

  return (
    <LinearGradient colors={['#FDF0F3', '#FFFBFC']} style={styles.container}>
     <Header/>

      <View style={styles.body}>
        <View style={styles.welcomeSection}>
          <Text style={styles.welcomeTitle}>Welcome Back! 👋</Text>
          {/* <Text style={styles.userName}>{user?.user_metadata?.full_name || user?.email?.split('@')[0] || 'User'}</Text> */}
          <Text style={styles.userEmail}>{user?.email}</Text>
        </View>

        <View style={styles.menuGrid}>
          <TouchableOpacity style={styles.menuItem} onPress={handleOrders}>
            <MaterialCommunityIcons name="clipboard-list" size={32} color="#eb7474" />
            <Text style={styles.menuText}>Orders</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.menuItem} onPress={handleBuyAgain}>
            <MaterialCommunityIcons name="refresh" size={32} color="#eb7474" />
            <Text style={styles.menuText}>Buy Again</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.menuItem} onPress={handleAccount}>
            <MaterialCommunityIcons name="account-circle" size={32} color="#eb7474" />
            <Text style={styles.menuText}>Account</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.menuItem} onPress={handleLiked}>
            <MaterialCommunityIcons name="heart" size={32} color="#eb7474" />
            <Text style={styles.menuText}>Liked</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.signOutButton} onPress={handleSignOut}>
          <Text style={styles.signOutText}>Sign Out</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  )
}

export default AccountScreen

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: '#fff' 
  },
  // Header Styles (matching Header component)
  headerContainer: {
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
  centerSection: {
    flex: 1,
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
  // Body Styles
  body: { 
    flex: 1, 
    paddingHorizontal: 25, 
    paddingTop: 20 
  },
  welcomeSection: {
    alignItems: 'center',
    marginBottom: 40,
    paddingTop: 20,
  },
  welcomeTitle: {
    fontSize: 28,
    fontWeight: '700',
    color: '#eb7474',
    marginBottom: 15,
  },
  userName: {
    fontSize: 24,
    fontWeight: '600',
    color: '#000',
    marginBottom: 8,
  },
  userEmail: {
    fontSize: 16,
    color: '#333',
  },
  menuGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 40,
  },
  menuItem: {
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 20,
    alignItems: 'center',
    width: '48%',
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
    borderWidth: 1,
    borderColor: '#f0f0f0',
  },
  menuText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#eb7474',
    marginTop: 10,
    textAlign: 'center',
  },
  signOutButton: {
    backgroundColor: '#eb7474',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 25,
    alignItems: 'center',
    shadowColor: '#eb7474',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
    alignSelf: 'center',
  },
  signOutText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
})