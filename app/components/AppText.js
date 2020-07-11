import React from "react";
import { Text, StyleSheet, Platform } from "react-native";
import defaultStylee from "../config/stylee";

function AppText({ children, style, ...otherProps }) {
  return (
    <Text style={[defaultStylee.text, style]} {...otherProps}>
      {children}
    </Text>
  );
}

const styles = StyleSheet.create({});

export default AppText;
