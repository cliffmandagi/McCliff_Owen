import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, FlatList, Button } from 'react-native';
import { createAppContainer, createStackNavigator, createSwitchNavigator } from 'react-navigation';
import { SwitchActions } from 'react-navigation';

import Movie1 from './movie/Movie1';

class Home extends (Component, React.Component) {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {id:1, title: "Frozen 2", time:"Duration : 1h 43m", image:"https://cdn.cgv.id/uploads/movie/compressed/19039100.jpg", description:"Anna, Elsa, Kristoff, Olaf and Sven leave Arendelle to travel to an ancient, autumn-bound forest of an enchanted land. They set out to find the origin of Elsa's powers in order to save their kingdom."},
        {id:2, title: "Charlie's Angels", time:"Duration : 1h 58m", image:"https://cdn.cgv.id/uploads/movie/compressed/19038000.jpg", description:"When a young systems engineer blows the whistle on a dangerous technology, Charlie's Angels are called into action, putting their lives on the line to protect us all."} ,
        {id:3, title: "Ford v Ferrari", time:"Duration : 2h 32m", image:"https://cdn.cgv.id/uploads/movie/compressed/19036200.jpg", description:"American car designer Carroll Shelby and driver Ken Miles battle corporate interference, the laws of physics and their own personal demons to build a revolutionary race car for Ford and challenge Ferrari at the 24 Hours of Le Mans in 1966."}, 
        {id:4, title: "Midway", time:"Duration : 2h 18m", image:"https://image-store.slidesharecdn.com/bf45e2c8-b848-47ad-8a28-ea0730fd97be-original.jpeg", description:"The story of the Battle of Midway, told by the leaders and the sailors who fought it."}, 
        {id:5, title: "Senior", time:"Duration : 1h 34m", image:"http://cinemaxx.cinemaxxtheater.com/Gallery/Movies/Thumbnail/SENIOR-post.jpg", description:"Nakula Jamie Megantara (Jerome Kurnia), Chairperson of MOS (Student Orientation Period) at Permata Bangsa High School, crossed Spanish-Indonesian, as if he could not feel happy, sad, afraid..."},
      ]
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList style={styles.list}
          data={this.state.data}
          keyExtractor= {item => item.title}
          ItemSeparatorComponent={() => {
            return (
              <View style={styles.separator}/>
            )
          }}
          renderItem={(post) => {
            const item = post.item;
            return (
              <View style={styles.card}>
                <TouchableOpacity onPress={() => {}}>
                    <Image style={styles.cardImage} source={{uri:item.image}}/>
                </TouchableOpacity>
                <View style={styles.cardHeader}>
                  <View>
                    <Text style={styles.title}>{item.title}</Text>
                    <Text style={styles.description}>{item.description}</Text>
                    <View style={styles.timeContainer}>
                      <Image style={styles.iconData} source={{uri: 'https://png.icons8.com/color/96/3498db/clock.png'}}/>
                      <Text style={styles.time}>{item.time}</Text>
                    </View>
                  </View>
                </View>
              </View>
            )
          }}/>
      </View>
    );
  }
}

export default Home;

const styles = StyleSheet.create({
  container:{
    flex:1,
  },
  list: {
    paddingHorizontal: 17,
    backgroundColor:"#E6E6E6",
  },
  separator: {
    marginTop: 10,
  },
  /******** card **************/
  card:{
    shadowColor: '#00000021',
    shadowOffset: {
      width: 2
    },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    marginVertical: 8,
    backgroundColor:"white"
  },
  cardHeader: {
    paddingVertical: 17,
    paddingHorizontal: 16,
    borderTopLeftRadius: 1,
    borderTopRightRadius: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cardContent: {
    paddingVertical: 12.5,
    paddingHorizontal: 16,
  },
  cardFooter:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 12.5,
    paddingBottom: 25,
    paddingHorizontal: 16,
    borderBottomLeftRadius: 1,
    borderBottomRightRadius: 1,
    backgroundColor:"#EEEEEE",
  },
  cardImage:{
    flex: 1,
    height: 200,
    width: null,
  },
  /******** card components **************/
  title:{
    fontSize:18,
    flex:1,
  }, 
  description:{
    fontSize:15,
    color:"#888",
    flex:1,
    marginTop:5,
    marginBottom:5,
  },
  time:{
    fontSize:13,
    color: "#808080",
    marginTop: 5
  },
  icon: {
    width:25,
    height:25,
  },
  iconData:{
    width:15,
    height:15,
    marginTop:5,
    marginRight:5
  },
  timeContainer:{
    flexDirection:'row'
  },
  /******** social bar ******************/
  socialBarContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    flex: 1
  },
  socialBarSection: {
    justifyContent: 'center',
    flexDirection: 'row',
    flex: 1,
  },
  socialBarlabel: {
    marginLeft: 8,
    alignSelf: 'flex-end',
    justifyContent: 'center',
  },
  socialBarButton:{
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  }
});