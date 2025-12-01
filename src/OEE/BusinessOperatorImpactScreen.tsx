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

const screenWidth = Dimensions.get("window").width;

const BusinessOperatorImpactScreen = ({ navigation }: any) => {
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

      {/* SEARCH ROW */}
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

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 120 }}>
        
        <Text style={styles.sectionTitle}>Business & Operator Impact</Text>

        {/* BAR CHART CARD */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Operator Performance Index</Text>

          <BarChart
            data={{
              labels: ["OP1", "OP2", "OP3", "OP4"],
              datasets: [{ data: [19, 39, 55, 68] }],
            }}
            width={screenWidth - 60}
            height={240}
            fromZero
            yAxisLabel={""}
            yAxisSuffix={""}
            showValuesOnTopOfBars={true}
            chartConfig={{
              backgroundGradientFrom: "#fff",
              backgroundGradientTo: "#fff",
              decimalPlaces: 0,
              color: () => "#1E88E5",
            }}
            style={{ marginTop: 10 }}
          />

          <Text style={styles.smallText}>Operators</Text>
        </View>

        {/* COST IMPACT CARD */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Cost Impact Of Downtime</Text>

          <View style={styles.tableRowHeader}>
            <Text style={styles.tableHeader}>Shift/week</Text>
            <Text style={styles.tableHeader}>Cost($)</Text>
          </View>

          {/* Row 1 */}
          <View style={styles.tableRow}>
            <Text style={styles.statusGreen}>•  $500</Text>
            <Text style={styles.statusGreen}>$500</Text>
          </View>

          {/* Row 2 */}
          <View style={styles.tableRow}>
            <Text style={styles.statusRed}>•  $3200</Text>
            <Text style={styles.statusRed}>$3200</Text>
          </View>

          {/* Row 3 */}
          <View style={styles.tableRow}>
            <Text style={styles.statusGreen}>•  $3,560</Text>
            <Text style={styles.statusGreen}>$3200</Text>
          </View>

          {/* Row 4 */}
          <View style={styles.tableRow}>
            <Text style={styles.statusGreen}>•  $3,560</Text>
            <Text style={styles.statusGreen}>$3200</Text>
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

export default BusinessOperatorImpactScreen;


/* ---------------- STYLES ---------------- */

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

  tableRowHeader: { flexDirection: "row", justifyContent: "space-between", marginBottom: 10 },
  tableHeader: { fontSize: 14, fontWeight: "700" },

  tableRow: { flexDirection: "row", justifyContent: "space-between", paddingVertical: 8 },

  statusGreen: { color: "#4CAF50", fontSize: 16, fontWeight: "600" },
  statusRed: { color: "#E53935", fontSize: 16, fontWeight: "600" },

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
