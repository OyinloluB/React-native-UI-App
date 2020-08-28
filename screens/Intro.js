import React from "react";
import { View, Text, FlatList, Image, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { SimpleLineIcons } from "@expo/vector-icons";
import Svg, { Rect } from "react-native-svg";
import { ScrollView } from "react-native-gesture-handler";

const Intro = () => {
  const plants = [
    {
      name: "Diego",
      image: require("../assets/plant-cactus.png"),
      scientificName: "Euphorbia Eritrea",
      status: "Healthy",
      id: 1,
    },
    {
      name: "Cassy",
      image: require("../assets/plant-one.png"),
      scientificName: "Strelitzia nicolai",
      status: "Warning",
      id: 2,
    },
    {
      name: "Luna",
      image: require("../assets/plant-cactus.png"),
      scientificName: "Aloe Vera",
      status: "Healthy",
      id: 3,
    },
  ];
  return (
    <ScrollView>
      <View style={styles.introContainer}>
        <Svg viewBox="0 0 120 80" width="40" height="40">
          <Rect width="120" height="8" stroke="black" fill="black"></Rect>
          <Rect y="30" width="60" height="8" stroke="black" fill="black"></Rect>
        </Svg>
        <View>
          <Text style={styles.title}>My plants</Text>
        </View>

        {plants.map((item) => (
          <View style={styles.plantdetails} key={item.id}>
            <Image source={item.image} style={styles.image} />
            <View style={styles.textContainer}>
              <Text style={styles.heading}>{item.name}</Text>
              <Text style={styles.subheading}>{item.scientificName}</Text>
              <Text
                style={
                  item.status === "Warning" ? styles.warning : styles.status
                }
              >
                {item.status === "Warning" ? (
                  <SimpleLineIcons name="drop" size={10} color="#ebb000" />
                ) : null}{" "}
                {item.status}
              </Text>
              <Ionicons
                name="ios-arrow-round-forward"
                size={70}
                color="white"
                style={styles.icon}
              />
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  introContainer: {
    backgroundColor: "#fff",
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

export default Intro;
