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
            gap: { xs: 2, md: 4 },
            padding: { xs: "3% 4%", md: "3% 4.5%" },
            animation: "slideIn 0.6s ease-out",
            maxWidth: { xs: "100%", md: "1600px"},
            margin: "0 auto",
            '@media (max-width: 380px)': {
              padding: "2% 3%",
              gap: 1,
            },
            '@media (min-width: 470px) and (max-width: 820px)': {
              padding: "5% 6%",
              gap: 3,
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
              gap: { xs: 2, md: 3 },
              order: { xs: 1, md: 1 },
            }}
          >
            <Typography
              sx={{
                ...theme.typography.heading1,
                position: "absolute",
                width: { xs: "calc(100% - 30px)", md: "570px" },
                height: { xs: "auto", md: "auto" },
                opacity: 1,
                color: theme.palette.primary.light,
                padding: { xs: "2% 3%", md: 0 },
                paddingTop: { xs: "30%", md: 0 },
                overflowWrap: "break-word",
                margin: 0,
                animation: "fadeInUp 0.8s ease-out",
                "@keyframes fadeInUp": {
                  from: { opacity: 0, transform: "translateY(20px)" },
                  to: { opacity: 1, transform: "translateY(0)" },
                },
                '@media (max-width: 380px)': {
                  paddingTop: "30%",
                },
                '@media (min-width: 470px) and (max-width: 820px)': {
                  paddingTop: "15%",
                  width: "calc(100% - 60px)",
                },
              }}
            >
                Creating the finest auction websites
            </Typography>

            <Typography
              sx={{
                ...theme.typography.body1,
                color: theme.palette.bg.contrastText,
                animation: "fadeInUp 0.8s ease-out 0.4s backwards",
                "@keyframes fadeInUp": {
                  from: { opacity: 0, transform: "translateY(20px)" },
                  to: { opacity: 1, transform: "translateY(0)" },
                },
                marginTop: { xs: "52%", md: "140px" },
                '@media (max-width: 380px)': {
                  marginTop: "50%",
                },
                '@media (min-width: 470px) and (max-width: 820px)': {
                  marginTop: "33%",
                },
              }}
            >
              Auction Fusion is a next-generation auction website platform built for
              unparalleled AI / search performance and customer experience
            </Typography>

            {/* Button - visible on desktop only */}
            <Box sx={{
              display: { xs: "none", md: "block" },
            }}>
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
              mt: { xs: "-45%", md: 0 },
              '@media (min-width: 470px) and (max-width: 820px)': {
                mt: "-55%",
              },
            }}
          >
            <Box
              sx={{
                maxWidth: "670px",
                width: "90%",
                mx: "auto",
                mt: { xs: "-20%", md: 2 },
                position: "relative",
                '@media (max-width: 380px)': {
                  mt: "-10%",
                },
                '@media (min-width: 470px) and (max-width: 820px)': {
                  mt: "-5%",
                },
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
            position: "absolute",
            bottom: { xs: "5.5%", md: "3%" },
            display: { xs: "block", md: "none" },
            order: { xs: 3 },
            '@media (max-width: 380px)': {
              bottom: "4%",
            },
            '@media (min-width: 470px) and (max-width: 820px)': {
              bottom: "6%",
            },
          }}>
            {startButton}
          </Box>
        </Box>
      </Layout>
    </>
  );
}

