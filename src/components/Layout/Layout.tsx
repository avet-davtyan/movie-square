import TopBar from "../TopBar";
import { Stack } from "@mui/material";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <Stack
        sx={{
          position: "absolute",
          width: "100%",
          height: "calc(100%)",
          boxSizing: "border-box",
          overflow: "hidden",
        }}
      >
        <Outlet />
      </Stack>
      <TopBar />
    </>
  );
};

export default Layout;
