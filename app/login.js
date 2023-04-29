import React, { useState } from "react";
import {
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import CustomBox from "react-native-customized-box";
import { Link } from "expo-router";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";

const login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(0);
  const [errorMsg, setErrorMsg] = useState("");
  const navigation = useNavigation();
  const loginFunction = async () => {
    const loginCredentials = {
      email: email,
      password: password,
    };
    if (email !== "" && password !== "") {
      try {
        await axios({
          method: "POST",
          url: "https://backend-smart-city.onrender.com/api/smart-city/v1/user/login",
          data: loginCredentials,
        }).then((response) => {
          if (response.data.status && response.data.status === "success") {
            setError(0);
            setErrorMsg("");
            alert(response.data.message);
            navigation.navigate("listitem");
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
      setErrorMsg("Email and Password is required to login..");
    }
  };
  return (
    //

    <View style={styles.container}>
      <StatusBar />
      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }}
        style={styles.backBtn}
      >
        <Text style={styles.backBtnTxt}>←</Text>
      </TouchableOpacity>
      <Text style={styles.header}>Login to your account</Text>
      <Image
        style={styles.loginImage}
        source={{
          uri: "https://raw.githubusercontent.com/hirishu10/my-assets/main/login.png",
        }}
      />

      <CustomBox
        placeholder={"Email"}
        boxColor={"dodgerblue"}
        focusColor={"#e65c40"}
        keyboardType="email-address"
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
      <CustomBox
        placeholder={"Password"}
        toggle={true}
        boxColor={"dodgerblue"}
        focusColor={"#e65c40"}
        boxStyle={{ borderRadius: 40, borderWidth: 2 }}
        inputStyle={{
          fontWeight: "bold",
          color: "#30302e",
          paddingLeft: 20,
          borderRadius: 40,
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
      />
      <TouchableOpacity
        style={styles.forgotBtn}
        // onPress={() => {
        //   navigation.navigate("ForgotPassword");
        // }}
      >
        <Text style={styles.forgotBtnText}>Forgot Password?</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.loginBtn} onPress={loginFunction}>
        <Text style={styles.loginBtnText}>LogIn</Text>
      </TouchableOpacity>
      {error ? (
        <View>
          <Text style={styles.errorMsgTxt}>{errorMsg}</Text>
        </View>
      ) : null}
      <View style={styles.createAccount}>
        <Text style={styles.createAccountText}>
          {`Don't have an Account? `}
        </Text>
        <TouchableOpacity style={styles.registerBtn}>
          <Link href="/registration">
            <Text style={styles.registerBtnText}>Register for Free!</Text>
          </Link>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  errorCard: {
    width: 300,
    height: 50,
    backgroundColor: "#de3138",
    justifyContent: "center",
    paddingLeft: 15,
    borderRadius: 40,
  },
  backBtn: {
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    padding: 5,
    borderRadius: 50,
    backgroundColor: "#b7c4ed",
    marginRight: 300,
    marginBottom: 50,
  },
  backBtnTxt: {
    fontSize: 30,
    color: "black",
  },
  errorCardText: {
    paddingLeft: 15,
    color: "white",
    fontSize: 12,
    fontWeight: "500",
    position: "absolute",
  },
  cross: {
    width: 20,
    height: 20,
    justifyContent: "center",
    alignItems: "center",
    marginTop: -20,
    left: 250,
    position: "relative",
  },
  loginImage: {
    marginTop: 20,
    width: 200,
    height: 200,
  },
  header: {
    fontSize: 25,
  },
  loginBtn: {
    marginTop: 10,
    backgroundColor: "dodgerblue",
    width: 300,
    height: 50,
    borderRadius: 40,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  errorMsgTxt: {
    color: "red",
    fontSize: 13,
    fontWeight: "200",
  },
  loginBtnText: {
    color: "white",
    fontSize: 22,
  },
  forgotBtn: {
    width: 280,
    height: 20,
    justifyContent: "center",
  },
  forgotBtnText: {
    color: "#c29700",
    fontSize: 12,
    alignSelf: "flex-end",
    textDecorationLine: "underline",
  },
  createAccount: {
    marginTop: 10,
    width: 280,
    height: 20,
    flexDirection: "row",
  },
  createAccountText: {
    color: "grey",
  },
  registerBtn: {},
  registerBtnText: {
    color: "#e65c40",
    textDecorationLine: "underline",
  },
  myLogo: {
    width: 100,
    height: 70,
    borderRadius: 40,
    left: 150,
    top: 10,
    marginBottom: 10,
  },
});
export default login;
