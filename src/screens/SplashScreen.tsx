import React, { useEffect } from "react";
import { View, Text, StyleSheet, Image } from "react-native";

export default function SplashScreen({ navigation }: any) {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace("Onboarding");
    }, 4000);

    return () => clearTimeout(timer);
  }, []);                                                                   



  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/images/logo.png")} 
        style={styles.logoImage}
      />
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff",
  },
  logoImage: {
    width: 292,
    height: 155,
    resizeMode: "contain",
    marginBottom: 10,
  },

});
