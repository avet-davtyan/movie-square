import { useSearchParams } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  getMovieById,
  getImagePath,
  getMovieImages,
  getMovieCast,
  getMovieReviews,
} from "../../helpers/apiTmdb/apiTmdb.tsx";
import BackDrop from "./components/BackDrop";
import TopBar from "./components/TopBar";
import MovieGeneral from "./components/MovieGeneral";

const Movie = () => {
  const params = useParams();
  const [movieId, setMovieId] = useState(parseInt(params["id"] || "1", 10));

  const [movie, setMovie] = useState(null);
  const [movieCast, setMovieCast] = useState(null);
  const [movieReviews, setMovieReviews] = useState(null);

  useEffect(() => {
    getMovieById(movieId).then((response) => {
      setMovie(response.data);
      console.log(response.data);
    });
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
          <TopBar />
          <MovieGeneral
            movie={movie}
            movieCast={movieCast}
            movieReviews={movieReviews}
          />
        </>
      )}
    </>
  );
};

export default Movie;
