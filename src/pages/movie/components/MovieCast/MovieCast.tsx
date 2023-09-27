import { Stack, Typography } from "@mui/material";
import CastPerson from "../CastPerson";
import SimpleBar from "simplebar-react";
import { Scrollbars } from "react-custom-scrollbars";

const styles = {
  maxWidth: 2000,
  width: "100%",
  maxHeight: 200,
  height: "100%",
};

const MovieCast = ({ movieCast }) => {
  return (
    <Stack
      sx={{
        position: "relative",
        width: "100%",
      }}
      spacing={2}
    >
      <Typography sx={{ color: "white", fontSize: "30px" }}>Cast</Typography>

      <Stack
        sx={{
          width: "100%",
          height: "350px",
          overflow: "hidden",
        }}
      >
        <Scrollbars>
          <Stack direction="row" spacing={3}>
            {movieCast &&
              movieCast.map((castPerson: any) => (
                <CastPerson
                  castPerson={castPerson}
                  key={castPerson["cast_id"]}
                />
              ))}
          </Stack>
        </Scrollbars>
      </Stack>
    </Stack>
  );
};

export default MovieCast;
