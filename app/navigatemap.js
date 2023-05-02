import React, { useState } from "react";
import MapView, { Marker } from "react-native-maps";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import * as Location from "expo-location";
import { useNavigation, useRoute } from "@react-navigation/native";
const navigatemap = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { placeDetails } = route.params;
  const [mapRegion, setMapRegion] = useState({
    latitude: placeDetails.latitude,
    longitude: placeDetails.longitude,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });
  const userLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      setErrorMsg("Permission to access location was denied");
      return;
    }

    let location = await Location.getCurrentPositionAsync({
      enableHighAccuracy: true,
    });
    setMapRegion({
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    });
  };
  return (
    <View style={styles.container}>
      <MapView region={mapRegion} style={styles.map}>
        <Marker coordinate={mapRegion} title="marker"></Marker>
      </MapView>
      <View style={styles.btnGroup}>
        <TouchableOpacity style={styles.btnNavigation} onPress={userLocation}>
          <Text style={styles.btnNavigationTxt}>Go to your location</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btnNavigation}
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Text style={styles.btnNavigationTxt}>Go Back</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 55,
    justifyContent: "center",
    alignItems: "center",
  },
  map: {
    width: "100%",
    height: "90%",
  },
  btnGroup: {
    marginTop: 10,
    width: "90%",
    height: 100,
    flexDirection: "row",
  },
  btnNavigation: {
    backgroundColor: "dodgerblue",
    width: 150,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 40,
    flexDirection: "row",
    marginLeft: 5,
  },
  btnNavigationTxt: {
    color: "white",
  },
});

export default navigatemap;
