import React, { useState } from "react";
import {
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import axios from "axios";
import CustomBox from "react-native-customized-box";
import { useNavigation } from "@react-navigation/native";

const registration = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(0);
  const [errorMsg, setErrorMsg] = useState("");
  const navigation = useNavigation();
  const registerFunction = async () => {
    const registerCredentials = {
      name: name,
      city: city,
      email: email,
      password: password,
    };
    if (
      name !== "" &&
      city !== "" &&
      email !== "" &&
      password !== "" &&
      confirmPassword !== ""
    ) {
      if (password === confirmPassword) {
        try {
          await axios({
            method: "POST",
            url: "https://backend-smart-city.onrender.com/api/smart-city/v1/user",
            data: registerCredentials,
          }).then((response) => {
            if (response.data.status && response.data.status === "success") {
              setError(0);
              setErrorMsg("");
              alert(response.data.message);
              navigation.navigate("login");
            }
          });
        } catch (error) {
          if (
            error.response &&
            error.response.status >= 400 &&
            error.response.status <= 500
          ) {
            setError(1);
            setErrorMsg(error.response.data.errors[0].message);
          }
        }
      } else {
        setError(1);
        setErrorMsg("Password and confirm password does't match!! ");
      }
    } else {
      setError(1);
      setErrorMsg(
        "User name, city, email, password and confirm password is required to Create account.."
      );
    }
  };
  return (
    <View style={{ marginTop: 35 }}>
      <StatusBar barStyle="dark-content" />
      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }}
        style={styles.backBtn}
      >
        <Text style={styles.backBtnTxt}>←</Text>
      </TouchableOpacity>
      <ScrollView style={{ paddingTop: 20 }}>
        <View style={styles.container}>
          <Text style={styles.header}>Create Account for Free!</Text>
          <Image
            style={styles.registerImage}
            source={{
              uri: "https://raw.githubusercontent.com/hirishu10/my-assets/main/register.png",
            }}
          />

          {/* Name */}
          <CustomBox
            placeholder={"Name"}
            boxColor={"silver"}
            focusColor={"#e07964"}
            boxStyle={{ borderRadius: 40, borderWidth: 2 }}
            inputStyle={{
              fontWeight: "bold",
              color: "#30302e",
              paddingLeft: 20,
              borderRadius: 40,
            }}
            labelConfig={{
              text: "Name",
              style: {
                color: "#0e0e21",
                fontWeight: "bold",
              },
            }}
            values={name}
            onChangeText={(value) => {
              setName(value);
            }}
          />
          {/* City */}
          <CustomBox
            placeholder={"City"}
            boxColor={"silver"}
            focusColor={"#e07964"}
            boxStyle={{ borderRadius: 40, borderWidth: 2 }}
            inputStyle={{
              fontWeight: "bold",
              color: "#30302e",
              paddingLeft: 20,
              borderRadius: 40,
            }}
            labelConfig={{
              text: "City",
              style: {
                color: "#0e0e21",
                fontWeight: "bold",
              },
            }}
            values={city}
            onChangeText={(value) => {
              setCity(value);
            }}
          />
          {/* Email Id */}
          <CustomBox
            placeholder={"Email"}
            boxColor={"silver"}
            focusColor={"#e07964"}
            type={"email"}
            boxStyle={{ borderRadius: 40, borderWidth: 2 }}
            inputStyle={{
              fontWeight: "bold",
              color: "#30302e",
              paddingLeft: 20,
              borderRadius: 40,
            }}
            labelConfig={{
              text: "Email",
              style: {
                color: "#0e0e21",
                fontWeight: "bold",
              },
            }}
            values={email}
            onChangeText={(value) => {
              setEmail(value);
            }}
          />
          {/* Password */}
          <CustomBox
            placeholder={"Password"}
            boxColor={"silver"}
            focusColor={"#e07964"}
            boxStyle={{ borderRadius: 40, borderWidth: 2 }}
            inputStyle={{
              fontWeight: "bold",
              color: "#30302e",
              paddingLeft: 20,
              borderRadius: 40,
              overflow: "hidden",
            }}
            labelConfig={{
              text: "Password",
              style: {
                color: "#0e0e21",
                fontWeight: "bold",
              },
            }}
            values={password}
            onChangeText={(value) => {
              setPassword(value);
            }}
            toggle={true}
          />
          {/*Confirm Password */}
          <CustomBox
            placeholder={"Password"}
            boxColor={"silver"}
            focusColor={"#e07964"}
            boxStyle={{ borderRadius: 40, borderWidth: 2 }}
            inputStyle={{
              fontWeight: "bold",
              color: "#30302e",
              paddingLeft: 20,
              borderRadius: 40,
              overflow: "hidden",
            }}
            labelConfig={{
              text: "Confirm Password",
              style: {
                color: "#0e0e21",
                fontWeight: "bold",
              },
            }}
            values={confirmPassword}
            onChangeText={(value) => {
              setConfirmPassword(value);
            }}
            toggle={true}
          />
          {error ? (
            <View>
              <Text style={styles.errorMsgTxt}>{errorMsg}</Text>
            </View>
          ) : null}
          {/* Register Button */}
          <TouchableOpacity
            style={styles.registerbtn}
            onPress={registerFunction}
          >
            <Text style={styles.registerBtnText}>Register</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 50,
  },
  // errorCard: {
  //   width: 300,
  //   height: 50,
  //   backgroundColor: "#de3138",
  //   justifyContent: "center",
  //   paddingLeft: 15,
  //   borderRadius: 40,
  // },
  // errorCardText: {
  //   paddingLeft: 15,
  //   color: "white",
  //   fontSize: 12,
  //   fontWeight: "500",
  //   position: "absolute",
  // },
  errorMsgTxt: {
    color: "red",
    fontSize: 13,
    fontWeight: "200",
    marginLeft: 50,
    marginRight: 50,
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
    marginTop: 10,
    elevation: 5,
  },
  backBtnTxt: {
    fontSize: 30,
    color: "black",
  },
  // cross: {
  //   width: 20,
  //   height: 20,
  //   justifyContent: "center",
  //   alignItems: "center",
  //   marginTop: -20,
  //   left: 250,
  //   position: "relative",
  // },
  registerImage: {
    marginTop: 20,
    width: 200,
    height: 200,
  },
  header: {
    fontSize: 25,
  },
  registerbtn: {
    marginTop: 10,
    backgroundColor: "#e65c40",
    width: 300,
    height: 50,
    borderRadius: 40,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 50,
    flexDirection: "row",
  },
  registerBtnText: {
    color: "white",
    fontSize: 22,
  },
});
export default registration;
