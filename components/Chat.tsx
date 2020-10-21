import React, { useState, useEffect } from "react";
import {
  FlatList,
  TextInput,
  View,
  Button,
  ListRenderItem,
} from "react-native";
import Styles from "./Styles";
import { RenderChatItem, ChatItem } from "./ChatItem";
import Socket from "./Socket";

interface Props {
  username: string;
  image: string;
}

const Chat: React.FC<Props> = (props) => {
  let [chatInput, setChatInput] = useState("");
  let [chatItemList, setChatItemList] = useState<ChatItem[]>([]);

  useEffect(() => {
    (async () => {
      try {
        await Socket.start();
        console.log("SignalR Connected.");
    } catch (err) {
        console.log(err);
    };
    })();
    Socket.on("ReceiveMessage", chatItem => {
      setChatItemList(chatItemList => [...chatItemList, chatItem]);
    });
  }, []);


  const renderItem: ListRenderItem<ChatItem> = ({ item }) => (
    <RenderChatItem chatItem={item} username={props.username} image={props.image}></RenderChatItem>
  );

  return (
    <View style={Styles.container}>
      <FlatList
        inverted
        style={Styles.flatListChat}
        data={chatItemList.sort((a, b) => b.timeStamp - a.timeStamp)}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      ></FlatList>

      <View style={Styles.containerHorizontal}>
        <TextInput
          style={Styles.chatTextInput}
          value={chatInput}
          onChangeText={(text) => setChatInput(text)}

        ></TextInput>
        <Button
          title="Send"
          onPress={async () => {
            await Socket.invoke("SendMessage", 
              {
                id: Math.random().toString(36).substring(7),
                text: chatInput,
                timeStamp: Date.now(),
                by: props.username,
              });
            setChatInput("");
          }}
        ></Button>
      </View>
    </View>
  );
};

export default Chat;
