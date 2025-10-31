import Head from "next/head";
import { Box, Typography } from "@mui/material";
import Layout from "@/components/Layout";
import {bPath} from "@/config/basePath";

export default function DesignPage() {
  return (
    <>
      <Head>
        <title>Design Philosophy - Auction Fusion</title>
        <meta name="description" content="Designed for clicks. Built for people." />
      </Head>

      <Layout showContactButton={true} prevPage="/features" nextPage="/improvement" backgroundColor="rgb(238, 238, 238)">
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
            justifyContent: "space-between",
            gap: 4,
            padding: { xs: "100px 25px 25px", md: "120px 70px 50px" },
          }}
        >
          {/* Left half - Image */}
          <Box
            sx={{
              flex: 1,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
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
                alt="Design Preview"
                src={`${bPath}/design.jpeg`}
                sx={{
                  width: "100%",
                  height: "auto",
                  cursor: "pointer",
                  transition: "opacity 0.3s",
                  position: "relative",
                  zIndex: 0,
                  borderRadius: 2,
                  boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                  "&:hover": { opacity: 0.9 },
                }}
              />
            </Box>
          </Box>

          {/* Right half - Text content */}
          <Box
            sx={{
              flex: 1,
              textAlign: { xs: "center", md: "left" },
              display: "flex",
              flexDirection: "column",
              gap: 3,
            }}
          >
            <Typography
              variant="h1"
              component="h1"
              sx={{
                fontFamily: "Ubuntu, 'Source Sans Pro', sans-serif",
                fontSize: { xs: "28px", md: "50px" },
                color: "rgb(42, 69, 97)",
                lineHeight: 1.15,
                letterSpacing: 0,
                overflowWrap: "break-word",
                animation: "fadeInUp 0.8s ease-out",
                "@keyframes fadeInUp": {
                  from: { opacity: 0, transform: "translateY(20px)" },
                  to: { opacity: 1, transform: "translateY(0)" },
                },
              }}
            >
              Designed for clicks.
              <br />
              Built for people.
            </Typography>

            <Typography
              variant="h5"
              sx={{
                fontSize: { xs: "1.1rem", md: "1.5rem" },
                color: "#666",
                animation: "fadeInUp 0.8s ease-out 0.4s backwards",
              }}
            >
              Our platform combines cutting-edge technology with human-centered design to create auction experiences that convert visitors into buyers.
            </Typography>
          </Box>
        </Box>
      </Layout>
    </>
  );
}
