import BackDrop from "./components/BackDrop";
import HomeGeneral from "./components/HomeGeneral";
import { useEffect, useState } from "react";
import { getPlayingMovies } from "../../helpers/apiTmdb/apiTmdb.tsx";
import { Simulate } from "react-dom/test-utils";
import load = Simulate.load;
import PageLoading from "../../components/PageLoading";

const Home = () => {
  const [playingMovies, setPlayingMovies] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getPlayingMovies()
      .then((response) => {
        setPlayingMovies(response.data.results);
        console.log(response.data.results);
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <>
      {playingMovies && (
        <>
          <BackDrop />
          <HomeGeneral playingMovies={playingMovies} />
        </>
      )}
      <PageLoading loading={loading} />
    </>
  );
};

export default Home;
