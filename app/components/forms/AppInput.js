import React from "react";
import { StyleSheet, View, TextInput } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import defaultStyle from "../../config/stylee";
export default function AppInput({ icon, width = "100%", ...otherProps }) {
  return (
    <View style={[styles.container, { width }]}>
      {icon && (
        <MaterialCommunityIcons
          name={icon}
          color={defaultStyle.colors.medium}
          size={25}
          style={styles.icon}
        />
      )}
      <TextInput
        placeholderTextColor={defaultStyle.colors.medium}
        style={defaultStyle.text}
        {...otherProps}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: defaultStyle.colors.light,
    flexDirection: "row",
    borderRadius: 25,
    padding: 15,
    marginVertical: 10,
  },
  icon: {
    marginRight: 10,
  },
});
