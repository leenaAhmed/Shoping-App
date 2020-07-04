import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";

import WelcomeScreen from "./app/screens/Welcomescreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import AppText from "./app/componant/AppText";
import AppButton from "./app/componant/AppButton";
import Card from "./app/componant/Card";
import ListDetailsScreen from "./app/screens/ListDetailsScreen";

export default function App() {
  return <ViewImageScreen />;
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingTop: 90,
    backgroundColor: "#f8f4f4",
  },
  detailsContainer: {},
});
