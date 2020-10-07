import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { AsyncStorage, View } from "react-native";
import PersonalInfo from "./components/PersonalInfo";
import Chat from "./components/Chat";
import Styles from "./components/Styles";
import { AppLoading } from "expo";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [username, setUserName] = useState("");

  const fetchPersonalData = async () => {
    let fetchedUsername = await AsyncStorage.getItem("chatapp-username");
    let userName = fetchedUsername == null ? "" : fetchedUsername;
    setUserName(userName);
    setIsLoading(false);
  };

  const onPersonalInfoClosed = (name: string) => {
    setUserName(name);
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
      <Chat username={username} />
    ) : (
      <PersonalInfo onClosed={onPersonalInfoClosed} />
    );

  return (
    <View style={Styles.container}>
      {activeComponent}
      <StatusBar style="auto" />
    </View>
  );
}
