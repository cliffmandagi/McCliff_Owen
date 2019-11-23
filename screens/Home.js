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
        {id:1, title: "Frozen 2", time:"2018-08-01 12:15 pm", image:"https://cdn.cgv.id/uploads/movie/compressed/19039100.jpg", description:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean  ligula..."},
        {id:2, title: "Charlie's Angels", time:"2018-08-12 12:00 pm", image:"https://cdn.cgv.id/uploads/movie/compressed/19038000.jpg", description:"Lorem  dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula..."} ,
        {id:3, title: "Ford v Ferrari", time:"2017-08-05 12:21 pm", image:"https://cdn.cgv.id/uploads/movie/compressed/19036200.jpg", description:"Lorem ipsum dolor sit , consectetuer  elit. Aenean commodo ligula..."}, 
        {id:4, title: "Midway", time:"2015-08-12 12:00 pm", image:"https://image-store.slidesharecdn.com/bf45e2c8-b848-47ad-8a28-ea0730fd97be-original.jpeg", description:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula..."}, 
        {id:5, title: "Senior", time:"2013-06-12 12:11 pm", image:"http://cinemaxx.cinemaxxtheater.com/Gallery/Movies/Thumbnail/SENIOR-post.jpg", description:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit.  commodo ligula..."},
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
                      <Image style={styles.iconData} source={{uri: 'https://png.icons8.com/color/96/3498db/calendar.png'}}/>
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