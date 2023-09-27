import { Stack } from "@mui/material";
import SearchField from "../SearchField";

const TopBar = () => {
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
      <img src="../../../../../logo/logo.svg" width={100} />
      <SearchField />
    </Stack>
  );
};

export default TopBar;
