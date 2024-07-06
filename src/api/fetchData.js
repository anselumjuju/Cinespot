import axios from 'axios';
import { genres } from '../constants/constant';

export const fetchMoviesByGenre = async (genreName) => {
    const genre = genres.find((genre) => genre.name === genreName);
    if (!genre) {
        throw new Error(`Genre ${genreName} not found`);
    }

    const genreID = genre.id;
    const url = `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&with_genres=${genreID}&sort_by=release_date.desc&vote_count.gte=100`;

    const response = await axios.get(url);
    return response.data.results;
}

export const fetchMoviesByQuery = async (query) => {
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&query=${query}&sort_by=release_date.desc&vote_count.gte=100`;
    const response = await axios.get(url);

    return response.data.results;
}


export const fetchTopMovies = async (n) => {
    const url = `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_API_KEY}`;
    const response = await axios.get(url);
    let movies = response.data.results;

    movies = movies.filter(movie => movie.backdrop_path && movie.poster_path);

    for (let i = movies.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [movies[i], movies[j]] = [movies[j], movies[i]];
    }
    n = n || movies.length;

    return movies.slice(0, n);
}

export const fetchTrendingMovies = async (n) => {
    const url = `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}`;
    const response = await axios.get(url);
    let movies = response.data.results;

    movies = movies.filter(movie => movie.backdrop_path && movie.poster_path);

    for (let i = movies.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [movies[i], movies[j]] = [movies[j], movies[i]];
    }
    n = n || movies.length;
    return movies.slice(0, n);
}


export const fetchMoviesByCategory = async (category) => {
    const apiMap = {
        trending: 'trending/movie/week',
        popular: 'movie/popular',
        upcoming: 'movie/upcoming'
    };

    const url = `https://api.themoviedb.org/3/${apiMap[category]}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`;
    const response = await axios.get(url);
    let movies = response.data.results;
    return movies
};


export const fetchMovieDetails = async (movieId) => {
    const url = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.REACT_APP_API_KEY}`;
    const response = await axios.get(url)
    return response.data
}

export const fetchMovieCredits = async (movieId) => {
    const url = `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${process.env.REACT_APP_API_KEY}`;
    const response = await axios.get(url)
    return response.data
}

export const fetchSimilarMovies = async (movieId) => {
    const url = `https://api.themoviedb.org/3/movie/${movieId}/similar?api_key=${process.env.REACT_APP_API_KEY}`;
    const response = await axios.get(url)
    return response.data.results
}

export const fetchYouTubeTrailers = async (movieId) => {
    const url = `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${process.env.REACT_APP_API_KEY}`;
    const response = await axios.get(url);
    const results = response.data.results;

    const filteredKeys = results
        .filter(video => video.site === "YouTube" && video.type === "Trailer" && video.official === true)
        .map(video => video.key);
    return filteredKeys[0];
}
