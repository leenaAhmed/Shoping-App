import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import AppText from "../componant/AppText";
import colors from "../config/colors";
import ListItems from "../componant/ListItems";

export default function ListDetailsScreen(props) {
  return (
    <View>
      <Image style={styles.image} source={require("../assets/mandal.jpg")} />
      <View style={styles.detilesContainear}>
        <AppText style={styles.title}>mandala for sale</AppText>
        <AppText style={styles.price}>$100</AppText>
      </View>
      <View style={styles.userContainer}>
        <ListItems
          image={require("../assets/lina.jpeg")}
          title="lina Ahmed"
          subTitle="5 Listings"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  detilesContainear: {
    padding: 20,
  },
  image: {
    width: "100%",
    height: 300,
  },
  price: {
    color: colors.primary,
    fontWeight: "bold",
    marginTop: 10,
  },
  title: {
    fontWeight: "bold",
  },
  userContainer: {
    marginHorizontal: 20,
  },
});
