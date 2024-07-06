import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';

import { fetchMoviesByGenre, fetchMoviesByQuery, fetchMoviesByCategory } from '../../api/fetchData'
import { MovieLists2 } from '../../containers'

const SearchPage = () => {
    const [movies, setMovies] = useState([]);
    const [title, setTitle] = useState('');
    const location = useLocation();

    const params = new URLSearchParams(location.search);
    const genreName = params.get('genre');
    const query = params.get('query');
    const find = params.get('find');


    useEffect(() => {
        async function fetchData() {
            let fetchedMovies = [];
            if (genreName) {
                fetchedMovies = await fetchMoviesByGenre(genreName);
                setTitle(genreName)
            } else if (query) {
                fetchedMovies = await fetchMoviesByQuery(query);
                setTitle(query)
            } else {
                fetchedMovies = await fetchMoviesByCategory(find);
                setTitle(find)
            }
            setMovies(fetchedMovies);
        }

        fetchData();
    }, [genreName, query]);

    return (
        <div className='searchPage margin-tb'>
            <MovieLists2 text={title} movies={movies} />
        </div>
    )
}

export default SearchPage