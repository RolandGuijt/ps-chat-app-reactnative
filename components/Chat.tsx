import React, { useState } from "react";
import {
  FlatList,
  Text,
  TextInput,
  View,
  Button,
  ListRenderItem,
  ImagePropTypes,
} from "react-native";
import Styles from "./Styles";

interface Props {
  username: string;
}

interface ChatItem {
  id: string;
  text: string;
  timeStamp: number;
  by: string;
}

const Chat: React.FC<Props> = (props) => {
  let [chatInput, setChatInput] = useState("");
  let [chatItemList, setChatItemList] = useState(Array<ChatItem>());

  const renderItem: ListRenderItem<ChatItem> = ({ item }) => (
    <View
      style={[
        Styles.flatListItem,
        { borderColor: item.by == props.username ? "green" : "blue" },
      ]}
    >
      <Text style={Styles.smallItalicText}>
        {item.by} at {new Date(item.timeStamp).toLocaleTimeString()}
      </Text>
      <Text>{item.text}</Text>
    </View>
  );

  return (
    <View style={Styles.container}>
      <FlatList
        inverted
        style={Styles.flatListChat}
        data={chatItemList.sort((a, b) => b.timeStamp - a.timeStamp)}
        renderItem={renderItem}
      ></FlatList>

      <View style={Styles.containerHorizontal}>
        <TextInput
          style={Styles.chatTextInput}
          value={chatInput}
          onChangeText={(text) => setChatInput(text)}
        ></TextInput>
        <Button
          title="Send"
          onPress={() => {
            let newChatItemList: ChatItem[] = [
              ...chatItemList,
              {
                id: Math.random().toString(36).substring(7),
                text: chatInput,
                timeStamp: Date.now(),
                by: props.username,
              },
            ];
            setChatItemList(newChatItemList);
            setChatInput("");
          }}
        ></Button>
      </View>
    </View>
  );
};

export default Chat;
