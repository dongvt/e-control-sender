import React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { MaterialIcons, Entypo } from "@expo/vector-icons";

import ControlScreen from "../screens/ControlScreen";
import SettingScreen from "../screens/SettingScreen";

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Settings"
        component={SettingScreen}
        options={{
          tabBarLabel: "Settings",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="app-settings-alt" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Control"
        component={ControlScreen}
        options={{
          tabBarLabel: "Control",
          tabBarIcon: ({ color, size }) => (
            <Entypo name="mouse-pointer" color={color} size={size}  />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
