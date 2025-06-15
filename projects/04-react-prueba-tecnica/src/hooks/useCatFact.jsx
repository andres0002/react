// js
// react
import { useState, useEffect } from "react";
// third
// own
import { getRandomFact } from "../services/catFacts";

export const useCatFact = () => {
    const [fact, setFact] = useState('');

    // get fact cat.
    useEffect(() => {
        getRandomFact().then(newFact => setFact(newFact));
    }, []);

    const refreshFact = async () => {
        const newFact = await getRandomFact();
        setFact(newFact);
    }

    return { fact, refreshFact };
}