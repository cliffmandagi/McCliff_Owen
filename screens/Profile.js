import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { Header } from 'react-native-elements';
import { createAppContainer, createStackNavigator } from 'react-navigation';

class ProfileScreen extends Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Profile</Text>
      </View>
    );
  }
}

class Profile extends (Component, React.Component) {
  render() {
    return (
      <View style={{ flex: 1 }}>
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
            centerComponent={{ text: "Profile", style: {fontSize: 19, fontWeight: "bold"}}}
          />
        <ProfileScreen/>
      </View>
    );
  }
}

export default Profile;