import React from "react";
import { View, Text, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { SimpleLineIcons } from "@expo/vector-icons";
import { ScrollView } from "react-native-gesture-handler";
import Svg, { Rect } from "react-native-svg";
import globalStyles from "../styles/global";

const Intro = ({ navigation }) => {
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
      <View style={globalStyles.introContainer}>
        <Svg viewBox="0 0 120 80" width="40" height="40">
          <Rect width="120" height="8" stroke="black" fill="black"></Rect>
          <Rect y="30" width="60" height="8" stroke="black" fill="black"></Rect>
        </Svg>
        <View>
          <Text style={globalStyles.title}>My plants</Text>
        </View>

        {plants.map((item) => (
          <View style={globalStyles.plantdetails} key={item.id}>
            <Image source={item.image} style={globalStyles.image} />
            <View style={globalStyles.textContainer}>
              <Text style={globalStyles.heading}>{item.name}</Text>
              <Text style={globalStyles.subheading}>{item.scientificName}</Text>
              <Text
                style={
                  item.status === "Warning"
                    ? globalStyles.warning
                    : globalStyles.status
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
                style={globalStyles.icon}
                onPress={() =>
                  navigation.navigate("Info", {
                    name: item.name,
                    image: item.image,
                    scientificName: item.scientificName,
                    status: item.status,
                    id: item.id,
                  })
                }
              />
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

export default Intro;
