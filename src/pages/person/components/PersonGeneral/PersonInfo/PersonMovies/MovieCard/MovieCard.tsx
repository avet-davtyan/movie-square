import { Stack, Typography } from "@mui/material";
import { getImagePath } from "../../../../../../../helpers/apiTmdb/apiTmdb.tsx";
import { useNavigate } from "react-router-dom";

const MovieCard = ({ movie }) => {
  const navigate = useNavigate();
  return (
    <Stack
      sx={{ cursor: "pointer" }}
      spacing={1}
      alignItems="center"
      onClick={() => navigate(`/movie/${movie["id"]}`)}
    >
      <Stack
        sx={{
          width: "130px",
          height: "195px",
          borderRadius: "10px",
          overflow: "hidden",
          backgroundColor: "gray",
        }}
      >
        {movie["poster_path"] && (
          <img src={getImagePath(movie["poster_path"])} />
        )}
      </Stack>
      <Typography sx={{ fontSize: "10px", color: "white" }}>
        {movie["title"]}
      </Typography>
    </Stack>
  );
};

export default MovieCard;
