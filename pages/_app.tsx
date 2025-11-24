import type { AppProps } from "next/app";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "@/theme/theme";
import { useState, useEffect } from "react";
import { Box, CircularProgress, Typography } from "@mui/material";
import Head from "next/head";
import { useZoomDetection } from "@/hooks/useZoomDetection";

export default function App({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  // Only prevent horizontal scroll, let vertical scroll be handled by CSS in _document.tsx
  useEffect(() => {
    document.documentElement.style.overflowX = "hidden";
    document.body.style.overflowX = "hidden";
  }, []);

  return (
    <>
      <Head>
        <style>{`
          html, body {
            margin: 0;
            padding: 0;
            width: 100%;
          }
        `}</style>
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {loading && (
          <Box
            sx={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              background: "#0A1E3F",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              zIndex: 9999,
              transition: "opacity 0.5s ease",
              fontFamily: "'Schibsted Grotesk', sans-serif",
            }}
          >
            <CircularProgress
              sx={{
                color: "#E91E63",
                mb: 2,
              }}
              size={40}
            />
            <Typography variant="body1" sx={{ fontSize: "1.1em" }}>
              Loading ...
            </Typography>
          </Box>
        )}
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
