import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
const itemdetails = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.mainContainer}>
      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }}
        style={styles.backBtn}
      >
        <Text style={styles.backBtnTxt}>←</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.container}
        onPress={() => {
          navigation.navigate("navigatemap");
        }}
      >
        <View style={styles.imageContainer}>
          <Image
            source={{
              uri: "https://raw.githubusercontent.com/hirishu10/my-assets/main/register.png",
            }}
            style={styles.productImage}
          />
        </View>
        <View style={styles.infoContainer}>
          <View>
            <Text style={styles.secondaryTextSm}>Super Shopping Mall</Text>
            <Text style={styles.primaryTextSm}>1000</Text>
          </View>
          <View>
            <TouchableOpacity
              style={styles.iconContainer}
              // onPress={onPressSecondary}
            >
              <AntDesign name="star" size={20} color="yellow" />
            </TouchableOpacity>
          </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.container}
        onPress={() => {
          navigation.navigate("navigatemap");
        }}
      >
        <View style={styles.imageContainer}>
          <Image
            source={{
              uri: "https://raw.githubusercontent.com/hirishu10/my-assets/main/register.png",
            }}
            style={styles.productImage}
          />
        </View>
        <View style={styles.infoContainer}>
          <View>
            <Text style={styles.secondaryTextSm}>Super Shopping Mall</Text>
            <Text style={styles.primaryTextSm}>1000</Text>
          </View>
          <View>
            <TouchableOpacity style={styles.iconContainer}>
              <AntDesign name="star" size={20} color="yellow" />
            </TouchableOpacity>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default itemdetails;

const styles = StyleSheet.create({
  mainContainer: {
    marginTop: 40,
  },
  backBtn: {
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    padding: 5,
    borderRadius: 5,
    backgroundColor: "#b7c4ed",
    marginLeft: 5,
    elevation: 5,
  },
  backBtnTxt: {
    fontSize: 30,
    color: "black",
  },
  container: {
    backgroundColor: "white",
    width: 300,
    height: 200,
    borderRadius: 10,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: 5,
    elevation: 10,
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 10,
  },
  imageContainer: {
    backgroundColor: "#d8e8d9",
    width: "100%",
    height: 140,
    borderRadius: 10,
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "center",
    padding: 5,
    paddingBottom: 0,
  },
  productImage: {
    height: 120,
    width: 120,
  },
  infoContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 5,
  },
  secondaryTextSm: {
    fontSize: 16,
    fontWeight: "bold",
  },
  primaryTextSm: {
    fontSize: 15,
    fontWeight: "bold",
    color: "cyan",
  },
  iconContainer: {
    backgroundColor: "black",
    width: 30,
    height: 30,
    borderRadius: 5,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});
