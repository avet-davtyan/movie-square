import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { Stack } from "@mui/material";

const MovieImages = () => {
  return (
    <Stack sx={{ position: "absolute", width: "600px", right: "0" }}>
      <Carousel>
        <div>
          <img src="https://www.themoviedb.org/t/p/original/hZkgoQYus5vegHoetLkCJzb17zJ.jpg" />
        </div>
        <div>
          <img src="https://www.themoviedb.org/t/p/original/hZkgoQYus5vegHoetLkCJzb17zJ.jpg" />
        </div>
        <div>
          <img src="https://www.themoviedb.org/t/p/original/hZkgoQYus5vegHoetLkCJzb17zJ.jpg" />
        </div>
      </Carousel>
    </Stack>
  );
};

export default MovieImages;
