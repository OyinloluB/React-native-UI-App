import { StyleSheet } from "react-native";

const infoStyles = StyleSheet.create({
  infoContainer: {
    paddingTop: Platform.OS === "android" ? 30 : 0,
    backgroundColor: "#1b4a40",
    flex: 1,
  },
  topContainer: {
    backgroundColor: "#fff",
    paddingLeft: 25,
    borderBottomLeftRadius: 70,
    borderBottomRightRadius: 70,
  },
  statusInfo: {
    paddingLeft: 40,
    paddingTop: 40,
  },
  statusInfoContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  plantCare: {
    color: "white",
    fontSize: 22,
  },
  text: {
    color: "white",
    marginBottom: 15,
    fontSize: 13,
  },
  information: {
    color: "#fff",
    fontSize: 24,
  },
  descriptionText: {
    marginTop: 15,
    lineHeight: 23,
    color: "#fff",
    fontSize: 13,
  },
  progressContainer: {
    backgroundColor: "rgba(70, 135, 115, .4)",
    borderTopLeftRadius: 40,
    borderBottomLeftRadius: 40,
    paddingTop: 70,
    paddingBottom: 70,
    paddingLeft: 70,
    paddingRight: 10,
  },
  plantdetails: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    overflow: "hidden",
    paddingLeft: 20,
  },
  image: {
    flex: 1,
    width: 800,
    height: 300,
  },
  textContainer: {
    flex: 1,
    paddingTop: 35,
  },
  heading: {
    color: "#000",
    fontWeight: "bold",
    fontSize: 30,
  },
  subheading: {
    color: "#000",
    fontSize: 18,
    marginTop: 10,
  },
  status: {
    borderRadius: 25,
    backgroundColor: "rgba(70, 135, 115, .4)",
    marginTop: 24,
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

export default infoStyles;
