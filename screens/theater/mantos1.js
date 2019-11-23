import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView } from 'react-native';
import { Header } from 'react-native-elements';

import MapShow1 from '../../MapShow2';

const MONDAY = (
    <View>
        <Text style={{ marginLeft: 10, marginTop: 10, fontWeight: "bold" }}>MONDAY</Text>
        <View style={{ borderWidth: 0.5, borderColor: '#dddddd', marginHorizontal: 5, marginVertical: 10 }}>
            <View>
                <View style={{ flex: 1, flexDirection: 'row', marginHorizontal: 5, marginVertical: 5 }}>
                <Image source={require('../../assets/movie-poster/movie1.jpg')} style={{ height: 100, width: 70, borderRadius: 10 }}/>
                    <View style={{ marginLeft: 5}}>
                        <Text style={{ fontWeight: "bold", marginVertical: 10, marginHorizontal: 10, fontSize: 16 }}>FROZEN II</Text>
                        <View style={{ flexDirection: 'row' }}>
                            <View style={{ flexDirection: 'column' }}>
                                <Text style={{ marginTop: 1, marginLeft: 10, color: 'gray', fontSize: 12 }}>Genre</Text>
                                <Text style={{ marginLeft: 10, color: 'gray', fontSize: 12 }}>Duration</Text>
                                <Text style={{ marginLeft: 10, color: 'gray', fontSize: 12 }}>Director</Text>
                            </View>
                            <View style={{ flexDirection: 'column' }}>
                                <Text style={{ marginTop: 1, marginLeft: 10, fontSize: 12 }}>Animation, Adventure, Comedy</Text>
                                <Text style={{ marginLeft: 10, fontSize: 12 }}>1h 43m</Text>
                                <Text style={{ marginLeft: 10, fontSize: 12 }}>Chris Buck, Jennifer Lee</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={{ marginVertical: 7, marginHorizontal: 5 }}>
                    <Text style={{ fontWeight: "bold" }}>REGULAR 2D</Text>
                    <View style={{ marginVertical: 5, marginHorizontal: 3 }}>
                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                            <View style={{alignItems: 'center',justifyContent: 'center', height: 30, width: 60, borderWidth: 0.5, borderColor: '#dddddd', borderRadius: 5}}>
                                <Text>9:20</Text>
                            </View>
                            <View style={{marginHorizontal: 5, alignItems: 'center',justifyContent: 'center', height: 30, width: 60, borderWidth: 0.5, borderColor: '#dddddd', borderRadius: 5}}>
                                <Text>11:30</Text>
                            </View>
                            <View style={{marginHorizontal: 5, alignItems: 'center',justifyContent: 'center', height: 30, width: 60, borderWidth: 0.5, borderColor: '#dddddd', borderRadius: 5}}>
                                <Text>13:45</Text>
                            </View>
                            <View style={{marginHorizontal: 5, alignItems: 'center',justifyContent: 'center', height: 30, width: 60, borderWidth: 0.5, borderColor: '#dddddd', borderRadius: 5}}>
                                <Text>16:00</Text>
                            </View>
                            <View style={{marginHorizontal: 5, alignItems: 'center',justifyContent: 'center', height: 30, width: 60, borderWidth: 0.5, borderColor: '#dddddd', borderRadius: 5}}>
                                <Text>18:15</Text>
                            </View>
                            <View style={{marginHorizontal: 5, alignItems: 'center',justifyContent: 'center', height: 30, width: 60, borderWidth: 0.5, borderColor: '#dddddd', borderRadius: 5}}>
                                <Text>20:30</Text>
                            </View>
                            <View style={{marginHorizontal: 5, alignItems: 'center',justifyContent: 'center', height: 30, width: 60, borderWidth: 0.5, borderColor: '#dddddd', borderRadius: 5}}>
                                <Text>22:45</Text>
                            </View>
                        </ScrollView>
                    </View>
                </View>
            </View>
        </View>

        <View style={{ borderWidth: 0.5, borderColor: '#dddddd', marginHorizontal: 5, marginVertical: 10 }}>
            <View>
                <View style={{ flex: 1, flexDirection: 'row', marginHorizontal: 5, marginVertical: 5 }}>
                <Image source={require('../../assets/movie-poster/movie2.jpg')} style={{ height: 100, width: 70, borderRadius: 10 }}/>
                    <View style={{ marginLeft: 5}}>
                        <Text style={{ fontWeight: "bold", marginVertical: 10, marginHorizontal: 10, fontSize: 16 }}>CHARLIE'S ANGELS</Text>
                        <View style={{ flexDirection: 'row' }}>
                            <View style={{ flexDirection: 'column' }}>
                                <Text style={{ marginTop: 1, marginLeft: 10, color: 'gray', fontSize: 12 }}>Genre</Text>
                                <Text style={{ marginLeft: 10, color: 'gray', fontSize: 12 }}>Duration</Text>
                                <Text style={{ marginLeft: 10, color: 'gray', fontSize: 12 }}>Director</Text>
                            </View>
                            <View style={{ flexDirection: 'column' }}>
                                <Text style={{ marginTop: 1, marginLeft: 10, fontSize: 12 }}>Action, Adventure, Comedy</Text>
                                <Text style={{ marginLeft: 10, fontSize: 12 }}>1h 58m</Text>
                                <Text style={{ marginLeft: 10, fontSize: 12 }}>Elizabeth Banks</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={{ marginVertical: 7, marginHorizontal: 5 }}>
                    <Text style={{ fontWeight: "bold" }}>REGULAR 2D</Text>
                    <View style={{ marginVertical: 5, marginHorizontal: 3 }}>
                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                            <View style={{alignItems: 'center',justifyContent: 'center', height: 30, width: 60, borderWidth: 0.5, borderColor: '#dddddd', borderRadius: 5}}>
                                <Text>11:35</Text>
                            </View>
                            <View style={{marginHorizontal: 5, alignItems: 'center',justifyContent: 'center', height: 30, width: 60, borderWidth: 0.5, borderColor: '#dddddd', borderRadius: 5}}>
                                <Text>14:00</Text>
                            </View>
                            <View style={{marginHorizontal: 5, alignItems: 'center',justifyContent: 'center', height: 30, width: 60, borderWidth: 0.5, borderColor: '#dddddd', borderRadius: 5}}>
                                <Text>16:30</Text>
                            </View>
                            <View style={{marginHorizontal: 5, alignItems: 'center',justifyContent: 'center', height: 30, width: 60, borderWidth: 0.5, borderColor: '#dddddd', borderRadius: 5}}>
                                <Text>19:00</Text>
                            </View>
                            <View style={{marginHorizontal: 5, alignItems: 'center',justifyContent: 'center', height: 30, width: 60, borderWidth: 0.5, borderColor: '#dddddd', borderRadius: 5}}>
                                <Text>21:30</Text>
                            </View>
                        </ScrollView>
                    </View>
                </View>
            </View>
        </View>

        <View style={{ borderWidth: 0.5, borderColor: '#dddddd', marginHorizontal: 5, marginVertical: 10 }}>
            <View>
                <View style={{ flex: 1, flexDirection: 'row', marginHorizontal: 5, marginVertical: 5 }}>
                <Image source={require('../../assets/movie-poster/movie3.jpg')} style={{ height: 100, width: 70, borderRadius: 10 }}/>
                    <View style={{ marginLeft: 5}}>
                        <Text style={{ fontWeight: "bold", marginVertical: 10, marginHorizontal: 10, fontSize: 16 }}>FORD V FERRARI</Text>
                        <View style={{ flexDirection: 'row' }}>
                            <View style={{ flexDirection: 'column' }}>
                                <Text style={{ marginTop: 1, marginLeft: 10, color: 'gray', fontSize: 12 }}>Genre</Text>
                                <Text style={{ marginLeft: 10, color: 'gray', fontSize: 12 }}>Duration</Text>
                                <Text style={{ marginLeft: 10, color: 'gray', fontSize: 12 }}>Director</Text>
                            </View>
                            <View style={{ flexDirection: 'column' }}>
                                <Text style={{ marginTop: 1, marginLeft: 10, fontSize: 12 }}>Action, Biography, Drama</Text>
                                <Text style={{ marginLeft: 10, fontSize: 12 }}>2h 32m</Text>
                                <Text style={{ marginLeft: 10, fontSize: 12 }}>James Mangold</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={{ marginVertical: 7, marginHorizontal: 5 }}>
                    <Text style={{ fontWeight: "bold" }}>REGULAR 2D</Text>
                    <View style={{ marginVertical: 5, marginHorizontal: 3 }}>
                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                            <View style={{alignItems: 'center',justifyContent: 'center', height: 30, width: 60, borderWidth: 0.5, borderColor: '#dddddd', borderRadius: 5}}>
                                <Text>13:15</Text>
                            </View>
                            <View style={{marginHorizontal: 5, alignItems: 'center',justifyContent: 'center', height: 30, width: 60, borderWidth: 0.5, borderColor: '#dddddd', borderRadius: 5}}>
                                <Text>16:15</Text>
                            </View>
                            <View style={{marginHorizontal: 5, alignItems: 'center',justifyContent: 'center', height: 30, width: 60, borderWidth: 0.5, borderColor: '#dddddd', borderRadius: 5}}>
                                <Text>16:30</Text>
                            </View>
                            <View style={{marginHorizontal: 5, alignItems: 'center',justifyContent: 'center', height: 30, width: 60, borderWidth: 0.5, borderColor: '#dddddd', borderRadius: 5}}>
                                <Text>19:15</Text>
                            </View>
                        </ScrollView>
                    </View>
                </View>
            </View>
        </View>

        <View style={{ borderWidth: 0.5, borderColor: '#dddddd', marginHorizontal: 5, marginVertical: 10 }}>
            <View>
                <View style={{ flex: 1, flexDirection: 'row', marginHorizontal: 5, marginVertical: 5 }}>
                <Image source={require('../../assets/movie-poster/movie4.jpg')} style={{ height: 100, width: 70, borderRadius: 10 }}/>
                    <View style={{ marginLeft: 5}}>
                        <Text style={{ fontWeight: "bold", marginTop: 3, marginHorizontal: 10, fontSize: 16 }}>RUMAH KENTANG:</Text>
                        <Text style={{ fontWeight: "bold", marginBottom:10, marginHorizontal: 10, fontSize: 16 }}>THE BEGINNING</Text>
                        <View style={{ flexDirection: 'row' }}>
                            <View style={{ flexDirection: 'column' }}>
                                <Text style={{ marginTop: 1, marginLeft: 10, color: 'gray', fontSize: 12 }}>Genre</Text>
                                <Text style={{ marginLeft: 10, color: 'gray', fontSize: 12 }}>Duration</Text>
                                <Text style={{ marginLeft: 10, color: 'gray', fontSize: 12 }}>Director</Text>
                            </View>
                            <View style={{ flexDirection: 'column' }}>
                                <Text style={{ marginTop: 1, marginLeft: 10, fontSize: 12 }}>Horror</Text>
                                <Text style={{ marginLeft: 10, fontSize: 12 }}>1h 42m</Text>
                                <Text style={{ marginLeft: 10, fontSize: 12 }}>Rizal Mantovani</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={{ marginVertical: 7, marginHorizontal: 5 }}>
                    <Text style={{ fontWeight: "bold" }}>REGULAR 2D</Text>
                    <View style={{ marginVertical: 5, marginHorizontal: 3 }}>
                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                            <View style={{alignItems: 'center',justifyContent: 'center', height: 30, width: 60, borderWidth: 0.5, borderColor: '#dddddd', borderRadius: 5}}>
                                <Text>11:00</Text>
                            </View>
                            <View style={{marginHorizontal: 5, alignItems: 'center',justifyContent: 'center', height: 30, width: 60, borderWidth: 0.5, borderColor: '#dddddd', borderRadius: 5}}>
                                <Text>11:45</Text>
                            </View>
                            <View style={{marginHorizontal: 5, alignItems: 'center',justifyContent: 'center', height: 30, width: 60, borderWidth: 0.5, borderColor: '#dddddd', borderRadius: 5}}>
                                <Text>15:20</Text>
                            </View>
                            <View style={{marginHorizontal: 5, alignItems: 'center',justifyContent: 'center', height: 30, width: 60, borderWidth: 0.5, borderColor: '#dddddd', borderRadius: 5}}>
                                <Text>17:30</Text>
                            </View>
                            <View style={{marginHorizontal: 5, alignItems: 'center',justifyContent: 'center', height: 30, width: 60, borderWidth: 0.5, borderColor: '#dddddd', borderRadius: 5}}>
                                <Text>18:30</Text>
                            </View>
                            <View style={{marginHorizontal: 5, alignItems: 'center',justifyContent: 'center', height: 30, width: 60, borderWidth: 0.5, borderColor: '#dddddd', borderRadius: 5}}>
                                <Text>22:00</Text>
                            </View>
                        </ScrollView>
                    </View>
                </View>
            </View>
        </View>
    </View>
)

const TUESDAY = (
    <View>
        <Text style={{ marginLeft: 10, marginTop: 10, fontWeight: "bold" }}>TUESDAY</Text>
        <View style={{ borderWidth: 0.5, borderColor: '#dddddd', marginHorizontal: 5, marginVertical: 10 }}>
            <View>
                <View style={{ flex: 1, flexDirection: 'row', marginHorizontal: 5, marginVertical: 5 }}>
                <Image source={require('../../assets/movie-poster/movie1.jpg')} style={{ height: 100, width: 70, borderRadius: 10 }}/>
                    <View style={{ marginLeft: 5}}>
                        <Text style={{ fontWeight: "bold", marginVertical: 10, marginHorizontal: 10, fontSize: 16 }}>FROZEN II</Text>
                        <View style={{ flexDirection: 'row' }}>
                            <View style={{ flexDirection: 'column' }}>
                                <Text style={{ marginTop: 1, marginLeft: 10, color: 'gray', fontSize: 12 }}>Genre</Text>
                                <Text style={{ marginLeft: 10, color: 'gray', fontSize: 12 }}>Duration</Text>
                                <Text style={{ marginLeft: 10, color: 'gray', fontSize: 12 }}>Director</Text>
                            </View>
                            <View style={{ flexDirection: 'column' }}>
                                <Text style={{ marginTop: 1, marginLeft: 10, fontSize: 12 }}>Animation, Adventure, Comedy</Text>
                                <Text style={{ marginLeft: 10, fontSize: 12 }}>1h 43m</Text>
                                <Text style={{ marginLeft: 10, fontSize: 12 }}>Chris Buck, Jennifer Lee</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={{ marginVertical: 7, marginHorizontal: 5 }}>
                    <Text style={{ fontWeight: "bold" }}>REGULAR 2D</Text>
                    <View style={{ marginVertical: 5, marginHorizontal: 3 }}>
                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                            <View style={{alignItems: 'center',justifyContent: 'center', height: 30, width: 60, borderWidth: 0.5, borderColor: '#dddddd', borderRadius: 5}}>
                                <Text>9:20</Text>
                            </View>
                            <View style={{marginHorizontal: 5, alignItems: 'center',justifyContent: 'center', height: 30, width: 60, borderWidth: 0.5, borderColor: '#dddddd', borderRadius: 5}}>
                                <Text>11:30</Text>
                            </View>
                            <View style={{marginHorizontal: 5, alignItems: 'center',justifyContent: 'center', height: 30, width: 60, borderWidth: 0.5, borderColor: '#dddddd', borderRadius: 5}}>
                                <Text>13:45</Text>
                            </View>
                            <View style={{marginHorizontal: 5, alignItems: 'center',justifyContent: 'center', height: 30, width: 60, borderWidth: 0.5, borderColor: '#dddddd', borderRadius: 5}}>
                                <Text>16:00</Text>
                            </View>
                            <View style={{marginHorizontal: 5, alignItems: 'center',justifyContent: 'center', height: 30, width: 60, borderWidth: 0.5, borderColor: '#dddddd', borderRadius: 5}}>
                                <Text>18:15</Text>
                            </View>
                            <View style={{marginHorizontal: 5, alignItems: 'center',justifyContent: 'center', height: 30, width: 60, borderWidth: 0.5, borderColor: '#dddddd', borderRadius: 5}}>
                                <Text>20:30</Text>
                            </View>
                            <View style={{marginHorizontal: 5, alignItems: 'center',justifyContent: 'center', height: 30, width: 60, borderWidth: 0.5, borderColor: '#dddddd', borderRadius: 5}}>
                                <Text>22:45</Text>
                            </View>
                        </ScrollView>
                    </View>
                </View>
            </View>
        </View>

        <View style={{ borderWidth: 0.5, borderColor: '#dddddd', marginHorizontal: 5, marginVertical: 10 }}>
            <View>
                <View style={{ flex: 1, flexDirection: 'row', marginHorizontal: 5, marginVertical: 5 }}>
                <Image source={require('../../assets/movie-poster/movie2.jpg')} style={{ height: 100, width: 70, borderRadius: 10 }}/>
                    <View style={{ marginLeft: 5}}>
                        <Text style={{ fontWeight: "bold", marginVertical: 10, marginHorizontal: 10, fontSize: 16 }}>CHARLIE'S ANGELS</Text>
                        <View style={{ flexDirection: 'row' }}>
                            <View style={{ flexDirection: 'column' }}>
                                <Text style={{ marginTop: 1, marginLeft: 10, color: 'gray', fontSize: 12 }}>Genre</Text>
                                <Text style={{ marginLeft: 10, color: 'gray', fontSize: 12 }}>Duration</Text>
                                <Text style={{ marginLeft: 10, color: 'gray', fontSize: 12 }}>Director</Text>
                            </View>
                            <View style={{ flexDirection: 'column' }}>
                                <Text style={{ marginTop: 1, marginLeft: 10, fontSize: 12 }}>Action, Adventure, Comedy</Text>
                                <Text style={{ marginLeft: 10, fontSize: 12 }}>1h 58m</Text>
                                <Text style={{ marginLeft: 10, fontSize: 12 }}>Elizabeth Banks</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={{ marginVertical: 7, marginHorizontal: 5 }}>
                    <Text style={{ fontWeight: "bold" }}>REGULAR 2D</Text>
                    <View style={{ marginVertical: 5, marginHorizontal: 3 }}>
                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                            <View style={{alignItems: 'center',justifyContent: 'center', height: 30, width: 60, borderWidth: 0.5, borderColor: '#dddddd', borderRadius: 5}}>
                                <Text>11:35</Text>
                            </View>
                            <View style={{marginHorizontal: 5, alignItems: 'center',justifyContent: 'center', height: 30, width: 60, borderWidth: 0.5, borderColor: '#dddddd', borderRadius: 5}}>
                                <Text>14:00</Text>
                            </View>
                            <View style={{marginHorizontal: 5, alignItems: 'center',justifyContent: 'center', height: 30, width: 60, borderWidth: 0.5, borderColor: '#dddddd', borderRadius: 5}}>
                                <Text>16:30</Text>
                            </View>
                            <View style={{marginHorizontal: 5, alignItems: 'center',justifyContent: 'center', height: 30, width: 60, borderWidth: 0.5, borderColor: '#dddddd', borderRadius: 5}}>
                                <Text>19:00</Text>
                            </View>
                            <View style={{marginHorizontal: 5, alignItems: 'center',justifyContent: 'center', height: 30, width: 60, borderWidth: 0.5, borderColor: '#dddddd', borderRadius: 5}}>
                                <Text>21:30</Text>
                            </View>
                        </ScrollView>
                    </View>
                </View>
            </View>
        </View>

        <View style={{ borderWidth: 0.5, borderColor: '#dddddd', marginHorizontal: 5, marginVertical: 10 }}>
            <View>
                <View style={{ flex: 1, flexDirection: 'row', marginHorizontal: 5, marginVertical: 5 }}>
                <Image source={require('../../assets/movie-poster/movie3.jpg')} style={{ height: 100, width: 70, borderRadius: 10 }}/>
                    <View style={{ marginLeft: 5}}>
                        <Text style={{ fontWeight: "bold", marginVertical: 10, marginHorizontal: 10, fontSize: 16 }}>FORD V FERRARI</Text>
                        <View style={{ flexDirection: 'row' }}>
                            <View style={{ flexDirection: 'column' }}>
                                <Text style={{ marginTop: 1, marginLeft: 10, color: 'gray', fontSize: 12 }}>Genre</Text>
                                <Text style={{ marginLeft: 10, color: 'gray', fontSize: 12 }}>Duration</Text>
                                <Text style={{ marginLeft: 10, color: 'gray', fontSize: 12 }}>Director</Text>
                            </View>
                            <View style={{ flexDirection: 'column' }}>
                                <Text style={{ marginTop: 1, marginLeft: 10, fontSize: 12 }}>Action, Biography, Drama</Text>
                                <Text style={{ marginLeft: 10, fontSize: 12 }}>2h 32m</Text>
                                <Text style={{ marginLeft: 10, fontSize: 12 }}>James Mangold</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={{ marginVertical: 7, marginHorizontal: 5 }}>
                    <Text style={{ fontWeight: "bold" }}>REGULAR 2D</Text>
                    <View style={{ marginVertical: 5, marginHorizontal: 3 }}>
                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                            <View style={{alignItems: 'center',justifyContent: 'center', height: 30, width: 60, borderWidth: 0.5, borderColor: '#dddddd', borderRadius: 5}}>
                                <Text>13:15</Text>
                            </View>
                            <View style={{marginHorizontal: 5, alignItems: 'center',justifyContent: 'center', height: 30, width: 60, borderWidth: 0.5, borderColor: '#dddddd', borderRadius: 5}}>
                                <Text>16:15</Text>
                            </View>
                            <View style={{marginHorizontal: 5, alignItems: 'center',justifyContent: 'center', height: 30, width: 60, borderWidth: 0.5, borderColor: '#dddddd', borderRadius: 5}}>
                                <Text>16:30</Text>
                            </View>
                            <View style={{marginHorizontal: 5, alignItems: 'center',justifyContent: 'center', height: 30, width: 60, borderWidth: 0.5, borderColor: '#dddddd', borderRadius: 5}}>
                                <Text>19:15</Text>
                            </View>
                        </ScrollView>
                    </View>
                </View>
            </View>
        </View>

        <View style={{ borderWidth: 0.5, borderColor: '#dddddd', marginHorizontal: 5, marginVertical: 10 }}>
            <View>
                <View style={{ flex: 1, flexDirection: 'row', marginHorizontal: 5, marginVertical: 5 }}>
                <Image source={require('../../assets/movie-poster/movie4.jpg')} style={{ height: 100, width: 70, borderRadius: 10 }}/>
                    <View style={{ marginLeft: 5}}>
                        <Text style={{ fontWeight: "bold", marginTop: 3, marginHorizontal: 10, fontSize: 16 }}>RUMAH KENTANG:</Text>
                        <Text style={{ fontWeight: "bold", marginBottom:10, marginHorizontal: 10, fontSize: 16 }}>THE BEGINNING</Text>
                        <View style={{ flexDirection: 'row' }}>
                            <View style={{ flexDirection: 'column' }}>
                                <Text style={{ marginTop: 1, marginLeft: 10, color: 'gray', fontSize: 12 }}>Genre</Text>
                                <Text style={{ marginLeft: 10, color: 'gray', fontSize: 12 }}>Duration</Text>
                                <Text style={{ marginLeft: 10, color: 'gray', fontSize: 12 }}>Director</Text>
                            </View>
                            <View style={{ flexDirection: 'column' }}>
                                <Text style={{ marginTop: 1, marginLeft: 10, fontSize: 12 }}>Horror</Text>
                                <Text style={{ marginLeft: 10, fontSize: 12 }}>1h 42m</Text>
                                <Text style={{ marginLeft: 10, fontSize: 12 }}>Rizal Mantovani</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={{ marginVertical: 7, marginHorizontal: 5 }}>
                    <Text style={{ fontWeight: "bold" }}>REGULAR 2D</Text>
                    <View style={{ marginVertical: 5, marginHorizontal: 3 }}>
                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                            <View style={{alignItems: 'center',justifyContent: 'center', height: 30, width: 60, borderWidth: 0.5, borderColor: '#dddddd', borderRadius: 5}}>
                                <Text>11:00</Text>
                            </View>
                            <View style={{marginHorizontal: 5, alignItems: 'center',justifyContent: 'center', height: 30, width: 60, borderWidth: 0.5, borderColor: '#dddddd', borderRadius: 5}}>
                                <Text>11:45</Text>
                            </View>
                            <View style={{marginHorizontal: 5, alignItems: 'center',justifyContent: 'center', height: 30, width: 60, borderWidth: 0.5, borderColor: '#dddddd', borderRadius: 5}}>
                                <Text>15:20</Text>
                            </View>
                            <View style={{marginHorizontal: 5, alignItems: 'center',justifyContent: 'center', height: 30, width: 60, borderWidth: 0.5, borderColor: '#dddddd', borderRadius: 5}}>
                                <Text>17:30</Text>
                            </View>
                            <View style={{marginHorizontal: 5, alignItems: 'center',justifyContent: 'center', height: 30, width: 60, borderWidth: 0.5, borderColor: '#dddddd', borderRadius: 5}}>
                                <Text>18:30</Text>
                            </View>
                            <View style={{marginHorizontal: 5, alignItems: 'center',justifyContent: 'center', height: 30, width: 60, borderWidth: 0.5, borderColor: '#dddddd', borderRadius: 5}}>
                                <Text>22:00</Text>
                            </View>
                        </ScrollView>
                    </View>
                </View>
            </View>
        </View>
    </View>
)

const WEDNESDAY = (
    <View>
        <Text style={{ marginLeft: 10, marginTop: 10, fontWeight: "bold" }}>WEDNESDAY</Text>
        <View style={{ borderWidth: 0.5, borderColor: '#dddddd', marginHorizontal: 5, marginVertical: 10 }}>
            <View>
                <View style={{ flex: 1, flexDirection: 'row', marginHorizontal: 5, marginVertical: 5 }}>
                <Image source={require('../../assets/movie-poster/movie1.jpg')} style={{ height: 100, width: 70, borderRadius: 10 }}/>
                    <View style={{ marginLeft: 5}}>
                        <Text style={{ fontWeight: "bold", marginVertical: 10, marginHorizontal: 10, fontSize: 16 }}>FROZEN II</Text>
                        <View style={{ flexDirection: 'row' }}>
                            <View style={{ flexDirection: 'column' }}>
                                <Text style={{ marginTop: 1, marginLeft: 10, color: 'gray', fontSize: 12 }}>Genre</Text>
                                <Text style={{ marginLeft: 10, color: 'gray', fontSize: 12 }}>Duration</Text>
                                <Text style={{ marginLeft: 10, color: 'gray', fontSize: 12 }}>Director</Text>
                            </View>
                            <View style={{ flexDirection: 'column' }}>
                                <Text style={{ marginTop: 1, marginLeft: 10, fontSize: 12 }}>Animation, Adventure, Comedy</Text>
                                <Text style={{ marginLeft: 10, fontSize: 12 }}>1h 43m</Text>
                                <Text style={{ marginLeft: 10, fontSize: 12 }}>Chris Buck, Jennifer Lee</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={{ marginVertical: 7, marginHorizontal: 5 }}>
                    <Text style={{ fontWeight: "bold" }}>REGULAR 2D</Text>
                    <View style={{ marginVertical: 5, marginHorizontal: 3 }}>
                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                            <View style={{alignItems: 'center',justifyContent: 'center', height: 30, width: 60, borderWidth: 0.5, borderColor: '#dddddd', borderRadius: 5}}>
                                <Text>9:20</Text>
                            </View>
                            <View style={{marginHorizontal: 5, alignItems: 'center',justifyContent: 'center', height: 30, width: 60, borderWidth: 0.5, borderColor: '#dddddd', borderRadius: 5}}>
                                <Text>11:30</Text>
                            </View>
                            <View style={{marginHorizontal: 5, alignItems: 'center',justifyContent: 'center', height: 30, width: 60, borderWidth: 0.5, borderColor: '#dddddd', borderRadius: 5}}>
                                <Text>13:45</Text>
                            </View>
                            <View style={{marginHorizontal: 5, alignItems: 'center',justifyContent: 'center', height: 30, width: 60, borderWidth: 0.5, borderColor: '#dddddd', borderRadius: 5}}>
                                <Text>16:00</Text>
                            </View>
                            <View style={{marginHorizontal: 5, alignItems: 'center',justifyContent: 'center', height: 30, width: 60, borderWidth: 0.5, borderColor: '#dddddd', borderRadius: 5}}>
                                <Text>18:15</Text>
                            </View>
                            <View style={{marginHorizontal: 5, alignItems: 'center',justifyContent: 'center', height: 30, width: 60, borderWidth: 0.5, borderColor: '#dddddd', borderRadius: 5}}>
                                <Text>20:30</Text>
                            </View>
                            <View style={{marginHorizontal: 5, alignItems: 'center',justifyContent: 'center', height: 30, width: 60, borderWidth: 0.5, borderColor: '#dddddd', borderRadius: 5}}>
                                <Text>22:45</Text>
                            </View>
                        </ScrollView>
                    </View>
                </View>
            </View>
        </View>

        <View style={{ borderWidth: 0.5, borderColor: '#dddddd', marginHorizontal: 5, marginVertical: 10 }}>
            <View>
                <View style={{ flex: 1, flexDirection: 'row', marginHorizontal: 5, marginVertical: 5 }}>
                <Image source={require('../../assets/movie-poster/movie2.jpg')} style={{ height: 100, width: 70, borderRadius: 10 }}/>
                    <View style={{ marginLeft: 5}}>
                        <Text style={{ fontWeight: "bold", marginVertical: 10, marginHorizontal: 10, fontSize: 16 }}>CHARLIE'S ANGELS</Text>
                        <View style={{ flexDirection: 'row' }}>
                            <View style={{ flexDirection: 'column' }}>
                                <Text style={{ marginTop: 1, marginLeft: 10, color: 'gray', fontSize: 12 }}>Genre</Text>
                                <Text style={{ marginLeft: 10, color: 'gray', fontSize: 12 }}>Duration</Text>
                                <Text style={{ marginLeft: 10, color: 'gray', fontSize: 12 }}>Director</Text>
                            </View>
                            <View style={{ flexDirection: 'column' }}>
                                <Text style={{ marginTop: 1, marginLeft: 10, fontSize: 12 }}>Action, Adventure, Comedy</Text>
                                <Text style={{ marginLeft: 10, fontSize: 12 }}>1h 58m</Text>
                                <Text style={{ marginLeft: 10, fontSize: 12 }}>Elizabeth Banks</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={{ marginVertical: 7, marginHorizontal: 5 }}>
                    <Text style={{ fontWeight: "bold" }}>REGULAR 2D</Text>
                    <View style={{ marginVertical: 5, marginHorizontal: 3 }}>
                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                            <View style={{alignItems: 'center',justifyContent: 'center', height: 30, width: 60, borderWidth: 0.5, borderColor: '#dddddd', borderRadius: 5}}>
                                <Text>11:35</Text>
                            </View>
                            <View style={{marginHorizontal: 5, alignItems: 'center',justifyContent: 'center', height: 30, width: 60, borderWidth: 0.5, borderColor: '#dddddd', borderRadius: 5}}>
                                <Text>14:00</Text>
                            </View>
                            <View style={{marginHorizontal: 5, alignItems: 'center',justifyContent: 'center', height: 30, width: 60, borderWidth: 0.5, borderColor: '#dddddd', borderRadius: 5}}>
                                <Text>16:30</Text>
                            </View>
                            <View style={{marginHorizontal: 5, alignItems: 'center',justifyContent: 'center', height: 30, width: 60, borderWidth: 0.5, borderColor: '#dddddd', borderRadius: 5}}>
                                <Text>19:00</Text>
                            </View>
                            <View style={{marginHorizontal: 5, alignItems: 'center',justifyContent: 'center', height: 30, width: 60, borderWidth: 0.5, borderColor: '#dddddd', borderRadius: 5}}>
                                <Text>21:30</Text>
                            </View>
                        </ScrollView>
                    </View>
                </View>
            </View>
        </View>

        <View style={{ borderWidth: 0.5, borderColor: '#dddddd', marginHorizontal: 5, marginVertical: 10 }}>
            <View>
                <View style={{ flex: 1, flexDirection: 'row', marginHorizontal: 5, marginVertical: 5 }}>
                <Image source={require('../../assets/movie-poster/movie3.jpg')} style={{ height: 100, width: 70, borderRadius: 10 }}/>
                    <View style={{ marginLeft: 5}}>
                        <Text style={{ fontWeight: "bold", marginVertical: 10, marginHorizontal: 10, fontSize: 16 }}>FORD V FERRARI</Text>
                        <View style={{ flexDirection: 'row' }}>
                            <View style={{ flexDirection: 'column' }}>
                                <Text style={{ marginTop: 1, marginLeft: 10, color: 'gray', fontSize: 12 }}>Genre</Text>
                                <Text style={{ marginLeft: 10, color: 'gray', fontSize: 12 }}>Duration</Text>
                                <Text style={{ marginLeft: 10, color: 'gray', fontSize: 12 }}>Director</Text>
                            </View>
                            <View style={{ flexDirection: 'column' }}>
                                <Text style={{ marginTop: 1, marginLeft: 10, fontSize: 12 }}>Action, Biography, Drama</Text>
                                <Text style={{ marginLeft: 10, fontSize: 12 }}>2h 32m</Text>
                                <Text style={{ marginLeft: 10, fontSize: 12 }}>James Mangold</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={{ marginVertical: 7, marginHorizontal: 5 }}>
                    <Text style={{ fontWeight: "bold" }}>REGULAR 2D</Text>
                    <View style={{ marginVertical: 5, marginHorizontal: 3 }}>
                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                            <View style={{alignItems: 'center',justifyContent: 'center', height: 30, width: 60, borderWidth: 0.5, borderColor: '#dddddd', borderRadius: 5}}>
                                <Text>13:15</Text>
                            </View>
                            <View style={{marginHorizontal: 5, alignItems: 'center',justifyContent: 'center', height: 30, width: 60, borderWidth: 0.5, borderColor: '#dddddd', borderRadius: 5}}>
                                <Text>16:15</Text>
                            </View>
                            <View style={{marginHorizontal: 5, alignItems: 'center',justifyContent: 'center', height: 30, width: 60, borderWidth: 0.5, borderColor: '#dddddd', borderRadius: 5}}>
                                <Text>16:30</Text>
                            </View>
                            <View style={{marginHorizontal: 5, alignItems: 'center',justifyContent: 'center', height: 30, width: 60, borderWidth: 0.5, borderColor: '#dddddd', borderRadius: 5}}>
                                <Text>19:15</Text>
                            </View>
                        </ScrollView>
                    </View>
                </View>
            </View>
        </View>

        <View style={{ borderWidth: 0.5, borderColor: '#dddddd', marginHorizontal: 5, marginVertical: 10 }}>
            <View>
                <View style={{ flex: 1, flexDirection: 'row', marginHorizontal: 5, marginVertical: 5 }}>
                <Image source={require('../../assets/movie-poster/movie4.jpg')} style={{ height: 100, width: 70, borderRadius: 10 }}/>
                    <View style={{ marginLeft: 5}}>
                        <Text style={{ fontWeight: "bold", marginTop: 3, marginHorizontal: 10, fontSize: 16 }}>RUMAH KENTANG:</Text>
                        <Text style={{ fontWeight: "bold", marginBottom:10, marginHorizontal: 10, fontSize: 16 }}>THE BEGINNING</Text>
                        <View style={{ flexDirection: 'row' }}>
                            <View style={{ flexDirection: 'column' }}>
                                <Text style={{ marginTop: 1, marginLeft: 10, color: 'gray', fontSize: 12 }}>Genre</Text>
                                <Text style={{ marginLeft: 10, color: 'gray', fontSize: 12 }}>Duration</Text>
                                <Text style={{ marginLeft: 10, color: 'gray', fontSize: 12 }}>Director</Text>
                            </View>
                            <View style={{ flexDirection: 'column' }}>
                                <Text style={{ marginTop: 1, marginLeft: 10, fontSize: 12 }}>Horror</Text>
                                <Text style={{ marginLeft: 10, fontSize: 12 }}>1h 42m</Text>
                                <Text style={{ marginLeft: 10, fontSize: 12 }}>Rizal Mantovani</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={{ marginVertical: 7, marginHorizontal: 5 }}>
                    <Text style={{ fontWeight: "bold" }}>REGULAR 2D</Text>
                    <View style={{ marginVertical: 5, marginHorizontal: 3 }}>
                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                            <View style={{alignItems: 'center',justifyContent: 'center', height: 30, width: 60, borderWidth: 0.5, borderColor: '#dddddd', borderRadius: 5}}>
                                <Text>11:00</Text>
                            </View>
                            <View style={{marginHorizontal: 5, alignItems: 'center',justifyContent: 'center', height: 30, width: 60, borderWidth: 0.5, borderColor: '#dddddd', borderRadius: 5}}>
                                <Text>11:45</Text>
                            </View>
                            <View style={{marginHorizontal: 5, alignItems: 'center',justifyContent: 'center', height: 30, width: 60, borderWidth: 0.5, borderColor: '#dddddd', borderRadius: 5}}>
                                <Text>15:20</Text>
                            </View>
                            <View style={{marginHorizontal: 5, alignItems: 'center',justifyContent: 'center', height: 30, width: 60, borderWidth: 0.5, borderColor: '#dddddd', borderRadius: 5}}>
                                <Text>17:30</Text>
                            </View>
                            <View style={{marginHorizontal: 5, alignItems: 'center',justifyContent: 'center', height: 30, width: 60, borderWidth: 0.5, borderColor: '#dddddd', borderRadius: 5}}>
                                <Text>18:30</Text>
                            </View>
                            <View style={{marginHorizontal: 5, alignItems: 'center',justifyContent: 'center', height: 30, width: 60, borderWidth: 0.5, borderColor: '#dddddd', borderRadius: 5}}>
                                <Text>22:00</Text>
                            </View>
                        </ScrollView>
                    </View>
                </View>
            </View>
        </View>
    </View>
)

const THURSDAY = (
    <View>
        <Text style={{ marginLeft: 10, marginTop: 10, fontWeight: "bold" }}>THURSDAY</Text>
        <View style={{ borderWidth: 0.5, borderColor: '#dddddd', marginHorizontal: 5, marginVertical: 10 }}>
            <View>
                <View style={{ flex: 1, flexDirection: 'row', marginHorizontal: 5, marginVertical: 5 }}>
                <Image source={require('../../assets/movie-poster/movie1.jpg')} style={{ height: 100, width: 70, borderRadius: 10 }}/>
                    <View style={{ marginLeft: 5}}>
                        <Text style={{ fontWeight: "bold", marginVertical: 10, marginHorizontal: 10, fontSize: 16 }}>FROZEN II</Text>
                        <View style={{ flexDirection: 'row' }}>
                            <View style={{ flexDirection: 'column' }}>
                                <Text style={{ marginTop: 1, marginLeft: 10, color: 'gray', fontSize: 12 }}>Genre</Text>
                                <Text style={{ marginLeft: 10, color: 'gray', fontSize: 12 }}>Duration</Text>
                                <Text style={{ marginLeft: 10, color: 'gray', fontSize: 12 }}>Director</Text>
                            </View>
                            <View style={{ flexDirection: 'column' }}>
                                <Text style={{ marginTop: 1, marginLeft: 10, fontSize: 12 }}>Animation, Adventure, Comedy</Text>
                                <Text style={{ marginLeft: 10, fontSize: 12 }}>1h 43m</Text>
                                <Text style={{ marginLeft: 10, fontSize: 12 }}>Chris Buck, Jennifer Lee</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={{ marginVertical: 7, marginHorizontal: 5 }}>
                    <Text style={{ fontWeight: "bold" }}>REGULAR 2D</Text>
                    <View style={{ marginVertical: 5, marginHorizontal: 3 }}>
                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                            <View style={{alignItems: 'center',justifyContent: 'center', height: 30, width: 60, borderWidth: 0.5, borderColor: '#dddddd', borderRadius: 5}}>
                                <Text>9:20</Text>
                            </View>
                            <View style={{marginHorizontal: 5, alignItems: 'center',justifyContent: 'center', height: 30, width: 60, borderWidth: 0.5, borderColor: '#dddddd', borderRadius: 5}}>
                                <Text>11:30</Text>
                            </View>
                            <View style={{marginHorizontal: 5, alignItems: 'center',justifyContent: 'center', height: 30, width: 60, borderWidth: 0.5, borderColor: '#dddddd', borderRadius: 5}}>
                                <Text>13:45</Text>
                            </View>
                            <View style={{marginHorizontal: 5, alignItems: 'center',justifyContent: 'center', height: 30, width: 60, borderWidth: 0.5, borderColor: '#dddddd', borderRadius: 5}}>
                                <Text>16:00</Text>
                            </View>
                            <View style={{marginHorizontal: 5, alignItems: 'center',justifyContent: 'center', height: 30, width: 60, borderWidth: 0.5, borderColor: '#dddddd', borderRadius: 5}}>
                                <Text>18:15</Text>
                            </View>
                            <View style={{marginHorizontal: 5, alignItems: 'center',justifyContent: 'center', height: 30, width: 60, borderWidth: 0.5, borderColor: '#dddddd', borderRadius: 5}}>
                                <Text>20:30</Text>
                            </View>
                            <View style={{marginHorizontal: 5, alignItems: 'center',justifyContent: 'center', height: 30, width: 60, borderWidth: 0.5, borderColor: '#dddddd', borderRadius: 5}}>
                                <Text>22:45</Text>
                            </View>
                        </ScrollView>
                    </View>
                </View>
            </View>
        </View>

        <View style={{ borderWidth: 0.5, borderColor: '#dddddd', marginHorizontal: 5, marginVertical: 10 }}>
            <View>
                <View style={{ flex: 1, flexDirection: 'row', marginHorizontal: 5, marginVertical: 5 }}>
                <Image source={require('../../assets/movie-poster/movie2.jpg')} style={{ height: 100, width: 70, borderRadius: 10 }}/>
                    <View style={{ marginLeft: 5}}>
                        <Text style={{ fontWeight: "bold", marginVertical: 10, marginHorizontal: 10, fontSize: 16 }}>CHARLIE'S ANGELS</Text>
                        <View style={{ flexDirection: 'row' }}>
                            <View style={{ flexDirection: 'column' }}>
                                <Text style={{ marginTop: 1, marginLeft: 10, color: 'gray', fontSize: 12 }}>Genre</Text>
                                <Text style={{ marginLeft: 10, color: 'gray', fontSize: 12 }}>Duration</Text>
                                <Text style={{ marginLeft: 10, color: 'gray', fontSize: 12 }}>Director</Text>
                            </View>
                            <View style={{ flexDirection: 'column' }}>
                                <Text style={{ marginTop: 1, marginLeft: 10, fontSize: 12 }}>Action, Adventure, Comedy</Text>
                                <Text style={{ marginLeft: 10, fontSize: 12 }}>1h 58m</Text>
                                <Text style={{ marginLeft: 10, fontSize: 12 }}>Elizabeth Banks</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={{ marginVertical: 7, marginHorizontal: 5 }}>
                    <Text style={{ fontWeight: "bold" }}>REGULAR 2D</Text>
                    <View style={{ marginVertical: 5, marginHorizontal: 3 }}>
                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                            <View style={{alignItems: 'center',justifyContent: 'center', height: 30, width: 60, borderWidth: 0.5, borderColor: '#dddddd', borderRadius: 5}}>
                                <Text>11:35</Text>
                            </View>
                            <View style={{marginHorizontal: 5, alignItems: 'center',justifyContent: 'center', height: 30, width: 60, borderWidth: 0.5, borderColor: '#dddddd', borderRadius: 5}}>
                                <Text>14:00</Text>
                            </View>
                            <View style={{marginHorizontal: 5, alignItems: 'center',justifyContent: 'center', height: 30, width: 60, borderWidth: 0.5, borderColor: '#dddddd', borderRadius: 5}}>
                                <Text>16:30</Text>
                            </View>
                            <View style={{marginHorizontal: 5, alignItems: 'center',justifyContent: 'center', height: 30, width: 60, borderWidth: 0.5, borderColor: '#dddddd', borderRadius: 5}}>
                                <Text>19:00</Text>
                            </View>
                            <View style={{marginHorizontal: 5, alignItems: 'center',justifyContent: 'center', height: 30, width: 60, borderWidth: 0.5, borderColor: '#dddddd', borderRadius: 5}}>
                                <Text>21:30</Text>
                            </View>
                        </ScrollView>
                    </View>
                </View>
            </View>
        </View>

        <View style={{ borderWidth: 0.5, borderColor: '#dddddd', marginHorizontal: 5, marginVertical: 10 }}>
            <View>
                <View style={{ flex: 1, flexDirection: 'row', marginHorizontal: 5, marginVertical: 5 }}>
                <Image source={require('../../assets/movie-poster/movie3.jpg')} style={{ height: 100, width: 70, borderRadius: 10 }}/>
                    <View style={{ marginLeft: 5}}>
                        <Text style={{ fontWeight: "bold", marginVertical: 10, marginHorizontal: 10, fontSize: 16 }}>FORD V FERRARI</Text>
                        <View style={{ flexDirection: 'row' }}>
                            <View style={{ flexDirection: 'column' }}>
                                <Text style={{ marginTop: 1, marginLeft: 10, color: 'gray', fontSize: 12 }}>Genre</Text>
                                <Text style={{ marginLeft: 10, color: 'gray', fontSize: 12 }}>Duration</Text>
                                <Text style={{ marginLeft: 10, color: 'gray', fontSize: 12 }}>Director</Text>
                            </View>
                            <View style={{ flexDirection: 'column' }}>
                                <Text style={{ marginTop: 1, marginLeft: 10, fontSize: 12 }}>Action, Biography, Drama</Text>
                                <Text style={{ marginLeft: 10, fontSize: 12 }}>2h 32m</Text>
                                <Text style={{ marginLeft: 10, fontSize: 12 }}>James Mangold</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={{ marginVertical: 7, marginHorizontal: 5 }}>
                    <Text style={{ fontWeight: "bold" }}>REGULAR 2D</Text>
                    <View style={{ marginVertical: 5, marginHorizontal: 3 }}>
                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                            <View style={{alignItems: 'center',justifyContent: 'center', height: 30, width: 60, borderWidth: 0.5, borderColor: '#dddddd', borderRadius: 5}}>
                                <Text>13:15</Text>
                            </View>
                            <View style={{marginHorizontal: 5, alignItems: 'center',justifyContent: 'center', height: 30, width: 60, borderWidth: 0.5, borderColor: '#dddddd', borderRadius: 5}}>
                                <Text>16:15</Text>
                            </View>
                            <View style={{marginHorizontal: 5, alignItems: 'center',justifyContent: 'center', height: 30, width: 60, borderWidth: 0.5, borderColor: '#dddddd', borderRadius: 5}}>
                                <Text>16:30</Text>
                            </View>
                            <View style={{marginHorizontal: 5, alignItems: 'center',justifyContent: 'center', height: 30, width: 60, borderWidth: 0.5, borderColor: '#dddddd', borderRadius: 5}}>
                                <Text>19:15</Text>
                            </View>
                        </ScrollView>
                    </View>
                </View>
            </View>
        </View>

        <View style={{ borderWidth: 0.5, borderColor: '#dddddd', marginHorizontal: 5, marginVertical: 10 }}>
            <View>
                <View style={{ flex: 1, flexDirection: 'row', marginHorizontal: 5, marginVertical: 5 }}>
                <Image source={require('../../assets/movie-poster/movie4.jpg')} style={{ height: 100, width: 70, borderRadius: 10 }}/>
                    <View style={{ marginLeft: 5}}>
                        <Text style={{ fontWeight: "bold", marginTop: 3, marginHorizontal: 10, fontSize: 16 }}>RUMAH KENTANG:</Text>
                        <Text style={{ fontWeight: "bold", marginBottom:10, marginHorizontal: 10, fontSize: 16 }}>THE BEGINNING</Text>
                        <View style={{ flexDirection: 'row' }}>
                            <View style={{ flexDirection: 'column' }}>
                                <Text style={{ marginTop: 1, marginLeft: 10, color: 'gray', fontSize: 12 }}>Genre</Text>
                                <Text style={{ marginLeft: 10, color: 'gray', fontSize: 12 }}>Duration</Text>
                                <Text style={{ marginLeft: 10, color: 'gray', fontSize: 12 }}>Director</Text>
                            </View>
                            <View style={{ flexDirection: 'column' }}>
                                <Text style={{ marginTop: 1, marginLeft: 10, fontSize: 12 }}>Horror</Text>
                                <Text style={{ marginLeft: 10, fontSize: 12 }}>1h 42m</Text>
                                <Text style={{ marginLeft: 10, fontSize: 12 }}>Rizal Mantovani</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={{ marginVertical: 7, marginHorizontal: 5 }}>
                    <Text style={{ fontWeight: "bold" }}>REGULAR 2D</Text>
                    <View style={{ marginVertical: 5, marginHorizontal: 3 }}>
                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                            <View style={{alignItems: 'center',justifyContent: 'center', height: 30, width: 60, borderWidth: 0.5, borderColor: '#dddddd', borderRadius: 5}}>
                                <Text>11:00</Text>
                            </View>
                            <View style={{marginHorizontal: 5, alignItems: 'center',justifyContent: 'center', height: 30, width: 60, borderWidth: 0.5, borderColor: '#dddddd', borderRadius: 5}}>
                                <Text>11:45</Text>
                            </View>
                            <View style={{marginHorizontal: 5, alignItems: 'center',justifyContent: 'center', height: 30, width: 60, borderWidth: 0.5, borderColor: '#dddddd', borderRadius: 5}}>
                                <Text>15:20</Text>
                            </View>
                            <View style={{marginHorizontal: 5, alignItems: 'center',justifyContent: 'center', height: 30, width: 60, borderWidth: 0.5, borderColor: '#dddddd', borderRadius: 5}}>
                                <Text>17:30</Text>
                            </View>
                            <View style={{marginHorizontal: 5, alignItems: 'center',justifyContent: 'center', height: 30, width: 60, borderWidth: 0.5, borderColor: '#dddddd', borderRadius: 5}}>
                                <Text>18:30</Text>
                            </View>
                            <View style={{marginHorizontal: 5, alignItems: 'center',justifyContent: 'center', height: 30, width: 60, borderWidth: 0.5, borderColor: '#dddddd', borderRadius: 5}}>
                                <Text>22:00</Text>
                            </View>
                        </ScrollView>
                    </View>
                </View>
            </View>
        </View>
    </View>
)

const FRIDAY = (
    <View>
        <Text style={{ marginLeft: 10, marginTop: 10, fontWeight: "bold" }}>FRIDAY</Text>
        <View style={{ borderWidth: 0.5, borderColor: '#dddddd', marginHorizontal: 5, marginVertical: 10 }}>
            <View>
                <View style={{ flex: 1, flexDirection: 'row', marginHorizontal: 5, marginVertical: 5 }}>
                <Image source={require('../../assets/movie-poster/movie1.jpg')} style={{ height: 100, width: 70, borderRadius: 10 }}/>
                    <View style={{ marginLeft: 5}}>
                        <Text style={{ fontWeight: "bold", marginVertical: 10, marginHorizontal: 10, fontSize: 16 }}>FROZEN II</Text>
                        <View style={{ flexDirection: 'row' }}>
                            <View style={{ flexDirection: 'column' }}>
                                <Text style={{ marginTop: 1, marginLeft: 10, color: 'gray', fontSize: 12 }}>Genre</Text>
                                <Text style={{ marginLeft: 10, color: 'gray', fontSize: 12 }}>Duration</Text>
                                <Text style={{ marginLeft: 10, color: 'gray', fontSize: 12 }}>Director</Text>
                            </View>
                            <View style={{ flexDirection: 'column' }}>
                                <Text style={{ marginTop: 1, marginLeft: 10, fontSize: 12 }}>Animation, Adventure, Comedy</Text>
                                <Text style={{ marginLeft: 10, fontSize: 12 }}>1h 43m</Text>
                                <Text style={{ marginLeft: 10, fontSize: 12 }}>Chris Buck, Jennifer Lee</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={{ marginVertical: 7, marginHorizontal: 5 }}>
                    <Text style={{ fontWeight: "bold" }}>REGULAR 2D</Text>
                    <View style={{ marginVertical: 5, marginHorizontal: 3 }}>
                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                            <View style={{alignItems: 'center',justifyContent: 'center', height: 30, width: 60, borderWidth: 0.5, borderColor: '#dddddd', borderRadius: 5}}>
                                <Text>9:20</Text>
                            </View>
                            <View style={{marginHorizontal: 5, alignItems: 'center',justifyContent: 'center', height: 30, width: 60, borderWidth: 0.5, borderColor: '#dddddd', borderRadius: 5}}>
                                <Text>11:30</Text>
                            </View>
                            <View style={{marginHorizontal: 5, alignItems: 'center',justifyContent: 'center', height: 30, width: 60, borderWidth: 0.5, borderColor: '#dddddd', borderRadius: 5}}>
                                <Text>13:45</Text>
                            </View>
                            <View style={{marginHorizontal: 5, alignItems: 'center',justifyContent: 'center', height: 30, width: 60, borderWidth: 0.5, borderColor: '#dddddd', borderRadius: 5}}>
                                <Text>16:00</Text>
                            </View>
                            <View style={{marginHorizontal: 5, alignItems: 'center',justifyContent: 'center', height: 30, width: 60, borderWidth: 0.5, borderColor: '#dddddd', borderRadius: 5}}>
                                <Text>18:15</Text>
                            </View>
                            <View style={{marginHorizontal: 5, alignItems: 'center',justifyContent: 'center', height: 30, width: 60, borderWidth: 0.5, borderColor: '#dddddd', borderRadius: 5}}>
                                <Text>20:30</Text>
                            </View>
                            <View style={{marginHorizontal: 5, alignItems: 'center',justifyContent: 'center', height: 30, width: 60, borderWidth: 0.5, borderColor: '#dddddd', borderRadius: 5}}>
                                <Text>22:45</Text>
                            </View>
                        </ScrollView>
                    </View>
                </View>
            </View>
        </View>

        <View style={{ borderWidth: 0.5, borderColor: '#dddddd', marginHorizontal: 5, marginVertical: 10 }}>
            <View>
                <View style={{ flex: 1, flexDirection: 'row', marginHorizontal: 5, marginVertical: 5 }}>
                <Image source={require('../../assets/movie-poster/movie2.jpg')} style={{ height: 100, width: 70, borderRadius: 10 }}/>
                    <View style={{ marginLeft: 5}}>
                        <Text style={{ fontWeight: "bold", marginVertical: 10, marginHorizontal: 10, fontSize: 16 }}>CHARLIE'S ANGELS</Text>
                        <View style={{ flexDirection: 'row' }}>
                            <View style={{ flexDirection: 'column' }}>
                                <Text style={{ marginTop: 1, marginLeft: 10, color: 'gray', fontSize: 12 }}>Genre</Text>
                                <Text style={{ marginLeft: 10, color: 'gray', fontSize: 12 }}>Duration</Text>
                                <Text style={{ marginLeft: 10, color: 'gray', fontSize: 12 }}>Director</Text>
                            </View>
                            <View style={{ flexDirection: 'column' }}>
                                <Text style={{ marginTop: 1, marginLeft: 10, fontSize: 12 }}>Action, Adventure, Comedy</Text>
                                <Text style={{ marginLeft: 10, fontSize: 12 }}>1h 58m</Text>
                                <Text style={{ marginLeft: 10, fontSize: 12 }}>Elizabeth Banks</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={{ marginVertical: 7, marginHorizontal: 5 }}>
                    <Text style={{ fontWeight: "bold" }}>REGULAR 2D</Text>
                    <View style={{ marginVertical: 5, marginHorizontal: 3 }}>
                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                            <View style={{alignItems: 'center',justifyContent: 'center', height: 30, width: 60, borderWidth: 0.5, borderColor: '#dddddd', borderRadius: 5}}>
                                <Text>11:35</Text>
                            </View>
                            <View style={{marginHorizontal: 5, alignItems: 'center',justifyContent: 'center', height: 30, width: 60, borderWidth: 0.5, borderColor: '#dddddd', borderRadius: 5}}>
                                <Text>14:00</Text>
                            </View>
                            <View style={{marginHorizontal: 5, alignItems: 'center',justifyContent: 'center', height: 30, width: 60, borderWidth: 0.5, borderColor: '#dddddd', borderRadius: 5}}>
                                <Text>16:30</Text>
                            </View>
                            <View style={{marginHorizontal: 5, alignItems: 'center',justifyContent: 'center', height: 30, width: 60, borderWidth: 0.5, borderColor: '#dddddd', borderRadius: 5}}>
                                <Text>19:00</Text>
                            </View>
                            <View style={{marginHorizontal: 5, alignItems: 'center',justifyContent: 'center', height: 30, width: 60, borderWidth: 0.5, borderColor: '#dddddd', borderRadius: 5}}>
                                <Text>21:30</Text>
                            </View>
                        </ScrollView>
                    </View>
                </View>
            </View>
        </View>

        <View style={{ borderWidth: 0.5, borderColor: '#dddddd', marginHorizontal: 5, marginVertical: 10 }}>
            <View>
                <View style={{ flex: 1, flexDirection: 'row', marginHorizontal: 5, marginVertical: 5 }}>
                <Image source={require('../../assets/movie-poster/movie3.jpg')} style={{ height: 100, width: 70, borderRadius: 10 }}/>
                    <View style={{ marginLeft: 5}}>
                        <Text style={{ fontWeight: "bold", marginVertical: 10, marginHorizontal: 10, fontSize: 16 }}>FORD V FERRARI</Text>
                        <View style={{ flexDirection: 'row' }}>
                            <View style={{ flexDirection: 'column' }}>
                                <Text style={{ marginTop: 1, marginLeft: 10, color: 'gray', fontSize: 12 }}>Genre</Text>
                                <Text style={{ marginLeft: 10, color: 'gray', fontSize: 12 }}>Duration</Text>
                                <Text style={{ marginLeft: 10, color: 'gray', fontSize: 12 }}>Director</Text>
                            </View>
                            <View style={{ flexDirection: 'column' }}>
                                <Text style={{ marginTop: 1, marginLeft: 10, fontSize: 12 }}>Action, Biography, Drama</Text>
                                <Text style={{ marginLeft: 10, fontSize: 12 }}>2h 32m</Text>
                                <Text style={{ marginLeft: 10, fontSize: 12 }}>James Mangold</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={{ marginVertical: 7, marginHorizontal: 5 }}>
                    <Text style={{ fontWeight: "bold" }}>REGULAR 2D</Text>
                    <View style={{ marginVertical: 5, marginHorizontal: 3 }}>
                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                            <View style={{alignItems: 'center',justifyContent: 'center', height: 30, width: 60, borderWidth: 0.5, borderColor: '#dddddd', borderRadius: 5}}>
                                <Text>13:15</Text>
                            </View>
                            <View style={{marginHorizontal: 5, alignItems: 'center',justifyContent: 'center', height: 30, width: 60, borderWidth: 0.5, borderColor: '#dddddd', borderRadius: 5}}>
                                <Text>16:15</Text>
                            </View>
                            <View style={{marginHorizontal: 5, alignItems: 'center',justifyContent: 'center', height: 30, width: 60, borderWidth: 0.5, borderColor: '#dddddd', borderRadius: 5}}>
                                <Text>16:30</Text>
                            </View>
                            <View style={{marginHorizontal: 5, alignItems: 'center',justifyContent: 'center', height: 30, width: 60, borderWidth: 0.5, borderColor: '#dddddd', borderRadius: 5}}>
                                <Text>19:15</Text>
                            </View>
                        </ScrollView>
                    </View>
                </View>
            </View>
        </View>

        <View style={{ borderWidth: 0.5, borderColor: '#dddddd', marginHorizontal: 5, marginVertical: 10 }}>
            <View>
                <View style={{ flex: 1, flexDirection: 'row', marginHorizontal: 5, marginVertical: 5 }}>
                <Image source={require('../../assets/movie-poster/movie4.jpg')} style={{ height: 100, width: 70, borderRadius: 10 }}/>
                    <View style={{ marginLeft: 5}}>
                        <Text style={{ fontWeight: "bold", marginTop: 3, marginHorizontal: 10, fontSize: 16 }}>RUMAH KENTANG:</Text>
                        <Text style={{ fontWeight: "bold", marginBottom:10, marginHorizontal: 10, fontSize: 16 }}>THE BEGINNING</Text>
                        <View style={{ flexDirection: 'row' }}>
                            <View style={{ flexDirection: 'column' }}>
                                <Text style={{ marginTop: 1, marginLeft: 10, color: 'gray', fontSize: 12 }}>Genre</Text>
                                <Text style={{ marginLeft: 10, color: 'gray', fontSize: 12 }}>Duration</Text>
                                <Text style={{ marginLeft: 10, color: 'gray', fontSize: 12 }}>Director</Text>
                            </View>
                            <View style={{ flexDirection: 'column' }}>
                                <Text style={{ marginTop: 1, marginLeft: 10, fontSize: 12 }}>Horror</Text>
                                <Text style={{ marginLeft: 10, fontSize: 12 }}>1h 42m</Text>
                                <Text style={{ marginLeft: 10, fontSize: 12 }}>Rizal Mantovani</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={{ marginVertical: 7, marginHorizontal: 5 }}>
                    <Text style={{ fontWeight: "bold" }}>REGULAR 2D</Text>
                    <View style={{ marginVertical: 5, marginHorizontal: 3 }}>
                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                            <View style={{alignItems: 'center',justifyContent: 'center', height: 30, width: 60, borderWidth: 0.5, borderColor: '#dddddd', borderRadius: 5}}>
                                <Text>11:00</Text>
                            </View>
                            <View style={{marginHorizontal: 5, alignItems: 'center',justifyContent: 'center', height: 30, width: 60, borderWidth: 0.5, borderColor: '#dddddd', borderRadius: 5}}>
                                <Text>11:45</Text>
                            </View>
                            <View style={{marginHorizontal: 5, alignItems: 'center',justifyContent: 'center', height: 30, width: 60, borderWidth: 0.5, borderColor: '#dddddd', borderRadius: 5}}>
                                <Text>15:20</Text>
                            </View>
                            <View style={{marginHorizontal: 5, alignItems: 'center',justifyContent: 'center', height: 30, width: 60, borderWidth: 0.5, borderColor: '#dddddd', borderRadius: 5}}>
                                <Text>17:30</Text>
                            </View>
                            <View style={{marginHorizontal: 5, alignItems: 'center',justifyContent: 'center', height: 30, width: 60, borderWidth: 0.5, borderColor: '#dddddd', borderRadius: 5}}>
                                <Text>18:30</Text>
                            </View>
                            <View style={{marginHorizontal: 5, alignItems: 'center',justifyContent: 'center', height: 30, width: 60, borderWidth: 0.5, borderColor: '#dddddd', borderRadius: 5}}>
                                <Text>22:00</Text>
                            </View>
                        </ScrollView>
                    </View>
                </View>
            </View>
        </View>
    </View>
)

const SATURDAY = (
    <View>
        <Text style={{ marginLeft: 10, marginTop: 10, fontWeight: "bold" }}>SATURDAY</Text>
        <View style={{ borderWidth: 0.5, borderColor: '#dddddd', marginHorizontal: 5, marginVertical: 10 }}>
            <View>
                <View style={{ flex: 1, flexDirection: 'row', marginHorizontal: 5, marginVertical: 5 }}>
                <Image source={require('../../assets/movie-poster/movie1.jpg')} style={{ height: 100, width: 70, borderRadius: 10 }}/>
                    <View style={{ marginLeft: 5}}>
                        <Text style={{ fontWeight: "bold", marginVertical: 10, marginHorizontal: 10, fontSize: 16 }}>FROZEN II</Text>
                        <View style={{ flexDirection: 'row' }}>
                            <View style={{ flexDirection: 'column' }}>
                                <Text style={{ marginTop: 1, marginLeft: 10, color: 'gray', fontSize: 12 }}>Genre</Text>
                                <Text style={{ marginLeft: 10, color: 'gray', fontSize: 12 }}>Duration</Text>
                                <Text style={{ marginLeft: 10, color: 'gray', fontSize: 12 }}>Director</Text>
                            </View>
                            <View style={{ flexDirection: 'column' }}>
                                <Text style={{ marginTop: 1, marginLeft: 10, fontSize: 12 }}>Animation, Adventure, Comedy</Text>
                                <Text style={{ marginLeft: 10, fontSize: 12 }}>1h 43m</Text>
                                <Text style={{ marginLeft: 10, fontSize: 12 }}>Chris Buck, Jennifer Lee</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={{ marginVertical: 7, marginHorizontal: 5 }}>
                    <Text style={{ fontWeight: "bold" }}>REGULAR 2D</Text>
                    <View style={{ marginVertical: 5, marginHorizontal: 3 }}>
                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                            <View style={{alignItems: 'center',justifyContent: 'center', height: 30, width: 60, borderWidth: 0.5, borderColor: '#dddddd', borderRadius: 5}}>
                                <Text>9:20</Text>
                            </View>
                            <View style={{marginHorizontal: 5, alignItems: 'center',justifyContent: 'center', height: 30, width: 60, borderWidth: 0.5, borderColor: '#dddddd', borderRadius: 5}}>
                                <Text>11:30</Text>
                            </View>
                            <View style={{marginHorizontal: 5, alignItems: 'center',justifyContent: 'center', height: 30, width: 60, borderWidth: 0.5, borderColor: '#dddddd', borderRadius: 5}}>
                                <Text>13:45</Text>
                            </View>
                            <View style={{marginHorizontal: 5, alignItems: 'center',justifyContent: 'center', height: 30, width: 60, borderWidth: 0.5, borderColor: '#dddddd', borderRadius: 5}}>
                                <Text>16:00</Text>
                            </View>
                            <View style={{marginHorizontal: 5, alignItems: 'center',justifyContent: 'center', height: 30, width: 60, borderWidth: 0.5, borderColor: '#dddddd', borderRadius: 5}}>
                                <Text>18:15</Text>
                            </View>
                            <View style={{marginHorizontal: 5, alignItems: 'center',justifyContent: 'center', height: 30, width: 60, borderWidth: 0.5, borderColor: '#dddddd', borderRadius: 5}}>
                                <Text>20:30</Text>
                            </View>
                            <View style={{marginHorizontal: 5, alignItems: 'center',justifyContent: 'center', height: 30, width: 60, borderWidth: 0.5, borderColor: '#dddddd', borderRadius: 5}}>
                                <Text>22:45</Text>
                            </View>
                        </ScrollView>
                    </View>
                </View>
            </View>
        </View>

        <View style={{ borderWidth: 0.5, borderColor: '#dddddd', marginHorizontal: 5, marginVertical: 10 }}>
            <View>
                <View style={{ flex: 1, flexDirection: 'row', marginHorizontal: 5, marginVertical: 5 }}>
                <Image source={require('../../assets/movie-poster/movie2.jpg')} style={{ height: 100, width: 70, borderRadius: 10 }}/>
                    <View style={{ marginLeft: 5}}>
                        <Text style={{ fontWeight: "bold", marginVertical: 10, marginHorizontal: 10, fontSize: 16 }}>CHARLIE'S ANGELS</Text>
                        <View style={{ flexDirection: 'row' }}>
                            <View style={{ flexDirection: 'column' }}>
                                <Text style={{ marginTop: 1, marginLeft: 10, color: 'gray', fontSize: 12 }}>Genre</Text>
                                <Text style={{ marginLeft: 10, color: 'gray', fontSize: 12 }}>Duration</Text>
                                <Text style={{ marginLeft: 10, color: 'gray', fontSize: 12 }}>Director</Text>
                            </View>
                            <View style={{ flexDirection: 'column' }}>
                                <Text style={{ marginTop: 1, marginLeft: 10, fontSize: 12 }}>Action, Adventure, Comedy</Text>
                                <Text style={{ marginLeft: 10, fontSize: 12 }}>1h 58m</Text>
                                <Text style={{ marginLeft: 10, fontSize: 12 }}>Elizabeth Banks</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={{ marginVertical: 7, marginHorizontal: 5 }}>
                    <Text style={{ fontWeight: "bold" }}>REGULAR 2D</Text>
                    <View style={{ marginVertical: 5, marginHorizontal: 3 }}>
                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                            <View style={{alignItems: 'center',justifyContent: 'center', height: 30, width: 60, borderWidth: 0.5, borderColor: '#dddddd', borderRadius: 5}}>
                                <Text>11:35</Text>
                            </View>
                            <View style={{marginHorizontal: 5, alignItems: 'center',justifyContent: 'center', height: 30, width: 60, borderWidth: 0.5, borderColor: '#dddddd', borderRadius: 5}}>
                                <Text>14:00</Text>
                            </View>
                            <View style={{marginHorizontal: 5, alignItems: 'center',justifyContent: 'center', height: 30, width: 60, borderWidth: 0.5, borderColor: '#dddddd', borderRadius: 5}}>
                                <Text>16:30</Text>
                            </View>
                            <View style={{marginHorizontal: 5, alignItems: 'center',justifyContent: 'center', height: 30, width: 60, borderWidth: 0.5, borderColor: '#dddddd', borderRadius: 5}}>
                                <Text>19:00</Text>
                            </View>
                            <View style={{marginHorizontal: 5, alignItems: 'center',justifyContent: 'center', height: 30, width: 60, borderWidth: 0.5, borderColor: '#dddddd', borderRadius: 5}}>
                                <Text>21:30</Text>
                            </View>
                        </ScrollView>
                    </View>
                </View>
            </View>
        </View>

        <View style={{ borderWidth: 0.5, borderColor: '#dddddd', marginHorizontal: 5, marginVertical: 10 }}>
            <View>
                <View style={{ flex: 1, flexDirection: 'row', marginHorizontal: 5, marginVertical: 5 }}>
                <Image source={require('../../assets/movie-poster/movie3.jpg')} style={{ height: 100, width: 70, borderRadius: 10 }}/>
                    <View style={{ marginLeft: 5}}>
                        <Text style={{ fontWeight: "bold", marginVertical: 10, marginHorizontal: 10, fontSize: 16 }}>FORD V FERRARI</Text>
                        <View style={{ flexDirection: 'row' }}>
                            <View style={{ flexDirection: 'column' }}>
                                <Text style={{ marginTop: 1, marginLeft: 10, color: 'gray', fontSize: 12 }}>Genre</Text>
                                <Text style={{ marginLeft: 10, color: 'gray', fontSize: 12 }}>Duration</Text>
                                <Text style={{ marginLeft: 10, color: 'gray', fontSize: 12 }}>Director</Text>
                            </View>
                            <View style={{ flexDirection: 'column' }}>
                                <Text style={{ marginTop: 1, marginLeft: 10, fontSize: 12 }}>Action, Biography, Drama</Text>
                                <Text style={{ marginLeft: 10, fontSize: 12 }}>2h 32m</Text>
                                <Text style={{ marginLeft: 10, fontSize: 12 }}>James Mangold</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={{ marginVertical: 7, marginHorizontal: 5 }}>
                    <Text style={{ fontWeight: "bold" }}>REGULAR 2D</Text>
                    <View style={{ marginVertical: 5, marginHorizontal: 3 }}>
                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                            <View style={{alignItems: 'center',justifyContent: 'center', height: 30, width: 60, borderWidth: 0.5, borderColor: '#dddddd', borderRadius: 5}}>
                                <Text>13:15</Text>
                            </View>
                            <View style={{marginHorizontal: 5, alignItems: 'center',justifyContent: 'center', height: 30, width: 60, borderWidth: 0.5, borderColor: '#dddddd', borderRadius: 5}}>
                                <Text>16:15</Text>
                            </View>
                            <View style={{marginHorizontal: 5, alignItems: 'center',justifyContent: 'center', height: 30, width: 60, borderWidth: 0.5, borderColor: '#dddddd', borderRadius: 5}}>
                                <Text>16:30</Text>
                            </View>
                            <View style={{marginHorizontal: 5, alignItems: 'center',justifyContent: 'center', height: 30, width: 60, borderWidth: 0.5, borderColor: '#dddddd', borderRadius: 5}}>
                                <Text>19:15</Text>
                            </View>
                        </ScrollView>
                    </View>
                </View>
            </View>
        </View>

        <View style={{ borderWidth: 0.5, borderColor: '#dddddd', marginHorizontal: 5, marginVertical: 10 }}>
            <View>
                <View style={{ flex: 1, flexDirection: 'row', marginHorizontal: 5, marginVertical: 5 }}>
                <Image source={require('../../assets/movie-poster/movie4.jpg')} style={{ height: 100, width: 70, borderRadius: 10 }}/>
                    <View style={{ marginLeft: 5}}>
                        <Text style={{ fontWeight: "bold", marginTop: 3, marginHorizontal: 10, fontSize: 16 }}>RUMAH KENTANG:</Text>
                        <Text style={{ fontWeight: "bold", marginBottom:10, marginHorizontal: 10, fontSize: 16 }}>THE BEGINNING</Text>
                        <View style={{ flexDirection: 'row' }}>
                            <View style={{ flexDirection: 'column' }}>
                                <Text style={{ marginTop: 1, marginLeft: 10, color: 'gray', fontSize: 12 }}>Genre</Text>
                                <Text style={{ marginLeft: 10, color: 'gray', fontSize: 12 }}>Duration</Text>
                                <Text style={{ marginLeft: 10, color: 'gray', fontSize: 12 }}>Director</Text>
                            </View>
                            <View style={{ flexDirection: 'column' }}>
                                <Text style={{ marginTop: 1, marginLeft: 10, fontSize: 12 }}>Horror</Text>
                                <Text style={{ marginLeft: 10, fontSize: 12 }}>1h 42m</Text>
                                <Text style={{ marginLeft: 10, fontSize: 12 }}>Rizal Mantovani</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={{ marginVertical: 7, marginHorizontal: 5 }}>
                    <Text style={{ fontWeight: "bold" }}>REGULAR 2D</Text>
                    <View style={{ marginVertical: 5, marginHorizontal: 3 }}>
                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                            <View style={{alignItems: 'center',justifyContent: 'center', height: 30, width: 60, borderWidth: 0.5, borderColor: '#dddddd', borderRadius: 5}}>
                                <Text>11:00</Text>
                            </View>
                            <View style={{marginHorizontal: 5, alignItems: 'center',justifyContent: 'center', height: 30, width: 60, borderWidth: 0.5, borderColor: '#dddddd', borderRadius: 5}}>
                                <Text>11:45</Text>
                            </View>
                            <View style={{marginHorizontal: 5, alignItems: 'center',justifyContent: 'center', height: 30, width: 60, borderWidth: 0.5, borderColor: '#dddddd', borderRadius: 5}}>
                                <Text>15:20</Text>
                            </View>
                            <View style={{marginHorizontal: 5, alignItems: 'center',justifyContent: 'center', height: 30, width: 60, borderWidth: 0.5, borderColor: '#dddddd', borderRadius: 5}}>
                                <Text>17:30</Text>
                            </View>
                            <View style={{marginHorizontal: 5, alignItems: 'center',justifyContent: 'center', height: 30, width: 60, borderWidth: 0.5, borderColor: '#dddddd', borderRadius: 5}}>
                                <Text>18:30</Text>
                            </View>
                            <View style={{marginHorizontal: 5, alignItems: 'center',justifyContent: 'center', height: 30, width: 60, borderWidth: 0.5, borderColor: '#dddddd', borderRadius: 5}}>
                                <Text>22:00</Text>
                            </View>
                        </ScrollView>
                    </View>
                </View>
            </View>
        </View>
    </View>
)

const SUNDAY = (
    <View>
        <Text style={{ marginLeft: 10, marginTop: 10, fontWeight: "bold" }}>SUNDAY</Text>
        <View style={{ borderWidth: 0.5, borderColor: '#dddddd', marginHorizontal: 5, marginVertical: 10 }}>
            <View>
                <View style={{ flex: 1, flexDirection: 'row', marginHorizontal: 5, marginVertical: 5 }}>
                <Image source={require('../../assets/movie-poster/movie1.jpg')} style={{ height: 100, width: 70, borderRadius: 10 }}/>
                    <View style={{ marginLeft: 5}}>
                        <Text style={{ fontWeight: "bold", marginVertical: 10, marginHorizontal: 10, fontSize: 16 }}>FROZEN II</Text>
                        <View style={{ flexDirection: 'row' }}>
                            <View style={{ flexDirection: 'column' }}>
                                <Text style={{ marginTop: 1, marginLeft: 10, color: 'gray', fontSize: 12 }}>Genre</Text>
                                <Text style={{ marginLeft: 10, color: 'gray', fontSize: 12 }}>Duration</Text>
                                <Text style={{ marginLeft: 10, color: 'gray', fontSize: 12 }}>Director</Text>
                            </View>
                            <View style={{ flexDirection: 'column' }}>
                                <Text style={{ marginTop: 1, marginLeft: 10, fontSize: 12 }}>Animation, Adventure, Comedy</Text>
                                <Text style={{ marginLeft: 10, fontSize: 12 }}>1h 43m</Text>
                                <Text style={{ marginLeft: 10, fontSize: 12 }}>Chris Buck, Jennifer Lee</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={{ marginVertical: 7, marginHorizontal: 5 }}>
                    <Text style={{ fontWeight: "bold" }}>REGULAR 2D</Text>
                    <View style={{ marginVertical: 5, marginHorizontal: 3 }}>
                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                            <View style={{alignItems: 'center',justifyContent: 'center', height: 30, width: 60, borderWidth: 0.5, borderColor: '#dddddd', borderRadius: 5}}>
                                <Text>9:20</Text>
                            </View>
                            <View style={{marginHorizontal: 5, alignItems: 'center',justifyContent: 'center', height: 30, width: 60, borderWidth: 0.5, borderColor: '#dddddd', borderRadius: 5}}>
                                <Text>11:30</Text>
                            </View>
                            <View style={{marginHorizontal: 5, alignItems: 'center',justifyContent: 'center', height: 30, width: 60, borderWidth: 0.5, borderColor: '#dddddd', borderRadius: 5}}>
                                <Text>13:45</Text>
                            </View>
                            <View style={{marginHorizontal: 5, alignItems: 'center',justifyContent: 'center', height: 30, width: 60, borderWidth: 0.5, borderColor: '#dddddd', borderRadius: 5}}>
                                <Text>16:00</Text>
                            </View>
                            <View style={{marginHorizontal: 5, alignItems: 'center',justifyContent: 'center', height: 30, width: 60, borderWidth: 0.5, borderColor: '#dddddd', borderRadius: 5}}>
                                <Text>18:15</Text>
                            </View>
                            <View style={{marginHorizontal: 5, alignItems: 'center',justifyContent: 'center', height: 30, width: 60, borderWidth: 0.5, borderColor: '#dddddd', borderRadius: 5}}>
                                <Text>20:30</Text>
                            </View>
                            <View style={{marginHorizontal: 5, alignItems: 'center',justifyContent: 'center', height: 30, width: 60, borderWidth: 0.5, borderColor: '#dddddd', borderRadius: 5}}>
                                <Text>22:45</Text>
                            </View>
                        </ScrollView>
                    </View>
                </View>
            </View>
        </View>

        <View style={{ borderWidth: 0.5, borderColor: '#dddddd', marginHorizontal: 5, marginVertical: 10 }}>
            <View>
                <View style={{ flex: 1, flexDirection: 'row', marginHorizontal: 5, marginVertical: 5 }}>
                <Image source={require('../../assets/movie-poster/movie2.jpg')} style={{ height: 100, width: 70, borderRadius: 10 }}/>
                    <View style={{ marginLeft: 5}}>
                        <Text style={{ fontWeight: "bold", marginVertical: 10, marginHorizontal: 10, fontSize: 16 }}>CHARLIE'S ANGELS</Text>
                        <View style={{ flexDirection: 'row' }}>
                            <View style={{ flexDirection: 'column' }}>
                                <Text style={{ marginTop: 1, marginLeft: 10, color: 'gray', fontSize: 12 }}>Genre</Text>
                                <Text style={{ marginLeft: 10, color: 'gray', fontSize: 12 }}>Duration</Text>
                                <Text style={{ marginLeft: 10, color: 'gray', fontSize: 12 }}>Director</Text>
                            </View>
                            <View style={{ flexDirection: 'column' }}>
                                <Text style={{ marginTop: 1, marginLeft: 10, fontSize: 12 }}>Action, Adventure, Comedy</Text>
                                <Text style={{ marginLeft: 10, fontSize: 12 }}>1h 58m</Text>
                                <Text style={{ marginLeft: 10, fontSize: 12 }}>Elizabeth Banks</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={{ marginVertical: 7, marginHorizontal: 5 }}>
                    <Text style={{ fontWeight: "bold" }}>REGULAR 2D</Text>
                    <View style={{ marginVertical: 5, marginHorizontal: 3 }}>
                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                            <View style={{alignItems: 'center',justifyContent: 'center', height: 30, width: 60, borderWidth: 0.5, borderColor: '#dddddd', borderRadius: 5}}>
                                <Text>11:35</Text>
                            </View>
                            <View style={{marginHorizontal: 5, alignItems: 'center',justifyContent: 'center', height: 30, width: 60, borderWidth: 0.5, borderColor: '#dddddd', borderRadius: 5}}>
                                <Text>14:00</Text>
                            </View>
                            <View style={{marginHorizontal: 5, alignItems: 'center',justifyContent: 'center', height: 30, width: 60, borderWidth: 0.5, borderColor: '#dddddd', borderRadius: 5}}>
                                <Text>16:30</Text>
                            </View>
                            <View style={{marginHorizontal: 5, alignItems: 'center',justifyContent: 'center', height: 30, width: 60, borderWidth: 0.5, borderColor: '#dddddd', borderRadius: 5}}>
                                <Text>19:00</Text>
                            </View>
                            <View style={{marginHorizontal: 5, alignItems: 'center',justifyContent: 'center', height: 30, width: 60, borderWidth: 0.5, borderColor: '#dddddd', borderRadius: 5}}>
                                <Text>21:30</Text>
                            </View>
                        </ScrollView>
                    </View>
                </View>
            </View>
        </View>

        <View style={{ borderWidth: 0.5, borderColor: '#dddddd', marginHorizontal: 5, marginVertical: 10 }}>
            <View>
                <View style={{ flex: 1, flexDirection: 'row', marginHorizontal: 5, marginVertical: 5 }}>
                <Image source={require('../../assets/movie-poster/movie3.jpg')} style={{ height: 100, width: 70, borderRadius: 10 }}/>
                    <View style={{ marginLeft: 5}}>
                        <Text style={{ fontWeight: "bold", marginVertical: 10, marginHorizontal: 10, fontSize: 16 }}>FORD V FERRARI</Text>
                        <View style={{ flexDirection: 'row' }}>
                            <View style={{ flexDirection: 'column' }}>
                                <Text style={{ marginTop: 1, marginLeft: 10, color: 'gray', fontSize: 12 }}>Genre</Text>
                                <Text style={{ marginLeft: 10, color: 'gray', fontSize: 12 }}>Duration</Text>
                                <Text style={{ marginLeft: 10, color: 'gray', fontSize: 12 }}>Director</Text>
                            </View>
                            <View style={{ flexDirection: 'column' }}>
                                <Text style={{ marginTop: 1, marginLeft: 10, fontSize: 12 }}>Action, Biography, Drama</Text>
                                <Text style={{ marginLeft: 10, fontSize: 12 }}>2h 32m</Text>
                                <Text style={{ marginLeft: 10, fontSize: 12 }}>James Mangold</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={{ marginVertical: 7, marginHorizontal: 5 }}>
                    <Text style={{ fontWeight: "bold" }}>REGULAR 2D</Text>
                    <View style={{ marginVertical: 5, marginHorizontal: 3 }}>
                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                            <View style={{alignItems: 'center',justifyContent: 'center', height: 30, width: 60, borderWidth: 0.5, borderColor: '#dddddd', borderRadius: 5}}>
                                <Text>13:15</Text>
                            </View>
                            <View style={{marginHorizontal: 5, alignItems: 'center',justifyContent: 'center', height: 30, width: 60, borderWidth: 0.5, borderColor: '#dddddd', borderRadius: 5}}>
                                <Text>16:15</Text>
                            </View>
                            <View style={{marginHorizontal: 5, alignItems: 'center',justifyContent: 'center', height: 30, width: 60, borderWidth: 0.5, borderColor: '#dddddd', borderRadius: 5}}>
                                <Text>16:30</Text>
                            </View>
                            <View style={{marginHorizontal: 5, alignItems: 'center',justifyContent: 'center', height: 30, width: 60, borderWidth: 0.5, borderColor: '#dddddd', borderRadius: 5}}>
                                <Text>19:15</Text>
                            </View>
                        </ScrollView>
                    </View>
                </View>
            </View>
        </View>

        <View style={{ borderWidth: 0.5, borderColor: '#dddddd', marginHorizontal: 5, marginVertical: 10 }}>
            <View>
                <View style={{ flex: 1, flexDirection: 'row', marginHorizontal: 5, marginVertical: 5 }}>
                <Image source={require('../../assets/movie-poster/movie4.jpg')} style={{ height: 100, width: 70, borderRadius: 10 }}/>
                    <View style={{ marginLeft: 5}}>
                        <Text style={{ fontWeight: "bold", marginTop: 3, marginHorizontal: 10, fontSize: 16 }}>RUMAH KENTANG:</Text>
                        <Text style={{ fontWeight: "bold", marginBottom:10, marginHorizontal: 10, fontSize: 16 }}>THE BEGINNING</Text>
                        <View style={{ flexDirection: 'row' }}>
                            <View style={{ flexDirection: 'column' }}>
                                <Text style={{ marginTop: 1, marginLeft: 10, color: 'gray', fontSize: 12 }}>Genre</Text>
                                <Text style={{ marginLeft: 10, color: 'gray', fontSize: 12 }}>Duration</Text>
                                <Text style={{ marginLeft: 10, color: 'gray', fontSize: 12 }}>Director</Text>
                            </View>
                            <View style={{ flexDirection: 'column' }}>
                                <Text style={{ marginTop: 1, marginLeft: 10, fontSize: 12 }}>Horror</Text>
                                <Text style={{ marginLeft: 10, fontSize: 12 }}>1h 42m</Text>
                                <Text style={{ marginLeft: 10, fontSize: 12 }}>Rizal Mantovani</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={{ marginVertical: 7, marginHorizontal: 5 }}>
                    <Text style={{ fontWeight: "bold" }}>REGULAR 2D</Text>
                    <View style={{ marginVertical: 5, marginHorizontal: 3 }}>
                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                            <View style={{alignItems: 'center',justifyContent: 'center', height: 30, width: 60, borderWidth: 0.5, borderColor: '#dddddd', borderRadius: 5}}>
                                <Text>11:00</Text>
                            </View>
                            <View style={{marginHorizontal: 5, alignItems: 'center',justifyContent: 'center', height: 30, width: 60, borderWidth: 0.5, borderColor: '#dddddd', borderRadius: 5}}>
                                <Text>11:45</Text>
                            </View>
                            <View style={{marginHorizontal: 5, alignItems: 'center',justifyContent: 'center', height: 30, width: 60, borderWidth: 0.5, borderColor: '#dddddd', borderRadius: 5}}>
                                <Text>15:20</Text>
                            </View>
                            <View style={{marginHorizontal: 5, alignItems: 'center',justifyContent: 'center', height: 30, width: 60, borderWidth: 0.5, borderColor: '#dddddd', borderRadius: 5}}>
                                <Text>17:30</Text>
                            </View>
                            <View style={{marginHorizontal: 5, alignItems: 'center',justifyContent: 'center', height: 30, width: 60, borderWidth: 0.5, borderColor: '#dddddd', borderRadius: 5}}>
                                <Text>18:30</Text>
                            </View>
                            <View style={{marginHorizontal: 5, alignItems: 'center',justifyContent: 'center', height: 30, width: 60, borderWidth: 0.5, borderColor: '#dddddd', borderRadius: 5}}>
                                <Text>22:00</Text>
                            </View>
                        </ScrollView>
                    </View>
                </View>
            </View>
        </View>
    </View>
)

class mantos1 extends Component {
    constructor(){
        super();
        this.state = {
            Jadwal: MONDAY
        }
    }
    render() {
        return (
            <ScrollView>
                <View>
                <View>
                    <MapShow1/>
                </View>
                <View>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                        <TouchableOpacity onPress={() => this.setState({ Jadwal: MONDAY })}>
                            <View style={{alignItems: 'center',justifyContent: 'center', height: 50, width: 50, marginLeft: 10, marginTop: 10, borderWidth: 0.5, borderColor: '#dddddd',marginBottom: 3, borderRadius: 5}}>
                                <Text>MON</Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => this.setState({ Jadwal: TUESDAY })}>
                            <View style={{alignItems: 'center',justifyContent: 'center', height: 50, width: 50, marginLeft: 10, marginTop: 10, borderWidth: 0.5, borderColor: '#dddddd',marginBottom: 3, borderRadius: 5}}>
                                <Text>TUE</Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => this.setState({ Jadwal: WEDNESDAY })}>
                            <View style={{alignItems: 'center',justifyContent: 'center', height: 50, width: 50, marginLeft: 10, marginTop: 10, borderWidth: 0.5, borderColor: '#dddddd',marginBottom: 3, borderRadius: 5}}>
                                <Text>WED</Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => this.setState({ Jadwal: THURSDAY })}>
                            <View style={{alignItems: 'center',justifyContent: 'center', height: 50, width: 50, marginLeft: 10, marginTop: 10, borderWidth: 0.5, borderColor: '#dddddd',marginBottom: 3, borderRadius: 5}}>
                                <Text>THU</Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => this.setState({ Jadwal: FRIDAY })}>
                            <View style={{alignItems: 'center',justifyContent: 'center', height: 50, width: 50, marginLeft: 10, marginTop: 10, borderWidth: 0.5, borderColor: '#dddddd',marginBottom: 3, borderRadius: 5}}>
                                <Text>FRI</Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => this.setState({ Jadwal: SATURDAY })}>
                            <View style={{alignItems: 'center',justifyContent: 'center', height: 50, width: 50, marginLeft: 10, marginTop: 10, borderWidth: 0.5, borderColor: '#dddddd',marginBottom: 3, borderRadius: 5}}>
                                <Text>SAT</Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => this.setState({ Jadwal: SUNDAY })}>
                            <View style={{alignItems: 'center',justifyContent: 'center', height: 50, width: 50, marginLeft: 10, marginTop: 10, borderWidth: 0.5, borderColor: '#dddddd' ,marginBottom: 3, borderRadius: 5}}>
                                <Text>SUN</Text>
                            </View>
                        </TouchableOpacity>
                    </ScrollView>
                </View>
                <View style={{ backgroundColor:'#E6E6E6', height: 7, marginTop: 3 }}></View>
            </View>
            {this.state.Jadwal}
            </ScrollView>
        );
  }
}
// </View>{this.state.Jadwal}
export default mantos1;