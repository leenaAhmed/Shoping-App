import React from "react";
import { StyleSheet, Text, View } from "react-native";
import AppText from "../AppText";
import colors from "../../config/colors";

export default function ErrorMessage({ error, visible }) {
  if (!visible || !error) return null;
  return <AppText style={styles.errorMessage}>{error}</AppText>;
}

const styles = StyleSheet.create({
  errorMessage: {
    color: colors.danger,
  },
});
