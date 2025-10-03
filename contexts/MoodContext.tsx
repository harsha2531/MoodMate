import React, { createContext, useContext, useEffect, useState } from "react";
import { db } from "../services/config/firebase";
import { collection, addDoc, getDocs, updateDoc, deleteDoc, doc } from "firebase/firestore";
import { MoodEntry } from "../types/types";

type MoodContextType = {
    moods: MoodEntry[];
    addMood: (mood: MoodEntry) => Promise<void>;
    updateMood: (id: string, mood: Partial<MoodEntry>) => Promise<void>;
    deleteMood: (id: string) => Promise<void>;
    fetchMoods: () => Promise<void>;
};

const MoodContext = createContext<MoodContextType | null>(null);

export const MoodProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [moods, setMoods] = useState<MoodEntry[]>([]);

    const fetchMoods = async () => {
        const querySnapshot = await getDocs(collection(db, "moods"));
        const moodsList = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() } as MoodEntry));
        setMoods(moodsList);
    };

    const addMood = async (mood: MoodEntry) => {
        await addDoc(collection(db, "moods"), mood);
        await fetchMoods();
    };

    const updateMood = async (id: string, mood: Partial<MoodEntry>) => {
        await updateDoc(doc(db, "moods", id), mood);
        await fetchMoods();
    };

    const deleteMood = async (id: string) => {
        await deleteDoc(doc(db, "moods", id));
        await fetchMoods();
    };

    useEffect(() => {
        fetchMoods();
    }, []);

    return (
        <MoodContext.Provider value={{ moods, addMood, updateMood, deleteMood, fetchMoods }}>
            {children}
        </MoodContext.Provider>
    );
};

export const useMood = () => {
    const context = useContext(MoodContext);
    if (!context) throw new Error("useMood must be used inside MoodProvider");
    return context;
};
