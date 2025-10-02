import React, { useState } from "react";
import { View, TextInput, Button } from "react-native";
import { addDoc, collection } from "firebase/firestore";
import { db, auth } from "../../services/config/firebase";

export default function AddEntryScreen({ navigation }: any) {
    const [note, setNote] = useState("");
    const [mood, setMood] = useState("😊");

    const handleSave = async () => {
        try {
            await addDoc(collection(db, "users", auth.currentUser?.uid || "", "entries"), {
                note,
                mood,
                date: new Date().toLocaleDateString(),
            });
            navigation.navigate("Home");
        } catch (error: any) {
            alert(error.message);
        }
    };

    return (
        <View style={{ flex: 1, padding: 20 }}>
            <TextInput
                placeholder="Write your thoughts..."
                style={{ borderWidth: 1, marginBottom: 12, padding: 10 }}
                value={note}
                onChangeText={setNote}
            />
            <Button title="😊 Happy" onPress={() => setMood("😊")} />
            <Button title="😢 Sad" onPress={() => setMood("😢")} />
            <Button title="😡 Angry" onPress={() => setMood("😡")} />
            <Button title="😌 Calm" onPress={() => setMood("😌")} />
            <Button title="Save Entry" onPress={handleSave} />
        </View>
    );
}
