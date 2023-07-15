import {
  Box,
  Typography,
  Container,
  Link,
  Skeleton,
  Paper,
  OutlinedInput,
  InputAdornment,
  IconButton,
  TextField,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import CircularProgress from "@mui/material/CircularProgress";
import { useState } from "react";
import CardClimate from "./components/CardClimate";

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
    localtime: "",
  });

  const API_WEATHER = `https://api.weatherapi.com/v1/current.json?key=${
    import.meta.env.VITE_API_KEY
  }&lang=es&q=`;

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
              localtime: climate.location.localtime,
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
      <Container maxWidth={"sm"}>
        <Paper
          component={"form"}
          onSubmit={(ev) => {
            ev.preventDefault();
            handleSubmit();
          }}
          variant="elevation"
          elevation={20}
          sx={{
            width: "80%",
            height: "auto",
            m: 3,
            p: 3,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography
            variant="h4"
            sx={{ textAlign: "center", fontWeight: "bold", mb: 2 }}
          >
            Weather app
          </Typography>

          <OutlinedInput
            id="country"
            placeholder="Country"
            size="medium"
            value={country}
            onChange={(ev) => setCountry(ev.target.value)}
            error={error}
            variant="filled"
            endAdornment={
              <InputAdornment position="end">
                <IconButton type="submit" edge="end">
                  <SearchIcon fontSize="large" />
                </IconButton>
              </InputAdornment>
            }
          />

          <Box
            sx={{
              width: "100%",
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "20px",
            }}
          >
            {loading ? (
              <CircularProgress size={70} />
            ) : (
              data.city !== "" && <CardClimate data={data} />
            )}
          </Box>
        </Paper>

        <Box
          component={"footer"}
          sx={{ position: "absolute", left: 10, top: 570 }}
        >
          <Typography variant="h6" sx={{ mt: 5 }}>
            Powered by:
            <Link href="https://www.weatherapi.com/" title="Weather API">
              WeatherAPI.com
            </Link>
          </Typography>
          <Typography
            sx={{
              fontSize: "14px",
              opacity: 0.8,
            }}
          >
            © 2023 – Creation of Carlos Velásquez
          </Typography>
        </Box>
      </Container>
    </>
  );
}

export default App;
