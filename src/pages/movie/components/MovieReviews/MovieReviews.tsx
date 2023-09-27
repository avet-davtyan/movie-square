import { Stack } from "@mui/material";
import Review from "./Review";

const MovieReviews = ({ movieReviews }) => {
  const reviews = movieReviews ? movieReviews["results"] : null;

  return (
    <Stack sx={{ width: "70%", backgroundColor: "gray", mb: 2 }} spacing={3}>
      {reviews &&
        reviews.map((review) => <Review review={review} key={review["id"]} />)}
    </Stack>
  );
};

export default MovieReviews;
