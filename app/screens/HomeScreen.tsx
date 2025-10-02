import React, { useEffect, useState } from "react";
import { View, FlatList, Button } from "react-native";
import { collection, onSnapshot, query } from "firebase/firestore";
import { db, auth } from "../../services/config/firebase";
import EntryCard from "../../components/EntryCard";
import { Entry } from "../../types/types";

export default function HomeScreen({ navigation }: any) {
    const [entries, setEntries] = useState<Entry[]>([]);

    useEffect(() => {
        const q = query(collection(db, "users", auth.currentUser?.uid || "", "entries"));
        const unsubscribe = onSnapshot(q, (snapshot) => {
            const data: Entry[] = snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            })) as Entry[];
            setEntries(data);
        });
        return unsubscribe;
    }, []);

    return (
        <View style={{ flex: 1 }}>
            <Button title="Add Entry" onPress={() => navigation.navigate("Add")} />
            <FlatList
                data={entries}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <EntryCard entry={item} />
                )}
            />
        </View>
    );
}
