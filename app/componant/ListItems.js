import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import AppText from "./AppText";

export default function ListItems({ image, subTitle, title }) {
  return (
    <View style={styles.container}>
      <Image source={image} style={styles.imagelist} />
      <View>
        <AppText>{title}</AppText>
        <AppText>{subTitle}</AppText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  imagelist: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginRight: 10,
  },
});
