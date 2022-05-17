import { useNavigation } from '@react-navigation/core'
import React, {useState} from 'react'
import { KeyboardAvoidingView, StyleSheet, Text, View, TextInput, TouchableOpacity, Keyboard, ScrollView,Button,Image} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { auth } from '../firebase'
import Task from '../components/Plant'



const HomeScreen = () => {
  const navigation = useNavigation();

  const [task, setTask] = useState();


  const [taskItems, setTaskItems] = useState([]);
  
  var currdate = new Date();
  currdate.setDate(currdate.getDate() + 7);

  var newDates = new Date();
  newDates.setDate(newDates.getDate() + 3);

  const [dates, setDates] = useState(newDates);

  const [date, setDate] = useState(currdate);

 

  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        navigation.replace("Login")
      })
      .catch(error => alert(error.message))
  }


  const handleAddTask = () => {
    // Keyboard.dismiss();
    setTaskItems([...taskItems, task])
    setTask(null);
  
  }

  const completeTask = (index) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy)

   
  }

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
          onPress={handleSignOut}
          style={[styles.buttonBloom,styles.signOut]}
        >
          <Text style={styles.buttonBloomText}>Sign out</Text>
        </TouchableOpacity>

        <Image style={styles.image} source={require('../images/1.png')} />

        
        
        </View>


        <View style={styles.plantWrapper}>
            
            <Text style={styles.bloomTitle}> Your Plants</Text>
            <TouchableOpacity style={[styles.buttonOutline, styles.learnMore]}>
                <Text style={styles.buttonOutlineText}  onPress={() => navigation.navigate("Info")}>Learn More</Text>
            </TouchableOpacity>
        </View>
        
        <View style={styles.plants}>
          {/* Input of Plant */}
            <TouchableOpacity >
  
                  <Task text='Jasmine' date={new Date()} /> 
                  <Task text='Cactus Bob' date={dates} /> 
            </TouchableOpacity>
            {
            taskItems.map((item,index) => {
              return (
                <TouchableOpacity key={index}  onPress={() => completeTask(index)}>
                  {console.log(item)}
                  
                  <Task text={item} date={date} /> 
                </TouchableOpacity>
              )
            })
        }
         
        
        </View> 
        </ScrollView>
        <View style={styles.writeTaskWrapper}>
        <TextInput style={styles.input} placeholder={'Enter Your Plant Name'}  value={task} onChangeText={text => setTask(text)} />
  

        <TouchableOpacity onPress={() => handleAddTask()}>
            <View style={styles.addWrapper}>
                <Text style={styles.addText}>+</Text>
            </View>
        </TouchableOpacity>
        </View>
        </View>

 
   
  );
}

export default HomeScreen

const styles = StyleSheet.create({
container:{
    flex:1,
    backgroundColor:' #f2f2f2',
    margin:20,
},
  headerBloom: {
    margin: 10,
    flexDirection:'row',
    flexWrap:'wrap',
    
  },
  buttonBloom:{
    backgroundColor: '#8EB081',
    padding: 10,
    marginBottom:20,
    marginTop:10,
    marginRight:20,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent:'center',
    width:'20%',

  },
  buttonBloomText:{
    color: 'white',
    fontWeight: '700',
  
    fontSize: 16,
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
    fontSize: 35,
    fontWeight:'700',
    color: '#636463',
  },
  signOut:{
    alignItems: 'center',
    
    marginTop:30,
    marginLeft:10,
  },
  plants:{
    
    padding:20,
    width:'90%',
    justifyContent:'center',
    alignItems: 'space-around',
    marginLeft:20,
    
    
  },
  buttonOutline: {
    backgroundColor: 'white',
    marginTop: 5,
    borderColor: '#8EB081',
    borderWidth: 2,
    borderRadius: 10,
    paddingLeft:7,
    paddingRight:7,
    width:'50%',
    alignItems: 'center',
    justifyContent:'center',
  },
  buttonOutlineText: {
    color: '#8EB081',
    fontWeight: '700',
    fontSize: 16,
  },
  writeTaskWrapper: {
    position: 'absolute',
    bottom: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  input: {
    width: 250,
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: '#FFF',
    borderRadius: 60,
    borderWidth: 1,
    borderColor: '#636463',
    width:'80%'
    
  },
  inputDays: {
    width: 100,
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: '#FFF',
    borderRadius: 60,
    borderWidth: 1,

  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: '#FFF',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#636463',
    borderWidth: 1,
  },
  addText: {},
  image:{
    marginLeft:40,
    resizeMode: 'stretch',
    width:270,
    height:70,
    
  },

})