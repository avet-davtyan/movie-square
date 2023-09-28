import { Stack } from "@mui/material";
import { SquareLoader } from "react-spinners";

const PageLoading = ({ loading }) => {
  return (
    <>
      {loading && (
        <Stack
          sx={{
            position: "absolute",
            width: "100%",
            height: "100%",
            backgroundColor: "black",
          }}
          justifyContent="center"
          alignItems="center"
        >
          <SquareLoader
            color={"#ffffff"}
            loading={true}
            cssOverride={{
              display: "block",
              margin: "0 auto",
              backgroundColor: "#7CCF13",
            }}
            size={150}
          />
        </Stack>
      )}
    </>
  );
};

export default PageLoading;
