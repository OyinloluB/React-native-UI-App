import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Info from "./screens/Info";
import Intro from "./screens/Intro";

const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="Intro"
          component={Intro}
        />
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="Info"
          component={Info}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
