import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from "react-native";

const { width } = Dimensions.get("window");

export default function Profile({ navigation }: any) {
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 120 }}>

        {/* Header */}
        <View style={styles.profileContainer}>
          <Text style={styles.ptext}>Profile</Text>

          <Image
            source={require("../assets/images/navbaricons/user.png")}
            style={styles.avatar}
          />

          <Text style={styles.name}>Rahul Kalra</Text>
          <Text style={styles.email}>rahulkalra8934@gmail.com</Text>

          <TouchableOpacity style={styles.editBtn}   onPress={() => navigation.navigate("EditProfileScreen")}>
            <Text style={styles.editBtnText}>Edit Profile</Text>
          </TouchableOpacity>
        </View>

        {/* Two Boxes Row */}
        <View style={styles.row}>
          <TouchableOpacity style={styles.box}>
            <Image
              style={styles.boxIcon}
              source={require("../assets/images/navbaricons/stats.png")}
            />
            <Text style={styles.boxTitle}>Quick KPIs & Stats</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.box}>
            <Image
              style={styles.boxIcon}
              source={require("../assets/images/navbaricons/access.png")}
            />
            <Text style={styles.boxTitle}>Access & Permissions</Text>
          </TouchableOpacity>
        </View>

        {/* Activity Section */}
        <View style={styles.section}>
          {/* Header */}
          <View style={styles.sectionHeader}>
            <Image
              source={require("../assets/images/navbaricons/activity.png")}
              style={styles.sectionIcon}
            />
            <Text style={styles.sectionTitle}>Activity Log</Text>
          </View>

          {/* Row 1 */}
          <View style={styles.rowContainer}>
            <View style={styles.leftRow}>
              <Image
                source={require("../assets/images/navbaricons/logged.png")}
                style={styles.activityIcon}
              />
              <Text style={styles.activityText}>Logged in - 3 hrs ago</Text>
            </View>

            <TouchableOpacity style={styles.rightRow}>
              <Image
                source={require("../assets/images/navbaricons/viewdash.png")}
                style={styles.iconSmall}
              />
              <Text style={styles.rightActionText}>View Dashboard</Text>
            </TouchableOpacity>
          </View>

          {/* Row 2 */}
          <View style={styles.rowContainer}>
            <View style={styles.leftRow}>
              <Image
                source={require("../assets/images/navbaricons/up.png")}
                style={styles.activityIcon}
              />
              <Text style={styles.activityText}>Updated Profile</Text>
            </View>

            <TouchableOpacity>
              <Text style={styles.moreText}>Click for more...</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* 3 Boxes Section */}
        <View style={styles.threeBoxRow}>
          <TouchableOpacity style={styles.box1}>
            <Text style={styles.boxText}>Privacy & Security</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.box1}>
            <Text style={styles.boxText}>Help & Support</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.box1}>
            <Text style={styles.boxText}>Rate Us & Feedback</Text>
          </TouchableOpacity>
        </View>
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


const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },

  ptext: { fontSize: 25, fontWeight: "bold" },

  profileContainer: {
    alignItems: "center",
    backgroundColor: "#F7F8F8",
    paddingVertical: 25,
    borderBottomLeftRadius: 35,
    borderBottomRightRadius: 35,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.18,
    shadowRadius: 6,
    elevation: 8,
  },

  avatar: { width: 90, height: 90, borderRadius: 50 },
  name: { fontSize: 22, fontWeight: "600", marginTop: 10 },
  email: { color: "#666", marginBottom: 10 },

  editBtn: {
    backgroundColor: "#43A047",
    paddingVertical: 8,
    paddingHorizontal: 25,
    borderRadius: 20,
  },
  editBtnText: { color: "#fff", fontWeight: "600" },

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    marginTop: 20,
    marginBottom: 10,
  },

  box: {
    width: "48%",
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 15,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },

  boxIcon: { height: 30, width: 30, marginBottom: 6 },
  boxTitle: { fontWeight: "600", color: "#333", fontSize: 18 },

  section: {
    padding: 15,
    backgroundColor: "#fff",
    borderRadius: 12,
    marginHorizontal: 15,
    marginTop: 10,
    elevation: 3,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 4 },
  },

  sectionHeader: { flexDirection: "row", alignItems: "center", marginBottom: 12 },
  sectionIcon: { width: 22, height: 22, marginRight: 8 },
  sectionTitle: { fontSize: 17, fontWeight: "700", color: "#000" },

  rowContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 6,
  },

  leftRow: { flexDirection: "row", alignItems: "center" },
  rightRow: { flexDirection: "row", alignItems: "center" },

  activityIcon: { width: 18, height: 18, marginRight: 10 },
  activityText: { fontSize: 14, fontWeight: "500", color: "#555" },

  rightActionText: { fontSize: 14, fontWeight: "600", color: "#000" },
  iconSmall: { width: 20, height: 20, marginRight: 6 },

  moreText: { fontSize: 14, fontWeight: "600", color: "#1B8D3B" },

  threeBoxRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    marginTop: 15,
  },

  box1: {
    width: "31%",
    backgroundColor: "#fff",
    borderRadius: 12,
    paddingVertical: 18,
    alignItems: "center",
    elevation: 4,
    shadowColor: "#000",
    shadowOpacity: 0.12,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 4 },
  },

  boxText: { fontSize: 13, fontWeight: "600", color: "#000" },

  floatingIcon: {
    position: "absolute",
    bottom: 75,
    right: 18,
    elevation: 15,
  },

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
