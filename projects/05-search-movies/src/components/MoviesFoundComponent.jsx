// js
// react
// third
// owm

export const MoviesFoundComponent = ({movies}) => {
    return (
        <ul className="movies">
            {
                movies.map(movie => {
                return (
                    <li className="movie" key={movie.id}>
                        <h3>{movie.title}</h3>
                        <p>{movie.year}</p>
                        <img src={movie.poster} alt={movie.title} />
                    </li>
                );
                })
            }
        </ul>
    )
}