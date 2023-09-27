import "./SearchField.module.scss";
import "./SeachField.css";
import { useContext } from "react";
import { ScreenContext } from "../../../../../App.tsx";

const bigScreenStyle = {
  position: "absolute",
  right: "10px",
};

const TabletScreenStyle = {
  height: "30px",
};

const SearchField = () => {
  const isTabletOrMobile = useContext(ScreenContext);

  return (
    <input
      className="searchField"
      style={
        isTabletOrMobile ? (TabletScreenStyle as any) : (bigScreenStyle as any)
      }
    />
  );
};

export default SearchField;
