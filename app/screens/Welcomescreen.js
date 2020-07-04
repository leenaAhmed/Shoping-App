import React from "react";
import { StyleSheet, View, ImageBackground, Text, Image } from "react-native";
import AppButton from "../componant/AppButton";
import AppText from "../componant/AppText";

function WelcomeScreen(props) {
  return (
    <ImageBackground
      blurRadius={2}
      style={styles.background}
      source={require("../assets/background.jpg")}
    >
      <View style={styles.logoContinear}>
        <Image style={styles.logo} source={require("../assets/logo-red.png")} />
        <Text style={styles.logoTitle}> Sell What You Don't Need </Text>
      </View>
      <View style={styles.butttonContainer}>
        <AppButton title="Logain" onPress={() => console.log("tabbed")} />
        <AppButton title="Register" color="secondary" />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  logo: {
    width: 100,
    height: 100,
  },
  logoContinear: {
    position: "absolute",
    top: 70,
    alignItems: "center",
  },
  butttonContainer: {
    padding: 20,
    width: "100%",
  },
  logoTitle: {
    fontSize: 25,
    fontWeight: "600",
    paddingVertical: 20,
  },
});
export default WelcomeScreen;
