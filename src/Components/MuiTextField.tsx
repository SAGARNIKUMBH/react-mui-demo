import { Password } from "@mui/icons-material";
import { Stack, TextField, InputAdornment } from "@mui/material";
import { useState } from "react";

const MuiTextField = () => {
  const [value, setValue] = useState("");
  return (
    <Stack spacing={4}>
      <Stack direction="row" spacing={2}>
        <TextField label="name" variant="outlined" />
        <TextField label="name" variant="filled" />
        <TextField label="name" variant="standard" />
      </Stack>
      <Stack direction="row" spacing={2}>
        <TextField label="Small Secondary" size="small" color="secondary" />
      </Stack>
      <Stack direction="row" spacing={2}>
        <TextField
          label="Form Input"
          size="small"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          required
          error={!value}
          helperText={!value ? "Required" : "Don't share "}
        />
      </Stack>
      <Stack direction="row" spacing={2}>
        <TextField
          label="Password"
          type="password"
          //   helperText="Don't share Anyone"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          required
          error={!value}
          helperText={!value ? "Required" : "Don't share "}
        />
        <TextField label="Read Only" InputProps={{ readOnly: true }} />
      </Stack>
      <Stack direction="row" spacing={2}>
        <TextField
          label="Amount"
          InputProps={{
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
          }}
        />
        <TextField
          label="weight"
          InputProps={{
            endAdornment: <InputAdornment position="end">Kg</InputAdornment>,
          }}
        />
      </Stack>
    </Stack>
  );
};

export default MuiTextField;
