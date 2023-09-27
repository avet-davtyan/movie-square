import { Stack } from "@mui/material";
import MovieDescription from "./MovieDescription";
import { Scrollbars } from "react-custom-scrollbars";
import MovieCast from "./MovieCast";

const MovieGeneral = ({ movie, movieCast }) => {
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
      </Scrollbars>
    </Stack>
  );
};

export default MovieGeneral;
