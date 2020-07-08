import React, { useState } from "react";
import {
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  Modal,
  Button,
  FlatList,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import defaultStyle from "../config/stylee";
import AppText from "./AppText";
import Screen from "../components/Screen";
import PickerIems from "./listing/PickerIems";

export default function AppPicker({
  icon,
  items,
  placeholder,
  onSelectItem,
  selectedItem,
}) {
  const [modelVisible, setmodelVisible] = useState(false);
  return (
    <>
      <TouchableWithoutFeedback onPress={() => setmodelVisible(true)}>
        <View style={styles.container}>
          {icon && (
            <MaterialCommunityIcons
              name={icon}
              color={defaultStyle.colors.medium}
              size={25}
              style={styles.icon}
            />
          )}
          {selectedItem ? (
            <AppText style={styles.text}>{selectedItem.label}</AppText>
          ) : (
            <AppText style={styles.placeholder}>{placeholder}</AppText>
          )}

          <MaterialCommunityIcons
            name="chevron-down"
            color={defaultStyle.colors.medium}
            size={25}
          />
        </View>
      </TouchableWithoutFeedback>
      <Modal visible={modelVisible} animationType="slide">
        <Screen>
          <Button title="close" onPress={() => setmodelVisible(false)} />
          <FlatList
            data={items}
            keyExtractor={(item) => item.value.toString()}
            renderItem={({ item }) => (
              <PickerIems
                label={item.label}
                onPress={() => {
                  setmodelVisible(false);
                  onSelectItem(item);
                }}
              />
            )}
          />
        </Screen>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: defaultStyle.colors.light,
    flexDirection: "row",
    borderRadius: 25,
    padding: 15,
    marginVertical: 10,
    width: "100%",
  },
  icon: {
    marginRight: 10,
  },
  text: {
    flex: 1,
  },
});
