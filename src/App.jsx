import {
  Box,
  Typography,
  TextField,
  Button,
  Container,
  Link,
  Skeleton,
} from "@mui/material";
import { useState } from "react";
import CardClimate from "./components/CardClimate";
import SearchIcon from "@mui/icons-material/Search";

const API_WEATHER = `http://api.weatherapi.com/v1/current.json?key=${
  import.meta.env.VITE_API_KEY
}&lang=es&q=`;

function App() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [country, setCountry] = useState("");
  const [data, setData] = useState({
    city: "",
    country: "",
    temperature: 0,
    condition: "",
    conditionText: "",
    icon: "",
  });

  const handleSubmit = () => {
    if (country === "") {
      setError(true);
    } else {
      try {
        setLoading(true);
        setError(false);
        fetch(API_WEATHER + country)
          .then((response) => response.json())
          .then((climate) =>
            setData({
              city: climate.location.name,
              country: climate.location.country,
              temperature: climate.current.temp_c,
              condition: climate.current.condition.code,
              conditionText: climate.current.condition.text,
              icon: climate.current.condition.icon,
            })
          );
      } catch (error) {
        console.log(error);
      } finally {
        setTimeout(() => {
          setLoading(false);
        }, 2500);
      }
    }
  };
  return (
    <>
      <Container
        maxWidth={"sm"}
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <Box
          sx={{ marginTop: "20px" }}
          component={"form"}
          onSubmit={(ev) => {
            ev.preventDefault();
            handleSubmit();
          }}
        >
          <Typography
            variant="h3"
            fontWeight={"bold"}
            textAlign={"center"}
            sx={{ mt: "15px", mb: "30px" }}
          >
            Wather App
          </Typography>
          <TextField
            id="country"
            placeholder="Country"
            size="medium"
            value={country}
            onChange={(ev) => setCountry(ev.target.value)}
            error={error}
            variant="outlined"
            helperText={error ? "El campo es requerido" : ""}
          />
          <Button
            variant="contained"
            sx={{ borderRadius: 0, height: "56px" }}
            type="submit"
            size="large"
          >
            <SearchIcon />
          </Button>
        </Box>
      </Container>

      {loading ? (
        <Skeleton
          variant="rectangular"
          sx={{
            maxWidth: "370px",
            height: "220px",
            marginLeft: "auto",
            marginRight: "auto",
            marginTop: "10px",
          }}
        />
      ) : (
        data.city !== "" && <CardClimate data={data} />
      )}

      <Box component={"footer"}>
        <Typography textAlign="center" variant="h6" sx={{ mt: 5 }}>
          Powered by:
          <Link href="https://www.weatherapi.com/" title="Weather API">
            WeatherAPI.com
          </Link>
        </Typography>
      </Box>
      <Typography
        textAlign="left"
        sx={{ mt: 48, fontSize: "14px", opacity: 0.8, ml: "10px" }}
      >
        © 2023 – Creation of Carlos Velásquez
      </Typography>
    </>
  );
}

export default App;
