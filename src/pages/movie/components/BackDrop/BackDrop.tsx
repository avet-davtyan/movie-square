import { Stack } from "@mui/material";

const BackDrop = ({ backDropPath }: { backDropPath: string }) => {
  return (
    <Stack
      sx={{
        position: "absolute",
        backgroundColor: "black",
        width: "100%",
        height: "100%",
        overflow: "hidden",
      }}
      justifyContent="center"
      alignItems="center"
    >
      <img src={backDropPath} style={{ width: "100%" }} />
      <Stack
        sx={{
          position: "absolute",
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0,0,0,0.5)",
          backdropFilter: "blur(24px)",
        }}
      ></Stack>
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
    </Stack>
  );
};

export default BackDrop;
