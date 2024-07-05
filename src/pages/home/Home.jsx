import React, { useState, useEffect } from 'react';
import './home.css';

import { HeroSlider, TrendingCards, MovieLists2 } from '../../containers';
import { SecondaryButton } from '../../components';
import { fetchMoviesByCategory } from '../../api/fetchData'; // Adjust the import based on your project structure

const Home = () => {
  const [movies, setMovies] = useState({
    Trending: [],
    Popular: [],
    Upcoming: []
  });

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const trendingMovies = await fetchMoviesByCategory('trending');
        const popularMovies = await fetchMoviesByCategory('popular');
        const upcomingMovies = await fetchMoviesByCategory('upcoming');
        setMovies({
          Trending: trendingMovies,
          Popular: popularMovies,
          Upcoming: upcomingMovies
        });
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };

    fetchMovies();
  }, []);

  return (
    <div className='home'>
      <div className="home_section1 margin-tb">
        <div className="home_section1-div1">
          <HeroSlider />
        </div>
        <div className="home_section1-div2">
          <TrendingCards />
        </div>
      </div>
      <div className="home_section2 margin-tb">
        {['Trending', 'Popular', 'Upcoming'].map((category, index) => (
          <div className='home_section2-div' key={index}>
            <MovieLists2 title={category} movies={movies[category]} />
            <SecondaryButton text='Explore' />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
