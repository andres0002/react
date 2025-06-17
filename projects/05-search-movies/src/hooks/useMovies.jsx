// js
// react
import { useState, useRef, useMemo, useCallback } from 'react';
// third
// owm
import { searchMovies } from '../services/movies';

export function useMovies ({search,sort}) {
    const [movies, setMovies] = useState([]);
    const hasMovies = movies?.length > 0;
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const previousSearch = useRef(search);

    const getMovies = useCallback(async ({search}) => {
        if (search === previousSearch.current) return;
        try {
            setLoading(true);
            setError('');
            previousSearch.current = search;
            const movies = await searchMovies({search});
            setMovies(movies);
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    }, []);

    const sotedMovies = useMemo(() => {
        return sort
            ? [...movies].sort((a, b) => a.title.localeCompare(b.title))
            : movies;
    }, [sort, movies]);

    return {movies: sotedMovies, hasMovies, getMovies, loading, errorSearchMovies: error };
}