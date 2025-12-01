import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";

export default function DashboardScreen({ navigation }: any) {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => navigation.navigate("DashboardScreen")}>
          <Image
            style={{ height: 30, width: 30 }}
            source={require("../assets/images/slider.png")}
          />
        </TouchableOpacity>

        <Text style={styles.headerTitle}>Dashboard</Text>

        <Image
          style={{ height: 30, width: 30 }}
          source={require("../assets/images/mode.png")}
        />
      </View>

      {/* Body (Scroll menu inside body) */}
      <ScrollView contentContainerStyle={styles.menuWrapper}>

        {/* Mendy AI */}
        <TouchableOpacity style={styles.card}>
          <Image
            source={require("../assets/images/mendy.png")}
            style={styles.icon}
          />
          <View>
            <Text style={styles.title}>Mendy AI</Text>
            <Text style={styles.subtitle}>AI that Adapts</Text>
          </View>
        </TouchableOpacity>

        {/* EMS */}
        <TouchableOpacity style={styles.card}>
          <Image
            source={require("../assets/images/ems.png")}
            style={styles.icon}
          />
          <View>
            <Text style={styles.title}>EMS</Text>
            <Text style={styles.subtitle}>Energy Management System</Text>
          </View>
        </TouchableOpacity>

        {/* SmartOEE */}
        <TouchableOpacity style={styles.card} onPress={() => navigation.navigate("SmartOEEScreen")}>
          <Image
            source={require("../assets/images/oee.png")}
            style={styles.icon}
          />
          <View>
            <Text style={styles.title}>SmartOEE</Text>
            <Text style={styles.subtitle}>Overall Equipment Efficiency</Text>
          </View>
        </TouchableOpacity>

        {/* RTM */}
        <TouchableOpacity style={styles.card} onPress={() => navigation.navigate("RTM")}>
          <Image
            source={require("../assets/images/rtm.png")}
            style={styles.icon}
          />
          <View>
            <Text style={styles.title}>RTM</Text>
            <Text style={styles.subtitle}>Real Time Monitoring</Text>
          </View>
        </TouchableOpacity>

        {/* AI Maintenance */}
        <TouchableOpacity style={styles.card} onPress={() => navigation.navigate("Maintenance")}>
          <Image
            source={require("../assets/images/aim.png")}
            style={styles.icon}
          />
          <View>
            <Text style={styles.title}>AI - Maintenance</Text>
            <Text style={styles.subtitle}>Real Time Monitoring</Text>
          </View>
        </TouchableOpacity>

        {/* Customized Industry 4.0 */}
        <TouchableOpacity style={styles.card} onPress={()=>navigation.navigate("IndustryScreen")}>
          <Image
            source={require("../assets/images/cui.png")}
            style={styles.icon}
          />
          <View>
            <Text style={styles.title}>Customized Industry 4.0</Text>
            <Text style={styles.subtitle}>
              Contact us with your requirements
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card} onPress={()=>navigation.navigate("SupportScreen")}>
          <Image
            source={require("../assets/images/cui.png")}
            style={styles.icon}
          />
          <View>
            <Text style={styles.title}>Help&Support</Text>
            <Text style={styles.subtitle}>
              Contact us with your requirements
            </Text>
          </View>
        </TouchableOpacity>

      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
  },

  headerContainer: {
    paddingHorizontal: 20,
    height: 70,
    backgroundColor: "#fff",
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    elevation: 5,
  },

  headerTitle: {
    fontSize: 23,
    fontWeight: "600",
  },

  menuWrapper: {
    padding: 20,
    paddingBottom: 80,
  },

  card: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1.5,
    borderColor: "#43A047",
    borderRadius: 12,
    padding: 15,
    marginBottom: 15,
    backgroundColor: "#fff",
  },

  icon: {
    width: 40,
    height: 40,
    marginRight: 15,
    resizeMode: "contain",
  },

  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#111",
  },

  subtitle: {
    fontSize: 13,
    color: "#666",
    marginTop: 2,
  },
});
