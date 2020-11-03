import React, { useEffect, useState } from "react";
import { Text, Animated, Easing, Image, View } from "react-native";
import Styles from "./Styles";

interface Props {
  chatItem: ChatItem;
  username: string;
}

interface ChatItem {
  id: string;
  text: string;
  image: string;
  timeStamp: number;
  by: string;
}

const RenderChatItem: React.FC<Props> = (props) => {
  let unknownAvatarImage =
    "iVBORw0KGgoAAAANSUhEUgAAACcAAAAaCAMAAAADmbV0AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAKsUExURQAAAJWUlJWUlJWUlJWUlJWUlJWUlJWUlJWUlJWUlJWUlJWUlJWUlJWUlJWUlJWUlJWUlJWUlJWUlJWUlJWUlJWUlJWUlJWUlJWUlJWUlJWUlJWUlJeWlpWUlJWUlJWUlJWUlJWUlJWUlJWUlJWUlJWUlJWUlJWUlJWUlJWUlJWUlJWUlJWUlJWUlJWUlJWUlJWUlJWUlJaVlZaVlZWUlJWUlJWUlJeWlpWUlJWUlJubm5iXl5ybm5qZmpiXl5ybm5eWlpybm5iXl5iXl6Cfn5aVlZ6dnZqZmZmYmJybm6Cfn6GgoJiXl6CgoKKiop+enpmYmJ2cnKSkpKKhoaCfn6CgoKuqqpqZma2trauqqq6urrOysqemp6yrrLOysri3uL28vGZmZmdnZ2lpaWpqampqa2tra2xsbG1tbW5ubm9vb3BwcHJycnp6eoCAgIODg4eHh4iIiI6OjpGRkZOUlJeXl5qamp2dnaenp6mpqa+vr7CwsLOys7S0tLa1tra2tri3uLi4uLi4ubm4ubm6uru7u769vr6+vsC/wMDAwMHAwcLCwsbGx8fHx8jHyMjIyMjIycnIycnJycnJysrKysvLzMzMzMzNzc3Nzc7Nzs7Oz8/Oz9DQ0NLS09PT09TU1dXV1dXV1tbW1tbW19fW19fX19fX2NjY2dnY2dnZ2dnZ2tra29va29vb29vb3Nzc3Nzc3d3d3d3d3t7e3t7e3+Hh4uHi4uLi4uLi4+Lj4+Lj5OPi4+Pj4+Pj5OTj5OTk5OTk5eTl5eXl5eXl5ubl5ubm5ubm5+fm5+fn5+fn6Ojn6Ojo6Ojo6eno6enp6enp6urq6urq6+vr6+vr7Ovs7Ozs7Ozs7ezt7e3t7e7u7u7u7+/v7+/v8PDv8PDw8PHx8fLy8vLy8/Pz8/b29jVBoDYAAABhdFJOUwABAgMEBQYHCAoPERIWGBkaHiczNzg5Oz4/RElJTlBSVFVWYmRub3B4fICEhomKjZaZm56kqqyxtbjGx8fIycnLztPU2NnZ2tvb29vc3d7h4uns7fLz8/X5+/z9/v7+/v7bLj5IAAACA0lEQVQ4y32Ty27TQBSGZzxje2xT50IbFKVRF1CJqCUgWLGtCkgIifdA4kl4FtgWCRArBAoL1NKLqoiLaRokp7m4duJLPDOMq4amdpqzOv+czzPW+c+BIBMQAD7r8FKQ4oKGqe/0wnmcXqmU9DoZD7/bf1r+VRws3V7ZWMYi4+PB/udv9lQNT2Era5s1Q4IIAIqVXNVsWBdFdJEu3nu+rsuq7EdERhDmqqc9bwZn1p7dURXV//h1b/doTYCk1GuPs5x4VVcV5fXxMAoHVh0CphGrM6lKkyRfeWzIWDkcRImyf2AsyzdXcxnOKC8jLOO90ZmiuwrGyLhfSHOwUMdIQmjiRCRypBSLUoqTjIIkOLh6LiuSCGgacooTb0pCwAeLZ7fnn4hvINS09H0QcZbYr75YUgFZ2kCcC8UyfrCxwBhln05eHv8tk/fdh4xR7o9oiqNenzIWvLHDV7rWGLk/j54yPnb9ONVnLht3Efpi+SAaDrwQxKe4GEfvmt10//qddhQ0h/9/KN6PadDvZvo8sg7jX97UJLmd8OC3k/V3CConTuJWEhhjKIcfzt25PKfXNx+ZEIvuAs5ZzKi31WjNmr/Ic2+Ur2ka0QhRiNR7u91mszg+6DpMUQClNI7sna2dVnzVHhnVW/kaIVGwHTRbzry9XCiYGmKha3vz9zdplcRp5vAf8iXLOt4A2ecAAAAASUVORK5CYII=";
  let avatarImage = props.chatItem.image ?? unknownAvatarImage;

  let [animatedValue] = useState(new Animated.Value(0));
  useEffect(() => {
    Animated.timing(animatedValue, {
      toValue: 1,
      duration: 400,
      easing: (number) => Easing.ease(number),
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
      <View style={Styles.chatItemHeader}>
        <Image
          source={{
            uri: "data:image/jpeg;base64," + avatarImage,
          }}
          style={Styles.avatarSmall}
        />
        <Text style={Styles.smallItalicText}>
          {props.chatItem.by} at{" "}
          {new Date(props.chatItem.timeStamp).toLocaleTimeString()}
        </Text>
      </View>
      <Text>{props.chatItem.text}</Text>
    </Animated.View>
  );
};

export { RenderChatItem, ChatItem };
