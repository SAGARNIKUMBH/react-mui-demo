import {
  Stack,
  Button,
  IconButton,
  ButtonGroup,
  ToggleButtonGroup,
  ToggleButton,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import {
  FormatBold,
  FormatItalic,
  FormatUnderlined,
} from "@mui/icons-material";
import { useState } from "react";

const MuiButton = () => {
  const [formats, setFormats] = useState<string | null>(null);
  console.log({ formats });
  const handleFormatChange = (
    _event: React.MouseEvent<HTMLElement>,
    updatedFormats: string | null
  ) => {
    setFormats(updatedFormats);
  };
  return (
    <Stack spacing={4}>
      <Stack
        spacing={2}
        direction="row"
        borderRadius="10px"
        justifyContent="center"
      >
        <Button variant="text">Text</Button>
        <Button variant="contained">contained</Button>
        <Button variant="outlined">outlined</Button>
      </Stack>
      <Stack
        spacing={2}
        direction="row"
        borderRadius="10px"
        justifyContent="center"
      >
        <Button variant="contained" color="primary">
          Primary
        </Button>
        <Button variant="contained" color="secondary">
          Secondary
        </Button>
        <Button variant="contained" color="error">
          Error
        </Button>
        <Button variant="contained" color="warning">
          Warning
        </Button>
        <Button variant="contained" color="info">
          Info
        </Button>
        <Button variant="contained" color="success">
          Success
        </Button>
      </Stack>
      <Stack
        spacing={4}
        direction="row"
        display="flex"
        justifyContent={"flex-end"}
      >
        <Button
          variant="contained"
          startIcon={<SendIcon />}
          disableFocusRipple
          onClick={() => alert("Clicked")}
        >
          Send
        </Button>
      </Stack>
      <IconButton aria-label="send" color="success" size="medium">
        <SendIcon />
      </IconButton>
      <Stack direction={"row"} spacing={2}>
        <ButtonGroup
          variant="contained"
          orientation="vertical"
          size="small"
          color="info"
          aria-label="alignment button group"
        >
          <Button onClick={() => alert("Left Key Button")}>Left</Button>
          <Button>Center</Button>
          <Button>Right</Button>
        </ButtonGroup>
      </Stack>
      <Stack direction="row">
        <ToggleButtonGroup
          aria-label="text formatting"
          value={formats}
          onChange={handleFormatChange}
          size="small"
          color="success"
          orientation="vertical"
          exclusive
        >
          <ToggleButton value="bold" aria-label="bold">
            <FormatBold />
          </ToggleButton>
          <ToggleButton value="italic" aria-label="italic">
            <FormatItalic />
          </ToggleButton>
          <ToggleButton value="underlined" aria-label="underlined">
            <FormatUnderlined />
          </ToggleButton>
        </ToggleButtonGroup>
      </Stack>
    </Stack>
  );
};

export default MuiButton;
