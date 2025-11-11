import React, { createContext, useContext, useEffect, useState } from 'react'
import { Linking } from 'react-native'
import supabase from '../services/supabase'

const AuthContext = createContext()

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const getInitialSession = async () => {
      const { data: { session } } = await supabase.auth.getSession()
      setUser(session?.user ?? null)
      setLoading(false)
    }

    getInitialSession()

    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        const newUser = session?.user ?? null
        setUser(newUser)
        setLoading(false)

        // Navigate based on auth state change
        if (newUser && !loading) {
          // User logged in - navigation will be handled by AppNavigator
        }
      }
    )

    // Handle deep links for email verification
    const handleDeepLink = async (event) => {
      const url = event.url
      if (url.includes('driphouse://auth/callback')) {
        // Handle the auth callback
        const { data, error } = await supabase.auth.getSession()
        if (data.session && !error) {
          setUser(data.session.user)
          setLoading(false)
        }
      }
    }

    // Listen for deep link events
    const linkingSubscription = Linking.addEventListener('url', handleDeepLink)

    return () => {
      linkingSubscription?.remove()
      subscription.unsubscribe()
    }
  }, [])

  const signUp = async (email, password, fullName) => {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          full_name: fullName,
        }
      }
    })
    return { data, error }
  }

  const signIn = async (email, password) => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })
    return { data, error }
  }

  const signOut = async () => {
    const { error } = await supabase.auth.signOut()
    return { error }
  }

  const clearUserCart = async () => {
    if (user) {
      try {
        const AsyncStorage = require('@react-native-async-storage/async-storage')
        await AsyncStorage.removeItem(`cart_${user.id}`)
      } catch (error) {
        console.error('Error clearing user cart:', error)
      }
    }
  }

  const value = {
    user,
    loading,
    signUp,
    signIn,
    signOut,
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}
