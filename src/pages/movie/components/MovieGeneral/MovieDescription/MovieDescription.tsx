import { Divider, Stack, Typography } from "@mui/material";
import { getImagePath } from "../../../../../helpers/apiTmdb/apiTmdb.tsx";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import { useMediaQuery } from "react-responsive";
import MovieImages from "../../MovieImages";

const formatDate = (inputDate): string => {
  const date = new Date(inputDate);

  const year = date.getFullYear();
  const month = date.getMonth() + 1; // Months are 0-based, so add 1
  const day = date.getDate();

  return `${year}/${month}/${day}`;
};

const MovieDescription = ({ movie }) => {
  console.log(movie);

  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });

  const voteAverage: number = Math.floor(movie["vote_average"] * 10);
  const genres = movie["genres"];
  const releaseDate = movie["release_date"];

  return (
    <Stack
      sx={{
        position: "relative",
        width: "100%",
        mb: 5,
      }}
      spacing={10}
      direction={isTabletOrMobile ? "column" : "row"}
      alignItems={"center"}
      justifyContent="center"
    >
      <img
        src={getImagePath(movie["poster_path"])}
        style={{
          width: isTabletOrMobile ? "200px" : "300px",
          borderRadius: "20px",
        }}
      />

      <Stack style={{}}>
        <Stack>
          <Typography
            sx={{
              fontWeight: "bold",
              color: "white",
              fontSize: isTabletOrMobile ? "30px" : "50px",
            }}
          >
            {movie["original_title"]}
          </Typography>
        </Stack>
        <Stack
          direction="row"
          spacing={1}
          sx={{ mb: 7, height: "20px" }}
          alignItems="center"
        >
          {genres.map((genre) => (
            <Typography
              sx={{ color: "white", opacity: "60%" }}
              key={genre["id"]}
            >
              {genre["name"]}
            </Typography>
          ))}

          <Divider orientation="vertical" sx={{ borderColor: "white" }} />

          <Typography sx={{ color: "white" }}>
            {formatDate(releaseDate)}
          </Typography>
        </Stack>
        <Stack direction="row" spacing={2} sx={{ mb: 3 }} alignItems="center">
          <Stack
            sx={{
              height: "60px",
              width: "60px",
              position: "relative",
            }}
          >
            <CircularProgressbar
              value={voteAverage}
              strokeWidth={10}
              styles={buildStyles({
                pathColor: "#14BB39",
                pathTransitionDuration: 0.5,
              })}
            />
            <Typography
              style={{
                position: "absolute",
                left: "50%",
                top: "50%",
                transform: "translate(-50%,-50%)",
                margin: "0",
                color: "white",
                fontSize: "12px",
              }}
            >{`${voteAverage}%`}</Typography>
          </Stack>
          <Typography sx={{ color: "white", opacity: "50%" }}>
            User Score
          </Typography>
        </Stack>
        <Typography sx={{ color: "white", fontSize: "25px", mb: 2 }}>
          Overview
        </Typography>
        <Stack sx={{ width: isTabletOrMobile ? "100%" : "70%" }}>
          <Typography sx={{ color: "white", opacity: "70%" }}>
            {movie["overview"]}
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default MovieDescription;
