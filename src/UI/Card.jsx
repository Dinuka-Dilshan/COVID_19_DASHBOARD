
import { Typography } from "@mui/material";
import Card from "@mui/material/Card";
import React from "react";

export const MyCard = ({ item }) => {
  return (
    <React.Fragment>

   
      <Card sx={{ margin: "1rem",'borderColor': 'secondary.main',border:'1' }}>
        <Typography
          pt={2}
          color={item.color}
          sx={{
            fontSize: "3rem",
            fontWeight: "bold",
            textAlign: "center",
            marginBottom: "1rem",
          }}
        >
          {item.count}
        </Typography>
        <Typography
          color={item.color}
          sx={{ fontSize: "1.8rem", textAlign: "center" }}
        >
          {item.title}
        </Typography>
        <div
          style={{ width: "100%", height: "3.5rem", backgroundColor: item.color }}
        ></div>
      </Card>
    </React.Fragment>
  );
};
