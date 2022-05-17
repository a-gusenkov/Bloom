import React, {useState} from 'react';
import { View, Text, StyleSheet, TouchableOpacity,SafeAreaView } from 'react-native';
import DatePicker from 'react-native-datepicker';

const Task = (props) => {
  



  return (
    <View style={styles.item}>
      <View style={styles.itemLeft}>
        <View style={styles.square}> </View>
        <Text style={styles.itemText}>{props.text}</Text>
        
      </View>
      <View style={styles.circular}>        
      <DatePicker
          style={styles.datePickerStyle}
        
          date={props.date}
          mode="date"
          placeholder="select date"
          format="MM/DD/YYYY"
          maxDate="01-01-2024"
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          customStyles={{
            dateIcon: {
              position: 'absolute',
              right: -5,
              top: 4,
              marginLeft: 0,
            },
            dateInput: {
              borderColor : "gray",
              alignItems: "flex-start",
              borderWidth: 0,
              borderBottomWidth: 1,
            },
            placeholderText: {
              fontSize: 17,
              color: "gray"
            },
            dateText: {
              fontSize: 17,
            }
          }}
         
          onDateChange={(date) => {
            setDate(date);
          }}
        /></View>
    </View>
  )
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#FFF',
    padding: 15,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  datePickerStyle: {
    width: 200,
  },
  itemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap'
  },
  square: {
    width: 24,
    height: 24,
    backgroundColor: '#8EB081',
    opacity: 0.4,
    borderRadius: 5,
    marginRight: 15,
  },
  itemText: {
    maxWidth: '80%',
    color: '#8EB081',
    fontWeight: '700',
    fontSize: 16,
  },
  image:{
    
    // resizeMode: 'contain',
    width:2,
    height:2,
  }

});

export default Task;