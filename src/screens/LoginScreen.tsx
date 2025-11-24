import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Image,
} from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

const LoginScreen = ({ navigation }: any) => {
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);


  return (
    <SafeAreaView style={styles.container}>

      {/* Logo */}
      <Image
        source={require("../assets/images/logo2.png")}
        style={styles.logo}
      />

      {/* Card */}
      <View style={styles.card}>
        <Text style={styles.title}>
          Log <Text style={{ color: "#61B846" }}>In</Text>
        </Text>

        {/* Phone Number */}
        <Text style={styles.label}>Phone Number</Text>
        <View style={styles.inputContainer}>
          <MaterialIcons name="phone" size={22} color="#000000ff" />
          <TextInput
            placeholder="+91 0000000000"
            placeholderTextColor="#A9A9A9"
            style={styles.inputField}
            keyboardType="phone-pad"
            value={phone}
            onChangeText={setPhone}
          />
        </View>

        {/* Email  */}
        <Text style={styles.label}>Email (optional)</Text>
        <View style={styles.inputContainer}>
          <MaterialIcons name="email" size={22} color="#000000ff" />
          <TextInput
            placeholder="xyz@abc.com"
            placeholderTextColor="#A9A9A9"
            style={styles.inputField}
            value={email}
            onChangeText={setEmail}
          />
        </View>

        {/* Password */}
        <Text style={styles.label}>Password</Text>
        <View style={styles.inputContainer}>
          <MaterialIcons name="lock" size={22} color="#000000ff" />
          <TextInput
            placeholder="User@123"
            placeholderTextColor="#A9A9A9"
            style={styles.inputField}
             secureTextEntry={!showPassword}
            value={password}
            onChangeText={setPassword}
          />
           <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <MaterialIcons name={showPassword ? "visibility" : "visibility-off"} size={22} color="gray" />
          </TouchableOpacity>
          
        </View>

        <TouchableOpacity style={{ alignSelf: "flex-end" , marginTop:0, }}>
          <Text style={styles.link}>Forget Password?</Text>
        </TouchableOpacity>

        {/* Login Button */}
        <TouchableOpacity style={styles.loginBtn} onPress={() => navigation.replace("Home")}>
          <Text style={styles.loginText}>Log In</Text>
        </TouchableOpacity>

        {/* Signup Link */}
        <Text style={styles.bottomText}>
          Don’t have an account?
          <Text
            style={{ color: "#61B846", fontWeight: "700" }}
            onPress={() => navigation.replace("SignupScreen")}
          >
            {" "}SignUp
          </Text>
        </Text>

        {/* Divider */}
        <View style={styles.dividerContainer}>
          <View style={styles.divider} />
          <Text style={{ marginHorizontal: 10, color: "grey" }}>or</Text>
          <View style={styles.divider} />
        </View>

        {/* Google Login */}
        <TouchableOpacity style={styles.googleBtn}>
          {/* <MaterialIcons name="google" size={24} style={{ marginRight: 10 }} /> */}
          <Text style={styles.googleText}>Sign in with Google Account</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 15,
  },

  logo: {
    width: 130,
    height: 95,
    resizeMode: "contain",
    marginBottom: -15,
  },

  card: {
    backgroundColor: "#FFFFFF",
    width: "95%",
    borderRadius: 25,
    paddingVertical: 20,
    paddingHorizontal: 18,
    shadowColor: "#000",
    shadowOpacity: 0.12,
    shadowRadius: 12,
    elevation: 6,
    marginTop:25,
  },

  title: {
    textAlign: "center",
    fontSize: 28,
    fontWeight: "700",
    marginBottom: 20,
  },

  label: {
    fontSize: 16,
    marginTop: 8,
    marginBottom: 5,
    fontWeight: "500",
  },

  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#61B846",
    borderRadius: 12,
    paddingHorizontal: 10,
    marginBottom: 10,
  },

  inputField: {
    flex: 1,
    fontSize: 16,
    paddingVertical: 12,
    color:"#000",
  },

  link: {
    color: "#61B846",
    fontWeight: "700",
    marginVertical: 10,
  },

  loginBtn: {
    backgroundColor: "#61B846",
    padding: 14,
    borderRadius: 25,
    marginTop: 10,
  },

  loginText: {
    textAlign: "center",
    color: "white",
    fontSize: 18,
    fontWeight: "700",
  },

  bottomText: {
    textAlign: "center",
    marginTop: 15,
    fontSize: 15,
  },

  dividerContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 15,
  },

  divider: {
    flex: 1,
    height: 1,
    backgroundColor: "#C7C7C7",
  },

  googleBtn: {
    borderWidth: 1,
    borderColor: "#C7C7C7",
    padding: 12,
    borderRadius: 25,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
  },

  googleText: {
    fontSize: 16,
    fontWeight: "600",
  },
});
