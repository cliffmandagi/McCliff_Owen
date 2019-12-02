import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { Header } from 'react-native-elements'

class ProfileScreen extends Component {
  render(){
    return (
      <View>
        <Text> TEST </Text>
      </View>
    )
  }
}

class Profile extends Component {
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#E6E6E6' }}>
        <Header
            placement="left"
            backgroundColor="white"
            leftComponent={ 
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('Main')}
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
    )
  }
}

export default Profile;
