import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import SplashScreen from "./src/screens/SplashScreen";
import OnboardingScreen from "./src/screens/OnboardingScreen";
import HomeScreen from "./src/screens/HomeScreen";
import DashboardScreen from "./src/dashboard/DashboardScreen";
import DashboardMenu from "./src/dashboard/DashboardMenu";

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashScreen">

        <Stack.Screen name="SplashScreen" component={SplashScreen} options={{ headerShown: false }}/>
        {/* <Stack.Screen name="Onboarding" component={OnboardingScreen} /> */}
        <Stack.Screen name="Onboarding" component={OnboardingScreen} options={{ headerShown: false }} />

        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="DashboardScreen" component={DashboardScreen} options={{ headerShown: false }}  />
        <Stack.Screen name="DashboardMenu" component={DashboardMenu} options={{headerShown:false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
