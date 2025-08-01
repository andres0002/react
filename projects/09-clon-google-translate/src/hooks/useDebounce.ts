// js
// react
import { useState, useEffect } from "react";
// third
// own

export function useDebounce<T>(value: T, delay=500) {
    const [debounceValue, setDebounceValue] = useState(value);

    useEffect(() => {
        const timer = setTimeout(() => {
            setDebounceValue(value);
        }, delay);

        return () => clearTimeout(timer);
    }, [value, delay]);

    return debounceValue;
}