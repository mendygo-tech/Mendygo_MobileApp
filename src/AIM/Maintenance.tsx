import React from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Dimensions,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { AnimatedCircularProgress } from "react-native-circular-progress";

const { width } = Dimensions.get("window");

const Maintenance: React.FC = () => {
  return (
    <View style={styles.container}>
      
      {/* ---------- HEADER ---------- */}
      <View style={styles.header}>
        <TouchableOpacity>
          <Icon name="chevron-back" size={26} color="#000" />
        </TouchableOpacity>

        <View style={styles.headerTitleWrapper}>
          <Icon name="construct-outline" size={22} color="#43A047" />
          <Text style={styles.headerTitle}>AI Maintenance</Text>
        </View>

        <TouchableOpacity>
          <Icon name="settings-outline" size={24} color="#43A047" />
        </TouchableOpacity>
      </View>

      {/* ---------- SEARCH BAR ---------- */}
      <View style={styles.searchRow}>
        <View style={styles.searchBox}>
          <Icon name="search" size={20} color="#888" style={{ marginRight: 6 }} />
          <TextInput placeholder="Search your Data.." style={{ flex: 1 }} />
          <TouchableOpacity>
            <Icon name="filter-outline" size={22} color="#43A047" />
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.bellBtn}>
          <Icon name="notifications-outline" size={24} color="#000" />
          <View style={styles.redDot} />
        </TouchableOpacity>
      </View>

      {/* ---------- LEGEND ---------- */}
      <View style={styles.legendContainer}>
        <Legend title="No Risk" color="#4CAF50" />
        <Legend title="Moderate Risk" color="#FFC107" />
        <Legend title="High Risk" color="#F44336" />
        <Legend title="Critical Situation" color="#9C27B0" />
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>

        {/* ---------- HEALTH SCORE ---------- */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Health Score</Text>

          <View style={{ alignItems: "center", justifyContent: "center" }}>
            <AnimatedCircularProgress
              size={160}
              width={14}
              fill={85}
              tintColor="#2979FF"
              backgroundColor="#D9DFE7"
              rotation={0}
              lineCap="round"
            />
            <View style={styles.gaugeCenter}>
              <Text style={styles.gaugeText}>85%</Text>
            </View>
          </View>

          <Text style={styles.gaugeLabel}>Gauge</Text>
        </View>

        {/* ---------- ANOMALY SCORE ---------- */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Anomaly Score</Text>

          <View style={styles.anomalyItem}>
            <View style={styles.anomalyRow}>
              <Text style={styles.anomalyLabel}>Machine A - Motor Vibration</Text>
              <Text style={[styles.anomalyValue, { color: "#66BB6A" }]}>12%</Text>
            </View>
            <View style={[styles.anomalyBar, { backgroundColor: "#66BB6A", width: "12%" }]} />
          </View>

          <View style={styles.anomalyItem}>
            <View style={styles.anomalyRow}>
              <Text style={styles.anomalyLabel}>Machine B - Temperature Spike</Text>
              <Text style={[styles.anomalyValue, { color: "#FBC02D" }]}>47%</Text>
            </View>
            <View style={[styles.anomalyBar, { backgroundColor: "#FBC02D", width: "47%" }]} />
          </View>

          <View style={styles.anomalyItem}>
            <View style={styles.anomalyRow}>
              <Text style={styles.anomalyLabel}>Machine C - Pressure Fluctuation</Text>
              <Text style={[styles.anomalyValue, { color: "#E53935" }]}>76%</Text>
            </View>
            <View style={[styles.anomalyBar, { backgroundColor: "#E53935", width: "76%" }]} />
          </View>

          <View style={styles.anomalyItem}>
            <View style={styles.anomalyRow}>
              <Text style={styles.anomalyLabel}>Machine D - Humidity Sensor Drift</Text>
              <Text style={[styles.anomalyValue, { color: "#AB47BC" }]}>32%</Text>
            </View>
            <View style={[styles.anomalyBar, { backgroundColor: "#AB47BC", width: "32%" }]} />
          </View>
        </View>

        {/* ---------- RISK LEVEL ---------- */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Risk Level</Text>

          <ListRow label="Machine A – Motor Bearing" value="Low" color="#4CAF50" />
          <ListRow label="Machine B – Boiler Temperature" value="Moderate" color="#FFC107" />
          <ListRow label="Machine C – Hydraulic Pump" value="High" color="#F44336" />
          <ListRow label="Machine D – Conveyor Belt" value="Critical" color="#9C27B0" />
        </View>

        {/* ---------- RUL ---------- */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Remaining Useful Life (RUL)</Text>

          <ListRow label="Machine A – Motor Bearing" value="1800 hrs (~75 days)" color="#4CAF50" />
          <ListRow label="Machine B – Boiler Temp Sensor" value="650 hrs (~27 days)" color="#AB47BC" />
          <ListRow label="Machine C – Conveyor Belt" value="120 hrs (~5 days)" color="#F44336" />
        </View>

        {/* ---------- WORK ORDERS ---------- */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Open Work Orders</Text>

          <ListRow label="WO-1201 | Conveyor Belt Repair" value="In Progress" color="#4CAF50" />
          <ListRow label="WO-1031 | Pump Motor Alignment" value="Pending" color="#FBC02D" />
          <ListRow label="WO-1101 | Cooling Tower Cleaning" value="Scheduled" color="#2979FF" />
        </View>

        {/* ---------- OVERDUE MAINTENANCE ---------- */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Overdue Maintenance</Text>

          <ListRow label="Lubricate Gearbox" value="5 Days" color="#4CAF50" />
          <ListRow label="Replace Bearing Set" value="2 Weeks" color="#E53935" />
          <ListRow label="Inspect Cooling Fan" value="10 Days" color="#2979FF" />
        </View>

        {/* ---------- SPARE PART ---------- */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Spare Part</Text>

          <ListRow label="Bearing Set" value="12 Units" color="#4CAF50" />
          <ListRow label="Hydraulic Pump" value="2 Units" color="#E53935" />
          <ListRow label="Cooling Fan" value="8 Units" color="#4CAF50" />
        </View>

        {/* ---------- FAILURE PREDICTION ALERTS ---------- */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Failure Prediction Alerts</Text>

          <ListRow label="Motor Overheating Alert" value="High" color="#FFC107" />
          <ListRow label="Hydraulic Pressure Drop" value="Moderate" color="#E53935" />
          <ListRow label="Bearing Wear Detected" value="Critical" color="#9C27B0" />
        </View>

        {/* ---------- RECOMMENDED MAINTENANCE ---------- */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Recommended Maintenance</Text>

          <ListRow label="Lubricate Gearbox" value="20 Hrs" color="#4CAF50" />
          <ListRow label="Replace Bearing Set" value="3 Days" color="#2979FF" />
          <ListRow label="Inspect Cooling Fan" value="Next Cycle" color="#FFC107" />
        </View>

      </ScrollView>

      {/* ---------- FLOATING BUTTON ---------- */}
         <TouchableOpacity style={styles.floatingIcon}>
                   <Image
                     source={require("../assets/images/navbaricons/logo.png")}
                     style={{ width: 68, height: 68 }}
                   />
                 </TouchableOpacity>

     {/* ---------- Bottom Navbar ---------- */}
<View style={styles.bottomNav}>
  <TouchableOpacity style={styles.navItem}>
    <Image
      source={require("../assets/images/navbaricons/slg.png")}
      style={styles.navIcon}
    />
    <Text style={styles.navLabel}>SLD</Text>
  </TouchableOpacity>

  <TouchableOpacity style={styles.navItemActive}>
    <Image
      source={require("../assets/images/navbaricons/trends.png")}
      style={styles.navIconActive}
    />
    <Text style={styles.navLabelActive}>Trends</Text>
  </TouchableOpacity>

  <TouchableOpacity style={styles.navItem}>
    <Image
      source={require("../assets/images/navbaricons/logo2.png")}
      style={styles.navIcon}
    />
    <Text style={styles.navLabel}>Dashboard</Text>
  </TouchableOpacity>

  <TouchableOpacity style={styles.navItem}>
    <Image
      source={require("../assets/images/navbaricons/alerts.png")}
      style={styles.navIcon}
    />
    <Text style={styles.navLabel}>Alerts</Text>
  </TouchableOpacity>

  <TouchableOpacity style={styles.navItem}>
    <Image
      source={require("../assets/images/navbaricons/profile.png")}
      style={styles.navIcon}
    />
    <Text style={styles.navLabel}>Profile</Text>
  </TouchableOpacity>
</View>


    </View>
  );
};

/* ------------- COMPONENTS ------------- */
const Legend = ({ title, color }: any) => (
  <View style={styles.legendItem}>
    <View style={[styles.legendDot, { backgroundColor: color }]} />
    <Text style={styles.legendText}>{title}</Text>
  </View>
);

const ListRow = ({ label, value, color }: any) => (
  <View style={styles.listRow}>
    <Text style={styles.listLabel}>{label}</Text>
    <Text style={[styles.listValue, { color }]}>{value}</Text>
  </View>
);

const NavItem = ({ icon, label }: any) => (
  <TouchableOpacity style={styles.navItem}>
  
    <Text style={styles.navLabel}>{label}</Text>
  </TouchableOpacity>
);

const NavItemActive = ({ icon, label }: any) => (
  <TouchableOpacity style={styles.navItemActive}>
  
    <Text style={styles.navLabelActive}>{label}</Text>
  </TouchableOpacity>
);

export default Maintenance;

/* ------------- STYLES ------------- */
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F5F6F7", paddingBottom: 85 },

  header: {
    paddingTop: 12,
    paddingHorizontal: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerTitleWrapper: { flexDirection: "row", alignItems: "center" },
  headerTitle: { fontSize: 22, fontWeight: "700", marginLeft: 6, color:"#000" },
  floatingIcon: { position: "absolute", bottom: 75, right: 18, elevation: 12 },

  searchRow: {
    flexDirection: "row",
    paddingHorizontal: 16,
    alignItems: "center",
    marginVertical: 14,
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

  legendContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    paddingHorizontal: 20,
    marginBottom: 8,
  },
  legendItem: { flexDirection: "row", alignItems: "center", marginRight: 12 },
  legendDot: { width: 13, height: 13, borderRadius: 7, marginRight: 6 },
  legendText: { fontSize: 12, fontWeight: "600" },

  card: {
    backgroundColor: "#fff",
    marginHorizontal: 14,
    borderRadius: 14,
    padding: 16,
    elevation: 4,
    marginBottom: 16,
  },
  cardTitle: { fontSize: 17, fontWeight: "700", marginBottom: 8, textAlign:"center" },

  gaugeCenter: { position: "absolute", alignItems: "center", justifyContent: "center" },
  gaugeText: { fontSize: 38, fontWeight: "700", color: "#2979FF" },
  gaugeLabel: { fontSize: 15, fontWeight: "600", marginTop: 6, color:"#000" },

  anomalyItem: { marginBottom: 16 },
  anomalyRow: { flexDirection: "row", justifyContent: "space-between", marginBottom: 6 },
  anomalyLabel: { fontSize: 14, fontWeight: "600", color: "#444", flex: 1 },
  anomalyValue: { fontSize: 14, fontWeight: "700" },
  anomalyBar: { height: 10, borderRadius: 10 },

  listRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  listLabel: { fontSize: 14, fontWeight: "600", color: "#444", width: "68%" },
  listValue: { fontSize: 14, fontWeight: "700", textAlign: "right" },

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
  navIconActive: { width: 32, height: 32, resizeMode: "contain" },
  navLabel: { fontSize: 11, marginTop: 4, color: "#777" },
  navLabelActive: { fontSize: 11, marginTop: 4, color: "#535453ff", fontWeight: "700" },

  floatButton: {
    width: 60,
    height: 60,
    backgroundColor: "#C6FF00",
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    right: 20,
    bottom: 85,
    elevation: 15,
  },
});
