import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import TabNavigator from "./navigation/TabNavigator";
import { AuthProvider } from "../contexts/AuthContext";
import "./global.css"

export default function App() {
    return (
        <AuthProvider>
            <NavigationContainer>
                <TabNavigator />
            </NavigationContainer>
        </AuthProvider>
    );
}
