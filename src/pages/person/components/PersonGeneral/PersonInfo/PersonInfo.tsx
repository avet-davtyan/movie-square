import { Divider, Stack, Typography } from "@mui/material";
import { getImagePath } from "../../../../../helpers/apiTmdb/apiTmdb.tsx";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import genderMap from "../../../../../helpers/genderMap.tsx";
import { useState } from "react";
import { text } from "stream/consumers";
import PersonMovies from "./PersonMovies";

const showMore = (text, max) => {
  const [more, setMore] = useState(false);
  return (
    <>
      {text.length > max ? (
        <Typography sx={{ color: "white", opacity: "70%" }}>
          {more ? text : text.slice(0, max) + "..."}
          <Typography
            sx={{ fontWeight: "bold", cursor: "pointer" }}
            onClick={() => setMore(!more)}
          >
            {more ? "Less" : "More"}
          </Typography>
        </Typography>
      ) : (
        <Typography sx={{ color: "white", opacity: "70%" }}>{text}</Typography>
      )}
    </>
  );
};

const PersonInfo = ({ person, movieCredits }) => {
  return (
    <Stack
      sx={{
        position: "relative",
        width: "100%",
        mb: 5,
      }}
      direction={"row"}
      spacing={10}
    >
      <Stack spacing={4}>
        <img
          src={getImagePath(person["profile_path"])}
          style={{
            width: "300px",
            borderRadius: "20px",
          }}
        />

        <Divider
          orientation="horizontal"
          sx={{
            opacity: "60%",
            border: "1.3px solid white",
          }}
        />
        <Stack style={{ marginLeft: "10px" }}>
          <Typography
            sx={{
              fontWeight: "bold",
              color: "white",
              fontSize: "20px",
              mb: 3,
            }}
          >
            Personal Info
          </Typography>
          <Typography
            sx={{
              fontWeight: "light",
              color: "white",
              fontSize: "14px",
            }}
          >
            Known for
          </Typography>
          <Typography
            sx={{
              fontWeight: "bold",
              color: "white",
              fontSize: "14px",
              mb: 3,
            }}
          >
            {person["known_for_department"]}
          </Typography>

          <Typography
            sx={{
              fontWeight: "light",
              color: "white",
              fontSize: "14px",
            }}
          >
            Gender
          </Typography>
          <Typography
            sx={{
              fontWeight: "bold",
              color: "white",
              fontSize: "14px",
              mb: 3,
            }}
          >
            {genderMap[person["gender"]]}
          </Typography>
          <Typography
            sx={{
              fontWeight: "light",
              color: "white",
              fontSize: "14px",
            }}
          >
            Birthday
          </Typography>
          <Typography
            sx={{
              fontWeight: "bold",
              color: "white",
              fontSize: "14px",
              mb: 3,
            }}
          >
            {person["birthday"]}
          </Typography>

          <Typography
            sx={{
              fontWeight: "light",
              color: "white",
              fontSize: "14px",
            }}
          >
            Place of Birth
          </Typography>
          <Typography
            sx={{
              fontWeight: "bold",
              color: "white",
              fontSize: "14px",
              mb: 3,
            }}
          >
            {person["place_of_birth"]}
          </Typography>
        </Stack>
      </Stack>
      <Stack spacing={2}>
        <Stack sx={{ minHeight: "400px" }}>
          <Typography
            sx={{
              fontWeight: "bold",
              color: "white",
              fontSize: "80px",
              mb: 7,
            }}
          >
            {person["name"]}
          </Typography>

          <Typography sx={{ color: "white", fontSize: "25px", mb: 2 }}>
            Biography
          </Typography>
          <Stack sx={{ width: "100%" }}>
            {showMore(person["biography"], 500)}
          </Stack>
        </Stack>
        <PersonMovies personMovies={movieCredits} />
      </Stack>
    </Stack>
  );
};

export default PersonInfo;
