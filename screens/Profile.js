import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Profile() {
  return (
    <View>
      <Text>Home</Text>
    </View>
  );
}
<<<<<<< Updated upstream
=======

class Profile extends (Component, React.Component) {
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
    );
  }
}

export default Profile;
>>>>>>> Stashed changes
