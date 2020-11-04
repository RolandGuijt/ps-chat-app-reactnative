import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { AsyncStorage, SafeAreaView } from "react-native";
import PersonalInfo from "./components/PersonalInfo";
import Chat from "./components/Chat";
import Styles from "./components/Styles";
import { AppLoading } from "expo";

export default function App() {
  const storageUserNameKey = "chatapp-username";
  const storageImageKey = "chatapp-image";
  const [isLoading, setIsLoading] = useState(true);
  const [username, setUserName] = useState("");
  const [image, setImage] = useState("");

  const fetchPersonalData = async () => {
    let fetchedUsername = await AsyncStorage.getItem(storageUserNameKey);
    let userName = fetchedUsername == null ? "" : fetchedUsername;
    let fetchedImage = await AsyncStorage.getItem(storageImageKey);
    let image = fetchedImage == null ? "" : fetchedImage;
    setUserName(userName);
    setImage(image);
    setIsLoading(false);
  };

  const onPersonalInfoClosed = async (name: string, image: string) => {
    setUserName(name);
    await AsyncStorage.setItem(storageUserNameKey, name);
    setImage(image);
    await AsyncStorage.setItem(storageImageKey, image);
  };

  if (isLoading) {
    return (
      <AppLoading
        startAsync={fetchPersonalData}
        onFinish={() => setIsLoading(false)}
      />
    );
  }

  let activeComponent =
    username != "" ? (
      <Chat username={username} image={image} />
    ) : (
      <PersonalInfo onClosed={onPersonalInfoClosed} />
    );

  return (
    <SafeAreaView style={Styles.container}>
      {activeComponent}
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}
