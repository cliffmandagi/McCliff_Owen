import React from 'react';
import { TouchableOpacity, View, Image } from 'react-native';
import { Header } from 'react-native-elements';

const HeaderNav = () => {
  return (
      <Header
        backgroundColor="white"
        centerComponent={
        <Image
          source={require('./assets/TestLogo.png') }
          style={{ height: 40, width: 110 }}
        />}
        leftComponent={ 
          <TouchableOpacity onPress={() => {}}>
            <Image
              source={require('./assets/account.png')}
            />
          </TouchableOpacity>
        }
      />
  );
}

export default HeaderNav;