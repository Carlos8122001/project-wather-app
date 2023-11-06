import React, { useEffect, useState } from "react";
import Layout from "./pages/Layout";
import { Box, CardMedia } from "@mui/material";

function App() {
  return (
    <>
      <Box
        width={"100%"}
        height={"100vh"}
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"center"}
      >
        <CardMedia
          sx={{
            width: "100%",
            height: "100vh",
            objectFit: "cover",
            position: "absolute",
            zIndex: "-1",
          }}
          image={"/img/Blue.jpg"}
        />
        <Layout />
      </Box>
    </>
  );
}

export default App;
