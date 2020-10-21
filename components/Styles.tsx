import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ff1",
    justifyContent: "center",
    padding: 10,
  },
  containerHorizontal: {
    flexDirection: "row",
    height: 40,
    marginTop: 15,
  },
  containerButton: {
    width: "auto",
    marginTop: 5,
  },
  containerCenter: {
    alignItems: "center",
    marginBottom: 5,
  },
  chatTextInput: {
    borderColor: "rgba(52, 52, 52, 0.8)",
    borderWidth: 1,
    borderRadius: 4,
    flexGrow: 1,
  },
  textInput: {
    borderColor: "rgba(52, 52, 52, 0.8)",
    borderWidth: 1,
    borderRadius: 4,
  },
  flatListChat: {
    borderColor: "rgba(52, 52, 52, 0.8)",
    borderWidth: 1,
    borderRadius: 4,
    padding: 5,
  },
  flatListItem: {
    borderRadius: 10,
    borderWidth: 1,
    padding: 5,
    paddingBottom: 7,
    marginBottom: 3,
    borderColor: "green",
  },
  smallItalicText: {
    fontSize: 10,
    fontStyle: "italic"
  },
  logo: { width: "auto", resizeMode: "contain" },
});
