import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { AuthProvider } from "./contexts/AuthContext";
import { MoodProvider } from "./contexts/MoodContext";
import TabNavigator from "./components/navigation/TabNavigator";

export default function App() {
    return (
        <AuthProvider>
            <MoodProvider>
                <NavigationContainer>
                    <TabNavigator />
                </NavigationContainer>
            </MoodProvider>
        </AuthProvider>
    );
}
