import { Divider, Stack } from "@mui/material";
import MovieDescription from "./MovieDescription";
import { Scrollbars } from "react-custom-scrollbars";
import MovieCast from "./MovieCast";
import MovieReviews from "../MovieReviews";

const MovieGeneral = ({ movie, movieCast, movieReviews }) => {
  console.log("movieCast", movieCast);
  return (
    <Stack
      sx={{
        position: "absolute",
        left: "50%",
        transform: "translate(-50%, 0%)",
        width: "70%",
        height: "calc(100% - 100px)",
        boxSizing: "border-box",
        overflow: "hidden",
        top: "100px",
      }}
    >
      <Scrollbars autoHide>
        <MovieDescription movie={movie} />
        <MovieCast movieCast={movieCast} />
        <MovieReviews movieReviews={movieReviews} />
      </Scrollbars>
    </Stack>
  );
};

export default MovieGeneral;
