import { useNavigation } from '@react-navigation/core'
import React, { useEffect, useState } from 'react'
import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View,Image } from 'react-native'
import { auth } from '../firebase'

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignupScreen from './SignupScreen'

const ForgotPassword = () => {
  const [email, setEmail] = useState('')

  const navigation = useNavigation()

const forgotPassword = (email) => {
    auth
    sendPasswordResetEmail(auth, email, null)
        .then(() => {
            alert("Reset email sent");
        })
        .catch(function (e) {
            console.log(e);
        });
  }

  return (
    
    <KeyboardAvoidingView
      style={styles.container}
      behavior="padding"
    >
    
   
    

    

      <View style={styles.inputContainer}>
      <TouchableOpacity
      onPress={() => navigation.navigate("Login")}
      style={[styles.buttonBloom,styles.signOut]}
    >
      <Text style={styles.buttonBloomText} >Back</Text>

      
    </TouchableOpacity>

      <Image style={styles.image} source={require('../images/2.png')} />

      <Text style={styles.bloomTitle}>Forgot Password</Text>
      <Text style={styles.bloomText}>Enter your email to start recovery process.</Text>
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={text => setEmail(text)}
          style={styles.input}
        />
     
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          // onPress={forgotPassword}
          onPress={() => navigation.navigate("Login")}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Send Email</Text>
        </TouchableOpacity>

      
      
     
      </View>
    </KeyboardAvoidingView>
  )
}

export default ForgotPassword

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputContainer: {
    width: '80%'
  },
  bloomTitle:{
    fontSize: 35,
    fontWeight:'700',
    color: '#636463',
  },
  bloomText:{
    fontSize: 16,
    fontWeight:'400',
    marginTop:5,
    marginBottom:10, 
  },
  input: {
    backgroundColor: 'white',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 5,
  },
  buttonContainer: {
    width: '60%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
  },
  button: {
    backgroundColor: '#8EB081',
    width: '100%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonOutline: {
    backgroundColor: 'white',
    marginTop: 5,
    borderColor: '#0782F9',
    borderWidth: 2,
  },
  buttonText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 16,
  },
  buttonOutlineText: {
    color: '#0782F9',
    fontWeight: '700',
    fontSize: 16,
  },
 image:{
    resizeMode:'contain',
    width:200,
    height:200,
    marginBottom:40,
    justifyContent: 'center',
    alignItems: 'center',

  },
  signOut:{
    alignItems: 'center',
    height:30,
    width:70,
    marginTop:30,
    marginLeft:10,
  },
  buttonBloom:{
    
    
    backgroundColor: '#8EB081',
    padding: 5,
   
    borderRadius: 10,
    alignItems: 'left',
    
    width:'20%',
    marginBottom:80,
  },
  buttonBloomText:{
    color:'white',

  }
})