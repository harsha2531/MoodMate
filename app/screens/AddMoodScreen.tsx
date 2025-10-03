import React, { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";
import { useMood } from "../../contexts/MoodContext";

export default function AddMoodScreen() {
    const [mood, setMood] = useState("");
    const { addMood } = useMood();

    const handleAddMood = async () => {
        if (!mood.trim()) return;
        await addMood({ id: "", mood, date: new Date().toLocaleDateString() });
        setMood("");
    };

    return (
        <View style={{ flex: 1, padding: 20 }}>
            <Text style={{ fontSize: 20, marginBottom: 10 }}>How are you feeling today?</Text>
            <TextInput
                value={mood}
                onChangeText={setMood}
                placeholder="Enter your mood..."
                style={{
                    borderWidth: 1,
                    borderColor: "#ccc",
                    borderRadius: 8,
                    padding: 10,
                    marginBottom: 20,
                }}
            />
            <Button title="Save Mood" onPress={handleAddMood} />
        </View>
    );
}
