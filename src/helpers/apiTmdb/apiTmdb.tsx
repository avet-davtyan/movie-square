import axiosTmdb from "../../axiosTmdb";

export const getMovieById = (movieId: number) => {
  return axiosTmdb.get(`movie/${movieId}?language=en-US`);
};

export const getImagePath = (shortPath: string) => {
  return import.meta.env.VITE_IMAGE_PATH + shortPath;
};

export const getMovieImages = (movieId: number) => {
  return axiosTmdb.get(`/movie/${movieId}/images`);
};

export const getPlayingMovies = (page: number = 1) => {
  return axiosTmdb.get(`/movie/now_playing?language=en-US&page=${page}`);
};

export const getMovieCast = (movieId: number) => {
  return axiosTmdb.get(`/movie/${movieId}/credits?language=en-US`);
};

export const getMovieReviews = (movieId: number, page: number = 1) => {
  return axiosTmdb.get(`/movie/${movieId}/reviews?language=en-US&page=${page}`);
};

export const getPersonById = (personId: number) => {
  return axiosTmdb.get(`/person/${personId}?language=en-US`);
};

export const getMovieCredits = (personId: number) => {
  return axiosTmdb.get(`/person/${personId}/movie_credits?language=en-US"`);
};
