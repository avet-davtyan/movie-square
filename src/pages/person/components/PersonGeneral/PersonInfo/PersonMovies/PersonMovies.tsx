import { Stack, Typography } from "@mui/material";
import { Scrollbars } from "react-custom-scrollbars";
import MovieCard from "./MovieCard";

const PersonMovies = ({ personMovies }) => {
  const castMovies = personMovies ? personMovies["cast"] : null;
  return (
    <Stack
      sx={{
        position: "relative",
        width: "100%",
        backgroundColor: "rgba(0,0,0,0.3)",
        borderRadius: "20px",
      }}
    >
      <Typography sx={{ color: "white", fontSize: "30px", margin: "20px" }}>
        Movies
      </Typography>

      <Stack
        sx={{
          width: "100%",
          height: "260px",
          overflow: "hidden",
        }}
      >
        <Scrollbars>
          <Stack direction="row" spacing={3} sx={{ marginLeft: "20px" }}>
            {castMovies &&
              castMovies.map((movie) => (
                <MovieCard movie={movie} key={movie["id"]} />
              ))}
          </Stack>
        </Scrollbars>
      </Stack>
    </Stack>
  );
};

export default PersonMovies;
