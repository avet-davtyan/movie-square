import { Stack, Typography } from "@mui/material";
import { getImagePath } from "../../../../../../helpers/apiTmdb/apiTmdb.tsx";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CastPerson = ({ castPerson }) => {
  const [over, setOver] = useState(false);
  const navigate = useNavigate();

  return (
    <Stack
      alignItems="center"
      sx={{ cursor: "pointer" }}
      onClick={() => navigate(`/person/${castPerson["id"]}`)}
    >
      {castPerson["profile_path"] && (
        <img
          src={getImagePath(castPerson["profile_path"])}
          style={{
            borderRadius: "10px",
            marginBottom: "10px",
            width: "130px",
            transition: " all 0.3s ",
          }}
          onMouseEnter={() => {
            setOver(true);
          }}
          onMouseLeave={() => {
            setOver(false);
          }}
        />
      )}
      <Typography
        textAlign="center"
        sx={{ color: "white", opacity: "70%", mb: 1 }}
      >
        {castPerson["name"]}
      </Typography>
      <Typography
        textAlign="center"
        sx={{ color: "white", fontSize: "10px", opacity: "60%" }}
      >
        {castPerson["character"]}
      </Typography>
    </Stack>
  );
};

export default CastPerson;
