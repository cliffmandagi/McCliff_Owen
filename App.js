import React, { Component } from 'react';
import { TouchableOpacity, View, Image } from 'react-native';
import { Header } from 'react-native-elements';
import { createAppContainer, createStackNavigator } from 'react-navigation';

import StackNav from './navigator/StackNav';
import Profile from './screens/Profile';
import Login from './screens/Login';

class App extends (Component, React.Component) {
  render(){
    return (
      <View style={{ flex: 1 }}>
        <Header
          backgroundColor="white"
          centerComponent={
          <Image
            source={require('./assets/TestLogo.png') }
            style={{ height: 40, width: 110 }}
          />}
          leftComponent={ 
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Profile')}
            >
              <Image
                source={require('./assets/account.png')}
              />
            </TouchableOpacity>
          }
        />
        <StackNav/>
      </View>
    );
  }
}

const StackNavigator =  createStackNavigator({
  App: App,
  Profile: Profile,
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