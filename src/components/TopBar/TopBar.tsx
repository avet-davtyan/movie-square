import { Stack } from "@mui/material";
import SearchField from "./SearchField";
import { useMediaQuery } from "react-responsive";
import { useContext } from "react";
import { ScreenContext } from "../../App.tsx";

const TopBar = () => {
  const isTabletOrMobile = useContext(ScreenContext);
  return (
    <Stack
      sx={{
        position: "absolute",
        width: "100%",
        height: "100px",
      }}
      alignItems="center"
      justifyContent="center"
    >
      <img
        src="../../../logo/logo.svg"
        width={isTabletOrMobile ? 70 : 100}
        style={{
          position: isTabletOrMobile ? "absolute" : "relative",
          left: isTabletOrMobile ? "50px" : 0,
        }}
      />
      <SearchField />
    </Stack>
  );
};

export default TopBar;
