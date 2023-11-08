import React, { useEffect, useState } from "react";
import WeatherData from "../utils/mocks/WeatherData";
import AirIcon from "@mui/icons-material/Air";
import WaterIcon from "@mui/icons-material/Water";
import ThermostatIcon from "@mui/icons-material/Thermostat";
import { Avatar, Box, Typography } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import { CardMedia } from "@mui/material";

export default function WeatherInfo({ data }) {
  return (
    <>
      <Box>
        <Typography
          variant="h6"
          fontSize={24}
          fontWeight={"light"}
          fontStyle={"italic"}
          mt={5}
          textAlign={"center"}
          color={"grey"}
        >
          {data.current.last_updated}
        </Typography>
        <Typography
          fontSize={48}
          variant="h3"
          fontWeight={"bold"}
          fontStyle={"italic"}
          textAlign={"center"}
          gutterBottom
        >
          {data.location.name}
        </Typography>
        <Box
          sx={{
            mt: 0,
            mb: 3,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <CardMedia
            sx={{ width: 64, height: 64, objectFit: "cover" }}
            image={data.current.condition.icon}
          />

          <Typography
            fontSize={100}
            variant="h1"
            fontWeight={"bold"}
            fontStyle={"italic"}
            textAlign={"center"}
          >
            {data.current.temp_c} º
          </Typography>
          <Typography
            variant="h6"
            fontSize={22}
            fontWeight={"bold"}
            fontStyle={"italic"}
            textAlign={"center"}
          >
            {data.current.condition.text}
          </Typography>
        </Box>

        <List
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <ListItem>
            <ListItemAvatar sx={{ display: { xs: "none", sm: "block" } }}>
              <Avatar>
                <AirIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary="Viento"
              secondary={`${data.current.wind_kph}KM`}
            />
          </ListItem>
          <ListItem>
            <ListItemAvatar sx={{ display: { xs: "none", sm: "block" } }}>
              <Avatar>
                <WaterIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary="Humedad"
              secondary={`${data.current.humidity}%`}
            />
          </ListItem>
          <ListItem>
            <ListItemAvatar sx={{ display: { xs: "none", sm: "block" } }}>
              <Avatar>
                <ThermostatIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary="Precipitación"
              secondary={data.current.precip_in}
            />
          </ListItem>
        </List>
      </Box>
    </>
  );
}
