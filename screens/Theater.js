import React, { Component } from 'react';
import { StyleSheet, Text, View, Picker, TouchableOpacity, Image } from 'react-native';
import { Button } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';

const LocImg = <Image source={require('../assets/location.png')} style={{ height: 25, width: 25 }}/>

class Theater extends Component {
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: "#E6E6E6"}}>
        <View style={{ alignItems: 'center'}}>
          <View style={{ marginBottom: 10}}>
            <Text style={{ fontSize: 15 }}>{LocImg} MANADO</Text>
          </View>
          <View style={{ marginBottom: 8 }}>
            <ScrollView>
              <TouchableOpacity style={{paddingHorizontal:75, paddingVertical:11, backgroundColor: 'white', borderRadius:4, marginBottom: 7, alignItems: 'center'}}>
                <Text> GRAND KAWANUA CITY CGV </Text>
              </TouchableOpacity>
              <TouchableOpacity style={{paddingHorizontal:75, paddingVertical:11, backgroundColor: 'white', borderRadius:4, marginBottom: 7, alignItems: 'center'}}>
                <Text> MANTOS 1 XXI </Text>
              </TouchableOpacity>
              <TouchableOpacity style={{paddingHorizontal:75, paddingVertical:11, backgroundColor: 'white', borderRadius:4, marginBottom: 7, alignItems: 'center'}}>
                <Text> MANTOS 3 XXI </Text>
              </TouchableOpacity>
              <TouchableOpacity style={{paddingHorizontal:75, paddingVertical:11, backgroundColor: 'white', borderRadius:4, marginBottom: 7, alignItems: 'center'}}>
                <Text> MEGA MALL XXI </Text>
              </TouchableOpacity>
            </ScrollView>
          </View>
        </View>
      </View>
    );
  }
}

export default Theater;