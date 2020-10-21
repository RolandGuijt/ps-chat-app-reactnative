import React, { useState } from "react";
import { Button, Text, TextInput, View, Image } from "react-native";
import Styles from "./Styles";
import ImageChooser from "./ImageChooser"

type PersonalInfoProps = {
  onClosed: (name: string, image: string) => void;
};

const PersonalInfo = ({ onClosed }: PersonalInfoProps) => {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
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
        value={name}
      />
      <ImageChooser onChangeImage={(image) => setImage(image)}/>
      <View style={Styles.containerButton}>
        <Button title="Start chatting!" onPress={() => onClosed(name, image)} />
      </View>
    </View>
  );
};

export default PersonalInfo;
