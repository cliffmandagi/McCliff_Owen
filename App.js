import React from 'react';
import { TouchableOpacity, View, Image } from 'react-native';
import { Header } from 'react-native-elements';
import StackNav from './navigator/StackNav';
<<<<<<< Updated upstream

export default function App() {
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
          <TouchableOpacity>
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
=======
import Profile from './screens/Profile';
import Login from './screens/Login';
import Main from './Main';

class App extends (Component, React.Component) {
  render(){
    return (
      <Login/>
    );
  }
}

export default App;
>>>>>>> Stashed changes
