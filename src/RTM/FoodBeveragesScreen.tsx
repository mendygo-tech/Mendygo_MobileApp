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

const FoodBeveragesScreen = ({ navigation }: any) => {

  const progress = 0.9; // 90% circle progress
  const radius = 50;
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

      {/* SECTION TITLE */}
      <Text style={styles.sectionTitle}>Food & Beverages</Text>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 180 }}>

        {/* CHART CARD */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Production Throughput</Text>

          <LineChart
            data={{
              labels: ["09:00", "11:00", "13:00", "14:00", "16:00"],
              datasets: [
                { data: [120, 150, 200, 180, 220], color: () => "#1E88E5" },
                { data: [70, 110, 160, 140, 180], color: () => "#4CAF50" },
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
            <Text style={styles.smallText}>PTH = Production Throughput (Tonnes/hour)</Text>
            <Text style={styles.smallText}>PLE = Packaging line efficiency (%)</Text>
          </View>
        </View>

        {/* KPI ROW */}
        <View style={styles.row}>
          <View style={styles.kpiCard}>
            <Text style={styles.kpiTitle}>Temperature & humidity</Text>
            <Text style={styles.kpiValue}>99 °C</Text>
            <Text style={styles.kpiValue}>25% RH</Text>
            <View style={styles.dot} />
          </View>

          <View style={styles.kpiCard}>
            <Text style={styles.kpiTitle}>Shelf-life Tracking</Text>
            <Text style={styles.kpiValue}>95 days</Text>
            <View style={styles.dot} />
          </View>
        </View>

        {/* CIRCLE PROGRESS */}
        <View style={styles.cardBig}>
          <Text style={styles.cardTitle}>Batch Quality Compliance</Text>

          <View style={styles.circleWrapper}>
            <Svg width={130} height={130} viewBox="0 0 120 120">
              {/* Grey base */}
              <Circle
                cx="60"
                cy="60"
                r={radius}
                stroke="#E0E0E0"
                strokeWidth="12"
                fill="none"
              />

              {/* Green progress */}
              <Circle
                cx="60"
                cy="60"
                r={radius}
                stroke="#4CAF50"
                strokeWidth="12"
                fill="none"
                strokeDasharray={circumference}
                strokeDashoffset={circumference * (1 - progress)}
                strokeLinecap="round"
                rotation="-90"
                origin="60,60"
              />
            </Svg>

            <View style={styles.circleValueWrapper}>
              <Text style={styles.bigPercent}>90%</Text>
            </View>
          </View>

          <Text style={styles.subText}>Compliant Batches</Text>
        </View>
             <View style={styles.row}>
                  <View style={styles.kpiCard}>
                    <Text style={styles.kpiTitle}>Water Usage</Text>
                    <Text style={styles.kpiValueGreen}>500 m3/day</Text>
                  </View>
        
                  <View style={styles.kpiCard}>
                    <Text style={styles.kpiTitle}>Product Defect Rate</Text>
                    <Text style={styles.kpiValueGreen2}>4%</Text>
                  </View>
                </View>
        
                <View style={styles.row}>
                   <View style={styles.kpiCard}>
                    <Text style={styles.kpiTitle}>Waste &  Spoilage  Levels</Text>
                       <Text style={styles.kpiValueGreen2}>40%</Text>
                 </View>
        
                  <View style={styles.kpiCard}>
                    <Text style={styles.kpiTitle}>Enery Usage</Text>
                    <Text style={styles.kpiValueGreen}>5000 kWh/day</Text>
                  </View>
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

export default FoodBeveragesScreen;

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
  redDot: { width: 8, height: 8, backgroundColor: "red", borderRadius: 4, position: "absolute", right: 0, top: 0 },

  sectionTitle: { fontSize: 20, fontWeight: "700", textAlign: "center", marginVertical: 20 },

  card: {
    backgroundColor: "#fff",
    padding: 22,
    borderRadius: 20,
    elevation: 4,
    marginBottom: 28,
  },

  cardBig: {
    backgroundColor: "#fff",
    paddingVertical: 30,
    paddingHorizontal: 22,
    borderRadius: 22,
    elevation: 4,
    marginBottom: 28,
  },

  cardTitle: { fontSize: 17, fontWeight: "700", textAlign: "center", marginBottom: 18 },

  legendBox: { marginTop: 12, gap: 4 },
  smallText: { fontSize: 13, color: "#666", textAlign: "center" },

  /* KPI */
  row: { flexDirection: "row", justifyContent: "space-between", marginBottom: 26 },
    kpiCardAlert: {
    width: "48%",
    padding: 16,
    backgroundColor: "#fff",
    borderRadius: 12,
    elevation: 3,
    borderColor: "#E53935",
    borderWidth: 2,
  },

  kpiCard: {
    width: "48%",
    paddingVertical: 22,
    paddingHorizontal: 16,
    borderRadius: 18,
    backgroundColor: "#fff",
    elevation: 5,
    alignItems: "center",
    gap: 8,
  },
  kpiTitle: { fontSize: 14, fontWeight: "600", textAlign: "center", color: "#444" },
  kpiValue: { fontSize: 22, fontWeight: "700", color: "#4CAF50", textAlign: "center" },
    // kpiTitle: { fontSize: 13, color: "#000", marginBottom: 8 },
  kpiValueGreen: { fontSize: 22, fontWeight: "700", color: "#4CAF50" },
  kpiValueGreen2: { fontSize: 22, fontWeight: "700", color: "#E53935" },

  alertValue: { fontSize: 26, fontWeight: "700", color: "#E53935" },
  alertText: { color: "#E53935", fontWeight: "600", marginTop: 4 },
  dot: { width: 12, height: 12, backgroundColor: "#4CAF50", borderRadius: 6, position: "absolute", top: 12, right: 12 },

  /* CIRCLE PROGRESS */
  circleWrapper: { alignItems: "center", justifyContent: "center", marginVertical: 10 },
  circleValueWrapper: { position: "absolute", justifyContent: "center", alignItems: "center" },
  bigPercent: { fontSize: 32, fontWeight: "800", color: "#4CAF50" },
  subText: { textAlign: "center", fontSize: 14, fontWeight: "600", color: "#555", marginTop: 10 },

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
