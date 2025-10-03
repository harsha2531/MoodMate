import React, { useState } from "react";
import { View, Text, TextInput, Button, Alert } from "react-native";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../services/config/firebase";

export default function LoginScreen({ navigation }: any) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async () => {
        try {
            await signInWithEmailAndPassword(auth, email, password);
        } catch (error: any) {
            Alert.alert("Login Failed", error.message);
        }
    };

    return (
        <View style={{ flex: 1, padding: 20, justifyContent: "center" }}>
            <Text style={{ fontSize: 22, fontWeight: "bold", marginBottom: 20 }}>Login</Text>
            <TextInput
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
                style={{
                    borderWidth: 1,
                    borderColor: "#ccc",
                    borderRadius: 8,
                    padding: 10,
                    marginBottom: 15,
                }}
            />
            <TextInput
                placeholder="Password"
                secureTextEntry
                value={password}
                onChangeText={setPassword}
                style={{
                    borderWidth: 1,
                    borderColor: "#ccc",
                    borderRadius: 8,
                    padding: 10,
                    marginBottom: 15,
                }}
            />
            <Button title="Login" onPress={handleLogin} />
            <Text
                style={{ marginTop: 15, color: "blue", textAlign: "center" }}
                onPress={() => navigation.navigate("Register")}
            >
                Don't have an account? Register
            </Text>
        </View>
    );
}
