// js
// react
import { useState, useEffect, useRef } from "react";
// third
// owm

export function useSearch () {
    const [search, setSearch] = useState('');
    const [error, setError] = useState('');
    const isFirstInput = useRef(true);

    useEffect(() => {
        // para que no me muestre error al iniciar la page.
        if (isFirstInput.current) {
            isFirstInput.current = search === '';
            return;
        }
        if (search === '') {
            setError('No se puedo buscar una movie vacía.');
            return;
        }
        if (search.match(/^\d+$/)) {
            setError('No se puedo buscar una película con un número.');
            return;
        }
        if (search.length < 3) {
            setError('La busqueda debe tenre por lo menos 3 caracteres.');
            return;
        }
        setError('');
    }, [search]);

    return { search, setSearch, error }
}