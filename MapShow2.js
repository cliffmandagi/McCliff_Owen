import React from 'react';
import MapView from 'react-native-maps';
import { StyleSheet, View, Dimensions } from 'react-native';

export default class MapShow extends React.Component {
  render() {
    return (
        <MapView style={styles.mapStyle}
            region={{
                latitude: 1.472337,
                longitude: 124.831346,
                latitudeDelta: 0.003,
                longitudeDelta: 0.003,
            }}
        />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mapStyle: {
    width: Dimensions.get('window').width,
    height: 150,
  },
});