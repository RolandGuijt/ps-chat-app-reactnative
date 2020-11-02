import React, { useState } from "react";
import {
  Button,
  Text,
  TextInput,
  View,
  Image,
  KeyboardAvoidingView,
} from "react-native";
import Styles from "./Styles";
import ImageChooser from "./ImageChooser";

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
      <KeyboardAvoidingView>
        <View style={Styles.enterYourName}>
          <Text>Please enter your name</Text>
        </View>

        <TextInput
          style={Styles.nameTextInput}
          onChangeText={(text) => setName(text)}
          value={name}
        />
      </KeyboardAvoidingView>
      <ImageChooser onChangeImage={(image) => setImage(image)} />
      <View style={Styles.startChattingButton}>
        <Button title="Start chatting!" onPress={() => onClosed(name, image)} />
      </View>
    </View>
  );
};

export default PersonalInfo;
