import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Entry } from "../types/types";

const EntryCard: React.FC<{ entry: Entry }> = ({ entry }) => {
    return (
        <View style={styles.card}>
            <Text style={styles.mood}>{entry.mood}</Text>
            <Text style={styles.note}>{entry.note}</Text>
            <Text style={styles.date}>{entry.date}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    card: { padding: 12, margin: 8, backgroundColor: "#fff", borderRadius: 10 },
    mood: { fontSize: 24 },
    note: { fontSize: 16, marginTop: 5 },
    date: { fontSize: 12, color: "#666", marginTop: 5 },
});

export default EntryCard;
