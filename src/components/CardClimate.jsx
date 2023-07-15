import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardMedia } from "@mui/material";

function CardClimate({ data }) {
  return (
    <>
    <Box sx={{width:"100%",height:"60%",display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"}}>
      <Box
        component="img"
        alt={data.conditionText}
        src={data.icon}
        minWidth={"250px"}
        margin={0}
      />

      <Typography variant="h2" fontSize={"50px"} textAlign={"center"}>{data.temperature} °C</Typography>
      <Typography variant="h5" textAlign={"center"}>{data.conditionText}</Typography>
      <Typography variant="h5"  textAlign={"center"}>{data.localtime}</Typography>
      <Typography variant="h4" textAlign={"center"} sx={{ fontWeight: "bold" }}>
        {data.city}, {data.country}
      </Typography>
      </Box>
    </>
  );
}

export default CardClimate;
