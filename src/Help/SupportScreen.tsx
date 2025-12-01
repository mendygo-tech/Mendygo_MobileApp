import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";

import Ionicons from "react-native-vector-icons/Ionicons";
import Icon from "react-native-vector-icons/Ionicons";

const SupportScreen = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      {/* ----- Header ----- */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Help & Support</Text>
        <Ionicons name="settings-outline" size={22} color="#000" />
      </View>

      {/* ----- Search Bar ----- */}
      <View style={styles.searchBox}>
        <Ionicons name="search" size={20} color="#4CAF50" />
        <TextInput
          style={styles.searchInput}
          placeholder="Search your Issue.."
          placeholderTextColor="#999"
        />
        <Icon name="filter-outline" size={22} color="#4CAF50" />
      </View>

      {/* ----- Notification Button ----- */}
      <TouchableOpacity style={styles.bellIcon}>
        <Ionicons name="notifications" size={30} color="#0b0b0bff" />
        <View style={styles.redDot} />
      </TouchableOpacity>

      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.sectionTitle}>We’re here to assist you</Text>

        {/* Top Quick Buttons */}
        <View style={styles.quickRow}>
          <QuickButton title="FAQs" icon="help-circle-outline" />
          <QuickButton title="Live Chat" icon="chatbubbles-outline" />
        </View>

        <View style={styles.quickRow}>
          <QuickButton title="Call Support" icon="call-outline" />
          <QuickButton title="Email Us" icon="mail-outline" />
        </View>

        {/* Support Issue List */}
        <SupportItem title="Connectivity Issues" icon="wifi-outline" />
        <SupportItem title="Heat Sensor Malfunction" icon="flame-outline" />
        <SupportItem title="Machine Utilization Data Missing" icon="timer-outline" />
        <SupportItem title="Troubleshooting Guide" icon="construct-outline" />
        <SupportItem title="Safety & Security" icon="shield-checkmark-outline" />
      </ScrollView>

      {/* FAB Button */}
      <TouchableOpacity style={styles.floatingIcon}>
                       <Image
                         source={require("../assets/images/navbaricons/logo.png")}
                         style={{ width: 68, height: 68 }}
                       />
      </TouchableOpacity>

      {/* Bottom Navigation */}
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

export default SupportScreen;

/* ---------- COMPONENTS ---------- */

const QuickButton = ({ title, icon }: any) => (
  <TouchableOpacity style={styles.quickButton}>
    <Ionicons name={icon} size={22} color="#4CAF50" />
    <Text style={styles.quickButtonText}>{title}</Text>
  </TouchableOpacity>
);

const SupportItem = ({ title, icon }: { title: string; icon: string }) => (
  <TouchableOpacity style={styles.listItem}>
    <View style={{ flexDirection: "row", alignItems: "center" }}>
      <Ionicons name={icon} size={22} color="#4CAF50" style={{ marginRight: 10 }} />
      <Text style={styles.listText}>{title}</Text>
    </View>
    <Ionicons name="chevron-forward" size={20} color="#555" />
  </TouchableOpacity>
);

/* ---------- STYLES ---------- */

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff", paddingHorizontal: 15 },

  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 15,
    justifyContent: "space-between",
  },
  headerTitle: { fontSize: 18, fontWeight: "600" },
    floatingIcon: { position: "absolute", bottom: 75, right: 18, elevation: 12 },

  searchBox: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 10,
    paddingHorizontal: 12,
    height: 45,
    marginTop: 10,
    borderColor: "#4CAF50",
    borderWidth: 1.5,
    width: 330,
  },
  searchInput: { flex: 1, marginLeft: 8, color: "#000" },

  bellIcon: { position: "absolute", top: 65, right: 15, padding: 8 },
  redDot: {
    width: 8, height: 8, borderRadius: 4, backgroundColor: "red",
    position: "absolute", top: 7, right: 10,
  },

  sectionTitle: { fontSize: 14, fontWeight: "600", marginVertical: 15 },

  quickRow: { flexDirection: "row", justifyContent: "space-between" },
  quickButton: {
    width: "48%",
    backgroundColor: "#fff",
    borderRadius: 12,
    paddingVertical: 18,
    alignItems: "center",
    elevation: 2,
    marginBottom: 10,
  },
  quickButtonText: { marginTop: 8, fontSize: 14, fontWeight: "500" },

  listItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 18,
    paddingHorizontal: 15,
    backgroundColor: "#F8F8F8",
    borderRadius: 10,
    marginTop: 8,
    alignItems: "center",
  },
  listText: { fontSize: 15, fontWeight: "500" },

  fab: {
    position: "absolute",
    bottom: 70,
    right: 25,
    backgroundColor: "#4CAF50",
    padding: 18,
    borderRadius: 40,
    elevation: 5,
  },

  bottomNav: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#fff",
    paddingVertical: 12,
    paddingHorizontal: 15,
    width:"110%",
    elevation: 10,
    left:-15,
  },

  navItem: { alignItems: "center", justifyContent: "center", flex: 1 },
  navItemActive: { alignItems: "center", justifyContent: "center", flex: 1 },

  navIcon: { width: 22, height: 22, resizeMode: "contain" },
  navIconActive: { width: 30, height: 30, resizeMode: "contain" },

  navLabel: { fontSize: 12, color: "#777", marginTop: 3 },
  navLabelActive: { fontSize: 12, color: "#4CAF50", marginTop: 3, fontWeight: "600" },
});
