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
import Svg, { Circle } from "react-native-svg";
import { LineChart, PieChart } from "react-native-chart-kit";

const screenWidth = Dimensions.get("window").width;

/* ------------------- GAUGE COMPONENT ------------------ */
const Gauge = ({ value }: { value: number }) => {
  const size = 170;
  const strokeWidth = 14;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (value / 100) * circumference;

  return (
    <View style={gaugeStyles.container}>
      <Svg width={size} height={size}>
        <Circle
          stroke="#D6D6D6"
          fill="none"
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeWidth={strokeWidth}
        />
        <Circle
          stroke="#4CAF50"
          fill="none"
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeWidth={strokeWidth}
          strokeDasharray={`${circumference} ${circumference}`}
          strokeDashoffset={offset}
          strokeLinecap="round"
        />
      </Svg>

      <View style={gaugeStyles.centerText}>
        <Text style={gaugeStyles.percent}>{value}%</Text>
      </View>
    </View>
  );
};

/* ====================== MAIN SCREEN ===================== */

const OEEScreen = ({ navigation }: any) => {
  const pieData = [
    {
      name: "Availability",
      population: 25,
      color: "#4CAF50",
    },
    {
      name: "Performance",
      population: 60,
      color: "#8BC34A",
    },
    {
      name: "Quality",
      population: 15,
      color: "#C8C8C8",
    },
  ];

  return (
    <View style={styles.container}>

      {/* ---------------- HEADER ---------------- */}
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

      {/* ---------------- SEARCH + NOTIFICATION ---------------- */}
      <View style={styles.searchRow}>
        <View style={styles.searchBox}>
          <Ionicons name="search" size={20} color="#4CAF50" />
          <TextInput
            placeholder="Search your Data.."
            placeholderTextColor="#999"
            style={styles.searchInput}
          />
          <Ionicons name="filter-outline" size={20} color="#4CAF50" />
        </View>

        <TouchableOpacity style={styles.bellIcon}>
          <Ionicons name="notifications" size={26} />
          <View style={styles.redDot} />
        </TouchableOpacity>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        
        <Text style={styles.sectionTitle}>Overall Equipment Effectiveness</Text>

        {/* ---------------- GAUGE CARD ---------------- */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Batch Quality Compliance</Text>
          <Gauge value={85} />
          <Text style={styles.smallText}>Benchmark 90%</Text>
        </View>

        {/* ---------------- LINE CHART ---------------- */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>OEE Trend</Text>

          <LineChart
            data={{
              labels: ["1", "2", "3", "4", "5", "6"],
              datasets: [{ data: [40, 60, 55, 80, 70, 85] }],
            }}
            width={screenWidth - 60}
            height={200}
            bezier
            chartConfig={{
              backgroundColor: "#FFF",
              backgroundGradientFrom: "#FFF",
              backgroundGradientTo: "#FFF",
              color: () => "#4CAF50",
              propsForDots: { r: "5", fill: "#4CAF50" },
            }}
            style={{ marginVertical: 12 }}
          />

          <Text style={styles.smallText}>Days(Time)</Text>
        </View>

        {/* ---------------- PIE CHART ---------------- */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>OEE Component Contribution</Text>

          <PieChart
            data={pieData}
            width={screenWidth - 40}
            height={200}
            accessor="population"
            backgroundColor="transparent"
            paddingLeft="20"
            hasLegend={false}
            chartConfig={{
              color: () => "#4CAF50",
            }}
          />

          <View style={styles.legendWrapper}>
            {pieData.map((item) => (
              <View key={item.name} style={styles.legendRow}>
                <View style={[styles.dot, { backgroundColor: item.color }]} />
                <Text style={styles.legendLabel}>{item.name}</Text>
                <Text style={styles.legendValue}>{item.population}%</Text>
              </View>
            ))}
          </View>
        </View>

      </ScrollView>

      {/* ---------------- FLOATING BUTTON ---------------- */}
      <TouchableOpacity style={styles.floatingIcon}>
        <Image
          source={require("../assets/images/navbaricons/logo.png")}
          style={{ width: 70, height: 70, resizeMode: "contain" }}
        />
      </TouchableOpacity>

       {/* Bottom Navigation */}
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

export default OEEScreen;

/* ========================= STYLES ========================= */

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff", paddingHorizontal: 15 },

  header: { flexDirection: "row", justifyContent: "space-between", paddingVertical: 15 },
  headerTitle: { fontSize: 18, fontWeight: "700" },
  headerSub: { fontSize: 12, color: "#666" },

  searchRow: { flexDirection: "row", alignItems: "center", marginTop: 10 },
  searchBox: {
    flexDirection: "row",
    flex: 1,
    borderColor: "#4CAF50",
    borderWidth: 1.5,
    height: 45,
    borderRadius: 10,
    alignItems: "center",
    paddingHorizontal: 12,
  },
  searchInput: { flex: 1, marginLeft: 8, color: "#000" },

  bellIcon: { marginLeft: 10, position: "relative" },
  redDot: {
    width: 8, height: 8, borderRadius: 4, backgroundColor: "red",
    position: "absolute", right: 0, top: 0,
  },

  sectionTitle: { textAlign: "center", fontSize: 15, fontWeight: "700", marginVertical: 15 },

  card: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 18,
    marginBottom: 18,
    elevation: 4,
  },
  cardTitle: { fontSize: 15, fontWeight: "600", textAlign: "center" },
  smallText: { textAlign: "center", marginTop: 6, color: "#777" },

  legendWrapper: { marginTop: 10 },
  legendRow: { flexDirection: "row", justifyContent: "space-between", marginVertical: 4 },
  dot: { width: 10, height: 10, borderRadius: 5 },

  legendLabel: { fontSize: 14 },
  legendValue: { fontSize: 14, fontWeight: "700" },

  floatingIcon: { position: "absolute", bottom: 55, right: 25 },
    bottomNav: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#fff",
    paddingVertical: 12,
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

/* Gauge */
const gaugeStyles = StyleSheet.create({
  container: { alignItems: "center", justifyContent: "center" },
  centerText: { position: "absolute" },
  percent: { fontSize: 26, fontWeight: "700", color: "#4CAF50" },
});
