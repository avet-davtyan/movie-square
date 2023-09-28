import { useSearchParams } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { ClipLoader, SquareLoader } from "react-spinners";
import {
  getMovieById,
  getImagePath,
  getMovieImages,
  getMovieCast,
  getMovieReviews,
} from "../../helpers/apiTmdb/apiTmdb.tsx";
import BackDrop from "./components/BackDrop";
import TopBar from "../../components/TopBar";
import MovieGeneral from "./components/MovieGeneral";
import { Stack } from "@mui/material";
import { log } from "util";
import { Simulate } from "react-dom/test-utils";
import load = Simulate.load;
import PageLoading from "../../components/PageLoading";

const Movie = () => {
  const params = useParams();
  const [movieId, setMovieId] = useState(parseInt(params["id"] || "550", 10));
  const [loading, setLoading] = useState(true);

  const [movie, setMovie] = useState(null);
  const [movieCast, setMovieCast] = useState(null);
  const [movieReviews, setMovieReviews] = useState(null);

  useEffect(() => {
    getMovieById(movieId)
      .then((response) => {
        setMovie(response.data);
        console.log(response.data);
      })
      .finally(() => setLoading(false));
    getMovieCast(movieId).then((response) => {
      setMovieCast(response.data["cast"]);
    });
    getMovieReviews(movieId).then((response) => {
      setMovieReviews(response.data);
    });
  }, []);
  console.log("params", params);

  return (
    <>
      {movie && (
        <>
          <BackDrop backDropPath={getImagePath(movie["backdrop_path"])} />
          <MovieGeneral
            movie={movie}
            movieCast={movieCast}
            movieReviews={movieReviews}
          />
        </>
      )}
      <PageLoading loading={loading} />
    </>
  );
};

export default Movie;
