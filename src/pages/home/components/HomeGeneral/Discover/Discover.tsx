import { Stack, Typography } from "@mui/material";
import { getImagePath } from "../../../../../helpers/apiTmdb/apiTmdb.tsx";
import { useContext, useEffect, useRef } from "react";
import { ScreenContext } from "../../../../../App.tsx";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./Carousel.css";

const Discover = ({ playingMovies }) => {
  const isTabletOrMobile = useContext(ScreenContext);

  const [show, setShow] = useState(true);
  const [playingMovieIndex, setPlayingMovieIndex] = useState(0);

  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setMovie();
    }, 4000);

    return () => {
      clearInterval(interval); // Clear the interval on component unmount
    };
  }, [playingMovieIndex]);
  const setMovie = async () => {
    await hideMovie(2000);

    setPlayingMovieIndex((prevCount) => {
      return prevCount > 18 ? 0 : prevCount + 1;
    });
    await showMovie(2000);
  };

  const hideMovie = async (ms) => {
    setShow(false);
    await new Promise((r) => setTimeout(r, ms));
  };

  const showMovie = async (ms) => {
    setShow(true);
  };

  return (
    <Stack
      sx={{
        height: isTabletOrMobile ? "250px" : "480px",
        position: "relative",
        backgroundColor: "black",
        overflow: "hidden",
      }}
      justifyContent={"center"}
    >
      <>
        <Stack
          style={{
            position: "absolute",
            width: "100%",
            opacity: show ? "100%" : "0%",
            top: show ? "50%" : "200%",
            transition: "all 2s",
            transitionTimingFunction: "ease-out",
            transform: "translate(0%, -50%)",
          }}
        >
          <img
            loading="lazy"
            src={getImagePath(
              playingMovies[playingMovieIndex]["backdrop_path"],
            )}
            onClick={() => setMovie()}
          />
        </Stack>
        <Stack
          sx={{
            position: "absolute",
            width: "100%",
            height: "100%",
            opacity: "70%",
            background:
              "linear-gradient(125deg, rgba(21,21,21,1) 0%, rgba(15,26,42,1) 100%)",
          }}
        ></Stack>
        <Stack
          sx={{
            position: "absolute",
            top: show ? "0px" : "300px",
            opacity: show ? "100%" : "0%",
            transition: "all 2s",
            m: 10,
          }}
          direction={"row"}
          alignItems="center"
          spacing={4}
        >
          <Stack
            sx={{
              width: "200px",
              borderRadius: "13px",
              overflow: "hidden",
              cursor: "pointer",
            }}
            onClick={() => {
              navigate(`/movie/${playingMovies[playingMovieIndex]["id"]}`);
            }}
          >
            <img
              src={getImagePath(
                playingMovies[playingMovieIndex]["poster_path"],
              )}
            />
          </Stack>
          <Typography
            sx={{
              color: "white",
              fontSize: "50px",
              fontWeight: "bold",
              cursor: "pointer",
            }}
            onClick={() => {
              navigate(`/movie/${playingMovies[playingMovieIndex]["id"]}`);
            }}
          >
            {playingMovies[playingMovieIndex]["title"]}
          </Typography>
        </Stack>
      </>
    </Stack>
  );
};

export default Discover;
