import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import Flag from "./Flag";

const Header = (props) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        padding: "2rem",
        color: "#007FFF",
      }}
    >
      <Flag url={props.url} />
      <Typography sx={{ fontWeight: "bold", fontSize: "1.4rem" }}>
        {props.children}
      </Typography>
    </Box>
  );
};

export default Header;
