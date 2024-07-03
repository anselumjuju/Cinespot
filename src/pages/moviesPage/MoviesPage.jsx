import React, { useEffect } from 'react'
import './moviesPage.css'

import { PrimaryButton, SecondaryButton } from '../../components';
import { CastSlider, PhotoSlider, MovieLists1 } from '../../containers/';
import { VideoPlayer } from '../../cards';
import { useParams } from 'react-router-dom';

const MoviesPage = ({ data }) => {

  const Params = useParams();

  const {
    name = 'Movie Name',
    trailer = 'https://via.placeholder.com/174x225',
    image = 'https://via.placeholder.com/174x225',
    summary = 'Summary',
    genre = 'Genre',
    language = 'Language',
    runtime = 'Runtime',
    releaseDate = 'Release Date',
    rating = 'Rating',
    country = 'Country',
    revenue = 'Revenue',
    companies = 'Companies',
  } = data;

  useEffect(()=>{
    console.log(Params.id);
  });

  return (
    <div className='moviesPage margin-tb'>

      <div className="titleSection">
        <h3 className='twoline-ellipses'>{name}</h3>
        <SecondaryButton text='Share' />
      </div>

      <div className="trailerSection">
        <VideoPlayer image={trailer} />
      </div>

      <div className="summarySection">
        <div className="summary-poster">
          <img src={image} alt="MovieImage" />
        </div>
        <div className="summary-details">
          <div className="summary-header">
            <h3 className='oneline-ellipses'>{name}</h3>
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
              <p>director</p>
              <p>genre</p>
              <p>language</p>
              <p>runtime</p>
              <p>release date</p>
              <p>rating</p>
              <p>tagline</p>
            </div>
          </div>
        </div>
      </div>

      <div className="castSection">
        <CastSlider />
      </div>

      <div className="photoSection">
        <PhotoSlider />
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
            <p>{summary}</p>
            <p>{genre}</p>
            <p>{language}</p>
            <p>{releaseDate}</p>
            <p>{country}</p>
            <p>{revenue}</p>
            <p>{runtime}</p>
            <p>{rating}</p>
            <p>{companies}</p>
          </div>
        </div>
      </div>

      <div className="similarSection">
        <MovieLists1 data={"Similar"} />
      </div>

    </div>
  )
}

export default MoviesPage