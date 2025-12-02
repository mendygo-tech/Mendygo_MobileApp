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
import { BarChart } from "react-native-chart-kit";
import Svg, { Circle } from "react-native-svg";

const screenWidth = Dimensions.get("window").width;

const RetailsMallsScreen = ({ navigation }: any) => {

  const occupancyValue = 0.48; // 48%
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

      <Text style={styles.sectionTitle}>Retails & Malls</Text>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 180 }}>

        {/* FOOTFALL CARD */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Footfall Count</Text>

          <View style={styles.rowSplit}>
            <View style={styles.valueBox}>
              <Text style={styles.labelText}>Daily Visitors</Text>
              <Text style={styles.valueGreen}>1250</Text>
            </View>

            <View style={styles.verticalDivider} />

            <View style={styles.valueBox}>
              <Text style={styles.labelText}>Peak/Hour Count</Text>
              <Text style={styles.valueGreen}>3200</Text>
            </View>

            <View style={styles.verticalDivider} />

            <View style={styles.valueBox}>
              <Text style={styles.labelText}>Monthly Total</Text>
              <Text style={styles.valueGreen}>51000</Text>
            </View>
          </View>
        </View>

        {/* BAR CHART */}
        <View style={styles.card}>
          <View style={styles.chartHeader}>
            <Text style={styles.cardTitle}>Sales per Square feet</Text>
            <Text style={styles.costTag}>Cost (kWh)</Text>
          </View>

          <BarChart
            data={{
              labels: ["July", "August", "September", "October"],
              datasets: [
                { data: [7293, 5091, 2991, 6101], colors: [
                    () => "#1E88E5",
                    () => "#4CAF50",
                    () => "#E53935",
                    () => "#1E88E5",
                  ]
                },
              ],
            }}
            width={screenWidth - 60}
            height={240}
            yAxisLabel=""
            yAxisSuffix=""
            chartConfig={{
              backgroundGradientFrom: "#fff",
              backgroundGradientTo: "#fff",
              decimalPlaces: 0,
              color: () => "#000",
              barPercentage: 0.5,
            }}
            style={{ marginTop: 20 }}
            fromZero
            showValuesOnTopOfBars
          />
        </View>

        {/* OCCUPANCY RATE */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Occupancy Rate</Text>

          <View style={{ alignItems: "center", marginVertical: 10 }}>
            <Svg width={120} height={120} viewBox="0 0 100 100">
              <Circle cx="50" cy="50" r={radius} stroke="#E0E0E0" strokeWidth="12" fill="none" />
              <Circle
                cx="50"
                cy="50"
                r={radius}
                stroke="#1E88E5"
                strokeWidth="12"
                fill="none"
                strokeDasharray={circumference}
                strokeDashoffset={circumference * (1 - occupancyValue)}
                strokeLinecap="round"
                rotation="-90"
                origin="50,50"
              />
            </Svg>

            <View style={styles.circleCenterValue}>
              <Text style={styles.occupancyValue}>48%</Text>
            </View>
          </View>

          <Text style={styles.subText}>Occupied Building Space</Text>
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

export default RetailsMallsScreen;
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#FFF", paddingHorizontal: 15 },

  header: { flexDirection: "row", alignItems: "center", justifyContent: "space-between", paddingVertical: 18 },
  headerTitle: { fontSize: 20, fontWeight: "700" },
  headerSub: { fontSize: 12, color: "#777" },

  searchRow: { flexDirection: "row", alignItems: "center", marginTop: 15 },
  searchBox: {
    flexDirection: "row",
    flex: 1,
    borderColor: "#4CAF50",
    borderWidth: 1.5,
    borderRadius: 14,
    height: 48,
    backgroundColor: "#F4FBF6",
    paddingHorizontal: 14,
    alignItems: "center",
  },
  searchInput: { flex: 1, marginLeft: 10, color: "#000" },

  bellIcon: { marginLeft: 12, position: "relative" },
  redDot: { width: 10, height: 10, backgroundColor: "red", borderRadius: 5, position: "absolute", right: -1, top: -2 },

  sectionTitle: { fontSize: 20, fontWeight: "700", textAlign: "center", marginVertical: 18 },

  card: {
    backgroundColor: "#fff",
    padding: 22,
    borderRadius: 20,
    elevation: 4,
    marginBottom: 28,
  },
  cardTitle: { fontSize: 17, fontWeight: "700", textAlign: "center", marginBottom: 14 },

  /* Footfall Count */
  rowSplit: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginTop: 15 },
  valueBox: { width: "30%", alignItems: "center" },
  verticalDivider: { width: 1, height: 55, backgroundColor: "#ccc" },

  labelText: { fontSize: 14, color: "#666", marginBottom: 6, textAlign: "center" },
  valueGreen: { fontSize: 22, fontWeight: "800", color: "#4CAF50" },

  /* Chart */
  chartHeader: { flexDirection: "row", justifyContent: "space-between", alignItems: "center" },
  costTag: { fontSize: 12, fontWeight: "700", color: "#444" },

  /* Occupancy */
  circleCenterValue: { position: "absolute", justifyContent: "center", alignItems: "center" },
  occupancyValue: { fontSize: 26, fontWeight: "800", color: "#1E88E5",top:30 },
  subText: { fontSize: 14, textAlign: "center", fontWeight: "600", color: "#555", marginTop: 10 },

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
