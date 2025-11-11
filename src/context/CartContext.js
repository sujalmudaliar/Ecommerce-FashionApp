import React, { createContext, useContext, useState, useEffect } from 'react';
import { useAuth } from './AuthContext';
import AsyncStorage from '@react-native-async-storage/async-storage';

const CartContext = createContext();

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const { user } = useAuth();

  // Load cart items from AsyncStorage when user changes
  useEffect(() => {
    const loadCartItems = async () => {
      if (user) {
        try {
          const storedCart = await AsyncStorage.getItem(`cart_${user.id}`);
          if (storedCart) {
            setCartItems(JSON.parse(storedCart));
          } else {
            setCartItems([]);
          }
        } catch (error) {
          console.error('Error loading cart items:', error);
          setCartItems([]);
        }
      } else {
        setCartItems([]);
      }
    };

    loadCartItems();
  }, [user]);

  // Save cart items to AsyncStorage whenever cartItems change
  useEffect(() => {
    const saveCartItems = async () => {
      if (user && cartItems.length >= 0) {
        try {
          await AsyncStorage.setItem(`cart_${user.id}`, JSON.stringify(cartItems));
        } catch (error) {
          console.error('Error saving cart items:', error);
        }
      }
    };

    saveCartItems();
  }, [cartItems, user]);

  const addToCart = (item, selectedSize, selectedColor) => {
    const newItem = {
      ...item,
      selectedSize,
      selectedColor,
      id: `${item.id}-${selectedSize}-${selectedColor}`, // unique id for cart
    };
    setCartItems(prev => [...prev, newItem]);
  };

  const removeFromCart = (id) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};
