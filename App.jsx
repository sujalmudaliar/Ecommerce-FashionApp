import { StyleSheet } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { enableScreens } from 'react-native-screens'

enableScreens()
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import HomeStack from './src/screens/HomeStack'
import ReorderScreen from './src/screens/ReorderScreen'
import CartScreen from './src/screens/CartScreen'
import AccountScreen from './src/screens/AccountScreen'

const Tab = createBottomTabNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color }) => {
            const size = 34; // Increased size by 10
            let iconName;

            switch (route.name) {
              case 'HOME':
                iconName = focused ? 'home' : 'home-outline';
                break;
              case 'REORDER':
                iconName = focused ? 'history' : 'history';
                break;
              case 'CART':
                iconName = focused ? 'cart' : 'cart-outline';
                break;
              case 'ACCOUNT':
                iconName = focused ? 'account-circle' : 'account-circle-outline';
                break;
              default:
                iconName = 'circle';
            }

            return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#eb7474',
          tabBarInactiveTintColor: 'gray',
          tabBarStyle: {
            paddingBottom: 5,
            paddingTop: 5,
          }
        })}
      >
                <Tab.Screen 
          name="HOME" 
          component={HomeStack}
          options={{
            headerShown: false
          }} 
        />
        <Tab.Screen 
          name="REORDER" 
          component={ReorderScreen}
          options={{
            headerShown: false
          }} 
        />
        <Tab.Screen 
          name="CART" 
          component={CartScreen}
          options={{
            headerShown: false
          }} 
        />
        <Tab.Screen 
          name="ACCOUNT" 
          component={AccountScreen}
          options={{
            headerShown: false
          }} 
        />
      </Tab.Navigator>
       
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})