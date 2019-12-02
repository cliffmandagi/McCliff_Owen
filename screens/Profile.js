import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { Header } from 'react-native-elements'

class ProfileScreen extends Component {
  render(){
    return (
      <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerContent}>
            <Image style={styles.avatar} source={{uri: 'https://bootdey.com/img/Content/avatar/avatar2.png'}}/>
            <Text style={styles.name}>
              Multiplatform Programming
            </Text>
        </View>
      </View>

      <View style={styles.profileDetail}>
        <View style={styles.detailContent}>
          <Text style={styles.title}>Joined</Text>
          <Text style={styles.count}>2019 - 12 - 3</Text>
        </View>
      </View>
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
            centerComponent={{ text: "Profile", style: {fontSize: 19, fontWeight: "bold"}}}
          />
          <View>
            <ProfileScreen/>
          </View>
      </View>
    )
  }
}

export default Profile;

const styles = StyleSheet.create({
  header:{
    backgroundColor: "#2c54ac",
  },
  headerContent:{
    padding:30,
    alignItems: 'center',
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginBottom:10,
  },
  name:{
    fontSize:22,
    color:"#FFFFFF",
    fontWeight:'600',
  },
  profileDetail:{
    alignSelf: 'center',
    marginTop:200,
    alignItems: 'center',
    flexDirection: 'row',
    position:'absolute',
    backgroundColor: "#ffffff"
  },
  detailContent:{
    margin:10,
    alignItems: 'center'
  },
  title:{
    fontSize:20,
    color: "#00CED1"
  },
  count:{
    fontSize:18,
  },
  bodyContent: {
    flex: 1,
    alignItems: 'center',
    padding:30,
    marginTop:40
  },
  textInfo:{
    fontSize:18,
    marginTop:20,
    color: "#696969",
  },
  buttonContainer: {
    marginTop:10,
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:250,
    borderRadius:30,
    backgroundColor: "#00CED1",
  },
  description:{
    fontSize:20,
    color: "#00CED1",
    marginTop:10,
    textAlign: 'center'
  },
});
