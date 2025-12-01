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
import SLDScreen from "./src/navigation/SLDScreen";
import TrendsScreen from "./src/navigation/TrendsScreen";
import Maintenance from "./src/AIM/Maintenance";
import SupportScreen from "./src/Help/SupportScreen";
import IndustryScreen from "./src/CIR/IndustryScreen";
import SmartOEEScreen from "./src/OEE/SmartOEEScreen";
import OEEScreen from "./src/OEE/OEEScreen";
import Availability from "./src/OEE/Availability";
import PerformanceScreen from "./src/OEE/PerformanceScreen";
import ReliabilityScreen from "./src/OEE/ReliabilityScreen";
import ProductionEfficiencyScreen from "./src/OEE/ProductionEfficiencyScreen";
import BusinessOperatorImpactScreen from "./src/OEE/BusinessOperatorImpactScreen";
import RTMChemicalsScreen from "./src/RTM/RTMChemicalsScreen";



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
        <Stack.Screen name="SLDScreen" component={SLDScreen} options={{headerShown:false}} />
        <Stack.Screen name="TrendsScreen" component={TrendsScreen} options={{headerShown:false}} />
        <Stack.Screen name="Maintenance" component={Maintenance} options={{headerShown:false}} />
        <Stack.Screen name="SupportScreen" component={SupportScreen} options={{headerShown:false}} />
        <Stack.Screen name="IndustryScreen" component={IndustryScreen} options={{headerShown:false}} />
        <Stack.Screen name="SmartOEEScreen" component={SmartOEEScreen} options={{headerShown:false}} />
        <Stack.Screen name="OEEScreen" component={OEEScreen} options={{headerShown:false}} />
        <Stack.Screen name="Availability" component={Availability} options={{headerShown:false}} />
        <Stack.Screen name="PerformanceScreen" component={PerformanceScreen} options={{headerShown:false}} />
        <Stack.Screen name="ReliabilityScreen" component={ReliabilityScreen} options={{headerShown:false}} />
        <Stack.Screen name="ProductionEfficiencyScreen" component={ProductionEfficiencyScreen} options={{headerShown:false }} />
        <Stack.Screen name="BOIScreen" component={BusinessOperatorImpactScreen} options={{headerShown:false}} />
        <Stack.Screen name="RTM" component={RTMChemicalsScreen} options={{headerShown:false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
