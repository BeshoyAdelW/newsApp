import React from "react";
import { Text, SafeAreaView, StyleSheet } from "react-native";
import Constants from "expo-constants";
import Header from "../components/Header";

function ProfileScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.screen}>
      <Header title="Profile" navigation={navigation} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    paddingTop: Constants.statusBarHeight,
    flex: 1,
  },
});

export default ProfileScreen;
