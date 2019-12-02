import React from 'react';
import { TouchableOpacity, View, Image } from 'react-native';
import { Header } from 'react-native-elements';
import StackNav from './navigator/StackNav';
import Profile from './screens/Profile';
import Login from './screens/Login';
import Main from './Main';

class App extends React.Component {
  render(){
    return (
      <Login/>
    );
  }
}

export default App;
