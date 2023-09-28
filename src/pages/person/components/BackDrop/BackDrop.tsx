import { Stack } from "@mui/material";

const BackDrop = () => {
  return (
    <Stack
      sx={{
        position: "absolute",
        background:
          "linear-gradient(125deg, rgba(37,39,43,1) 0%, rgba(0,4,9,1) 100%)",
        width: "100%",
        height: "100%",
        overflow: "hidden",
      }}
    ></Stack>
  );
};

export default BackDrop;
