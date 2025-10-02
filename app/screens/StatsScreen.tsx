import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import { collection, onSnapshot } from "firebase/firestore";
import { db, auth } from "../../services/config/firebase";

export default function StatsScreen() {
    const [counts, setCounts] = useState<{ [key: string]: number }>({});

    useEffect(() => {
        const unsubscribe = onSnapshot(
            collection(db, "users", auth.currentUser?.uid || "", "entries"),
            (snapshot) => {
                const moods: { [key: string]: number } = {};
                snapshot.forEach((doc) => {
                    const mood = doc.data().mood;
                    moods[mood] = (moods[mood] || 0) + 1;
                });
                setCounts(moods);
            }
        );
        return unsubscribe;
    }, []);

    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            {Object.entries(counts).map(([mood, count]) => (
                <Text key={mood} style={{ fontSize: 20 }}>
                    {mood}: {count}
                </Text>
            ))}
        </View>
    );
}
