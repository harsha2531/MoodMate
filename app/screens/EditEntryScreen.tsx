import React, { useState } from "react";
import { View, TextInput, Button } from "react-native";
import { doc, updateDoc } from "firebase/firestore";
import { db, auth } from "../../services/config/firebase";

export default function EditEntryScreen({ route, navigation }: any) {
    const { entry } = route.params;
    const [note, setNote] = useState(entry.note);
    const [mood, setMood] = useState(entry.mood);

    const handleUpdate = async () => {
        try {
            const ref = doc(db, "users", auth.currentUser?.uid || "", "entries", entry.id);
            await updateDoc(ref, { note, mood });
            navigation.goBack();
        } catch (error: any) {
            alert(error.message);
        }
    };

    return (
        <View style={{ flex: 1, padding: 20 }}>
            <TextInput
                value={note}
                onChangeText={setNote}
                style={{ borderWidth: 1, marginBottom: 12, padding: 10 }}
            />
            <Button title="😊 Happy" onPress={() => setMood("😊")} />
            <Button title="😢 Sad" onPress={() => setMood("😢")} />
            <Button title="Save Changes" onPress={handleUpdate} />
        </View>
    );
}
