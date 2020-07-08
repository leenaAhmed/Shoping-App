import React from "react";
import { FlatList, StyleSheet } from "react-native";

import Screen from "../components/Screen";
import Card from "../components/Card";
import colors from "../config/colors";

const listings = [
  {
    id: 1,
    title: "mandal for sale",
    price: 100,
    image: require("../assets/mandal.jpg"),
  },
  {
    id: 2,
    title: "old fashion   ",
    price: 1000,
    image: require("../assets/classes.jpg"),
  },
  {
    id: 3,
    title: "red jackt for  sale",
    price: 50,
    image: require("../assets/jacket.jpg"),
  },
];

function ListingsScreen(props) {
  return (
    <Screen style={styles.screen}>
      <FlatList
        data={listings}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subTitle={"$" + item.price}
            image={item.image}
          />
        )}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 15,
    backgroundColor: colors.light,
  },
});

export default ListingsScreen;
