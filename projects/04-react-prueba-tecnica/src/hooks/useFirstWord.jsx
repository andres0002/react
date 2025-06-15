// js
// react
import { useState, useEffect } from "react";
// third
// own

export const useFirstWord = ({fact}) => {
    const [firstWord, setFirstWord] = useState('');

    // get firstWord of fact.
    useEffect(() => {
        if (fact && fact !== '') {
            const firstWord = fact.split(' ')[0];
            setFirstWord(firstWord);
        }
    }, [fact]);

    return { firstWord };
}