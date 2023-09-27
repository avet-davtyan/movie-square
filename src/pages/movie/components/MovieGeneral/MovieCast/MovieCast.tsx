import { Stack, Typography } from "@mui/material";
import CastPerson from "./CastPerson";
import SimpleBar from "simplebar-react";
import { Scrollbars } from "react-custom-scrollbars";

const MovieCast = ({ movieCast }) => {
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
        Cast
      </Typography>

      <Stack
        sx={{
          width: "100%",
          height: "350px",
          overflow: "hidden",
        }}
      >
        <Scrollbars>
          <Stack direction="row" spacing={3} sx={{ marginLeft: "20px" }}>
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
