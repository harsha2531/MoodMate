import React, { useState } from "react";
import { View, Text, TextInput, Button, Alert } from "react-native";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../services/config/firebase";

export default function RegisterScreen({ navigation }: any) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleRegister = async () => {
        try {
            await createUserWithEmailAndPassword(auth, email, password);
            Alert.alert("Success", "Account created! You can now login.");
            navigation.navigate("Login");
        } catch (error: any) {
            Alert.alert("Registration Failed", error.message);
        }
    };

    return (
        <View style={{ flex: 1, padding: 20, justifyContent: "center" }}>
            <Text style={{ fontSize: 22, fontWeight: "bold", marginBottom: 20 }}>Register</Text>
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
            <Button title="Register" onPress={handleRegister} />
            <Text
                style={{ marginTop: 15, color: "blue", textAlign: "center" }}
                onPress={() => navigation.navigate("Login")}
            >
                Already have an account? Login
            </Text>
        </View>
    );
}
