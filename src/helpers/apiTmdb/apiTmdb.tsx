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

export const getMovieCast = (movieId: number) => {
  return axiosTmdb.get(`/movie/${movieId}/credits?language=en-US`);
};

export const getMovieReviews = (movieId: number, page: number = 1) => {
  return axiosTmdb.get(`/movie/${movieId}/reviews?language=en-US&page=${page}`);
};
