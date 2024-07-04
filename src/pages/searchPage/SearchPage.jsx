import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';

import { fetchMoviesByGenre, fetchMoviesByQuery } from '../../api/fetchData'
import { MovieLists2 } from '../../containers'

const SearchPage = () => {
    const [movies, setMovies] = useState([]);
    const location = useLocation();

    const params = new URLSearchParams(location.search);
    const genreName = params.get('genre');

    useEffect(() => {
        async function fetchData() {
            let fetchedMovies = [];
            fetchedMovies = await fetchMoviesByGenre(genreName);
            setMovies(fetchedMovies);
        }

        fetchData();
    }, [genreName]);

    return (
        <div className='searchPage margin-tb'>
            <MovieLists2 text={genreName} movies={movies} />
        </div>
    )
}

export default SearchPage