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

const RTMChemicalsScreen = ({ navigation }: any) => {
  return (
    <View style={styles.container}>

      {/* HEADER */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back" size={24} />
        </TouchableOpacity>

        <View style={{ alignItems: "center" }}>
          <Text style={styles.headerTitle}>RTM</Text>
          <Text style={styles.headerSub}>Real Time Monitoring</Text>
        </View>

        <Ionicons name="settings-outline" size={22} />
      </View>

      {/* SEARCH AREA */}
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

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 140 }}>

        <Text style={styles.sectionTitle}>Chemicals</Text>

        {/* MAIN LINE CHART */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Reaction Pressure</Text>

          <LineChart
            data={{
              labels: ["09:00", "11:00", "13:00", "14:00", "16:00"],
              datasets: [
                { data: [300, 250, 500, 380, 450], color: () => "#1E88E5" },
                { data: [200, 350, 450, 500, 530], color: () => "#4CAF50" },
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

          <Text style={styles.smallText}>Time</Text>
        </View>

        {/* KPI CARDS ROW 1 */}
        <View style={styles.row}>
          <View style={styles.kpiCard}>
            <Text style={styles.kpiTitle}>Process Yield</Text>
            <Text style={styles.kpiValueGreen}>80%</Text>
          </View>

          <View style={styles.kpiCard}>
            <Text style={styles.kpiTitle}>Waste treatment Efficiency</Text>
            <Text style={styles.kpiValueGreen}>85%</Text>
          </View>
        </View>

        {/* Alerts card + Waste card 2 */}
        <View style={styles.row}>
          <View style={[styles.kpiCardAlert]}>
            <Text style={styles.kpiTitle}>Safety Alerts</Text>
            <Text style={styles.alertValue}>3</Text>
            <Text style={styles.alertText}>Fire Alarm</Text>
          </View>

          <View style={styles.kpiCard}>
            <Text style={styles.kpiTitle}>Waste treatment Efficiency</Text>
            <Text style={styles.kpiValueGreen}>85%</Text>
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

export default RTMChemicalsScreen;


/* ---------------------- STYLES -------------------- */

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
  redDot: { width: 8, height: 8, backgroundColor: "red", borderRadius: 4, position: "absolute", right: 0, top: 0 },

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

  row: { flexDirection: "row", justifyContent: "space-between" },

  kpiCard: {
    width: "48%",
    padding: 16,
    backgroundColor: "#fff",
    borderRadius: 12,
    elevation: 3,
  },
  kpiCardAlert: {
    width: "48%",
    padding: 16,
    backgroundColor: "#fff",
    borderRadius: 12,
    elevation: 3,
    borderColor: "#E53935",
    borderWidth: 2,
  },

  kpiTitle: { fontSize: 13, color: "#000", marginBottom: 8 },
  kpiValueGreen: { fontSize: 22, fontWeight: "700", color: "#4CAF50" },

  alertValue: { fontSize: 26, fontWeight: "700", color: "#E53935" },
  alertText: { color: "#E53935", fontWeight: "600", marginTop: 4 },

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
