import axiosTmdb from "./axiosTmdb";
import { useEffect } from "react";
import Movie from "./pages/movie";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path={"/"} element={<h1>main</h1>} />
          <Route path={"/movie"} element={<Movie />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
