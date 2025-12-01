import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Dimensions,
  TextInput,
  TouchableOpacity,Image
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

const { width } = Dimensions.get("window");

// ---- Single node chip (like 03 PT1 MS... 383.32 kWh) ----
type NodeProps = {
  status: "green" | "red";
  title: string;
  value: string;
};

const NodeChip: React.FC<NodeProps> = ({ status, title, value }) => (
  <View style={styles.nodeChip}>
    <View
      style={[
        styles.statusDot,
        { backgroundColor: status === "green" ? "#43A047" : "#E53935" },
      ]}
    />
    <Text style={styles.nodeTitle} numberOfLines={1}>
      {title}
    </Text>
    <Text style={styles.nodeValue}>{value}</Text>
  </View>
);

// ---- Row definition: node left/right of the vertical line ----
type RowDef = {
  left?: NodeProps;
  middle?: NodeProps;
  right?: NodeProps;
};

const rows: RowDef[] = [
  {
    left: { status: "green", title: "03 PT1 MS..", value: "432.32 kWh" },
    middle: { status: "green", title: "03 PT1 MS..", value: "392.32 kWh" },
    right: { status: "red", title: "03 PT1 MS..", value: "383.32 kWh" },
  },
  {
    left: { status: "green", title: "03 PT1 MS..", value: "392 kWh" },
    middle: { status: "green", title: "03 PT1 MS..", value: "0.32 kWh" },
    right: { status: "red", title: "03 PT1 MS..", value: "383.32 kWh" },
  },
  {
    left: { status: "green", title: "03 PT1 MS..", value: "10.32 kWh" },
    middle: { status: "green", title: "03 PT1 MS..", value: "1.32 kWh" },
    right: { status: "green", title: "03 PT1 MS..", value: "321.3 kWh" },
  },
  {
    left: { status: "green", title: "03 PT1 MS..", value: "0.32 kWh" },
    middle: { status: "green", title: "03 PT1 MS..", value: "0.32 kWh" },
    right: { status: "red", title: "03 PT1 MS..", value: "383.32 kWh" },
  },
  {
    left: { status: "green", title: "03 PT1 MS..", value: "0.23 kWh" },
    middle: { status: "green", title: "03 PT1 MS..", value: "0.23 kWh" },
    right: { status: "green", title: "03 PT1 MS..", value: "383.32 kWh" },
  },
  {
    left: { status: "green", title: "03 PT1 MS..", value: "0.32 kWh" },
    middle: { status: "green", title: "03 PT1 MS..", value: "0.32 kWh" },
    right: { status: "green", title: "03 PT1 MS..", value: "383.32 kWh" },
  },
  {
    left: { status: "green", title: "03 PT1 MS..", value: "2.32 kWh" },
    middle: { status: "green", title: "03 PT1 MS..", value: "2.32 kWh" },
    right: { status: "green", title: "03 PT1 MS..", value: "383.32 kWh" },
  },
  {
    left: { status: "green", title: "03 PT1 MS..", value: "4.32 kWh" },
    middle: { status: "red", title: "03 PT1 MS..", value: "4.32 kWh" },
    right: { status: "green", title: "03 PT1 MS..", value: "383.32 kWh" },
  },
  {
    left: { status: "red", title: "03 PT1 MS..", value: "4.00 kWh" },
    middle: { status: "green", title: "03 PT1 MS..", value: "321.32 kWh" },
    right: { status: "green", title: "03 PT1 MS..", value: "383.32 kWh" },
  },
  {
    left: { status: "green", title: "03 PT1 MS..", value: "311.32 kWh" },
    middle: { status: "green", title: "03 PT1 MS..", value: "22.32 kWh" },
    right: { status: "red", title: "03 PT1 MS..", value: "22.32 kWh" },
  },
];

const SLDScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      {/* ---------- HEADER -------------- */}
      <View style={styles.header}>
        <TouchableOpacity>
          <Icon name="chevron-back" size={26} color="#000" />
        </TouchableOpacity>
        <View style={styles.headerTitleWrapper}>
          <Icon name="git-network-outline" size={22} color="#43A047" />
          <Text style={styles.headerTitle}>SLD</Text>
        </View>
        <TouchableOpacity>
          <Icon name="settings-outline" size={24} color="#43A047" />
        </TouchableOpacity>
      </View>

      <Text style={styles.subHeading}>Single Line Diagram</Text>

      {/* search + filter + bell */}
      <View style={styles.searchRow}>
        <View style={styles.searchBox}>
          <Icon name="search" size={20} color="#888" />
          <TextInput placeholder="Search your Data..." style={{ flex: 1 }} />
        </View>

        <TouchableOpacity style={styles.filterBtn}>
          <Icon name="filter-outline" size={22} color="#43A047" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.bellBtn}>
          <Icon name="notifications-outline" size={24} color="#000" />
          <View style={styles.redDot} />
        </TouchableOpacity>
      </View>

      {/* text heading */}
      <Text style={styles.heading}>Single Line Diagram</Text>

      {/* --------- Main Diagram (unchanged) ---------- */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ paddingHorizontal: 30 }}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.diagramWrapper}>
            <View style={styles.topCapsule}>
              <Text style={styles.topCapsuleText}>KTL</Text>
            </View>

            <View style={styles.topCircle} />
            <View style={styles.topHorizontal} />
            <View style={styles.verticalBackbone} />

            <View style={styles.rowsWrapper}>
              {rows.map((row, index) => (
                <View key={index} style={styles.row}>
                  <View style={styles.sideCell}>
                    {row.left && (
                      <View style={styles.sideContent}>
                        <NodeChip {...row.left} />
                        <View style={styles.sideConnector} />
                      </View>
                    )}
                  </View>

                  <View style={styles.centerCell}>
                    {row.middle && <View style={styles.centerSideConnector} />}
                    <View style={styles.centerCircle} />
                  </View>

                  <View style={styles.middleChipCell}>
                    {row.middle && <NodeChip {...row.middle} />}
                  </View>

                  <View style={styles.sideCell}>
                    {row.right && (
                      <View style={styles.sideContentRight}>
                        <View style={styles.sideConnector} />
                        <NodeChip {...row.right} />
                      </View>
                    )}
                  </View>
                </View>
              ))}
            </View>
          </View>
        </ScrollView>
      </ScrollView>

      {/* ---------- Bottom Tabs ---------- */}
    <View style={styles.bottomNav}>
           <TouchableOpacity style={styles.navItem}>
             <Image
               source={require("../assets/images/navbaricons/slg.png")}
               style={styles.navIcon}
             />
             <Text style={styles.navLabel}>SLD</Text>
           </TouchableOpacity>
   
           <TouchableOpacity style={styles.navItem}>
             <Image
               source={require("../assets/images/navbaricons/trends.png")}
               style={styles.navIcon}
             />
             <Text style={styles.navLabel}>Trends</Text>
           </TouchableOpacity>
   
           <TouchableOpacity style={styles.navItemActive}>
             <Image
               source={require("../assets/images/navbaricons/logo2.png")}
               style={styles.navIconActive}
             />
             <Text style={styles.navLabelActive}>Dashboard</Text>
           </TouchableOpacity>
   
           <TouchableOpacity style={styles.navItem}>
             <Image
               source={require("../assets/images/navbaricons/alerts.png")}
               style={styles.navIcon}
             />
             <Text style={styles.navLabel}>Alerts</Text>
           </TouchableOpacity>
   
           <TouchableOpacity
             style={styles.navItem}
           >
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

export default SLDScreen;

// ====== styles ======
const CHIP_WIDTH = 160;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F5F6F7" },

  header: {
    paddingTop: 12,
    paddingHorizontal: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerTitleWrapper: { flexDirection: "row", alignItems: "center" },
  headerTitle: { fontSize: 20, fontWeight: "700", marginLeft: 6, color: "#000" },
  subHeading: { textAlign: "center", fontSize: 14, color: "#666", marginBottom: 6 },

  searchRow: {
    flexDirection: "row",
    paddingHorizontal: 16,
    alignItems: "center",
    marginBottom: 10,
  },
  searchBox: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    flex: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    height: 40,
    marginRight: 6,
  },
  filterBtn: {
    width: 40,
    height: 40,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#43A047",
    alignItems: "center",
    justifyContent: "center",
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

  heading: { textAlign: "center", fontSize: 16, fontWeight: "700", marginBottom: 10 },

  bottomTabs: {
    height: 60,
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#fff",
    paddingHorizontal: 28,
    alignItems: "center",
  },
  tab: { fontSize: 13, fontWeight: "600", color: "#444" },
  tabActive: { fontSize: 13, fontWeight: "700", color: "#43A047" },

  diagramWrapper: {
    paddingTop: 20,
    paddingBottom: 40,
    alignItems: "center",
    width: width * 1.6,
  },

  topCapsule: {
    paddingHorizontal: 40,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: "#fff",
    borderWidth: 1.5,
    borderColor: "#43A047",
    elevation: 5,
    marginBottom: 6,
  },
  topCapsuleText: { fontSize: 16, fontWeight: "600", color: "#333" },
  topCircle: { width: 18, height: 18, borderRadius: 9, backgroundColor: "#43A047", marginBottom: 4 },
  topHorizontal: { height: 3, width: width * 1.4, backgroundColor: "#43A047", marginBottom: 20 },

  verticalBackbone: {
    position: "absolute",
    top: 120,
    width: 3,
    height: rows.length * 70,
    backgroundColor: "#43A047",
  },

  rowsWrapper: { marginTop: 0 },

  row: { flexDirection: "row", alignItems: "center", marginVertical: 6 },
  sideCell: { width: CHIP_WIDTH + 40, alignItems: "center" },
  sideContent: { flexDirection: "row", alignItems: "center" },
  sideContentRight: { flexDirection: "row", alignItems: "center" },
  sideConnector: { width: 28, height: 3, backgroundColor: "#43A047" },

  centerCell: { width: 40, alignItems: "center", justifyContent: "center" },
  centerCircle: { width: 16, height: 16, borderRadius: 8, backgroundColor: "#43A047" },
  centerSideConnector: {
    position: "absolute",
    left: 20,
    height: 3,
    width: 20,
    backgroundColor: "#43A047",
  },

  middleChipCell: { width: CHIP_WIDTH + 20 },

  nodeChip: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 20,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderWidth: 1.3,
    borderColor: "#A6E17E",
    elevation: 4,
    minWidth: CHIP_WIDTH,
  },

  statusDot: { width: 10, height: 10, borderRadius: 5, marginRight: 6 },
  nodeTitle: { flex: 1, fontSize: 12, fontWeight: "600", color: "#555", marginRight: 4 },
  nodeValue: { fontSize: 12, fontWeight: "700", color: "#43A047" },
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

  navIcon: { width: 26, height: 26, resizeMode: "contain", tintColor: "#777" },
  navIconActive: { width: 30, height: 30, resizeMode: "contain" },

  navLabel: { fontSize: 11, marginTop: 4, color: "#777" },
  navLabelActive: { fontSize: 11, marginTop: 4, color: "#43A047", fontWeight: "700" },

});
