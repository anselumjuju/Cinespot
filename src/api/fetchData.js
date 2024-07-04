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
    console.log(`${genreName} : ${genreID}`);
    return response.data.results;
}

export const fetchMoviesByQuery = async (query) => {
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&query=${query}&sort_by=release_date.desc&vote_count.gte=100`;
    const response = await axios.get(url);

    return response.data.results;
}
