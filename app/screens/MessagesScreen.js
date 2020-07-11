import React, { useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";

import Screen from "../components/Screen";
import ListItem from "../components/listing/ListItem";
import ListItemSeparator from "../components/listing/ListItemSeparator";
import ListItemDeleteAction from "../components/listing/ListItemDeleteAction";

const initialMessages = [
  {
    id: 1,
    title: "lina ",
    description: "hi I'm interested in learning react.",
    image: require("../assets/lina.jpeg"),
  },
  {
    id: 2,
    title: "lina",
    description: "I wanted to play jazz ",
    image: require("../assets/lina.jpeg"),
  },
  {
    id: 3,
    title: "lina",
    description: "Running application ",
    image: require("../assets/lina.jpeg"),
  },
];

function MessagesScreen(props) {
  const [messages, setMessages] = useState(initialMessages);
  const [refresh, setRefresh] = useState(false);
  const handelDleteItem = (message) => {
    //delete massage from massage channge state by hooks //update state
    setMessages(messages.filter((m) => m.id !== message.id));
    // delete massage from server
  };
  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subTitle={item.description}
            image={item.image}
            onPress={() => console.log("Message selected", item)}
            renderRightActions={() => (
              <ListItemDeleteAction onPress={() => handelDleteItem(item)} />
            )}
          />
        )}
        ItemSeparatorComponent={ListItemSeparator}
        refreshing={refresh}
        onRefresh={() => {
          setMessages([
            {
              id: 2,
              title: "linaa",
              description: "Running application ",
              image: require("../assets/lina.jpeg"),
            },
          ]);
        }}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({});

export default MessagesScreen;
