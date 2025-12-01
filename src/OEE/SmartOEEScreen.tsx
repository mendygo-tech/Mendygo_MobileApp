import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

const SmartOEEScreen = ({ navigation }: any) => {
  return (
    <View style={styles.container}>

      {/* ----- Header ----- */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back" size={24} color="#000" />
        </TouchableOpacity>

        <View style={{ alignItems: "center" }}>
          <Text style={styles.headerTitle}>Smart OEE</Text>
          <Text style={styles.headerSub}>Overall Equipment Efficiency</Text>
        </View>

        <Ionicons name="settings-outline" size={22} color="#000" />
      </View>

      {/* Search Bar */}
      <View style={styles.searchBox}>
        <Ionicons name="search" size={20} color="#4CAF50" />
        <TextInput
          style={styles.searchInput}
          placeholder="Search your Data.."
          placeholderTextColor="#999"
        />
        <Ionicons name="filter-outline" size={22} color="#4CAF50" />
      </View>

      {/* Notification Bell */}
      <TouchableOpacity style={styles.bellIcon}>
        <Ionicons name="notifications" size={30} color="#000" />
        <View style={styles.redDot} />
      </TouchableOpacity>

      {/* Main Data Card Section */}
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.gridContainer}>

          <Card title="Overall Equip. Effectiveness" value="85 %" onPress={() => navigation.navigate("OEEScreen")} />
          <Card title="Availability" value="92%" onPress={() => navigation.navigate("Availability")} />

          <Card title="Performance rate" value="90 %" onPress={() => navigation.navigate("PerformanceScreen")} />
          <Card title="Mean time between failures" value="4,500 hrs" onPress={() => navigation.navigate("MTBF")} />

          <Card title="Reliability & Maintenance" value="5 %" onPress={() => navigation.navigate("ReliabilityScreen")} />
          <Card title="Business &Operator Impact" value="3 %" onPress={() => navigation.navigate("BOIScreen")} />

          <Card title="Production Efficiency" value="85%" onPress={() => navigation.navigate("ProductionEfficiencyScreen")} />

        </View>
      </ScrollView>

      {/* Floating Chat Button */}
      <TouchableOpacity style={styles.floatingIcon}>
        <Image
          source={require("../assets/images/navbaricons/logo.png")}
          style={{ width: 68, height: 68, resizeMode: "contain" }}
        />
      </TouchableOpacity>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate("SLDScreen")}>
          <Image source={require("../assets/images/navbaricons/slg.png")} style={styles.navIcon} />
          <Text style={styles.navLabel}>SLD</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate("TrendsScreen")}>
          <Image source={require("../assets/images/navbaricons/trends.png")} style={styles.navIcon} />
          <Text style={styles.navLabel}>Trends</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navItemActive} onPress={() => navigation.navigate("DashboardScreen")}>
          <Image source={require("../assets/images/navbaricons/logo2.png")} style={styles.navIconActive} />
          <Text style={styles.navLabelActive}>Dashboard</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate("AlertScreen")}>
          <Image source={require("../assets/images/navbaricons/alerts.png")} style={styles.navIcon} />
          <Text style={styles.navLabel}>Alerts</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate("Profile")}>
          <Image source={require("../assets/images/navbaricons/profile.png")} style={styles.navIcon} />
          <Text style={styles.navLabel}>Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SmartOEEScreen;


/* ---------- CARD COMPONENT ---------- */

const Card = ({ title, value, onPress }: { title: string; value: string; onPress?: () => void }) => (
  <TouchableOpacity style={styles.card} onPress={onPress}>
    <Text style={styles.cardTitle}>{title}</Text>
    <Text style={styles.cardValue}>{value}</Text>
  </TouchableOpacity>
);


/* ---------- STYLES ---------- */

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff", paddingHorizontal: 15 },

  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 15,
  },
  headerTitle: { fontSize: 18, fontWeight: "700" },
  headerSub: { fontSize: 12, fontWeight: "400", color: "#555" },

  searchBox: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 10,
    paddingHorizontal: 12,
    marginTop: 10,
    height: 45,
    borderColor: "#4CAF50",
    borderWidth: 1.5,
    width:320,
  },
  searchInput: { flex: 1, marginLeft: 8, color: "#000" },

  bellIcon: { position: "absolute", top: 90, right: 25 },
  redDot: {
    position: "absolute",
    width: 8,
    height: 8,
    backgroundColor: "red",
    borderRadius: 4,
    right: 3,
    top: 3,
  },

  gridContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginTop: 15,
  },

 card: {
  width: "45%",
  height: 110,
  backgroundColor: "#FFFFFF",
  padding: 16,
  borderRadius: 12,
  elevation: 4, // Android shadow
  marginBottom: 12,

  // iOS Shadow
  shadowColor: "#000",
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.18,
  shadowRadius: 3,
},
  cardTitle: { fontSize: 13, fontWeight: "600", color: "#000" },
  cardValue: { fontSize: 15, fontWeight: "600", color: "#4CAF50", marginTop: 6 },

  floatingIcon: {
    position: "absolute",
    bottom: 70,
    right: 25,
    elevation: 10,
  },

  bottomNav: {
    position: "absolute",
    bottom: 0,
    width: "110%",
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#fff",
    paddingVertical: 10,
    paddingHorizontal: 15,
    elevation: 10,
  },
  navItem: { alignItems: "center", justifyContent: "center", flex: 1 },
  navItemActive: { alignItems: "center", justifyContent: "center", flex: 1 },

  navIcon: { width: 22, height: 22, resizeMode: "contain" },
  navIconActive: { width: 30, height: 30, resizeMode: "contain" },

  navLabel: { fontSize: 12, color: "#777", marginTop: 3 },
  navLabelActive: { fontSize: 12, color: "#4CAF50", marginTop: 3, fontWeight: "700" },
});
