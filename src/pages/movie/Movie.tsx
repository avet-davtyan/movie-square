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
      {loading && (
        <Stack
          sx={{
            position: "absolute",
            width: "100%",
            height: "100%",
            backgroundColor: "black",
          }}
          justifyContent="center"
          alignItems="center"
        >
          <SquareLoader
            color={"#ffffff"}
            loading={true}
            cssOverride={{
              display: "block",
              margin: "0 auto",
              backgroundColor: "#7CCF13",
            }}
            size={150}
          />
        </Stack>
      )}
    </>
  );
};

export default Movie;
