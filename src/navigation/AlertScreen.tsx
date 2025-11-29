import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from "react-native";

const { width } = Dimensions.get("window");

export default function AlertsScreen({ navigation }: any) {
  const [alertData, setAlertData] = useState([
    { title: "TotalKwh", sub: "CIE_Hosure_Demo", date: "06-Feb-2023 | 5:30 AM", amount: "450" },
    { title: "Rated Power", sub: "CIE_Hosure_Demo", date: "06-Feb-2023 | 5:30 AM", amount: "250" },
    { title: "TotalKwh", sub: "CIE_Hosure_Demo", date: "06-Feb-2023 | 5:30 AM", amount: "200" },
    { title: "TotalKwh", sub: "CIE_Hosure_Demo", date: "06-Feb-2023 | 5:30 AM", amount: "300" },
    { title: "TotalKwh", sub: "CIE_Hosure_Demo", date: "06-Feb-2023 | 5:30 AM", amount: "400" },
  ]);

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 120 }}>

        {/* Header */}
        <View style={styles.headerRow}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image
              source={require("../assets/images/navbaricons/back.png")}
              style={styles.backIcon}
            />
          </TouchableOpacity>

          <Image style={{ height: 24, width: 24, top: 5 }}
            source={require("../assets/images/alert/alert-icon.png")}
          />

          <Text style={styles.headerTitle}>Alerts</Text>

          <Image
            source={require("../assets/images/mode.png")}
            style={styles.settingIcon}
          />
        </View>

        {/* Search + Notification Row */}
        <View style={styles.searchMainRow}>
          <View style={styles.searchContainer}>
            <Image
              source={require("../assets/images/alert/search.png")}
              style={styles.searchIcon}
            />
            <TextInput
              style={styles.searchInput}
              placeholder="Search your Data.."
              placeholderTextColor="#999"
            />
            <TouchableOpacity>
              <Image
                source={require("../assets/images/alert/filter.png")}
                style={styles.filterIcon}
              />
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={{ marginLeft: 10 }}>
            <Image
              source={require("../assets/images/dashboardicons/bell.png")}
              style={styles.notificationIcon}
            />
          </TouchableOpacity>
        </View>

        {/* Recent Dropdown */}
        <View style={styles.topActionRow}>
          <TouchableOpacity style={styles.recentBtn}>
            <Text style={styles.recentText}>Recent</Text>
            <Image source={require("../assets/images/alert/drop.png")} style={styles.dropIcon} />
          </TouchableOpacity>
        </View>

        {/* SAFE MESSAGE WHEN EMPTY */}
        {alertData.length === 0 ? (
          <View style={styles.noAlertContainer}>
          
            <Text style={styles.safeText}>Safe — No Alerts</Text>
          </View>
        ) : (
          alertData.map((item, i) => (
            <View key={i} style={styles.alertCard}>
              <View style={styles.leftSection}>
                <Image
                  source={require("../assets/images/alert/alert-icon.png")}
                  style={styles.alertIcon}
                />
                <View>
                  <Text style={styles.alertTitle}>{item.title}</Text>
                  <Text style={styles.alertSub}>{item.sub}</Text>
                </View>
              </View>

              <View style={styles.rightSection}>
                <Text style={styles.dateText}>{item.date}</Text>
                <Text style={styles.amountText}>-{item.amount}₹</Text>
              </View>
            </View>
          ))
        )}

      </ScrollView>

      {/* Floating Button */}
      <TouchableOpacity style={styles.floatingIcon}>
        <Image
          source={require("../assets/images/navbaricons/logo.png")}
          style={{ width: 68, height: 68 }}
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

        <TouchableOpacity style={styles.navItemActiveTab}>
          <Image source={require("../assets/images/navbaricons/alerts.png")} style={styles.navIconActiveTab} />
          <Text style={styles.alertTabLabel}>Alerts</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate("Profile")}>
          <Image source={require("../assets/images/navbaricons/profile.png")} style={styles.navIcon} />
          <Text style={styles.navLabel}>Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },

  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    marginTop: 3,
    alignItems: "center",
    paddingBottom: 12,

    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 5,
    elevation: 6,

    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },

  backIcon: { width: 16, height: 16, top: 8 },
  settingIcon: { width: 26, height: 26 },
  headerTitle: { fontSize: 24, fontWeight: "700", top: 4, left: -40 },

  searchMainRow: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 15,
    marginTop: 18,
  },

  searchContainer: {
    flexDirection: "row",
    backgroundColor: "#F3F4F6",
    borderRadius: 12,
    paddingHorizontal: 12,
    alignItems: "center",
    height: 50,
    flex: 1,
  },

  searchIcon: { width: 20, height: 20, marginRight: 10 },
  searchInput: { flex: 1, fontSize: 15, color: "#000" },
  filterIcon: { width: 22, height: 22 },
  notificationIcon: { width: 26, height: 26 },

  topActionRow: {
    marginHorizontal: 15,
    marginTop: 18,
  },

  recentBtn: {
    backgroundColor: "#F3F4F6",
    flexDirection: "row",
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 6,
    alignItems: "center",
    width: 90,
    marginLeft: 300,
  },

  recentText: { fontSize: 13, fontWeight: "600" },
  dropIcon: { width: 14, height: 14, marginLeft: 6 },

  alertCard: {
    backgroundColor: "#fff",
    borderRadius: 12,
    borderWidth: 1.3,
    borderColor: "#E84D4D",
    padding: 15,
    marginHorizontal: 15,
    marginTop: 12,
    flexDirection: "row",
    justifyContent: "space-between",

    shadowColor: "#000",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.18,
    shadowRadius: 6,
    elevation: 8,
  },

  leftSection: { flexDirection: "row" },
  alertIcon: { width: 22, height: 22, marginRight: 12 },

  alertTitle: { fontSize: 18, fontWeight: "700", color: "#D63333" },
  alertSub: { fontSize: 14, marginTop: 2, color: "#777" },

  rightSection: { alignItems: "flex-end" },
  dateText: { fontSize: 13, color: "#D63333" },
  amountText: { fontSize: 16, fontWeight: "700", color: "#D63333", marginTop: 8 },

  noAlertContainer: {
    marginTop: 120,
    alignItems: "center",
  },

  safeIcon: { width: 110, height: 110, marginBottom: 15 },
  safeText: { fontSize: 22, fontWeight: "700", color: "#1B8D3B" },

  floatingIcon: { position: "absolute", bottom: 75, right: 18, elevation: 12 },

  bottomNav: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 10,
    paddingHorizontal: 18,
    backgroundColor: "#fff",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    elevation: 12,
  },

  navItem: { alignItems: "center", width: (width - 36) / 5 },
  navItemActive: { alignItems: "center", width: (width - 36) / 5 },
  navItemActiveTab: { alignItems: "center", width: (width - 36) / 5 },

  navIcon: { width: 26, height: 26, tintColor: "#777" },
  navIconActive: { width: 30, height: 30 },
  navIconActiveTab: { width: 28, height: 28, tintColor: "#E84D4D" },

  navLabel: { fontSize: 11, marginTop: 4, color: "#777" },
  navLabelActive: { fontSize: 11, marginTop: 4, color: "#43A047", fontWeight: "bold" },
  alertTabLabel: { fontSize: 11, marginTop: 4, color: "#E84D4D", fontWeight: "bold" },
});
