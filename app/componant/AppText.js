import React from "react";
import { StyleSheet, Text, Platform } from "react-native";

export default function AppText({ children, style }) {
  return <Text style={[styles.text, style]}> {children}</Text>;
}

const styles = StyleSheet.create({
  text: {
    fontSize: Platform.OS === "android" ? 18 : 20,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
  },
});
