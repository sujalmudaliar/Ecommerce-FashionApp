import React, { useState } from 'react'
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native'
import { useAuth } from '../context/AuthContext'
import Toast from 'react-native-toast-message'

const SignupScreen = ({ navigation }) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const { signUp } = useAuth()

  const handleSignup = async () => {
    if (!name || !email || !password) {
      Toast.show({
        type: 'error',
        text1: 'Error',
        text2: 'Please fill in all fields',
      })
      return
    }

    if (password.length < 6) {
      Toast.show({
        type: 'error',
        text1: 'Error',
        text2: 'Password must be at least 6 characters',
      })
      return
    }

    setLoading(true)
    const { data, error } = await signUp(email, password, name)
    setLoading(false)

    if (error) {
      Toast.show({
        type: 'error',
        text1: 'Signup Failed',
        text2: error.message,
      })
    } else {
      Toast.show({
        type: 'success',
        text1: 'Signup Successful',
        text2: 'You can now login with your credentials',
      })
      navigation.pop('Login')
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create Account ✨</Text>
      <Text style={styles.subtitle}>Join the DripHouse community</Text>

      <TextInput
        style={styles.input}
        placeholder="Full Name"
        placeholderTextColor="#aaa"
        value={name}
        onChangeText={setName}
      />

      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#aaa"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#aaa"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
        color="#000"
      />

      <TouchableOpacity style={[styles.button, loading && styles.buttonDisabled]} onPress={handleSignup} disabled={loading}>
        <Text style={styles.buttonText}>{loading ? 'Signing up...' : 'Sign Up'}</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text style={styles.switchText}>
          Already have an account? <Text style={styles.switchLink}>Login</Text>
        </Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 25,
  },
  title: {
    fontSize: 32,
    fontWeight: '700',
    color: '#eb7474',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 16,
    color: '#eb7474',
    marginBottom: 40,
  },
  input: {
    width: '100%',
    backgroundColor: '#f8f8f8',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
  button: {
    width: '100%',
    backgroundColor: '#eb7474',
    padding: 15,
    borderRadius: 10,
    marginTop: 10,
    alignItems: 'center',
  },
  buttonDisabled: {
    opacity: 0.6,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
  switchText: {
    color: '#eb7474',
    marginTop: 20,
  },
  switchLink: {
    color: '#eb7474',
    fontWeight: '700',
    textDecorationLine: 'underline',
  },
});

export default SignupScreen;
