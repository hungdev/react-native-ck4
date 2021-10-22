import React, { useState } from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import styles from './LoginStyles'

export default function Login({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onChangeMail = (val) => setEmail(val)
  const onChangePass = (val) => setPassword(val)

  const onSignIn = () => navigation.navigate('ProductList')

  return (
    <View style={{ padding: 20 }}>
      {/* <Text style={styles.red}>Login</Text> */}
      <Text style={{ textAlign: 'center' }}>Profile</Text>
      <Text style={{ marginTop: 50 }}>*Email Address</Text>
      <TextInput
        style={{ height: 45, width: '100%', borderWidth: 1 }}
        onChangeText={onChangeMail}
        value={email}
      />
      <Text style={{ marginTop: 50 }}>*Password</Text>
      <TextInput
        style={{ height: 45, width: '100%', borderWidth: 1 }}
        onChangeText={onChangePass}
        value={password}
        secureTextEntry
      />
      <TouchableOpacity style={{ marginTop: 30 }}>
        <Text style={{ fontWeight: 'bold', fontSize: 14 }}>Forgot Password?</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={onSignIn}
        style={{
          marginTop: 30, backgroundColor: '#fcde19',
          padding: 15,
          justifyContent: 'center',
          alignItems: 'center'
        }}>
        <Text style={{ fontWeight: 'bold', fontSize: 14 }}>Sign In</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          marginTop: 15, backgroundColor: '#fff',
          borderWidth: 1, padding: 15
        }}>
        <Text style={{ fontWeight: 'bold', fontSize: 14, textAlign: 'center' }}>Join Now</Text>
      </TouchableOpacity>
    </View>
  )
}

