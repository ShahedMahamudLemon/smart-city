import React, { useState } from "react";
import MapView, { Marker } from "react-native-maps";
import { StyleSheet, View } from "react-native";
const map = () => {
  const [mapRegion, setMapRegio] = useState({
    latitude: 23.811056,
    longitude: 90.407608,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });
  return (
    <View style={styles.container}>
      <MapView region={mapRegion} style={styles.map}>
        <Marker coordinate={mapRegion} title="marker"></Marker>
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    marginTop: 35,
    width: "100%",
    height: "100%",
  },
});

export default map;
