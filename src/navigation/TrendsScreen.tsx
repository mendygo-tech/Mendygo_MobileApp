import React from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ScrollView,
  Dimensions,
  TouchableOpacity,
  Image,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { LineChart } from "react-native-chart-kit";

const { width } = Dimensions.get("window");

const TrendsScreen: React.FC = () => {
  const chartWidth = width - 50;

  const readings = [
    { time: "08:00", r: 230, y: 228, b: 229 },
    { time: "09:00", r: 232, y: 229, b: 231 },
    { time: "10:00", r: 229, y: 230, b: 230 },
    { time: "11:00", r: 222, y: 221, b: 223 },
    { time: "11:30", r: 230, y: 221, b: 225, alert: true },
  ];

  return (
    <View style={styles.container}>
      {/* ---------- HEADER ---------- */}
      <View style={styles.header}>
        <TouchableOpacity>
          <Icon name="chevron-back" size={26} color="#000" />
        </TouchableOpacity>

        <Text style={styles.headerTitle}>Trends</Text>

        <TouchableOpacity>
          <Icon name="settings-outline" size={24} color="#43A047" />
        </TouchableOpacity>
      </View>

      <Text style={styles.subHeading}>Voltage Phase Monitoring</Text>

      {/* Search + Bell */}
      <View style={styles.searchRow}>
        <View style={styles.searchBox}>
          <Icon name="search" size={20} color="#888" />
       <TextInput
                   style={styles.searchInput}
                   placeholder="Search your Data.."
                   placeholderTextColor="#999"
                 />
            <TouchableOpacity>
      <Icon name="filter-outline" size={22} color="#43A047" />
    </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.bellBtn}>
          <Icon name="notifications-outline" size={24} color="#000" />
          <View style={styles.redDot} />
        </TouchableOpacity>
      </View>

      {/* Chips */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ marginBottom: 5 }}>
        {["Plant / site selector", "Date Range", "Equipment", "Parameters", "Compare with Date Range"].map(
          (label, index) => (
            <TouchableOpacity key={index} style={styles.chip}>
              <Text style={styles.chipText}>{label}</Text>
              <Icon name="chevron-down" size={14} />
            </TouchableOpacity>
          )
        )}
      </ScrollView>

      {/* Legends */}
      <View style={styles.legendContainer}>
        <Legend title="R Phase" color="#6FA9FF" />
        <Legend title="Y Phase" color="#A5E66F" />
        <Legend title="B Phase" color="#D3B6FF" />
      </View>

      {/* -------- CHARTKIT GRAPH -------- */}
      <View style={styles.chartCard}>
        <Text style={styles.cardTitle}>Trends</Text>

        <LineChart
          data={{
            labels: ["", "", "", "", "", "", "", "", ""],
            datasets: [
              {
                data: [220, 240, 290, 260, 250, 240, 245, 260, 290],
                color: () => "rgba(111,169,255,0.7)",
                strokeWidth: 3,
              },
              {
                data: [210, 230, 270, 250, 240, 255, 250, 245, 280],
                color: () => "rgba(165,230,111,0.7)",
                strokeWidth: 3,
              },
              {
                data: [200, 220, 300, 255, 230, 235, 260, 255, 300],
                color: () => "rgba(211,182,255,0.7)",
                strokeWidth: 3,
              },
            ],
          }}
          width={chartWidth}
          height={200}
          bezier
          chartConfig={{
            backgroundGradientFromOpacity: 0,
            backgroundGradientToOpacity: 0,
            color: () => "#000",
            labelColor: () => "#000",
            propsForDots: { r: "0" },
          }}
          style={{ marginVertical: 20,top:20 }}
        />
      </View>

      {/* -------- Readings Table -------- */}
      <View style={styles.tableCard}>
        <Text style={styles.cardTitle}>Readings</Text>

        <View style={styles.tableHeader}>
          <Text style={styles.tableHeadText}>Time</Text>
          <Text style={styles.tableHeadText}>R Phase</Text>
          <Text style={styles.tableHeadText}>Y Phase</Text>
          <Text style={styles.tableHeadText}>B Phase</Text>
        </View>

        {readings.map((row, index) => (
          <View key={index} style={styles.row}>
            <Text style={[styles.rowText, row.alert && styles.red]}>{row.time}</Text>
            <Text style={[styles.rowText, row.alert && styles.red]}>{row.r} V</Text>
            <Text style={[styles.rowText, row.alert && styles.red]}>{row.y} V</Text>
            <Text style={[styles.rowText, row.alert && styles.red]}>{row.b} V</Text>
          </View>
        ))}
      </View>
       <TouchableOpacity style={styles.floatingIcon}>
              <Image
                source={require("../assets/images/navbaricons/logo.png")}
                style={{ width: 68, height: 68 }}
              />
            </TouchableOpacity>

      {/* ---------- Bottom Navbar ---------- */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem}>
          <Image source={require("../assets/images/navbaricons/slg.png")} style={styles.navIcon} />
          <Text style={styles.navLabel}>SLD</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navItemActive}>
          <Image source={require("../assets/images/navbaricons/trends.png")} style={styles.navIconActive} />
          <Text style={styles.navLabelActive}>Trends</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem}>
          <Image source={require("../assets/images/navbaricons/logo2.png")} style={styles.navIcon} />
          <Text style={styles.navLabel}>Dashboard</Text>
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

export default TrendsScreen;

/* ------------ Components ----------- */
const Legend = ({ title, color }: any) => (
  <View style={{ flexDirection: "row", alignItems: "center", marginRight: 12 }}>
    <View style={{ width: 10, height: 10, borderRadius: 2, backgroundColor: color }} />
    <Text style={{ marginLeft: 5, fontSize: 12 }}>{title}</Text>
  </View>
);

/* ------------ Styles ---------------- */
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F5F6F7", paddingBottom: 80 },
  header: {
    paddingTop: 12,
    paddingHorizontal: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerTitle: { fontSize: 22, fontWeight: "700", color: "#000" },
  subHeading: { textAlign: "center", fontSize: 14, color: "#666", marginBottom: 6 },

  searchRow: {
    flexDirection: "row",
    paddingHorizontal: 16,
    alignItems: "center",
    marginBottom: 12,
  },
  searchBox: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    flex: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    height: 42,
    marginRight: 6,
  },
  bellBtn: { padding: 4 },
  redDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "red",
    position: "absolute",
    top: 2,
    right: 0,
  },

  chip: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginRight: 8,
    borderRadius: 8,
    elevation: 2,
  },
  chipText: { fontSize: 12, marginRight: 6 },

  legendContainer: { flexDirection: "row", paddingLeft: 12, marginBottom: 5,justifyContent:"space-around" },
   floatingIcon: { position: "absolute", bottom: 75, right: 18, elevation: 12 },

  chartCard: {
    backgroundColor: "#fff",
    marginHorizontal: 14,
    borderRadius: 12,
    paddingVertical: 10,
    alignItems: "center",
    elevation: 3,
    marginBottom: 18,
  },
  cardTitle: { fontSize: 17, fontWeight: "700", marginLeft: 16, alignSelf: "flex-start" },

  tableCard: {
    backgroundColor: "#fff",
    marginHorizontal: 14,
    borderRadius: 12,
    padding: 12,
    elevation: 3,
    marginBottom: 40
  },

  tableHeader: { flexDirection: "row", justifyContent: "space-between", marginBottom: 6 },
  tableHeadText: { fontSize: 15, fontWeight: "700" },
  row: { flexDirection: "row", justifyContent: "space-between", marginVertical: 4 },
  rowText: { fontSize: 15 },
  red: { color: "red", fontWeight: "700" },
    searchInput: { flex: 1, fontSize: 15, color: "#000" },

  bottomNav: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#fff",
    paddingVertical: 10,
    paddingHorizontal: 18,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    elevation: 12,
  },
  navItem: { alignItems: "center", width: (width - 36) / 5 },
  navItemActive: { alignItems: "center", width: (width - 36) / 5 },
  navIcon: { width: 26, height: 26, tintColor: "#777", resizeMode: "contain" },
  navIconActive: { width: 30, height: 30, resizeMode: "contain" },
  navLabel: { fontSize: 11, marginTop: 4, color: "#777" },
  navLabelActive: { fontSize: 11, marginTop: 4, color: "#43A047", fontWeight: "700" },
});
