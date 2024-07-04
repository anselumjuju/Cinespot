import React, { useEffect, useState } from 'react';
import './explore.css';

import { useNavigate } from 'react-router-dom';

import { genres } from '../../constants/constant';
import { SecondaryButton } from '../../components';
import { MovieLists2 } from '../../containers';
import { fetchMoviesByGenre } from '../../api/fetchData';

const Explore = () => {
  const navigate = useNavigate();
  const [moviesByGenre, setMoviesByGenre] = useState({});

  useEffect(() => {
    const fetchMovies = async () => {
      const moviesData = {};
      for (const genre of genres) {
        const movies = await fetchMoviesByGenre(genre.name.toLowerCase());
        moviesData[genre.name] = movies;
      }
      setMoviesByGenre(moviesData);
    };

    fetchMovies();
  }, []);

  return (
    <div className='explore margin-tb'>
      <div className="explore-nav">
        {genres.map((genre, index) => (
          <p
            key={index}
            onClick={() => navigate(`/search?genre=${genre.name.toLowerCase()}`)}
          >
            {genre.name}
          </p>
        ))}
      </div>
      <div className="explore-movies">
        {genres.map((genre, index) => (
          <div className='explore-div' key={index}>
            <MovieLists2 text={genre.name} movies={moviesByGenre[genre.name]} />
            <SecondaryButton text='Explore' onClick={() => navigate(`/search?genre=${genre.name.toLowerCase()}`)} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Explore;
