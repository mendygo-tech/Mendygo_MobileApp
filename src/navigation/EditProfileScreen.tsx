import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Image,
  TouchableOpacity,
  Dimensions,
  ScrollView,
} from "react-native";

const { width } = Dimensions.get("window");

export default function EditProfileScreen({ navigation }: any) {
  const [name, setName] = useState("Rahul Kalr");
  const [email, setEmail] = useState("rahulkalra34@gmail.com");
  const [phone, setPhone] = useState("873854");
  const [password, setPassword] = useState("********");

  const [passwordModalVisible, setPasswordModalVisible] = useState(false);
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 120 }}
      >

        {/* Top Header */}
        <View style={styles.topRow}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image
              source={require("../assets/images/navbaricons/back.png")}
              style={styles.backIcon}
            />
          </TouchableOpacity>

          <Text style={styles.headerText}>Edit Profile</Text>

          <Image
            source={require("../assets/images/mode.png")}
            style={styles.settingIcon}
          />
        </View>

        <Text style={styles.subText}>Change your personal info</Text>

        {/* Profile Image */}
        <View style={styles.imageContainer}>
          <Image
            source={require("../assets/images/navbaricons/user.png")}
            style={styles.avatar}
          />
          <TouchableOpacity style={styles.editPhotoCircle}>
            <Image
              source={require("../assets/images/navbaricons/editpic.png")}
              style={{ width: 18, height: 18 }}
            />
          </TouchableOpacity>
        </View>

        {/* Input Fields */}
        <Text style={styles.label}>Full Name</Text>
        <TextInput
          value={name}
          onChangeText={setName}
          style={styles.input}
          placeholderTextColor="#999"
        />

        <Text style={styles.label}>Email</Text>
        <TextInput value={email} onChangeText={setEmail} style={styles.input} />

        <Text style={styles.label}>Phone number</Text>
        <TextInput
          value={phone}
          onChangeText={setPhone}
          style={styles.input}
          keyboardType="phone-pad"
        />

        <View style={styles.passwordRow}>
          <Text style={styles.label2}>Password</Text>

          <TouchableOpacity
            style={{ padding: 18, position: "absolute", right: 0, top: -10 }}
            onPress={() => setPasswordModalVisible(true)}
          >
            <Text style={styles.changeText}>Change</Text>
          </TouchableOpacity>
        </View>

        <TextInput
          value={password}
          onChangeText={setPassword}
          style={styles.input}
          secureTextEntry
        />

        {/* Apply Changes */}

        <TouchableOpacity style={styles.applyBtn}>
          <Text style={styles.applyText}>Apply Changes</Text>
        </TouchableOpacity>
      </ScrollView>

      {/* PASSWORD MODAL */}
      {passwordModalVisible && (
        <View style={styles.modalOverlay}>
          <View style={styles.modalBox}>

            <TouchableOpacity
              onPress={() => setPasswordModalVisible(false)}
              style={styles.closeBtn}
            >
              <Text style={{ fontSize: 22, fontWeight: "700" }}>×</Text>
            </TouchableOpacity>

            <Text style={styles.modalTitle}>Change Password</Text>

            {/* NEW PASSWORD */}
            <Text style={styles.modalLabel}>New Password</Text>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <TextInput
                secureTextEntry={!showNewPassword}
                value={newPassword}
                onChangeText={setNewPassword}
                style={[styles.modalInput, { flex: 1 }]}
              />
              <TouchableOpacity
                onPress={() => setShowNewPassword(!showNewPassword)}
              >
                <Image
                  source={
                    showNewPassword
                      ? require("../assets/images/navbaricons/eye-open.png")
                      : require("../assets/images/navbaricons/eye-open.png")
                  }
                  style={{ width: 22, height: 22, marginLeft: 10 }}
                />
              </TouchableOpacity>
            </View>

            {/* CONFIRM PASSWORD */}
            <Text style={styles.modalLabel}>Confirm Password</Text>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <TextInput
                secureTextEntry={!showConfirmPassword}
                value={confirmPassword}
                onChangeText={setConfirmPassword}
                style={[styles.modalInput, { flex: 1 }]}
              />
              <TouchableOpacity
                onPress={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                <Image
                  source={
                    showConfirmPassword
                      ? require("../assets/images/navbaricons/eye-open.png")
                      : require("../assets/images/navbaricons/eye-open.png")
                  }
                  style={{ width: 22, height: 22, marginLeft: 10 }}
                />
              </TouchableOpacity>
            </View>

            {/* Update Button */}
            <TouchableOpacity
              style={styles.updateBtn}
              onPress={() => setPasswordModalVisible(false)}
            >
              <Text style={styles.updateText}>Update Password</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}

      {/* Floating Button */}
      <TouchableOpacity style={styles.floatingIcon}>
        <Image
          source={require("../assets/images/navbaricons/logo.png")}
          style={{ width: 68, height: 68 }}
        />
      </TouchableOpacity>

      {/* Bottom Nav */}
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
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },

  topRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 18,
    marginTop: 25,
  },

  backIcon: { width: 16, height: 16, resizeMode: "contain", top: 10 },
  settingIcon: { width: 26, height: 26, resizeMode: "contain" },

  headerText: {
    fontSize: 22,
    fontWeight: "700",
    marginTop: 20,
    left: -100,
    top: -14,
  },

  subText: {
    fontSize: 14,
    color: "#777",
    marginTop: -5,
    paddingHorizontal: 18,
    marginBottom: 25,
    left: 28,
    top: -12,
  },

  imageContainer: { alignItems: "center", marginTop: 10 },
  avatar: { width: 110, height: 110, borderRadius: 60, top: -20 },

  editPhotoCircle: {
    position: "absolute",
    backgroundColor: "#fff",
    width: 34,
    height: 34,
    borderRadius: 17,
    justifyContent: "center",
    alignItems: "center",
    elevation: 5,
    top: "-20%",
    right: 150,
  },

  label: { fontSize: 14, marginTop: 20, marginLeft: 18, color: "#444", left: 20 },
  label2: { fontSize: 14, marginTop: 20, color: "#444", left: 20 },

  input: {
    borderBottomWidth: 1.3,
    borderBottomColor: "#ccc",
    paddingVertical: 6,
    marginHorizontal: 18,
    fontSize: 16,
    color: "#000",
    left: 20,
  },

  passwordRow: { flexDirection: "row", justifyContent: "space-between", paddingHorizontal: 18, marginTop: 20 },

  changeText: { color: "#1B8D3B", fontSize: 15, fontWeight: "600" },

  modalOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0,0,0,0.4)",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 999,
  },

  modalBox: {
    width: "85%",
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 20,
    elevation: 10,
  },

  closeBtn: { position: "absolute", right: 12, top: 8 },

  modalTitle: { fontSize: 20, fontWeight: "700", textAlign: "center", marginBottom: 18 },

  modalLabel: { fontSize: 14, fontWeight: "600", marginTop: 12, color: "#444" },

  modalInput: {
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    paddingVertical: 6,
    fontSize: 16,
    color: "#000",
  },

  updateBtn: {
    backgroundColor: "#43A047",
    marginTop: 25,
    paddingVertical: 12,
    borderRadius: 25,
    alignItems: "center",
  },

  updateText: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 16,
  },

  applyBtn: {
    backgroundColor: "#43A047",
    marginHorizontal: 18,
    marginTop: 40,
    paddingVertical: 14,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    width: 180,
    height: 48,
    left: 100,
  },

  applyText: { color: "#fff", fontWeight: "700", fontSize: 16 },

  floatingIcon: {
    position: "absolute",
    bottom: 75,
    right: 18,
    elevation: 12,
  },

  bottomNav: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 18,
    paddingVertical: 10,
    backgroundColor: "#fff",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    elevation: 12,
  },

  navItem: { alignItems: "center", width: (width - 36) / 5 },
  navItemActive: { alignItems: "center", width: (width - 36) / 5 },

  navIcon: { width: 26, height: 26, resizeMode: "contain", tintColor: "#777" },
  navIconActive: { width: 32, height: 32, resizeMode: "contain" },

  navLabel: { fontSize: 11, marginTop: 4, color: "#777" },
  navLabelActive: { fontSize: 11, marginTop: 4, color: "#43A047", fontWeight: "700" },
});
