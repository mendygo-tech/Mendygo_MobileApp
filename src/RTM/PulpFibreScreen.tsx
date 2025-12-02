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

const PulpFibreScreen = ({ navigation }: any) => {
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

      {/* SEARCH & NOTIFICATION */}
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

      <Text style={styles.sectionTitle}>Pulp & Fibre Industry</Text>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 180 }}>

        {/* CHART CARD */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Throughput & Speed Analysis</Text>

          <LineChart
            data={{
              labels: ["09:00", "11:00", "13:00", "14:00", "16:00"],
              datasets: [
                { data: [10, 20, 18, 15, 22], color: () => "#1E88E5" },
                { data: [6, 15, 12, 14, 17], color: () => "#4CAF50" },
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

          <View style={styles.legendBox}>
            <Text style={styles.smallText}>PLS = Production line speed (m/min)</Text>
            <Text style={styles.smallText}>TH = Throughput (tonnes/day)</Text>
          </View>
        </View>

        {/* KPI 4 Cards */}
        <View style={styles.kpiGrid}>
          <View style={styles.kpiCard}>
            <Text style={styles.kpiTitle}>Moisture Content</Text>
            <View style={styles.greenDot} />
            <Text style={styles.kpiValueGreen}>12 %</Text>
          </View>

          <View style={styles.kpiCard}>
            <Text style={styles.kpiTitle}>Fibre Quality Index</Text>
            <View style={styles.greenDot} />
            <Text style={styles.kpiValueGreen}>87</Text>
          </View>

          <View style={styles.kpiCard}>
            <Text style={styles.kpiTitle}>Energy Consumption per Tone</Text>
            <Ionicons name="flash" size={18} color="#4CAF50" style={{left:70,top:-30,}} />
            <Text style={styles.kpiValueGreen}>2.5 kWh</Text>
          </View>

          <View style={styles.kpiCard}>
            <Text style={styles.kpiTitle}>Waste & Scrap</Text>
            <View style={styles.redDotSmall} />
            <Text style={styles.kpiValueRed}>8 %</Text>
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

export default PulpFibreScreen;

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
  redDot: { width: 10, height: 10, backgroundColor: "red", borderRadius: 5, position: "absolute", right: -2, top: -2 },

  sectionTitle: { fontSize: 20, fontWeight: "700", textAlign: "center", marginVertical: 20 },

  card: {
    backgroundColor: "#fff",
    padding: 22,
    borderRadius: 20,
    elevation: 4,
    marginBottom: 28,
  },

  cardTitle: { fontSize: 17, fontWeight: "700", textAlign: "center", marginBottom: 18 },

  legendBox: { marginTop: 14, gap: 4 },
  smallText: { fontSize: 13, color: "#666", textAlign: "center" },

  /* KPI GRID */
  kpiGrid: {
    marginTop: 10,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    rowGap: 18,
  },
  kpiCard: {
    width: "48%",
    paddingVertical: 20,
    paddingHorizontal: 16,
    borderRadius: 18,
    backgroundColor: "#fff",
    elevation: 5,
    alignItems: "center",
    gap: 7,
  },
  kpiTitle: { fontSize: 16, fontWeight: "600", textAlign: "center", color: "#444" },

  kpiValueGreen: { fontSize: 22, fontWeight: "700", color: "#4CAF50" },
  kpiValueRed: { fontSize: 22, fontWeight: "800", color: "#E53935", },

  greenDot: { width: 10, height: 10, borderRadius: 5, backgroundColor: "#4CAF50" ,left:70,top:-35,},
  redDotSmall: { width: 10, height: 10, borderRadius: 5, backgroundColor: "#E53935",left:70,top:-30, },

  floatingIcon: { position: "absolute", bottom: 110, right: 25, zIndex: 999 },

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
