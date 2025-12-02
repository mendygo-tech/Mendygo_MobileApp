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
import Svg, { Circle } from "react-native-svg";

const screenWidth = Dimensions.get("window").width;

const BuildingsFactoriesScreen = ({ navigation }: any) => {

  const progressHVAC = 0.9;   // 90%
  const progressAQ = 0.42;    // 42%
  const radius = 45;
  const circumference = 2 * Math.PI * radius;

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

      {/* SEARCH & NOTIF */}
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

      <Text style={styles.sectionTitle}>Buildings & Factories</Text>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 180 }}>

        {/* KPI GRID TOP */}
        <View style={styles.kpiGrid}>

          {/* HVAC PERFORMANCE */}
          <View style={styles.kpiCard}>
            <Text style={styles.kpiTitle}>HVAC Performance</Text>
            <View style={styles.circleWrapper}>
              <Svg width={120} height={120} viewBox="0 0 100 100">
                <Circle cx="50" cy="50" r={radius} stroke="#E0E0E0" strokeWidth="10" fill="none" />
                <Circle
                  cx="50"
                  cy="50"
                  r={radius}
                  stroke="#4CAF50"
                  strokeWidth="10"
                  fill="none"
                  strokeDasharray={circumference}
                  strokeDashoffset={circumference * (1 - progressHVAC)}
                  strokeLinecap="round"
                  rotation="-90"
                  origin="50,50"
                />
              </Svg>
              <View style={styles.circleValueCenter}>
                <Text style={styles.kpiValueGreenBig}>90 %</Text>
              </View>
            </View>
          </View>

          {/* ENERGY */}
          <View style={styles.kpiCard}>
            <Text style={styles.kpiTitle}>Energy Consumption</Text>
            <Ionicons name="flash" size={20} color="#4CAF50" />
            <Text style={styles.kpiValueGreen}>540 kWh</Text>
          </View>

          {/* OCCUPANCY */}
          <View style={styles.kpiCard}>
            <Text style={styles.kpiTitle}>Occupancy Rate</Text>
            <Text style={styles.kpiValueGreen}>75 %</Text>
          </View>

          {/* AIR QUALITY INDEX */}
          <View style={styles.kpiCard}>
            <Text style={styles.kpiTitle}>Air Quality Index</Text>
            <View style={styles.circleWrapperSmall}>
              <Svg width={80} height={80} viewBox="0 0 100 100">
                <Circle cx="50" cy="50" r={radius} stroke="#E0E0E0" strokeWidth="10" fill="none" />
                <Circle
                  cx="50"
                  cy="50"
                  r={radius}
                  stroke="#4CAF50"
                  strokeWidth="10"
                  fill="none"
                  strokeDasharray={circumference}
                  strokeDashoffset={circumference * (1 - progressAQ)}
                  strokeLinecap="round"
                  rotation="-90"
                  origin="50,50"
                />
              </Svg>
              <View style={styles.circleValueCenterSmall}>
                <Text style={styles.kpiValueGreen}>42</Text>
              </View>
            </View>
          </View>
        </View>

        {/* CARBON EMISSIONS CHART */}
        <View style={styles.chartCard}>
          <Text style={styles.cardTitle}>Carbon Emissions</Text>

          <LineChart
            data={{
              labels: ["09:00", "11:00", "13:00", "14:00", "16:00"],
              datasets: [{ data: [500, 380, 420, 460, 530], color: () => "#E53935" }],
            }}
            width={screenWidth - 60}
            height={220}
            chartConfig={{
              backgroundGradientFrom: "#fff",
              backgroundGradientTo: "#fff",
              color: () => "#000",
              decimalPlaces: 0,
            }}
            bezier
            style={{ marginTop: 10 }}
          />
        </View>

        {/* FIRE SAFETY STATUS CARD */}
        <View style={styles.fireCard}>
          <View style={styles.greenDotBig} />
          <Text style={styles.fireTitle}>Fire Safety Status --&gt;</Text>
          <Text style={styles.fireNormal}>Normal</Text>
        </View>

      </ScrollView>

      {/* FLOATING BUTTON */}
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

export default BuildingsFactoriesScreen;

/* =================== STYLES =================== */

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

  /* KPI Grid */
  kpiGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    rowGap: 20,
    marginBottom: 25,
  },

  kpiCard: {
    width: "48%",
    paddingVertical: 20,
    paddingHorizontal: 14,
    borderRadius: 18,
    backgroundColor: "#fff",
    elevation: 5,
    alignItems: "center",
    gap: 8,
  },

  kpiTitle: { fontSize: 14, fontWeight: "600", textAlign: "center", color: "#444" },
  kpiValueGreen: { fontSize: 22, fontWeight: "700", color: "#4CAF50" },
  kpiValueGreenBig: { fontSize: 20, fontWeight: "800", color: "#4CAF50" },

  /* circle progress */
  circleWrapper: { justifyContent: "center", alignItems: "center" },
  circleValueCenter: { position: "absolute", alignItems: "center" },

  circleWrapperSmall: { justifyContent: "center", alignItems: "center" },
  circleValueCenterSmall: { position: "absolute" },

  /* Chart Card */
  chartCard: {
    backgroundColor: "#fff",
    padding: 22,
    borderRadius: 20,
    elevation: 4,
    marginBottom: 30,
  },
  cardTitle: { fontSize: 17, fontWeight: "700", textAlign: "center", marginBottom: 12 },

  /* Fire Safety */
  fireCard: {
    backgroundColor: "#fff",
    borderRadius: 18,
    elevation: 4,
    paddingVertical: 18,
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  fireTitle: { fontSize: 15, fontWeight: "600" },
  fireNormal: { fontSize: 18, fontWeight: "800", color: "#4CAF50" },
  greenDotBig: { width: 14, height: 14, backgroundColor: "#4CAF50", borderRadius: 7 },

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
