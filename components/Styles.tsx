import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ff1",
    justifyContent: "center",
    padding: 10,
  },

  //personal info
  startChattingButton: {
    width: "auto",
    marginTop: 5,
  },

  logo: { width: "auto", resizeMode: "contain" },

  enterYourName: {
    alignItems: "center",
    marginBottom: 5,
    fontSize: 16,
  },

  nameTextInput: {
    borderColor: "rgba(52, 52, 52, 0.8)",
    borderWidth: 1,
    borderRadius: 4,
  },

  avatarBig: { height: 75, width: 75, borderRadius: 20, marginTop: 5 },

  //chat
  sendSection: {
    flexDirection: "row",
    height: 40,
    marginTop: 15,
  },

  chatTextInput: {
    marginRight: 5,
    borderColor: "rgba(52, 52, 52, 0.8)",
    borderWidth: 1,
    borderRadius: 4,
    flexGrow: 1,
  },

  chatItemHeader: {
    flexDirection: "row",
    flexWrap: "wrap",
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
    fontStyle: "italic",
    alignSelf: "center",
  },

  avatarSmall: {
    width: 25,
    height: 25,
    borderRadius: 5,
    marginRight: 5,
    marginBottom: 2,
  },
});
