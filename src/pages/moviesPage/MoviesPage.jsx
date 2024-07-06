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
    backdrop: 'https://image.tmdb.org/t/p/original/' + movieDetails.backdrop_path || 'https://via.placeholder.com/174x225',
    director: movieCredits.crew?.find(person => person.job === 'Director')?.name || '',
    genres: movieDetails.genres?.map(genre => genre.name).join(', ') || '',
    languages: movieDetails.spoken_languages?.map(lang => lang.english_name).join(', ') || '',
    posterPath: 'https://image.tmdb.org/t/p/w780/' + movieDetails.poster_path || 'https://via.placeholder.com/174x225',
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
            <div className="content_div">
              <p className="content_div-title">Summary</p>
              <p className="content_div-details">{data.overview}</p>
            </div>
            <div className="content_div">
              <p className="content_div-title">Director</p>
              <p className="content_div-details">{data.director}</p>
            </div>
            <div className="content_div">
              <p className="content_div-title">Genre</p>
              <p className="content_div-details">{data.genres}</p>
            </div>
            <div className="content_div">
              <p className="content_div-title">Language</p>
              <p className="content_div-details">{data.languages}</p>
            </div>
            <div className="content_div">
              <p className="content_div-title">Release Date</p>
              <p className="content_div-details">{data.releaseDate}</p>
            </div>
            <div className="content_div">
              <p className="content_div-title">Rating</p>
              <p className="content_div-details">{data.rating}</p>
            </div>
          <div className="content_div">
            <p className="content_div-title">Country</p>
            <p className="content_div-details">{data.country}</p>
          </div>
          <div className="content_div">
            <p className="content_div-title">Companies</p>
            <p className="content_div-details">{data.companies}</p>
          </div>
          </div>
        </div>
      </div>

      <div className="castSection">
        <CastSlider movieCredits={movieCredits} />
      </div>

      {/* <div className="detailsSection">
        <h3>Details</h3>
        <div className="detailsSection-context">
          <div className="content_div">
            <p className="content_div-title">Summary</p>
            <p className="content_div-details">{data.overview}</p>
          </div>
          <div className="content_div">
            <p className="content_div-title">Tagline</p>
            <p className="content_div-details">{data.tagline}</p>
          </div>
          <div className="content_div">
            <p className="content_div-title">Country</p>
            <p className="content_div-details">{data.country}</p>
          </div>
          <div className="content_div">
            <p className="content_div-title">Companies</p>
            <p className="content_div-details">{data.companies}</p>
          </div>
        </div> 
      </div>*/}

      <div className="similarSection">
        <MovieLists1 movies={similarMovies} title='Similar Movies' />
      </div>
    </div>
  );
};

export default MoviesPage;
