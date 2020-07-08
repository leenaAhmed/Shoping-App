import React, { useState } from "react";
import { Switch, StyleSheet } from "react-native";
import AppPicker from "./app/components/AppPicker";
import Screen from "./app/components/Screen";
import AppInput from "./app/components/AppInput";
const catogries = [
  {
    lapel: "clothes",
    value: 1,
  },
  {
    lapel: "acessories",
    value: 2,
  },
  {
    lapel: "Fernaturies",
    value: 3,
  },
];
export default function Catogory() {
  const [Catogory, setCatogory] = useState();
  return (
    <Screen>
      <AppPicker
        selctedItem={Catogory}
        onSelctedItem={(item) => setCatogory(item)}
        items={catogries}
        icon="apps"
        placeholder="Catogory"
      />
      <AppInput icon="email" placeholder="Email" />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingTop: 90,
    backgroundColor: "#f8f4f4",
  },
  detailsContainer: {},
});
