import React from "react";
import { View, Text, Image } from "react-native";
import infoStyles from "../styles/infoStyle";
import { Ionicons } from "@expo/vector-icons";
import { SimpleLineIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";

const Info = ({ route, navigation }) => {
  const { name, image, scientificName, status, id } = route.params;
  return (
    <View style={infoStyles.infoContainer}>
      <StatusBar backgroundColor="white" />
      <View>
        <View style={infoStyles.topContainer}>
          <Ionicons name="ios-arrow-round-back" size={50} color="black" />
          <View style={infoStyles.plantdetails} key={id}>
            <View style={infoStyles.textContainer}>
              <Text style={infoStyles.heading}>{name}</Text>
              <Text style={infoStyles.subheading}>{scientificName}</Text>
              <Text
                style={
                  status === "Warning" ? infoStyles.warning : infoStyles.status
                }
              >
                {status === "Warning" ? (
                  <SimpleLineIcons name="drop" size={10} color="#ebb000" />
                ) : null}{" "}
                {status}
              </Text>
            </View>
            <Image source={image} style={infoStyles.image} />
          </View>
        </View>
      </View>
      <View style={infoStyles.statusInfo}>
        <Text style={infoStyles.plantCare}>Plant Care</Text>
        <View style={infoStyles.statusInfoContainer}>
          <View>
            <Text style={infoStyles.text}>
              <SimpleLineIcons
                name="drop"
                size={15}
                color="rgba(70, 135, 115, .8)"
              />
              &nbsp; Every 3 weeks
            </Text>
            <Text style={infoStyles.text}>
              <Entypo
                name="light-up"
                size={15}
                color="rgba(70, 135, 115, .8)"
              />
              &nbsp; Natural Light
            </Text>
            <Text style={infoStyles.text}>
              <FontAwesome5
                name="temperature-high"
                size={15}
                color="rgba(70, 135, 115, .8)"
              />
              &nbsp; Minimum of 7 deg C
            </Text>
          </View>
          <View style={infoStyles.progressContainer}>
            <Text style={infoStyles.text}>Next Watering</Text>
          </View>
        </View>
        <View>
          <Text style={infoStyles.information}>Information</Text>
          <Text style={infoStyles.descriptionText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Info;
