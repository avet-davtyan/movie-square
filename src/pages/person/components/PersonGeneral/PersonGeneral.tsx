import { Scrollbars } from "react-custom-scrollbars";
import { Stack } from "@mui/material";
import PersonInfo from "./PersonInfo";

const PersonGeneral = ({ person, movieCredits }) => {
  return (
    <Stack
      sx={{
        width: "70%",
        height: "calc(100% - 100px)",
        top: "100px",
        position: "absolute",
        left: "50%",
        transform: "translate(-50%, 0%)",
      }}
    >
      <Scrollbars autoHide>
        <PersonInfo person={person} movieCredits={movieCredits} />
      </Scrollbars>
    </Stack>
  );
};

export default PersonGeneral;
