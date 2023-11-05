import React, { useEffect, useState } from "react";
import WeatherData from "../utils/mocks/WeatherData";
import WeatherIcon from "../utils/mocks/WeatherIcon";
import AirIcon from "@mui/icons-material/Air";
import WaterIcon from "@mui/icons-material/Water";
import ThermostatIcon from "@mui/icons-material/Thermostat";
import { Avatar, Box, Card, Container, Typography } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import { CardMedia } from "@mui/material";

export default function Weather({ data }) {

  return (
    <>
      <Typography
        variant="h6"
        fontSize={16}
        fontWeight={"light"}
        fontStyle={"italic"}
        mt={5}
        textAlign={"center"}
        color={"grey"}
      >
        {WeatherData.current.last_updated}
      </Typography>
      <Typography
        fontSize={48}
        variant="h3"
        fontWeight={"bold"}
        fontStyle={"italic"}
        textAlign={"center"}
        gutterBottom
      >
        {WeatherData.location.name}
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
          sx={{ width: 100, height: 100, objectFit: "cover" }}
          image={WeatherData.current.condition.icon}
        />

        <Typography
          fontSize={100}
          variant="h1"
          fontWeight={"bold"}
          fontStyle={"italic"}
          textAlign={"center"}
        >
          {WeatherData.current.temp_f}
        </Typography>
        <Typography
          variant="h6"
          fontSize={22}
          fontWeight={"bold"}
          fontStyle={"italic"}
          textAlign={"center"}
        >
          {WeatherData.current.condition.text}
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
          <ListItemAvatar>
            <Avatar>
              <AirIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            primary="Wind"
            secondary={`${WeatherData.current.wind_kph}KM`}
          />
        </ListItem>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <WaterIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            primary="Humidity"
            secondary={`${WeatherData.current.humidity}%`}
          />
        </ListItem>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <ThermostatIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            primary="Precipitation"
            secondary={WeatherData.current.precip_in}
          />
        </ListItem>
      </List>
    </>
  );
}
