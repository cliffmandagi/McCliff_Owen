import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { Header } from 'react-native-elements';

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
                onPress={() => {}}>
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