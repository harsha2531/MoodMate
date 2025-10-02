import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import AddEntryScreen from "../screens/AddEntryScreen";
import StatsScreen from "../screens/StatsScreen";

const Tab = createBottomTabNavigator();

const TabNavigator = () => (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Add" component={AddEntryScreen} />
        <Tab.Screen name="Stats" component={StatsScreen} />
    </Tab.Navigator>
);

export default TabNavigator;
