import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView } from 'react-native';

const MovieDetail = ({day}) => {
    return (
        <View>
        <Text style={{ marginLeft: 10, marginTop: 10, fontWeight: "bold" }}>{day}</Text>
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
}

export default MovieDetail;