import React, { useState } from "react";
import WeatherData from "../utils/mocks/WeatherData";
import Weather from "../components/Weather";
import { Box, Card, IconButton } from "@mui/material";
import { styled } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";
import RoomIcon from "@mui/icons-material/Room";

const CssTextField = styled(TextField)({
  "& label.Mui-focused": {
    color: "#A0AAB4",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "#B2BAC2",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#E0E3E7 ",
      borderRadius: 28,
      transition: "fieldset 0.5s",
    },
    "&:hover fieldset": {
      borderColor: "#B2BAC2",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#6F7E8C",
    },
  },
});

export default function Layout() {
  const [city, setCity] = useState("");
  return (
    <>
      <Card
        variant="elevation"
        elevation={10}
        sx={{
          width: 470,
          height: "auto",
          mx: "auto",
          mt: 10,
          display: "flex",
          flexDirection: "column",
          borderRadius: 8,
          alignItems: "center",
          py: 3,
        }}
      >
        <Box
         component={"form"}
         onSubmit={(event)=>{
          event.preventDefault()
          setCity("")
          console.log("enviado")
         }}
          sx={{
            display: "flex",
            alignItems: "center",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <CssTextField
            size="small"
            autoComplete="none"
            placeholder="Enter your city"
            value={city}
            onChange={(event)=>{
            setCity(event.target.value)
            }}
          />
          <IconButton type="submit">
            <SearchIcon fontSize="large" />
          </IconButton>
        </Box>
        <Weather />
      </Card>
    </>
  );
}
