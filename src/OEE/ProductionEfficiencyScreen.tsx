import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  Image,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { LineChart } from "react-native-chart-kit";

const screenWidth = Dimensions.get("window").width;

const ProductionEfficiencyScreen = ({ navigation }: any) => {
  return (
    <View style={styles.container}>

      {/* HEADER */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back" size={24} />
        </TouchableOpacity>

        <View style={{ alignItems: "center" }}>
          <Text style={styles.headerTitle}>Smart OEE</Text>
          <Text style={styles.headerSub}>Overall Equipment Efficiency</Text>
        </View>

        <Ionicons name="settings-outline" size={22} />
      </View>

      {/* SEARCH ROW */}
      <View style={styles.searchRow}>
        <View style={styles.searchBox}>
          <Ionicons name="search" size={20} color="#4CAF50" />
          <TextInput
            placeholder="Search your Data.."
            style={styles.searchInput}
            placeholderTextColor="#888"
          />
          <Ionicons name="filter-outline" size={22} color="#4CAF50" />
        </View>

        <TouchableOpacity style={styles.bellIcon}>
          <Ionicons name="notifications" size={26} />
          <View style={styles.redDot} />
        </TouchableOpacity>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 120 }}>

        <Text style={styles.sectionTitle}>Production Efficiency</Text>

        {/* THROUGHPUT */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Throughput</Text>

          <LineChart
            data={{
              labels: ["1", "2", "3", "4", "5", "6", "7", "8"],
              datasets: [
                { data: [200, 650, 350, 700, 400, 800, 900, 750] },
              ],
            }}
            width={screenWidth - 60}
            height={220}
            yAxisSuffix=""
            bezier
            withInnerLines={false}
            withOuterLines={true}
            chartConfig={{
              backgroundGradientFrom: "#fff",
              backgroundGradientTo: "#fff",
              decimalPlaces: 0,
              color: () => "rgba(30,136,229,1)",  // blue line
              fillShadowGradient: "#64B5F6",      // blue shade
              fillShadowGradientOpacity: 0.5,
            }}
            style={{ marginTop: 10 }}
          />
          <Text style={styles.smallText}>Time</Text>
        </View>

        {/* CYCLE TIME DEVIATION */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Cycle Time Deviation</Text>

          <LineChart
            data={{
              labels: ["1", "2", "3", "4", "5", "6", "7", "8"],
              datasets: [
                { data: [10, 40, 20, 25, 30, 28, 45, 60] },
              ],
            }}
            width={screenWidth - 60}
            height={220}
            bezier
            withInnerLines={true}
            chartConfig={{
              backgroundGradientFrom: "#fff",
              backgroundGradientTo: "#fff",
              decimalPlaces: 0,
              color: () => "rgba(33,150,243,1)",
              fillShadowGradient: "#BBDEFB",
              fillShadowGradientOpacity: 0.5,
            }}
            style={{ marginTop: 10 }}
          />
          <Text style={styles.smallText}>Cycle</Text>
        </View>

        {/* SHIFT WISE OEE */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Shift-wise OEE</Text>

          <LineChart
            data={{
              labels: ["1", "2", "3", "4", "5", "6", "7"],
              datasets: [
                { data: [500, 900, 600, 950, 600, 1100, 1200] },
              ],
            }}
            width={screenWidth - 60}
            height={220}
            bezier
            withInnerLines={true}
            chartConfig={{
              backgroundGradientFrom: "#fff",
              backgroundGradientTo: "#fff",
              decimalPlaces: 0,
              color: () => "rgba(76,175,80,1)",  // green
              fillShadowGradient: "#A5D6A7",     // light green shade
              fillShadowGradientOpacity: 0.6,
            }}
            style={{ marginTop: 10 }}
          />
          <Text style={styles.smallText}>Time</Text>
        </View>
      </ScrollView>

      {/* FLOATING ACTION ICON */}
      <TouchableOpacity style={styles.floatingIcon}>
        <Image
          source={require("../assets/images/navbaricons/logo.png")}
          style={{ width: 70, height: 70, resizeMode: "contain" }}
        />
      </TouchableOpacity>

      {/* BOTTOM NAVIGATION */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem}>
          <Image source={require("../assets/images/navbaricons/slg.png")} style={styles.navIcon} />
          <Text style={styles.navLabel}>SLD</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem}>
          <Image source={require("../assets/images/navbaricons/trends.png")} style={styles.navIcon} />
          <Text style={styles.navLabel}>Trends</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navItemActive}>
          <Image source={require("../assets/images/navbaricons/logo2.png")} style={styles.navIconActive} />
          <Text style={styles.navLabelActive}>Dashboard</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem}>
          <Image source={require("../assets/images/navbaricons/alerts.png")} style={styles.navIcon} />
          <Text style={styles.navLabel}>Alerts</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem}>
          <Image source={require("../assets/images/navbaricons/profile.png")} style={styles.navIcon} />
          <Text style={styles.navLabel}>Profile</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
};

export default ProductionEfficiencyScreen;

/* ---------------- STYLES ------------------ */

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#FFF", paddingHorizontal: 15 },

  header: { flexDirection: "row", justifyContent: "space-between", paddingVertical: 15 },
  headerTitle: { fontSize: 18, fontWeight: "700" },
  headerSub: { fontSize: 12, color: "#777" },

  searchRow: { flexDirection: "row", alignItems: "center", marginTop: 10 },
  searchBox: {
    flexDirection: "row",
    flex: 1,
    borderColor: "#4CAF50",
    borderWidth: 1.5,
    borderRadius: 10,
    height: 45,
    paddingHorizontal: 12,
    alignItems: "center",
  },
  searchInput: { flex: 1, marginLeft: 8, color: "#000" },

  bellIcon: { marginLeft: 10, position: "relative" },
  redDot: { width: 8, height: 8, backgroundColor: "red", borderRadius: 4, position: "absolute", top: 0, right: 0 },

  sectionTitle: { fontSize: 16, fontWeight: "700", textAlign: "center", marginVertical: 15 },

  card: {
    backgroundColor: "#fff",
    padding: 18,
    borderRadius: 12,
    marginBottom: 18,
    elevation: 5,
  },

  cardTitle: { fontSize: 15, fontWeight: "600", textAlign: "center" },
  smallText: { textAlign: "center", color: "#666", marginTop: 5 },

  floatingIcon: { position: "absolute", bottom: 90, right: 25, zIndex: 999 },

  bottomNav: {
    position: "absolute",
    bottom: 0,
    width: "110%",
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#fff",
    paddingVertical: 10,
    paddingHorizontal: 15,
    elevation: 12,
  },

  navItem: { alignItems: "center" },
  navItemActive: { alignItems: "center" },

  navIcon: { width: 26, height: 26, resizeMode: "contain" },
  navIconActive: { width: 32, height: 32, resizeMode: "contain" },

  navLabel: { fontSize: 12, color: "#555", marginTop: 4 },
  navLabelActive: { fontSize: 12, color: "#4CAF50", marginTop: 4, fontWeight: "700" },
});
