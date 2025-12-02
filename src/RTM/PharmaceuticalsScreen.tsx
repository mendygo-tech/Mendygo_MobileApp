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

const PharmaceuticalsScreen = ({ navigation }: any) => {
  return (
    <View style={styles.container}>

      {/* HEADER */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back" size={26} />
        </TouchableOpacity>

        <View style={{ alignItems: "center" }}>
          <Text style={styles.headerTitle}>RTM</Text>
          <Text style={styles.headerSub}>Real Time Monitoring</Text>
        </View>

        <Ionicons name="settings-outline" size={24} />
      </View>

      {/* SEARCH BAR */}
      <View style={styles.searchRow}>
        <View style={styles.searchBox}>
          <Ionicons name="search" size={20} color="#4CAF50" />
          <TextInput
            placeholder="Search your Data.."
            placeholderTextColor="#888"
            style={styles.searchInput}
          />
          <Ionicons name="filter-outline" size={22} color="#4CAF50" />
        </View>

        <TouchableOpacity style={styles.bellIcon}>
          <Ionicons name="notifications" size={26} />
          <View style={styles.redDot} />
        </TouchableOpacity>
      </View>

      <Text style={styles.sectionTitle}>Pharmaceuticals</Text>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 180 }}>

        {/* BATCH STATUS CARD */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Batch Status</Text>

          <View style={styles.rowSplit}>
            <View style={styles.batchBox}>
              <Text style={styles.batchTitle}>Clean Room Air Quality</Text>
              <Text style={styles.batchValue}>ISO 7</Text>
            </View>

            <View style={styles.verticalDivider} />

            <View style={styles.batchBox}>
              <Text style={styles.batchTitle}>Compliance Status</Text>
              <Text style={styles.batchValue}>95 %</Text>
            </View>
          </View>
        </View>

        {/* LINE CHART */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Production Throughput</Text>

          <LineChart
            data={{
              labels: ["09:00", "11:00", "13:00", "14:00", "16:00"],
              datasets: [
                { data: [70, 140, 200, 180, 220], color: () => "#1E88E5" },
                { data: [50, 120, 160, 150, 180], color: () => "#4CAF50" },
              ],
            }}
            width={screenWidth - 60}
            height={220}
            bezier
            chartConfig={{
              backgroundGradientFrom: "#fff",
              backgroundGradientTo: "#fff",
              decimalPlaces: 0,
              color: () => "#000",
            }}
            style={{ marginTop: 10 }}
          />

          <View style={{ marginTop: 12 }}>
            <Text style={styles.legend}>PY = Production Yield (%)</Text>
            <Text style={styles.legend}>QPR = Quality Pass Rate</Text>
          </View>
        </View>

        {/* KPI GRID */}
        <View style={styles.kpiGrid}>
          <View style={styles.kpiCard}>
            <Text style={styles.kpiTitle}>Quality Pass Rate</Text>
            <View style={styles.greenDot} />
            <Text style={styles.kpiValueGreen}>98%</Text>
          </View>

          <View style={styles.kpiCard}>
            <Text style={styles.kpiTitle}>Production Yield</Text>
            <View style={styles.greenDot} />
            <Text style={styles.kpiValueGreen}>90%</Text>
          </View>
        </View>

      </ScrollView>

      {/* FLOATING ACTION BUTTON */}
      <TouchableOpacity style={styles.floatingIcon}>
        <Image
          source={require("../assets/images/navbaricons/logo.png")}
          style={{ width: 70, height: 70, resizeMode: "contain" }}
        />
      </TouchableOpacity>

      {/* BOTTOM NAV */}
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

export default PharmaceuticalsScreen;
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#FFF", paddingHorizontal: 15 },

  header: { flexDirection: "row", justifyContent: "space-between", paddingVertical: 18 },
  headerTitle: { fontSize: 20, fontWeight: "700" },
  headerSub: { fontSize: 12, color: "#777" },

  searchRow: { flexDirection: "row", alignItems: "center", marginTop: 15 },
  searchBox: {
    flexDirection: "row",
    flex: 1,
    borderColor: "#4CAF50",
    borderWidth: 1.4,
    borderRadius: 14,
    height: 48,
    backgroundColor: "#F4FBF6",
    paddingHorizontal: 14,
    alignItems: "center",
  },
  searchInput: { flex: 1, marginLeft: 10, color: "#000" },

  bellIcon: { marginLeft: 12, position: "relative" },
  redDot: { width: 10, height: 10, backgroundColor: "red", borderRadius: 5, position: "absolute", right: -1, top: -2 },

  sectionTitle: { fontSize: 20, fontWeight: "700", textAlign: "center", marginVertical: 20 },

  /* Cards */
  card: {
    backgroundColor: "#fff",
    padding: 22,
    borderRadius: 20,
    elevation: 4,
    marginBottom: 28,
  },
  cardTitle: { fontSize: 17, fontWeight: "700", textAlign: "center", marginBottom: 16 },

  /* Batch Status */
  rowSplit: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginTop: 12 },
  batchBox: { width: "48%", alignItems: "center" },
  batchTitle: { fontSize: 14, fontWeight: "600", color: "#444", textAlign: "center", marginBottom: 8 },
  batchValue: { fontSize: 24, fontWeight: "800", color: "#4CAF50" },
  verticalDivider: { width: 1, height: 70, backgroundColor: "#ccc" },

  /* Chart */
  legend: { fontSize: 13, color: "#666", textAlign: "center" },

  /* KPI */
  kpiGrid: { flexDirection: "row", justifyContent: "space-between", marginBottom: 26 },
  kpiCard: {
    width: "48%",
    paddingVertical: 20,
    paddingHorizontal: 14,
    borderRadius: 18,
    backgroundColor: "#fff",
    elevation: 5,
    alignItems: "center",
  },
  kpiTitle: { fontSize: 14, fontWeight: "600", color: "#444", textAlign: "center", marginBottom: 6 },
  kpiValueGreen: { fontSize: 26, fontWeight: "800", color: "#4CAF50" },
  greenDot: { width: 12, height: 12, borderRadius: 6, backgroundColor: "#4CAF50", position: "absolute", top: 10, right: 10 },

  /* Floating Button */
  floatingIcon: { position: "absolute", bottom: 110, right: 25, zIndex: 999 },

  /* Bottom Navigation */
  bottomNav: {
    position: "absolute",
    bottom: 0,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 14,
    paddingHorizontal: 20,
    width: "110%",
    backgroundColor: "#fff",
    elevation: 18,
  },
  navItem: { alignItems: "center" },
  navItemActive: { alignItems: "center" },
  navIcon: { width: 28, height: 28, resizeMode: "contain" },
  navIconActive: { width: 34, height: 34, resizeMode: "contain" },
  navLabel: { fontSize: 12, color: "#666", marginTop: 4 },
  navLabelActive: { fontSize: 12, color: "#4CAF50", marginTop: 4, fontWeight: "700" },
});
