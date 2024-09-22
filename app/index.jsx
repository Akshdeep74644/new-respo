import React from "react";
import { View, Text, Linking, StyleSheet } from "react-native";

export default function index() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center", gap:10 }}>
      <View style={styles.topbox}>
      <Text style={styles.topboxText}>Hey Folk's, Hope you are doing well</Text>
      <Text style={styles.topboxText}>I'm a Frontend Dev and below is my social media handel.</Text>
      </View>
      <View style={styles.btnContainer}>
        <Text onPress={() => Linking.openURL("https://www.instagram.com/akshdeep74644/")} style={styles.btnText}>
          Instagram
        </Text>
      </View>
      <View style={styles.btnContainer}>
        <Text onPress={() => Linking.openURL("https://www.facebook.com/profile.php?id=100084523189816&mibextid=ZbWKwL")} style={styles.btnText}>
          Facebook
        </Text>
      </View>
      <View style={styles.btnContainer}>
        <Text onPress={() => Linking.openURL("https://github.com/Akshdeep74644")} style={styles.btnText}>
          Github
        </Text>
      </View>
      <View style={styles.btnContainer}>
        <Text onPress={() => Linking.openURL("https://www.youtube.com/@akshdeepsingh9476  ")} style={styles.btnText}>
          Youtube
        </Text>
      </View>
      <View style={styles.btnContainer}>
        <Text onPress={() => Linking.openURL("https://fueler.io/akshay74644")} style={styles.btnText}>
          Fueler
        </Text>
      </View>
      <View style={styles.btnContainer}>
        <Text onPress={() => Linking.openURL("https://in.pinterest.com/akshdeep74644/")} style={styles.btnText}>
          Pinterest
        </Text>
      </View>
      <View style={styles.btnContainer}>
        <Text onPress={() => Linking.openURL("#")} style={styles.btnText}>
          Skype
        </Text>
      </View>
      <View style={styles.btnContainer}>
        <Text onPress={() => Linking.openURL("https://t.me/akshdeep74644")} style={styles.btnText}>
          Telegram
        </Text>
      </View>
      <View style={styles.btnContainer}>
        <Text onPress={() => Linking.openURL("https://api.whatsapp.com/send?phone=9953774644")} style={styles.btnText}>
          Whatsapp
        </Text>
      </View>
      <View style={styles.btnContainer}>
        <Text onPress={() => Linking.openURL("https://www.linkedin.com/in/akshaydeep-singh-ab7107282/")} style={styles.btnText}>
          Linkedin
        </Text>
      </View>
      <Text>Akshdeep74644</Text>
    </View>
  );
}

const styles = StyleSheet.create({

  btnContainer: {
    backgroundColor: "#555555",
    width: 150,
    height: 40,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnText: {
    color: "white",
    fontSize:15,
  },

  topbox: {
    alignItems: 'center',
  },

  topboxText: {
    fontSize: 18
  }

});