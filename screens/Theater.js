import React, { Component } from 'react';
import { StyleSheet, Text, View, Picker, TouchableOpacity, Image, ScrollView } from 'react-native';
import { Button } from 'react-native-elements';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import gkcc from './theater/gkcc';
import Mantos1 from './theater/Mantos1';
import Mantos3 from './theater/Mantos3';

const LocImg = <Image source={require('../assets/location.png')} style={{ height: 25, width: 25 }}/>

class Theater extends (Component, React.Component) {
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: "#E6E6E6"}}>
        <View style={{ alignItems: 'center'}}>
          <View style={{ marginBottom: 10}}>
            <Text style={{ fontSize: 15 }}>{LocImg} MANADO</Text>
          </View>
          <View style={{ marginBottom: 8 }}>
            <ScrollView>
              <TouchableOpacity style={{paddingHorizontal:75, paddingVertical:11, backgroundColor: 'white', borderRadius:4, marginBottom: 7, alignItems: 'center'}}
              onPress={() => this.props.navigation.navigate('gkcc')}>
                <Text> GRAND KAWANUA CITY CGV </Text>
              </TouchableOpacity>
              <TouchableOpacity style={{paddingHorizontal:75, paddingVertical:11, backgroundColor: 'white', borderRadius:4, marginBottom: 7, alignItems: 'center'}}
              onPress={() => this.props.navigation.navigate('Mantos1')}>
                <Text> MANTOS 1 XXI </Text>
              </TouchableOpacity>
              <TouchableOpacity style={{paddingHorizontal:75, paddingVertical:11, backgroundColor: 'white', borderRadius:4, marginBottom: 7, alignItems: 'center'}}
              onPress={() => this.props.navigation.navigate('Mantos3')}>
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

const StackNavigator =  createStackNavigator({
  Theater: Theater,
  gkcc: gkcc,
  Mantos1: Mantos1,
  Mantos3: Mantos3
},{
  defaultNavigationOptions: ({ navigation }) => {
      return {
          header: (
              <View></View>
          ),
      }
}
});

export default createAppContainer(StackNavigator);