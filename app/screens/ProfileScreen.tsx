import React from "react";
import { View, Text, Button } from "react-native";
import { auth } from "../../services/config/firebase";

export default function ProfileScreen() {
    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <Text style={{ fontSize: 22, fontWeight: "bold" }}>Profile</Text>
            <Button title="Logout" onPress={() => auth.signOut()} />
        </View>
    );
}
