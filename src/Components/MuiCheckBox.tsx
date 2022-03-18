import { Box, FormControlLabel, Checkbox } from "@mui/material";
import { ChangeEvent, useState } from "react";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";

const MuiCheckBox = () => {
  const [acceptTnC, setAcceptTnc] = useState(false);
  console.log({ acceptTnC });
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAcceptTnc(event.target.checked);
  };
  return (
    <Box>
      <Box>
        <FormControlLabel
          label="I Accept terms and condition "
          control={<Checkbox checked={acceptTnC} onChange={handleChange} />}
        />
      </Box>
    </Box>
  );
};

export default MuiCheckBox;
