import Head from "next/head";
import { Box, Button, Typography } from "@mui/material";
import Link from "next/link";
import Layout from "@/components/Layout";
import { bPath } from "@/config/basePath";

export default function HomePage() {
  const startButton = (
    <Button
      component={Link}
      href="/features"
      variant="contained"
      size="large"
      sx={{
        background: "linear-gradient(135deg, #E91E63 0%, #d81b60 100%)",
        color: "white",
        margin: { xs: "20px", md: "30px" },
        fontSize: { xs: "1.2rem", md: "1.5rem" },
        width: { xs: "140px", md: "200px" },
        height: { xs: "35px", md: "55px" },
        fontWeight: 600,
        borderRadius: "50px",
        boxShadow: "0 5px 15px rgba(233, 30, 99, 0.3)",
        textTransform: "none",
        fontFamily: "'Schibsted Grotesk', sans-serif",
        animation: "fadeInUp 0.6s ease-out backwards",
        "&:hover": {
          background: "linear-gradient(135deg, #E91E63 0%, #d81b60 100%)",
          transform: "translateY(-10px)",
          boxShadow: "0 10px 25px rgba(233, 30, 99, 0.4)",
        },
        transition: "all 0.3s ease",
      }}
    >
      Let&apos;s Start
    </Button>
  );

  return (
    <>
      <Head>
        <title>Auction Fusion - Creating the Finest Auction Websites</title>
        <meta name="description" content="Auction Fusion is a next-generation auction website platform built for unparalleled AI / search performance and customer experience" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Layout showContactButton={true} nextPage="/features">
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
            justifyContent: "space-between",
            gap: 4,
            padding: { xs: "30px 25px", md: "50px 70px" },
            animation: "slideIn 0.6s ease-out",
            "@keyframes slideIn": {
              from: { opacity: 0, transform: "translateY(30px)" },
              to: { opacity: 1, transform: "translateY(0)" },
            },
            "@keyframes fadeInUp": {
              from: { opacity: 0, transform: "translateY(20px)" },
              to: { opacity: 1, transform: "translateY(0)" },
            },
          }}
        >
          {/* Left half - Text content */}
          <Box
            sx={{
              flex: 1,
              textAlign: { xs: "center", md: "left" },
              display: "flex",
              flexDirection: "column",
              gap: 3,
              order: { xs: 1, md: 1 },
            }}
          >
            <Typography
              variant="h1"
              component="h1"
              sx={{
                position: "absolute",
                width: { xs: "90%", md: "556.961px" },
                height: { xs: "auto", md: "96.59px" },
                opacity: 1,
                fontFamily: "Ubuntu, 'Source Sans Pro', sans-serif",
                fontSize: { xs: "28px", md: "55px" },
                color: "rgb(42, 69, 97)",
                padding: { xs: "15px", md: 0 },
                lineHeight: 1.15,
                letterSpacing: 0,
                overflowWrap: "break-word",
                margin: 0,
                animation: "fadeInUp 0.8s ease-out",
              }}
            >
                Creating the finest auction websites
            </Typography>

            <Typography
              variant="h5"
              sx={{
                fontSize: { xs: "1.1rem", md: "1.8rem" },
                color: "#666",
                animation: "fadeInUp 0.8s ease-out 0.4s backwards",
                marginTop: { xs: "90px", md: "140px" },
              }}
            >
              Auction Fusion is a next-generation auction website platform built for
              unparalleled AI / search performance and customer experience
            </Typography>

            {/* Button - visible on desktop only */}
            <Box sx={{ display: { xs: "none", md: "block" } }}>
              {startButton}
            </Box>
          </Box>

          {/* Right half - Monitor with overlay image */}
          <Box
            sx={{
              flex: 1,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              order: { xs: 2, md: 2 },
            }}
          >
            <Box
              sx={{
                maxWidth: "670px",
                width: "100%",
                mx: "auto",
                mt: 2,
                position: "relative",
              }}
            >
              <Box
                component="img"
                alt="Monitor Background"
                src={`${bPath}/monitor.png`}
                sx={{
                  width: "100%",
                  height: "auto",
                  cursor: "pointer",
                  transition: "opacity 0.3s",
                  position: "relative",
                  zIndex: 0,
                  "&:hover": { opacity: 0.9 },
                }}
              />
              <Box
                component="img"
                alt="Auction Website Preview"
                src={`${bPath}/monitor-screen.jpeg`}
                sx={{
                  position: "absolute",
                  top: "39%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  width: { xs: "85%", md: "89%" },
                  height: "auto",
                  zIndex: 10,
                }}
              />
            </Box>
          </Box>

          {/* Button - visible on mobile only (after monitor) */}
          <Box sx={{ display: { xs: "block", md: "none" }, order: { xs: 3 } }}>
            {startButton}
          </Box>
        </Box>
      </Layout>
    </>
  );
}
