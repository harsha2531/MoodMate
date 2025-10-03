import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { AuthProvider, useAuth } from "./contexts/AuthContext";
import { MoodProvider } from "./contexts/MoodContext";
import TabNavigator from "./components/navigation/TabNavigator";
import AuthNavigator from "./components/navigation/AuthNavigator";

function RootNavigator() {
    const { user } = useAuth();
    return user ? <TabNavigator /> : <AuthNavigator />;
}

export default function App() {
    return (
        <AuthProvider>
            <MoodProvider>
                <NavigationContainer>
                    <RootNavigator />
                </NavigationContainer>
            </MoodProvider>
        </AuthProvider>
    );
}
