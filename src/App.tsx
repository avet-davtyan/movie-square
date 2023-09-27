import Movie from "./pages/movie";
import { createContext } from "react";
import { useMediaQuery } from "react-responsive";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

export const ScreenContext = createContext(null);

function App() {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });

  return (
    <>
      <ScreenContext.Provider value={isTabletOrMobile}>
        <Router>
          <Routes>
            <Route path={"/"} element={<h1>main</h1>} />
            <Route path={"/movie/:id"} element={<Movie />} />
          </Routes>
        </Router>
      </ScreenContext.Provider>
    </>
  );
}

export default App;
