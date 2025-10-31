import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#0A1E3F",
    },
    secondary: {
      main: "#E91E63",
    },
    background: {
      default: "#0A1E3F",
      paper: "#ffffff",
    },
  },
  typography: {
    fontFamily: "'Schibsted Grotesk', sans-serif",
    h1: {
      fontWeight: 600,
    },
    h2: {
      fontWeight: 600,
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
});
