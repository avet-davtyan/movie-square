import Movie from "./pages/movie";
import { createContext } from "react";
import { useMediaQuery } from "react-responsive";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Layout from "./components/Layout";
import Person from "./pages/person";
import Home from "./pages/home";

export const ScreenContext = createContext(null);

function App() {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });

  return (
    <>
      <ScreenContext.Provider value={isTabletOrMobile}>
        <Router>
          <Routes>
            <Route path={"/"} element={<Layout />}>
              <Route index element={<Home />} />
              <Route path={"/movie/:id"} element={<Movie />} />
              <Route path={"/person/:id"} element={<Person />} />
            </Route>
          </Routes>
        </Router>
      </ScreenContext.Provider>
    </>
  );
}

export default App;
