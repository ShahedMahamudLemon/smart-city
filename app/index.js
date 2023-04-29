import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { Link } from "expo-router";

const index = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.baseText}>
        Welcome to
        <Text style={styles.innerText}> Smart-City</Text>
      </Text>
      <Link style={styles.btn} href="/map">
        Goto Map
      </Link>
      <Link style={styles.btn} href="/login">
        Login
      </Link>
      <Image
        style={styles.registerImage}
        source={{
          uri: "https://raw.githubusercontent.com/hirishu10/my-assets/main/register.png",
        }}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    position: "absolute",
    marginTop: 100,
    padding: 50,
  },
  baseText: {
    fontWeight: "bold",
    fontSize: 20,
  },
  innerText: {
    color: "red",
    fontSize: 30,
  },
  btn: {
    marginTop: 15,
    borderRadius: 10,
    borderColor: "black",
    backgroundColor: "black",
    color: "white",
    padding: 12,
    fontSize: 20,
  },
  registerImage: {
    marginTop: 50,
    width: 250,
    height: 250,
  },
});
export default index;
