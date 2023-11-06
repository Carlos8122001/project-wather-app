import { Avatar, Box, CardMedia, Typography } from "@mui/material";
import React from "react";

export default function Footer() {
  return (
    <>
      <a href="https://www.weatherapi.com/" title="Free Weather API">
        <img
          src="//cdn.weatherapi.com/v4/images/weatherapi_logo.png"
          alt="Weather data by WeatherAPI.com"
          border="0"
        />
      </a>
    </>
  );
}
