import { Stack, Link } from "@mui/material";

const MuiLink = () => {
  return (
    <Stack spacing={4} direction="row" m={4}>
      <Link
        component="button"
        variant="body2"
        onClick={() => {
          console.info("I'm a button.");
        }}
      >
        Button Link
      </Link>
    </Stack>
  );
};

export default MuiLink;
