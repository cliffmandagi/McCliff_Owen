import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer, createBottomTabNavigator, createSwitchNavigator } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Header } from 'react-native-elements';

import Home from '../screens/Home';
import Theater from '../screens/Theater';
import Profile from '../screens/Profile';

import Movie1 from '../screens/movie/Movie1';

class StackNav extends (Component, React.Component){
    render(){
        return <Container/>;
    }
}

const TabNavigator = createBottomTabNavigator({
    Home: Home,
    Theater: Theater
},{
    defaultNavigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ focused, horizontal, tintColor }) => {
            const { routeName } = navigation.state;
            let IconComponent = Ionicons;
            let iconName;
            if (routeName === 'Home') {
                iconName = `ios-home`;
            } else if (routeName === 'Theater') {
                iconName = `ios-calendar`;
            }
            return <IconComponent name={iconName} size={25} color={tintColor} />;
          },
    }),
    tabBarOptions: {
        activeTintColor: '#2c54ac',
        inactiveTintColor: 'gray',
    },
    initialRouteName: 'Home'
})

const SwitchNav = createSwitchNavigator({
    TabNavigator: TabNavigator,
    Movie1: Movie1
})

const Container = createAppContainer(SwitchNav);

export default StackNav;