import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput,
  ScrollView,
  Dimensions,
} from "react-native";

const { width } = Dimensions.get("window");

export default function DashboardScreen({ navigation }: any) {
  return (
    <View style={styles.screen}>
      
      {/* Header */}
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => navigation.navigate("DashboardMenu")}>
          <Image style={styles.headerIcon} source={require("../assets/images/slider.png")} />
        </TouchableOpacity>

        <Text style={styles.headerTitle}>Dashboard</Text>

        <Image style={styles.headerIcon} source={require("../assets/images/mode.png")} />
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        
        {/* Search Bar */}
        <View style={styles.searchContainer}>
          <View style={styles.searchInner}>
            <Image style={styles.searchIcon} source={require("../assets/images/dashboardicons/search.png")} />
            <TextInput placeholder="Search your insights..." placeholderTextColor="#777" style={styles.searchInput} />
          </View>

          <Image style={styles.filterIcon} source={require("../assets/images/dashboardicons/filter.png")} />
          <Image style={styles.bellIcon} source={require("../assets/images/dashboardicons/bell.png")} />
        </View>

        {/* Top Boxes */}
        <View style={styles.row}>
          <View style={styles.cardBox}>
            <Text style={styles.boxTitle}>Power Input (kWh)</Text>
            <Text style={styles.boxValue}>236</Text>
            <Image source={require("../assets/images/dashboardicons/power.png")} style={styles.boxIcon} />
          </View>

          <View style={styles.cardBox}>
            <Text style={styles.boxTitle}>Breakdown Reported</Text>
            <Text style={[styles.boxValue, { color: "red" }]}>4</Text>
            <Image source={require("../assets/images/dashboardicons/br.png")} style={styles.boxIconRed} />
          </View>
        </View>

        <View style={styles.row}>
          <View style={styles.cardBox}>
            <Text style={styles.boxTitle}>Active Employee</Text>
            <Text style={styles.boxValue}>321</Text>
            <Image source={require("../assets/images/dashboardicons/emp.png")} style={styles.boxIcon} />
          </View>

          <View style={styles.cardBox}>
            <Text style={styles.boxTitle}>Activity</Text>
            <Text style={[styles.boxValue, { color: "#43A047" }]}>$540.50</Text>
            <Image source={require("../assets/images/dashboardicons/activity.png")} style={styles.boxIcon} />
          </View>
        </View>

        <View style={{ height: 140 }} />
      </ScrollView>

      {/* Floating Button */}
      <Image source={require("../assets/images/navbaricons/logo.png")} style={styles.floatingIcon} />

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

        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate("Profile")}>
          <Image source={require("../assets/images/navbaricons/profile.png")} style={styles.navIcon} />
          <Text style={styles.navLabel}>Profile</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: "#F5F5F5" },

  headerContainer: {
    paddingHorizontal: 20,
    height: 70,
    backgroundColor: "#fff",
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    elevation: 5,
  },
  headerIcon: { width: 30, height: 30, resizeMode: "contain" },
  headerTitle: { fontSize: 23, fontWeight: "600" },

  scrollContent: { padding: 20 },

  searchContainer: {
    backgroundColor: "#fff",
    borderRadius: 12,
    paddingHorizontal: 12,
    flexDirection: "row",
    alignItems: "center",
    height: 50,
    elevation: 4,
    marginBottom: 20,
  },
  searchInner: { flexDirection: "row", alignItems: "center", flex: 1 },
  searchIcon: { height: 22, width: 22, tintColor: "#777", resizeMode: "contain" },
  searchInput: { flex: 1, marginLeft: 10, fontSize: 15, color: "#000" },
  filterIcon: { height: 22, width: 22, tintColor: "#43A047", marginHorizontal: 12, resizeMode: "contain" },
  bellIcon: { height: 22, width: 22, resizeMode: "contain" },

  row: { flexDirection: "row", justifyContent: "space-between", marginBottom: 15 },

  cardBox: {
    width: "48%",
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 15,
    elevation: 4,
    height: 120,
    position: "relative",
    justifyContent: "space-between",
  },

  boxIcon: { height: 34, width: 34, resizeMode: "contain", tintColor: "#43A047", position: "absolute", right: 12, bottom: 12 },
  boxIconRed: { height: 34, width: 34, resizeMode: "contain", tintColor: "red", position: "absolute", right: 12, bottom: 12 },

  boxTitle: { fontSize: 14, color: "#777", fontWeight: "600", marginBottom: 6 },
  boxValue: { fontSize: 22, fontWeight: "700", color: "#43A047" },

  floatingIcon: { position: "absolute", bottom: 80, right: 18, height: 68, width: 68, resizeMode: "contain", elevation: 10 },

  bottomNav: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
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
