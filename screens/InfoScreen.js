import { useNavigation } from '@react-navigation/core'
import React, {useState} from 'react'
import { KeyboardAvoidingView, StyleSheet, Text, View, TextInput, TouchableOpacity, Keyboard, ScrollView,Button,Image,FlatList} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { auth } from '../firebase'

const InfoScreen = () => {
  const navigation = useNavigation();


  return (
    <View style={styles.container}>  
    <ScrollView
    contentContainerStyle={{
      flexGrow: 1
    }}
    keyboardShouldPersistTaps='handled'
  >
    <View style={styles.headerBloom}>
    {/* <Text>Email: {auth.currentUser?.email}</Text> */}

  
    

    <TouchableOpacity
      onPress={() => navigation.navigate("Bloom")}
      style={[styles.buttonBloom,styles.signOut]}
    >
      <Text style={styles.buttonBloomText} >Back</Text>

      
    </TouchableOpacity>
    <Image style={styles.imageLogo} source={require('../images/1.png')} />
   
    </View>


    <View style={styles.plantWrapper}>
    <Text style={styles.bloomTitle}> Plant Information</Text>
    <Text style={styles.bloomText}> Here are some helpful tips to take care of the most popular indoor plants.Browse through the alphabetically ordered list and take tips!</Text>

    <Image style={styles.image} source={require('../images/p5.png')} /> 
    <Image style={styles.image} source={require('../images/p1.png')} /> 
    <Image style={styles.image} source={require('../images/p3.png')} />  
    <Image style={styles.image} source={require('../images/p7.png')} /> 
    <Image style={styles.image} source={require('../images/p8.png')} />  
    <Image style={styles.image} source={require('../images/p2.png')} /> 
   
    <Image style={styles.image} source={require('../images/p4.png')} /> 
   
    <Image style={styles.image} source={require('../images/p6.png')} />
    
 

    </View>
    
   
    </ScrollView>

    </View>

  )
}

export default InfoScreen

const styles = StyleSheet.create({
  container:{
      flex:1,
      backgroundColor:' #f2f2f2',
      
  },
    headerBloom: {
      margin: 10,
      marginBottom:0,
      flexDirection:'row',
      flexWrap:'wrap',
      
    },
    buttonBloom:{
      flexDirection:'row',
      flexWrap:'wrap',
      
      backgroundColor: '#8EB081',
      padding: 5,
      marginBottom:20,
      marginTop:10,
      marginRight:20,
      borderRadius: 10,
      alignItems: 'center',
      justifyContent:'space-around',
      width:'20%',
    },
    buttonBloomText:{
      color: 'white',
      fontWeight: '700',
      fontSize: 13,
    },
    signOut:{
      alignItems: 'center',
      height:30,
      width:70,
      marginTop:30,
      marginLeft:10,
    },
    headerBloomText:{
      color: 'green',
      fontWeight: '700',
      fontSize: 30,
    },
    plantWrapper:{
      flexDirection:'row',
      flexWrap:'wrap',
      paddingTop:30,
      paddingHorizontal: 20,
      justifyContent: 'space-between',


    },
    bloomTitle:{
     
      margin:30,
      marginBottom:0,
      fontSize: 35,
    fontWeight:'700',
    color: '#636463',
      
    },
    bloomText:{
      fontSize: 16,
      fontWeight:'400',
      marginLeft:30,
      
    },

    plants:{
      
      padding:20,
      width:'100%',
      justifyContent:'center',
      alignItems: 'center',
      margin:20,
      marginBottom:0,
      
      
    },
    addText: {},
    image:{
      marginRight:30,
      resizeMode: 'contain',
      width:500,
      height:400,
      
    },
    imageLogo:{
    marginLeft:40,
    resizeMode: 'stretch',
    width:270,
    height:70,
    }
  
  })