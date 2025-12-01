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
import { PieChart, LineChart } from "react-native-chart-kit";

const screenWidth = Dimensions.get("window").width;

const PerformanceScreen = ({ navigation }: any) => {
  const performancePie = [
    { name: "Performance", population: 90, color: "#1E88E5" },
    { name: "Remaining", population: 10, color: "#D9D9D9" },
  ];

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

      {/* SEARCH INPUT */}
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
          <Ionicons name="notifications" size={26} color="#000" />
          <View style={styles.redDot} />
        </TouchableOpacity>
      </View>

      {/* CONTENT */}
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 150 }}>

        <Text style={styles.sectionTitle}>Performance Rate</Text>

        {/* PIE DONUT GAUGE */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Performance Analytics</Text>

          <View style={{ alignItems: "center", justifyContent: "center" }}>
            <PieChart
              data={performancePie}
              width={screenWidth - 60}
              height={220}
              accessor="population"
              backgroundColor="transparent"
              hasLegend={false}
              paddingLeft="0"
              center={[0, 0]}
              absolute
              chartConfig={{
                backgroundGradientFrom: "#fff",
                backgroundGradientTo: "#fff",
                color: () => "#000",   // REQUIRED FIX to prevent crash
              }}
            />

            <View style={styles.gaugeCenter}>
              <Text style={styles.gaugeValue}>90%</Text>
            </View>
          </View>

          <Text style={styles.smallText}>Real-Time Performance</Text>
        </View>

        {/* LINE CHART */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Performance Trends</Text>

          <LineChart
            data={{
              labels: ["1", "2", "3", "4", "5", "6"],
              datasets: [{ data: [70, 75, 65, 80, 72, 50] }],
            }}
            width={screenWidth - 60}
            height={220}
            bezier
            chartConfig={{
              backgroundGradientFrom: "#fff",
              backgroundGradientTo: "#fff",
              color: () => "#4CAF50",
              propsForDots: { r: "4", fill: "#4CAF50" },
            }}
            style={{ marginVertical: 10 }}
          />
          <Text style={styles.smallText}>Days(Time)</Text>
        </View>

        {/* KPI CARDS */}
        <View style={styles.kpiRow}>
          <View style={styles.kpiCard}>
            <Text style={styles.kpiTitle}>Cycle Time</Text>
            <Text style={styles.kpiValueGreen}>42 sec</Text>
          </View>

          <View style={styles.kpiCard}>
            <Text style={styles.kpiTitle}>Deviation</Text>
            <Text style={styles.kpiValueRed}>2 sec</Text>
          </View>
        </View>
      </ScrollView>

      {/* FLOATING ICON */}
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

export default PerformanceScreen;

/* --------------------- STYLES --------------------- */

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
  redDot: {
    width: 8,
    height: 8,
    backgroundColor: "red",
    borderRadius: 4,
    position: "absolute",
    right: 0,
    top: 0,
  },

  sectionTitle: { fontSize: 16, fontWeight: "700", textAlign: "center", marginVertical: 10 },

  card: { backgroundColor: "#fff", padding: 18, borderRadius: 12, marginBottom: 18, elevation: 4 },

  cardTitle: { fontSize: 15, fontWeight: "600", textAlign: "center", marginBottom: 10 },
  smallText: { textAlign: "center", color: "#666", marginTop: 5 },

  gaugeCenter: {
    position: "absolute",
    top: 95,
    left: "44%",
  },
  gaugeValue: { fontSize: 28, fontWeight: "700", color: "#1E88E5" ,left:30,},

  kpiRow: { flexDirection: "row", justifyContent: "space-between", marginBottom: 20 },
  kpiCard: {
    width: "48%",
    backgroundColor: "#fff",
    paddingVertical: 18,
    borderRadius: 12,
    elevation: 4,
    alignItems: "center",
  },
  kpiTitle: { fontSize: 14, fontWeight: "500" },
  kpiValueGreen: { fontSize: 18, fontWeight: "700", color: "#4CAF50", marginTop: 8 },
  kpiValueRed: { fontSize: 18, fontWeight: "700", color: "#E53935", marginTop: 8 },

  floatingIcon: { position: "absolute", bottom: 90, right: 25, zIndex: 999, elevation: 10 },

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
  navItem: { alignItems: "center" },
  navItemActive: { alignItems: "center" },

  navIcon: { width: 26, height: 26, resizeMode: "contain" },
  navIconActive: { width: 32, height: 32, resizeMode: "contain" },
  navLabel: { fontSize: 12, color: "#555", marginTop: 4 },
  navLabelActive: { fontSize: 12, color: "#4CAF50", marginTop: 4, fontWeight: "700" },
});
