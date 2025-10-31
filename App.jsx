import { StyleSheet } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Homescreen from './src/screens/Homescreen'

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
          tabBarActiveTintColor: '#e83d0eff',
          tabBarInactiveTintColor: 'gray',
          tabBarStyle: {
            paddingBottom: 5,
            paddingTop: 5,
          }
        })}
      >
                <Tab.Screen 
          name="HOME" 
          component={Homescreen}
          options={{
            headerShown: false
          }} 
        />
        <Tab.Screen 
          name="REORDER" 
          component={Homescreen}
          options={{
            headerShown: false
          }} 
        />
        <Tab.Screen 
          name="CART" 
          component={Homescreen}
          options={{
            headerShown: false
          }} 
        />
        <Tab.Screen 
          name="ACCOUNT" 
          component={Homescreen}
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