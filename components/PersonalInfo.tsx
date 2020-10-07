import React, { useState } from "react";
import { Button, Text, TextInput, View, Image } from "react-native";
import Styles from "./Styles";

type PersonalInfoProps = {
  onClosed: (name: string) => void;
};

const PersonalInfo = ({ onClosed }: PersonalInfoProps) => {
  const [nameValue, setName] = useState("");
  return (
    <View style={Styles.container}>
      <Image
        style={Styles.logo}
        source={require("../assets/wired-brain-coffee-logo.png")}
      ></Image>
      <View style={Styles.containerCenter}>
        <Text style={{ fontSize: 16 }}>Please enter your name</Text>
      </View>
      <TextInput
        style={Styles.textInput}
        onChangeText={(text) => setName(text)}
        value={nameValue}
      />
      <View style={Styles.containerButton}>
        <Button title="Start chatting!" onPress={() => onClosed(nameValue)} />
      </View>
    </View>
  );
};

export default PersonalInfo;
