import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Image,
} from "react-native";

import Ionicons from "react-native-vector-icons/Ionicons";

const IndustryScreen = ({ navigation }: any) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [desc, setDesc] = useState("");

  return (
    <View style={styles.container}>

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Customized Industry 4.0</Text>
        <Ionicons name="settings-outline" size={22} color="#000" />
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.topText}>Contact us with your requirements</Text>

        {/* Input Fields */}
        <TextInput
          style={styles.input}
          placeholder="Your Name"
          placeholderTextColor="#888"
          value={name}
          onChangeText={setName}
        />

        <TextInput
          style={styles.input}
          placeholder="Your Email"
          placeholderTextColor="#888"
          value={email}
          onChangeText={setEmail}
        />

        <TextInput
          style={styles.textArea}
          placeholder="Please describe your requirements"
          placeholderTextColor="#888"
          value={desc}
          onChangeText={setDesc}
          multiline
        />

        {/* Submit Button */}
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Send Request</Text>
        </TouchableOpacity>
      </ScrollView>

      {/* Floating Chat Button */}
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

export default IndustryScreen;


/* ---------- Styles ---------- */

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff", paddingHorizontal: 15 },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 15,
  },
  headerTitle: { fontSize: 18, fontWeight: "600" },
  floatingIcon: { position: "absolute", bottom: 75, right: 18, elevation: 12 },

  topText: {
    textAlign: "center",
    marginVertical: 15,
    fontSize: 14,
    fontWeight: "500",
  },

  input: {
    borderColor: "#4CAF50",
    borderWidth: 1.5,
    borderRadius: 10,
    padding: 12,
    marginTop: 10,
    fontSize: 14,
  },

  textArea: {
    borderColor: "#4CAF50",
    borderWidth: 1.5,
    borderRadius: 10,
    padding: 12,
    marginTop: 10,
    height: 140,
    textAlignVertical: "top",
    fontSize: 14,
  },

  button: {
    backgroundColor: "#4CAF50",
    borderRadius: 10,
    paddingVertical: 15,
    marginTop: 18,
    alignItems: "center",
  },
  buttonText: { color: "#FFF", fontSize: 16, fontWeight: "600" },

  fab: {
    position: "absolute",
    bottom: 70,
    right: 25,
    backgroundColor: "#4CAF50",
    padding: 18,
    borderRadius: 40,
    elevation: 4,
  },

  bottomNav: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#fff",
    paddingVertical: 12,
    paddingHorizontal: 15,
    elevation: 8,
  },

  navItem: { alignItems: "center", justifyContent: "center", flex: 1 },
  navItemActive: { alignItems: "center", justifyContent: "center", flex: 1 },

  navIcon: { width: 22, height: 22, resizeMode: "contain" },
  navIconActive: { width: 30, height: 30, resizeMode: "contain" },

  navLabel: { fontSize: 12, color: "#777", marginTop: 3 },
  navLabelActive: { fontSize: 12, color: "#4CAF50", marginTop: 3, fontWeight: "600" },
});
