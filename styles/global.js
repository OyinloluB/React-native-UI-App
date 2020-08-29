import { StyleSheet } from "react-native";

const globalStyles = StyleSheet.create({
  introContainer: {
    paddingTop: Platform.OS === "android" ? 40 : 0,
    paddingLeft: 25,
    backgroundColor: "#fff",
  },
  infoContainer: {
    paddingTop: Platform.OS === "android" ? 40 : 0,
  },
  title: {
    fontWeight: "bold",
    fontSize: 25,
    paddingTop: 40,
  },
  plantdetails: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    backgroundColor: "#1b4a40",
    borderTopLeftRadius: 50,
    borderBottomLeftRadius: 50,
    height: 230,
    overflow: "hidden",
    marginTop: 40,
  },
  image: {
    flex: 1,
    width: 400,
    height: 300,
    resizeMode: "contain",
  },
  textContainer: {
    flex: 1,
    paddingTop: 20,
  },
  heading: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 30,
  },
  subheading: {
    color: "#fff",
    fontSize: 14,
    marginTop: 5,
  },
  status: {
    borderRadius: 25,
    backgroundColor: "rgba(70, 135, 115, .4)",
    marginTop: 12,
    padding: 5,
    textAlign: "center",
    color: "#1b4a40",
    fontWeight: "bold",
    width: 110,
  },
  warning: {
    borderRadius: 25,
    backgroundColor: "rgba(235, 176, 0, .4)",
    marginTop: 12,
    padding: 5,
    textAlign: "center",
    color: "#ebb000",
    fontWeight: "bold",
    width: 110,
  },
  icon: {
    marginTop: 20,
    right: -100,
  },
});

export default globalStyles;
