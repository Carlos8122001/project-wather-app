import React, { useState } from "react";
import WeatherInfo from "../components/WeatherInfo";
import {
  Box,
  Card,
  CardMedia,
  Container,
  IconButton,
  InputBase,
  Paper,
  Typography,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import FormHelperText from "@mui/material/FormHelperText";
import { getFetch } from "../services/Fetch";
import LoadingLinear from "../components/LoadingLinear";
import Footer from "../components/Footer";

const API_KEY = import.meta.env.VITE_API_KEY;
const API_URL = `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&lang=es&q=;`;

export default function Weather() {
  const [loading, setLoading] = useState(false);
  const [city, setCity] = useState("");
  const [data, setData] = useState(null);
  const [errorInput, setErrorInput] = useState({
    value: false,
    message: "",
  });

  const getClimate = async (value) => {
    try {
      setLoading(true);
      const response = await getFetch(API_URL, value);
      setData(response);
    } catch (error) {
      console.log(error);
    } finally {
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    }
  };

  const handleSubmit = () => {
    setCity("");
    getClimate(city);
  };

  const validInput = (event) => {
    event.preventDefault();

    if (city === "") {
      setErrorInput({
        value: true,
        message: "error the field is empty",
      });
    } else {
      setErrorInput({
        value: false,
        message: "",
      });

      handleSubmit();
    }
  };

  return (
    <>
      <Container fixed sx={{ py: 5 }}>
        <Card
          variant="elevation"
          elevation={12}
          sx={{
            width: { xs: "95%", sm: 470 },
            height: "auto",
            mx: "auto",
            display: "flex",
            flexDirection: "column",
            borderRadius: 6,
            alignItems: "center",
            justifyContent: "center",
            py: 3,
            px: 1,
          }}
        >
          <Paper
            component="form"
            onSubmit={(event) => {
              validInput(event);
            }}
            sx={{
              p: "2px 4px",
              display: "flex",
              alignItems: "center",
              borderRadius: "20px",
              ":focus-within": {
                borderColor: errorInput.value ? "red" : "gray",
              },
            }}
            variant="outlined"
          >
            <InputBase
              sx={{ ml: 1, flex: 1 }}
              placeholder="Enter your city"
              inputProps={{ "aria-label": "search google maps" }}
              value={city}
              onChange={(event) => {
                setCity(event.target.value);
              }}
            />
            <IconButton type="submit" sx={{ p: "10px" }} aria-label="search">
              <SearchIcon />
            </IconButton>
          </Paper>
          <FormHelperText error={errorInput.value}>
            {errorInput.message}
          </FormHelperText>
          {data ? (
            loading ? (
              <LoadingLinear />
            ) : (
              <WeatherInfo data={data} />
            )
          ) : (
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <CardMedia
                sx={{ width: 64, height: 64, objectFit: "cover" }}
                image={"/img/day.png"}
              />
              <Typography variant="h5">Get real time weather</Typography>
            </Box>
          )}
        </Card>
      </Container>
      <Footer />
    </>
  );
}
