import axios from 'axios';

export const requestNowPlayingMovies = axios.create({
  baseURL: 'https://api.themoviedb.org/3/movie/now_playing?api_key=74b066c40e8a066c205bcf9aec414cfc&language=en-US&page=1',
});

export const requestUpComingMovies = axios.create({
  baseURL: 'https://api.themoviedb.org/3/movie/upcoming?api_key=74b066c40e8a066c205bcf9aec414cfc&language=en-US&page=1',
});

export const requestMovieDescription = (id) => axios.create({
  baseURL: `https://api.themoviedb.org/3/movie/${id}?api_key=74b066c40e8a066c205bcf9aec414cfc&language=en-US`,
});
