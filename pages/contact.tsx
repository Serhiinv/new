import Head from "next/head";
import { Box, Typography } from "@mui/material";
import Layout from "@/components/Layout";
import PrimaryButton from "@/components/PrimaryButton";
import { useTheme } from "@mui/material/styles";

export default function ContactPage() {
  const theme = useTheme();
  const themeStyle = theme.palette.secondary.main;

  return (
    <>
      <Head>
        <title>Contact Us - Auction Fusion</title>
        <meta name="description" content="Get started with Auction Fusion today" />
      </Head>

      <Layout showContactButton={false} prevPage="/why-us" logoVariant={themeStyle === theme.palette.primary.light ? "light" : "dark"}>
        <Box
          sx={{
            width: "100%",
            height: "100%",
            display: "flex",
            background: themeStyle,
            textAlign: "center",
            flexDirection: "column",
            alignItems: "center",
            padding: { xs: "250px 25px", md: "20% 70px" },
          }}
        >
          <Typography
            sx={{
                ...theme.typography.heading1,
              color: theme.palette.primary.main,
              mb: 2,
              animation: "fadeInUp 0.8s ease-out",
              "@keyframes fadeInUp": {
                from: { opacity: 0, transform: "translateY(20px)" },
                to: { opacity: 1, transform: "translateY(0)" },
              },
            }}
          >
            Get Started Today
          </Typography>

          <Typography
            sx={{
                ...theme.typography.heading5,
              color: theme.palette.bg.light,
              mb: 5,
              animation: "fadeInUp 0.8s ease-out 0.2s backwards",
            }}
          >
            Transform your auction business with our comprehensive platform
          </Typography>

          <PrimaryButton href="mailto:contact@auctionfusion.com">
            Send email
          </PrimaryButton>

          <Box sx={{ mt: 6, display: "flex", gap: 3, flexWrap: "wrap", justifyContent: "center" }}>
            <PrimaryButton href="/home" variant="outlined">
              Back to Home
            </PrimaryButton>
          </Box>
        </Box>
      </Layout>
    </>
  );
}
