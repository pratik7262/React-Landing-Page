import { Box, Typography } from "@mui/material";
import { btnStyle, highlighterStyle } from "../../styles/specificStyles";

export const Btn = ({ text,sx}) => {
  return (
    <Typography
      variant="h6"
      component="a"
      textAlign="center"
      fontWeight={700}
      sx={{...btnStyle,...sx}}
    >
      {text}
    </Typography>
  );
};

export const Highlighter = ({ position }) => {
  return (
    <Box
      position={position}
      component="span"
      sx={{ ...highlighterStyle, zIndex: "1" }}
    />
  );
};
