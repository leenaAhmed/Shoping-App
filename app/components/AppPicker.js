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
  numOfColumns = 1,
  width = "100%",
  items,
  placeholder,
  onSelectItem,
  selectedItem,
  PickerItemComponant = PickerIems,
}) {
  const [modelVisible, setmodelVisible] = useState(false);
  return (
    <>
      <TouchableWithoutFeedback onPress={() => setmodelVisible(true)}>
        <View style={[styles.container, { width }]}>
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
          <Button
            backgroundColor={defaultStyle.colors.light}
            color={defaultStyle.colors.danger}
            title="close"
            style={styles.buttonCategory}
            onPress={() => setmodelVisible(false)}
          />
          <FlatList
            data={items}
            keyExtractor={(item) => item.value.toString()}
            numColumns={numOfColumns}
            renderItem={({ item }) => (
              <PickerItemComponant
                item={item}
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
  },
  icon: {
    marginRight: 10,
  },
  placeholder: {
    flex: 1,
    color: defaultStyle.colors.medium,
  },
  text: {
    flex: 1,
  },
});
