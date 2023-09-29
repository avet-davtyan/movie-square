import { Scrollbars } from "react-custom-scrollbars";
import { Stack } from "@mui/material";
import Discover from "./Discover";

const HomeGeneral = ({ playingMovies }) => {
  return (
    <Stack
      sx={{
        width: "70%",
        height: "calc(100% - 100px)",
        top: "100px",
        position: "absolute",
        left: "50%",
        transform: "translate(-50%, 0%)",
      }}
    >
      <Scrollbars autoHide>
        <Discover playingMovies={playingMovies} />
      </Scrollbars>
    </Stack>
  );
};

export default HomeGeneral;
