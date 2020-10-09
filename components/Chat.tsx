import React, { useState } from "react";
import {
  FlatList,
  TextInput,
  View,
  Button,
  ListRenderItem,
} from "react-native";
import Styles from "./Styles";
import { RenderChatItem, ChatItem } from "./ChatItem";

interface Props {
  username: string;
}

const Chat: React.FC<Props> = (props) => {
  let [chatInput, setChatInput] = useState("");
  let [chatItemList, setChatItemList] = useState(Array<ChatItem>());

  const renderItem: ListRenderItem<ChatItem> = ({ item }) => (
    <RenderChatItem chatItem={item} username={props.username}></RenderChatItem>
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
