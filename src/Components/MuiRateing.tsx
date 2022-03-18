import { Stack } from "@mui/material";
import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Typography from "@mui/material/Typography";

const StyledRating = styled(Rating)({
  "& .MuiRating-iconFilled": {
    color: "#ff6d75",
  },
  "& .MuiRating-iconHover": {
    color: "#ff3d47",
  },
});
const MuiRateing = () => {
  const [value, setValue] = useState<number | null>(null);
  console.log({ value });
  const handleChange = (
    event: React.ChangeEvent<{}>,
    newValue: number | null
  ) => {
    setValue(newValue);
  };
  return (
    <Stack spacing={4}>
      <Rating
        value={value}
        onChange={handleChange}
        precision={0.5}
        size="large"
      />
      <Box
        sx={{
          "&& > legend": { mt: 3 },
        }}
      >
        <Typography component="legend">Custom icon and color</Typography>
        <StyledRating
          name="customized-color"
          defaultValue={0}
          getLabelText={(value: number) =>
            `${value} Heart${value !== 1 ? "s" : ""}`
          }
          precision={0.5}
          icon={<FavoriteIcon fontSize="inherit" />}
          emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
        />
        <Typography component="legend">10 stars</Typography>
        <Rating name="customized-10" defaultValue={0} max={10} />
      </Box>
    </Stack>
  );
};

export default MuiRateing;
