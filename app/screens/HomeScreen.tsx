import React from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { useMood } from "../../contexts/MoodContext";

export default function HomeScreen() {
    const { moods, deleteMood } = useMood();

    return (
        <View style={{ flex: 1, padding: 20 }}>
            <Text style={{ fontSize: 22, fontWeight: "bold", marginBottom: 10 }}>Your Moods</Text>
            <FlatList
                data={moods}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        style={{
                            backgroundColor: "#f0f0f0",
                            padding: 15,
                            marginVertical: 8,
                            borderRadius: 10,
                        }}
                        onLongPress={() => deleteMood(item.id)}
                    >
                        <Text style={{ fontSize: 18 }}>{item.mood}</Text>
                        <Text style={{ color: "gray" }}>{item.date}</Text>
                    </TouchableOpacity>
                )}
            />
        </View>
    );
}
