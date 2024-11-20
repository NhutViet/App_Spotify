import { StyleSheet, Text, View, SafeAreaView, Pressable } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import Entypo from "@expo/vector-icons/Entypo";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import AntDesign from "@expo/vector-icons/AntDesign";

const LoginScreen = () => {
  return (
    <LinearGradient colors={["#040306", "#131624"]} style={{ flex: 1 }}>
      <SafeAreaView>
        <View style={{ height: 80 }} />
        <Entypo
          style={{ textAlign: "center" }}
          name="spotify"
          size={80}
          color="green"
        />
        <Text style={styles.textSpotify}>
          Millions of Songs Free on Spotify!
        </Text>
        <View style={{ height: 80 }} />
        <Pressable style={styles.btnSignInSpotify}>
          <Text>Sign In With Spotify</Text>
        </Pressable>
      </SafeAreaView>

      <Pressable style={styles.btnSignInPhoneNumber}>
        <MaterialIcons name="phone-android" size={24} color="white" />
        <Text style={styles.txtsignIn}>Sign In With PhoneNumber</Text>
      </Pressable>

      <Pressable style={styles.btnSignInPhoneNumber}>
        <AntDesign name="google" size={24} color="red" />
        <Text style={styles.txtsignIn}>Sign In With Google</Text>
      </Pressable>

      <Pressable style={styles.btnSignInPhoneNumber}>
        <Entypo name="facebook" size={24} color="blue" />
        <Text style={styles.txtsignIn}>Sign In With Facebook</Text>
      </Pressable>
    </LinearGradient>
  );
  
};

export default LoginScreen;

const styles = StyleSheet.create({
  textSpotify: {
    color: "white",
    fontSize: 40,
    textAlign: "center",
    fontWeight: "bold",
    marginTop: 40,
  },
  btnSignInSpotify: {
    backgroundColor: "#1db954",
    padding: 10,
    marginLeft: "auto",
    marginRight: "auto",
    width: 300,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 10,
  },

  btnSignInPhoneNumber: {
    backgroundColor: "#131624",
    padding: 10,
    marginLeft: "auto",
    marginRight: "auto",
    width: 300,
    marginVertical: 10,
    borderRadius: 25,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
    borderColor: "#c0c0c0",
    borderWidth: 0.8,
  },
  txtsignIn: {
    color: "#fff",
    fontWeight: 500,
    flex: 1,
    textAlign: "center",
  },
});
