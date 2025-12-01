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
import { BarChart, StackedBarChart } from "react-native-chart-kit";

const screenWidth = Dimensions.get("window").width;

const ReliabilityScreen = ({ navigation }: any) => {
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

      {/* SEARCH */}
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

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 120 }}>
        
        <Text style={styles.sectionTitle}>Reliability & Maintenance</Text>

        {/* MTBF */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>MTBF</Text>
          <BarChart
            data={{
              labels: ["Machine A", "Machine B", "Machine C", "Machine D"],
              datasets: [
                { data: [456, 991, 97, 1701] }
              ]
            }}
            width={screenWidth - 60}
            height={220}
            fromZero
            yAxisLabel={""}
            yAxisSuffix={""}
            chartConfig={{
              backgroundGradientFrom: "#fff",
              backgroundGradientTo: "#fff",
              decimalPlaces: 0,
              color: () => "#1E88E5",
            }}
            style={{ marginTop: 10 }}
          />
          <Text style={styles.smallText}>Machines</Text>
        </View>

        {/* MTTR */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>MTTR</Text>
          <BarChart
            data={{
              labels: ["Machine A", "Machine B", "Machine C", "Machine D"],
              datasets: [{
                data: [0.9, 1.9, 0.4, 3.4]
              }]
            }}
            width={screenWidth - 60}
            height={220}
            fromZero
            yAxisLabel={""}
            yAxisSuffix={""}
            chartConfig={{
              backgroundGradientFrom: "#fff",
              backgroundGradientTo: "#fff",
              decimalPlaces: 1,
              color: () => "#4CAF50",
            }}
            style={{ marginTop: 10 }}
          />
          <Text style={styles.smallText}>Machines</Text>
        </View>

        {/* Planned vs Unplanned Downtime */}
       <View style={styles.card}>
  <Text style={styles.cardTitle}>Planned Vs Unplanned</Text>

  <StackedBarChart
    data={{
      labels: ["0", "1", "2", "3", "4", "5"],
      legend: ["Unplanned", "Planned"],
      data: [
        [6, 3], 
        [7, 5],
        [4, 2],
        [8, 7],
        [3, 2],
        [4, 3],
      ],
      barColors: ["#E53935", "#4CAF50"],
    }}
    width={screenWidth - 60}
    height={250}
    hideLegend={true}
    chartConfig={{
      backgroundGradientFrom: "#fff",
      backgroundGradientTo: "#fff",
      decimalPlaces: 0,
      color: () => "#000",
    }}
    style={{ marginTop: 10, borderRadius: 12 }}
  />

  {/* Legend */}
  <View style={styles.legendRow}>
    <View style={[styles.legendDot, { backgroundColor: "#E53935" }]} />
    <Text style={styles.legendText}>Unplanned Downtime</Text>

    <View style={[styles.legendDot, { backgroundColor: "#4CAF50" }]} />
    <Text style={styles.legendText}>Planned Downtime</Text>
  </View>

  <Text style={styles.smallText}>Days</Text>
</View>

      </ScrollView>

      {/* FLOATING ICON */}
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

export default ReliabilityScreen;

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

  legendRow: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  legendDot: { width: 12, height: 12, borderRadius: 6, marginHorizontal: 6 },
  legendText: { fontSize: 13, marginRight: 14 },

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
    elevation: 12,
  },

  navItem: { alignItems: "center" },
  navItemActive: { alignItems: "center" },

  navIcon: { width: 26, height: 26, resizeMode: "contain" },
  navIconActive: { width: 32, height: 32, resizeMode: "contain" },
  navLabel: { fontSize: 12, color: "#555", marginTop: 4 },
  navLabelActive: { fontSize: 12, color: "#4CAF50", marginTop: 4, fontWeight: "700" },
});
