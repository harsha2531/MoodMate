import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import HomeScreen from "../../app/screens/HomeScreen";
import AddMoodScreen from "../../app/screens/AddMoodScreen";
import ProfileScreen from "../../app/screens/ProfileScreen";

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarIcon: ({ color, size }) => {
                    let iconName: any;
                    if (route.name === "Home") iconName = "home";
                    else if (route.name === "Add") iconName = "add-circle";
                    else if (route.name === "Profile") iconName = "person";
                    return <Ionicons name={iconName} size={size} color={color} />;
                },
            })}
        >
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Add" component={AddMoodScreen} />
            <Tab.Screen name="Profile" component={ProfileScreen} />
        </Tab.Navigator>
    );
}
