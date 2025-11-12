import Head from "next/head";
import { Box, Typography } from "@mui/material";
import Layout from "@/components/Layout";
import {bPath} from "@/config/basePath";
import { useTheme } from "@mui/material/styles";

export default function DesignPage() {
  const theme = useTheme();
    const themeStyle = theme.palette.secondary.main;

  return (
    <>
      <Head>
        <title>Design Philosophy - Auction Fusion</title>
        <meta name="description" content="Designed for clicks. Built for people." />
      </Head>

      <Layout
          showContactButton={true} prevPage="/features"
          nextPage="/testimonials"
          logoVariant={themeStyle === theme.palette.primary.light ? "light" : "dark"}
          backgroundColor={themeStyle}
      >
        <Box
          sx={{
            width: "100%",
            minHeight: { xs: "90vh", md: "100%" },
            height: { xs: "auto", md: "100%" },
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
            justifyContent: "space-between",
            gap: { xs: 1, md: 4 },
            padding: { xs: "3% 4%", md: "3% 4.5%" },
            paddingTop: { xs: "140px", md: "3%" },
              paddingBottom: { xs: "15%", md: "0%" },
            maxWidth: { xs: "100%", md: "1600px"},
            margin: "0 auto",
            '@media (max-width: 380px)': {
              padding: "0 3%",
              paddingTop: "80px",
            },
            '@media (min-width: 470px) and (max-width: 820px)': {
              paddingTop: "150px",
                minHeight: "95vh",
            },
          }}
        >
          {/* Left half - Image */}
          <Box
            sx={{
              flex: 1,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              order: { xs: 1, md: 1 },
                '@media (max-width: 380px)': {
                    paddingTop: "45px",
                    maxWidth: "300px",
                },
            }}
          >
            <Box
              sx={{
                maxWidth: "670px",
                width: "90%",
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
                  position: "relative",
                  zIndex: 0,
                  borderRadius: 2,
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
              gap: { xs: 2, md: 2 },
              order: { xs: 2, md: 2 },
                maxWidth: "670px",
                padding: {xs: 0, md: "0"},
                pr: {xs: 0, md: "3%"},
                '@media (max-width: 380px)': {
                    paddingTop: "8px",
                    paddingBottom: "45px",
                },
            }}
          >
            <Typography
              sx={{
                  ...theme.typography.heading1,
                color: theme.palette.primary.light,
                overflowWrap: "break-word",
                animation: "fadeInUp 0.8s ease-out",
                  '@media (min-width: 900px) and (max-width: 1180px)': {
                      ...theme.typography.heading2,
                      fontSize: "38px",
                  },
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
              sx={{
                  ...theme.typography.body1,
                color: theme.palette.bg.light,
                animation: "fadeInUp 0.8s ease-out 0.4s backwards",
                "@keyframes fadeInUp": {
                  from: { opacity: 0, transform: "translateY(20px)" },
                  to: { opacity: 1, transform: "translateY(0)" },
                },
              }}
            >
                From the first online query to a seamless customer experience on your new website, Auction Fusion drives consignment and sales at every step.
                <br />
                <Box component="span" sx={{
                    display: { xs: "none", md: "inline" },
                }}>
                And with your upcoming lots visible on Google in hours, Auction Fusion is beating the biggest and best in the auction world.
                <br />
                </Box>
                <br />
                <strong>That&apos;s why our auction clients are seeing conversions per customer up by over 500%.</strong>
            </Typography>
          </Box>
        </Box>
      </Layout>
    </>
  );
}
