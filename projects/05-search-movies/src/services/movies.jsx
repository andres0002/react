// js
// react
// third
// own

const API_KEY = '4287ad07';

export const searchMovies = async ({search}) => {
    if (search === '') return null;
    
    try {
        const response = await fetch(`https://omdbapi.com/?apikey=${API_KEY}&s=${search}`);
        const data = await response.json();
        const movies = await data.Search;

        return movies?.map(movie => {
            return {
                id: movie.imdbID,
                title: movie.Title,
                year: movie.Year,
                poster: movie.Poster
            }
        });
    } catch {
        throw new Error("Error searching movies...");
        
    }
}