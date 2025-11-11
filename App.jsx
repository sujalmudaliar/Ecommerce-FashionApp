import { StyleSheet } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { enableScreens } from 'react-native-screens'

enableScreens()
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Homescreen from './src/screens/Homescreen'
import CartScreen from './src/screens/CartScreen'
import AccountScreen from './src/screens/AccountScreen'
import ProductDetailScreen from './src/screens/ProductDetailScreen'
import SplashScreen from './src/screens/SplashScreen'
import LoginScreen from './src/screens/LoginScreen'
import SignupScreen from './src/screens/SignupScreen'
import { CartProvider } from './src/context/CartContext'
import { AuthProvider, useAuth } from './src/context/AuthContext'
import Toast from 'react-native-toast-message'

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator initialRouteName="Homescreen">
      <Stack.Screen name="Homescreen" component={Homescreen} options={{ headerShown: false }} />
      <Stack.Screen name="ProductDetail" component={ProductDetailScreen} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
};

const MainApp = () => {
  return (
    <Tab.Navigator
      initialRouteName="HOME"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color }) => {
          const size = 34; // Increased size by 10
          let iconName;

          switch (route.name) {
            case 'HOME':
              iconName = focused ? 'home' : 'home-outline';
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
  );
};

const AuthNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Signup" component={SignupScreen} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
};

const AppNavigator = () => {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Splash" component={SplashScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
    );
  }

  return user ? (
    <Stack.Navigator>
      <Stack.Screen name="MainApp" component={MainApp} options={{ headerShown: false }} />
    </Stack.Navigator>
  ) : (
    <Stack.Navigator initialRouteName="Splash">
      <Stack.Screen name="Splash" component={SplashScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Auth" component={AuthNavigator} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
};

const App = () => {
  return (
    <AuthProvider>
      <CartProvider>
        <NavigationContainer>
          <AppNavigator />
        </NavigationContainer>
        <Toast />
      </CartProvider>
    </AuthProvider>
  )
}

export default App

const styles = StyleSheet.create({})
