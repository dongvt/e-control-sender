import React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import ControlScreen from "../screens/ControlScreen";
import SettingScreen from "../screens/SettingScreen";

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Settings" component={SettingScreen} />
      <Tab.Screen name="Control" component={ControlScreen} />
    </Tab.Navigator>
  );
};

export default Tabs;
