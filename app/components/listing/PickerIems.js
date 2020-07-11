import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import AppText from "../AppText";

export default function PickerIems({ item, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <AppText style={styles.text}>{item.label}</AppText>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  text: {
    margin: 20,
  },
});
