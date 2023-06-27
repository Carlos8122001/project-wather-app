import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardMedia } from "@mui/material";

function CardClimate({ data }) {
  return (
    <>
      <Card
        sx={{
          maxWidth: 380,
          marginLeft: "auto",
          marginRight: "auto",
          marginTop: "20px",
          height: "auto",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        elevation={3}
      >
        <Box
          component="img"
          alt={data.conditionText}
          src={data.icon}
          sx={{ maxWidth: "300px" }}
        />
        <CardContent>
          <Typography variant="h4">{data.temperature} °C</Typography>
          <Typography variant="h5">{data.conditionText}</Typography>
          <br />
          <Typography variant="h4" sx={{ fontWeight: "bold" }}>
            {data.city}, {data.country}
          </Typography>
        </CardContent>
      </Card>
    </>
  );
}

export default CardClimate;
