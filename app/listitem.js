import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const listitem = () => {
  return (
    <View style={styles.containerMain}>
      <Text style={styles.header}>Important Places</Text>
      {/* 1 */}
      <View style={styles.container}>
        <View style={styles.innerContainer}>
          <View style={styles.IconContainer}>
            <Ionicons name="square" size={30} color={"gray"} />
          </View>
          <View style={styles.productInfoContainer}>
            <Text style={styles.secondaryText}>Super Shopping Mall</Text>
            <Text>Rating 5</Text>
          </View>
        </View>
        <View>
          <TouchableOpacity style={styles.detailsBtn}>
            <Text style={styles.primaryText}>Details</Text>
          </TouchableOpacity>
        </View>
      </View>
      {/* 2 */}
      <View style={styles.container}>
        <View style={styles.innerContainer}>
          <View style={styles.IconContainer}>
            <Ionicons name="square" size={30} color={"gray"} />
          </View>
          <View style={styles.productInfoContainer}>
            <Text style={styles.secondaryText}>Super Shopping Mall</Text>
            <Text>Rating 5</Text>
          </View>
        </View>
        <View>
          <TouchableOpacity style={styles.detailsBtn}>
            <Text style={styles.primaryText}>Details</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default listitem;

const styles = StyleSheet.create({
  containerMain: {
    marginTop: 30,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    backgroundColor: "gray",
    height: 70,
    borderBottomWidth: 1,
    borderBottomColor: "white",
    padding: 5,
    marginTop: 5,
  },
  detailsBtn: {
    width: 100,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    padding: 3,
    borderRadius: 7,
    backgroundColor: "#b7c4ed",
  },
  header: {
    fontSize: 25,
    marginTop: 20,
    marginBottom: 10,
  },
  innerContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  productInfoContainer: {
    justifyContent: "center",
    alignItems: "flex-start",
    marginLeft: 10,
  },
  IconContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    height: 40,
    width: 40,
    borderRadius: 5,
  },
  primaryText: {
    fontSize: 15,
    fontWeight: "600",
    color: "black",
  },
  secondaryText: {
    fontSize: 15,
    fontWeight: "600",
  },
});
