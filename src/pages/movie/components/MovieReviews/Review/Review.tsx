import { Stack, Typography } from "@mui/material";
import ReactReadMoreReadLess from "react-read-more-read-less";
import ReadMoreReact from "read-more-react";

const Review = ({ review }) => {
  return (
    <Stack>
      <Stack direction="row" alignItems="center" spacing={1}>
        <Stack
          sx={{
            width: "40px",
            height: "40px",
            backgroundColor: "red",
            borderRadius: "100%",
          }}
        ></Stack>
        <Typography>{review["author"]}</Typography>
      </Stack>
      <ReactReadMoreReadLess
        charLimit={200}
        readMoreText={"Read more"}
        readLessText={"Read less"}
      >
        {review["content"]}
      </ReactReadMoreReadLess>
    </Stack>
  );
};

export default Review;
