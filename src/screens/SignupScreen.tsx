
import React, {useState} from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
  SafeAreaView
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";




const SignupScreen = ({navigation}:any) => {
    const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  return (
    <SafeAreaView style={styles.container}>
      
      {/* Logo */}
      <Image
        source={require("../assets/images/logo2.png")}
        style={styles.logo}
      />

      {/* Card Container */}
      <View style={styles.card}>

        <Text style={styles.title}>
          Create an <Text style={{ color: "#66B733" }}>Account</Text>
        </Text>

        {/* Full Name */}
        <Text style={{fontSize:16,margin:3,fontWeight:"500"}}>
            Name
        </Text>
        <View style={styles.inputContainer}>
          <MaterialIcons name="person" size={22} color="#000000ff" />
          <TextInput
            placeholder="Full Name..."
            placeholderTextColor="#A9A9A9"
            style={styles.input}
          />
        </View>

        {/* Phone Number */}
        <Text style={{fontSize:16,margin:3,fontWeight:"500"}}>
            Phone Number
        </Text>
        <View style={styles.inputContainer}>
          <MaterialIcons name="phone" size={22} color="#000000ff" />
          <TextInput
            placeholder="+91 00000 00000"
            placeholderTextColor="#A9A9A9"
            keyboardType="phone-pad"
            style={styles.input}
          />
        </View>

        {/* Email */}
         <Text style={styles.label}>Email</Text>
        <View style={styles.inputContainer}>
          
          <MaterialIcons name="email" size={24} color="black"  />
          <TextInput
          
            placeholder="xyz@abc.com"
            placeholderTextColor="#A9A9A9"
            keyboardType="email-address"
            style={styles.input}
          />
          
        </View>

        {/* Password */}
         <Text style={styles.label}>Password</Text>
        <View style={styles.inputContainer}>
           <MaterialIcons name="lock" size={22} color="#111211ff" />
          <TextInput
            placeholder="User@123"
            placeholderTextColor="#A9A9A9"
            secureTextEntry={!showPassword}
            style={styles.input}
          />
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                      <MaterialIcons name={showPassword ? "visibility" : "visibility-off"} size={22} color="gray" />
                    </TouchableOpacity>
        </View>

        {/* Confirm Password */}
        
        <Text style={styles.label}>Confirm Password</Text>
        <View style={styles.inputContainer}>
           <MaterialIcons name="lock-outline" size={22} color="#000000ff" />
          <TextInput
            placeholder="Confirm Password"
            placeholderTextColor="#A9A9A9"
            secureTextEntry={!showPassword}
            style={styles.input}
          />
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                      <MaterialIcons name={showPassword ? "visibility" : "visibility-off"} size={22} color="gray" />
                    </TouchableOpacity>
        </View>

        {/* Sign Up Button */}
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>

        <Text style={styles.loginText}>
          Already have an account?  <Text style={styles.loginLink} onPress={() => navigation.navigate("LoginScreen")}>Login</Text>
        </Text>

        <Text style={styles.orText}>or</Text>

        {/* Google Button */}
        <TouchableOpacity style={styles.googleBtn}>
          <Text style={styles.googleText}>Sign in with Google Account</Text>
        </TouchableOpacity>

      </View>
    </SafeAreaView>
  );
};

export default SignupScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
  },
  logo: {
    width: 120,
    height: 90,
    resizeMode: "contain",
    marginTop: 60,
  },
  card: {
    backgroundColor: "#FFFFFF",
    width: "85%",
    
    borderRadius: 25,
    paddingVertical: 20,
    paddingHorizontal: 18,
    marginTop: 15,
    shadowColor: "#000",
    shadowOpacity: 0.12,
    shadowRadius: 12,
    elevation: 8,
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
    marginBottom: 10,
    textAlign: "center",
  },
  inputContainer: {
    backgroundColor: "#FFFFFF",
    borderWidth: 1.2,
    borderColor: "#DCE1EB",
    borderRadius: 8,
    marginBottom: 8,
    height: 46,
    alignItems: "center",        
    justifyContent: "center",
    paddingHorizontal: 12,
    flexDirection:"row",
  },
  input: {
    flex:1,
    fontSize: 15,
    color: "#000",
  },
  button: {
    backgroundColor: "#66B733",
    height: 48,
    width:180,
    left:60,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
    marginBottom: 10,
    elevation: 4,
  },
  buttonText: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "700",
  },
  loginText: {
    textAlign: "center",
    fontSize: 14,
  },
  loginLink: {
    color: "#66B733",
    fontWeight: "600",
  },
  orText: {
    textAlign: "center",
    marginVertical: 10,
    fontSize: 14,
  },
  googleBtn: {
    borderWidth: 1.3,
    borderColor: "#DCE1EB",
    height: 48,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  googleText: {
    fontSize: 15,
    fontWeight: "600",
  },
   label: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 4,
  },
});
