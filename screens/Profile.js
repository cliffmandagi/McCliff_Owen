import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { Header } from 'react-native-elements';
import { createAppContainer, createStackNavigator } from 'react-navigation';

class ProfileScreen extends Component {
  render() {
    return (
      <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
        <Text style={{ fontSize: 12 }}>
          MultiPlatform Final Project
        </Text>
        <Text style={{ fontSize: 10 }}>
          Copyright © 2019 :v
        </Text>
      </View>
    );
  }
}

class Profile extends (Component, React.Component) {
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#E6E6E6' }}>
        <Header
            placement="left"
            backgroundColor="white"
            leftComponent={ 
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('App')}
              >
                <Image
                  source={require('../assets/back.png')}
                  style={{ height: 25, width: 25}}
                />
              </TouchableOpacity>
            }
            centerComponent={{ text: "About", style: {fontSize: 19, fontWeight: "bold"}}}
          />
        <ProfileScreen/>
      </View>
    );
  }
}

export default Profile;