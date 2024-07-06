import React, { useState, useEffect } from 'react';
import './moviesPage.css';

import { PrimaryButton, SecondaryButton } from '../../components';
import { CastSlider, MovieLists1 } from '../../containers/';
import { VideoPlayer } from '../../cards';
import { useParams } from 'react-router-dom';
import { fetchMovieDetails, fetchMovieCredits, fetchSimilarMovies, fetchYouTubeTrailers } from '../../api/fetchData';

const MoviesPage = () => {
  const [movieDetails, setMovieDetails] = useState({});
  const [movieCredits, setMovieCredits] = useState({});
  const [similarMovies, setSimilarMovies] = useState([]);
  const [videoId, setVideoId] = useState('');
  const { id } = useParams();

  useEffect(() => {
    async function fetchData() {
      const fetchedMovieDetails = await fetchMovieDetails(id);
      const fetchedMovieCredits = await fetchMovieCredits(id);
      const fetchedSimilarMovies = await fetchSimilarMovies(id);
      const fetchedVideoId = await fetchYouTubeTrailers(id);

      setMovieDetails(fetchedMovieDetails);
      setMovieCredits(fetchedMovieCredits);
      setSimilarMovies(fetchedSimilarMovies);
      setVideoId(fetchedVideoId);
    }

    fetchData();
  }, [id]);

  const data = {
    title: movieDetails.title || '',
    backdrop: movieDetails.backdrop_path || '',
    director: movieCredits.crew?.find(person => person.job === 'Director')?.name || '',
    genres: movieDetails.genres?.map(genre => genre.name).join(', ') || '',
    languages: movieDetails.spoken_languages?.map(lang => lang.english_name).join(', ') || '',
    posterPath: movieDetails.poster_path || '',
    runtime: movieDetails.runtime || '',
    releaseDate: movieDetails.release_date || '',
    rating: movieDetails.vote_average || '',
    tagline: movieDetails.tagline || '',
    overview: movieDetails.overview || '',
    country: movieDetails.production_countries?.map(country => country.name).join(', ') || '',
    revenue: movieDetails.revenue || '',
    companies: movieDetails.production_companies?.map(company => company.name).join(', ') || ''
  };

  return (
    <div className='moviesPage margin-tb'>
      <div className="titleSection">
        <h3 className='twoline-ellipses'>{data.title}</h3>
        <SecondaryButton text='Share' />
      </div>

      <div className="trailerSection">
        <VideoPlayer image={data.backdrop} id={videoId} />
      </div>

      <div className="summarySection">
        <div className="summary-poster">
          <img src={data.posterPath} alt="Movie Poster" />
        </div>
        <div className="summary-details">
          <div className="summary-header">
            <h3 className='oneline-ellipses'>{data.title}</h3>
            <div className="summary-buttons">
              <PrimaryButton text='Watchlist' />
              <SecondaryButton text='Watched' />
            </div>
          </div>
          <div className="summary-content">
            <div className="content-title">
              <p>Director</p>
              <p>Genre</p>
              <p>Language</p>
              <p>Runtime</p>
              <p>Release Date</p>
              <p>Rating</p>
              <p>Tagline</p>
            </div>
            <div className="content-details">
              <p>{data.director}</p>
              <p>{data.genres}</p>
              <p>{data.languages}</p>
              <p>{data.runtime}</p>
              <p>{data.releaseDate}</p>
              <p>{data.rating}</p>
              <p>{data.tagline}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="castSection">
        <CastSlider movieCredits={movieCredits} />
      </div>

      <div className="detailsSection">
        <h3>Details</h3>
        <div className="detailsSection-context">
          <div className="detailsSection-title">
            <p>Summary</p>
            <p>Genre</p>
            <p>Language</p>
            <p>Release Date</p>
            <p>Country</p>
            <p>Revenue</p>
            <p>Runtime</p>
            <p>Rating</p>
            <p>Companies</p>
          </div>
          <div className="detailsSection-content">
            <p>{data.overview}</p>
            <p>{data.genres}</p>
            <p>{data.languages}</p>
            <p>{data.releaseDate}</p>
            <p>{data.country}</p>
            <p>{data.revenue}</p>
            <p>{data.runtime}</p>
            <p>{data.rating}</p>
            <p>{data.companies}</p>
          </div>
        </div>
      </div>

      <div className="similarSection">
        <MovieLists1 movies={similarMovies} title='Similar Movies' />
      </div>
    </div>
  );
};

export default MoviesPage;
