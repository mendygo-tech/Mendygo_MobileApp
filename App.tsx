import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import SplashScreen from "./src/screens/SplashScreen";
import OnboardingScreen from "./src/screens/OnboardingScreen";
import IntroScreen from "./src/screens/IntroScreen";
import HomeScreen from "./src/screens/HomeScreen";
import DashboardScreen from "./src/dashboard/DashboardScreen";
import DashboardMenu from "./src/dashboard/DashboardMenu";

import SignupScreen from "./src/screens/SignupScreen";
import LoginScreen from "./src/screens/LoginScreen";
import Profile from "./src/navigation/Profile";
import EditProfileScreen from "./src/navigation/EditProfileScreen";
import AlertsScreen from "./src/navigation/AlertScreen";


const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashScreen">

        <Stack.Screen name="SplashScreen" component={SplashScreen} options={{ headerShown: false }}/>
        {/* <Stack.Screen name="Onboarding" component={OnboardingScreen} /> */}
        <Stack.Screen name="Onboarding" component={OnboardingScreen} options={{ headerShown: false }} />
        <Stack.Screen name="SignupScreen" component={SignupScreen} options={{headerShown:false}}/>
        
        <Stack.Screen name="LoginScreen" component={LoginScreen} options={{headerShown:false}}/>
        <Stack.Screen name="IntroScreen" component={IntroScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="DashboardScreen" component={DashboardScreen} options={{ headerShown: false }}  />
        <Stack.Screen name="DashboardMenu" component={DashboardMenu} options={{headerShown:false}} />
        <Stack.Screen name="Profile" component={Profile} options={{headerShown:false}} />
        <Stack.Screen name="EditProfileScreen" component={EditProfileScreen} options={{headerShown:false}} />
        <Stack.Screen name="AlertScreen" component={AlertsScreen} options={{headerShown:false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
