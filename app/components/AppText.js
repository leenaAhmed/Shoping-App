import React from "react";
import { Text, StyleSheet, Platform } from "react-native";
import defaultStylee from "../config/stylee";

function AppText({ children, style }) {
  return <Text style={[defaultStylee.text, style]}>{children}</Text>;
}

const styles = StyleSheet.create({});

export default AppText;
