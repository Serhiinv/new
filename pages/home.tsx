import Head from "next/head";
import { Box, Typography } from "@mui/material";
import Layout from "@/components/Layout";
import { bPath } from "@/config/basePath";
import PrimaryButton from "@/components/PrimaryButton";
import { useTheme } from "@mui/material/styles";

export default function HomePage() {
  const theme = useTheme();

  const startButton = (
    <PrimaryButton href="/features">
      Let&apos;s start
    </PrimaryButton>
  );

  const themeStyle = theme.palette.whites.main;

  return (
    <>
      <Head>
        <title>Auction Fusion - Creating the Finest Auction Websites</title>
        <meta name="description" content="Auction Fusion is a next-generation auction website platform built for unparalleled AI / search performance and customer experience" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Layout
        showContactButton={true}
        nextPage="/features"
        logoVariant={themeStyle === theme.palette.primary.light ? "light" : "dark"}
        backgroundColor={themeStyle}
      >
        <Box
          sx={{
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
            justifyContent: "space-between",
            gap: 4,
            padding: { xs: "30px 25px", md: "50px 70px" },
            animation: "slideIn 0.6s ease-out",
            maxWidth: { xs: "100%", md: "1600px"},
            margin: "0 auto",
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
              sx={{
                ...theme.typography.heading1,
                position: "absolute",
                width: { xs: "90%", md: "556.961px" },
                height: { xs: "auto", md: "96.59px" },
                opacity: 1,
                color: theme.palette.primary.main,
                padding: { xs: "15px", md: 0 },
                paddingTop: { xs: "120px", md: 0 },
                overflowWrap: "break-word",
                margin: 0,
                animation: "fadeInUp 0.8s ease-out",
              }}
            >
                Creating the finest auction websites
            </Typography>

            <Typography
              sx={{
                ...theme.typography.body1,
                color: theme.palette.bg.contrastText,
                animation: "fadeInUp 0.8s ease-out 0.4s backwards",
                marginTop: { xs: "185px", md: "140px" },
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
                mt: { xs: 2, md: 0 },
            }}
          >
            <Box
              sx={{
                maxWidth: "670px",
                width: "100%",
                mx: "auto",
                mt: { xs: -3, md: 2 },
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
          <Box sx={{
            display: { xs: "block", md: "none" },
            order: { xs: 3 },
            marginBottom: { xs: "50px", md: 0 },
          }}>
            {startButton}
          </Box>
        </Box>
      </Layout>
    </>
  );
}
