import { Box, Link, Typography } from "@mui/material";
import React from "react";

export default function Footer() {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          width: "100%",
          flexDirection: "row",
          justifyContent: "center",
          py: 1,
          textAlign: "center",
          mt: 5,
          position: "absolute",
          bottom: "0",
        }}
      >
        <Typography
          variant="h6"
          sx={{ fontSize: { xs: "14px", sm: "16px" }, fontWeight: "bold" }}
        >
          © 2023 – Carlos Velásquez
        </Typography>
      </Box>
    </>
  );
}
