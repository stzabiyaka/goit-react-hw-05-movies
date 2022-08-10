const axios = require('axios');
const ACESS_KEY = '704d5b04a49684ea4810e36d12ae79df';
const BASE_URL = 'https://api.themoviedb.org/3/';

const fetchData = async ({ path = '' }) => {
  const response = await axios.get(path);
  return response.data;
};

export const fetchTrending = async () => {
  return await fetchData({
    path: `${BASE_URL}trending/movie/day?api_key=${ACESS_KEY}`,
  });
};

export const fetchMovieById = async ({ movieId }) => {
  return await fetchData({
    path: `${BASE_URL}movie/${movieId}?api_key=${ACESS_KEY}`,
  });
};

export const fetchMovieReviews = async ({ movieId, page }) => {
  return await fetchData({
    path: `${BASE_URL}movie/${movieId}/reviews?api_key=${ACESS_KEY}&language=en-US&page=${page}`,
  });
};
