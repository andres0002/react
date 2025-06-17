// js
// react
import { useState, useRef } from 'react';
// third
import debounce from 'just-debounce-it';
// owm
import './App.css'
import { MoviesFoundComponent } from './components/MoviesFoundComponent';
import { MoviesNoFoundComponent } from './components/MoviesNoFoundComponent';
import { useMovies } from './hooks/useMovies';
import { useSearch } from './hooks/useSearch';

export function App() {
  const { search, setSearch, error } = useSearch();
  const [sort, setSort] = useState(false);
  const { movies, hasMovies, getMovies, loading, errorSearchMovies } = useMovies({search,sort});

  const debouncedGetMovies = useRef(
    debounce(search => {
      getMovies({search});
    }, 500)
  ).current;

  const handleSubmit = (event) => {
    event.preventDefault();
    getMovies({search});
  }

  const hadleChange = (event) => {
    const newSearch = event.target.value;
    if (newSearch.startsWith(' ')) return;
    setSearch(newSearch);
    debouncedGetMovies(newSearch);
  }

  const handleSort = () => {
    setSort(!sort);
  }

  return (
    <div className='page'>
      <header>
        <h1>Search Movies</h1>
        <form className='form' onSubmit={handleSubmit}>
          {/* <input ref={inputSearchRef} className='input-search' type='text' placeholder='Avengers, Star Wars, The Matrix...' /> */}
          <input value={search} onChange={hadleChange} name='search' className='input-search' type='text' placeholder='Avengers, Star Wars, The Matrix...' />
          <input className='input-checkbox' type='checkbox' onChange={handleSort} checked={sort} />
          <button className='btn-search' type='submit'>Search</button>
        </form>
        {
          error && <p style={{color: 'red'}}>{error}</p>
        }
      </header>

      <main>
        {
          errorSearchMovies !== ''
            ? <p>{errorSearchMovies}</p>
            : loading
              ? (
                <p>Loading...</p>
              )
              : hasMovies
                ? <MoviesFoundComponent movies={movies} />
                : <MoviesNoFoundComponent />
        }
      </main>
    </div>
  )
}
