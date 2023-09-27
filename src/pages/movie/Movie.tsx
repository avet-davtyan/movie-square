import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axiosTmdb from "../../axiosTmdb";
import { responsiveFontSizes, Stack } from "@mui/material";
import {
  getMovieById,
  getImagePath,
  getMovieImages,
  getMovieCast,
} from "../../helpers/apiTmdb/apiTmdb.tsx";
import BackDrop from "./components/BackDrop";
import TopBar from "./components/TopBar";
import MovieGeneral from "./components/MovieGeneral";

const Movie = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const [movieId, setMovieId] = useState(
    parseInt(searchParams.get("movie_id") || "1", 10),
  );

  const [movie, setMovie] = useState(null);
  const [movieCast, setMovieCast] = useState(null);

  useEffect(() => {
    getMovieById(movieId).then((response) => {
      setMovie(response.data);
      console.log(response.data);
    });
    getMovieCast(movieId).then((response) => {
      setMovieCast(response.data["cast"]);
    });
  }, []);

  return (
    <>
      {movie && (
        <>
          <BackDrop backDropPath={getImagePath(movie["backdrop_path"])} />
          <TopBar />
          <MovieGeneral movie={movie} movieCast={movieCast} />
        </>
      )}
    </>
  );
};

export default Movie;
