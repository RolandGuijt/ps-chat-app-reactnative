import React, { useEffect, useState } from "react";
import { Text, Animated } from "react-native";
import Styles from "./Styles";

interface Props {
  chatItem: ChatItem;
  username: string;
}

interface ChatItem {
  id: string;
  text: string;
  timeStamp: number;
  by: string;
}

const RenderChatItem: React.FC<Props> = (props) => {
  let [animatedValue] = useState(new Animated.Value(0));
  useEffect(() => {
    Animated.timing(animatedValue, {
      toValue: 1,
      duration: 250,
      useNativeDriver: true,
    }).start();
  });
  return (
    <Animated.View
      style={[
        Styles.flatListItem,
        { borderColor: props.username == props.chatItem.by ? "green" : "blue" },
        { opacity: animatedValue },
        { transform: [{ scale: animatedValue }] },
      ]}
    >
      <Text style={Styles.smallItalicText}>
        {props.chatItem.by} at{" "}
        {new Date(props.chatItem.timeStamp).toLocaleTimeString()}
      </Text>
      <Text>{props.chatItem.text}</Text>
    </Animated.View>
  );
};

export { RenderChatItem, ChatItem };
