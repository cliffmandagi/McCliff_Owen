import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView } from 'react-native';
import { Header } from 'react-native-elements';

import MapShow3 from '../../MapShow3';
import MovieDetail from './MovieDetail';

const MONDAY = (
    <MovieDetail
        day="MONDAY"
    />
)

const TUESDAY = (
    <MovieDetail
        day="TUESDAY"
    />
)

const WEDNESDAY = (
    <MovieDetail
        day="WEDNESDAY"
    />
)

const THURSDAY = (
    <MovieDetail
        day="THURSDAY"
    />
)

const FRIDAY = (
    <MovieDetail
        day="FRIDAY"
    />
)

const SATURDAY = (
    <MovieDetail
        day="SATURDAY"
    />
)

const SUNDAY = (
    <MovieDetail
        day="SUNDAY"
    />
)

class Mantos3 extends Component {
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
                    <MapShow3/>
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
export default Mantos3;