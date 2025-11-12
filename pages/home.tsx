import Head from "next/head";
import { Box, Typography } from "@mui/material";
import Layout from "@/components/Layout";
import { bPath } from "@/config/basePath";
import PrimaryButton from "@/components/PrimaryButton";
import { useTheme } from "@mui/material/styles";
import { useMemo } from "react";

// Animation keyframes
const fadeInUpAnimation = {
  "@keyframes fadeInUp": {
    from: { opacity: 0, transform: "translateY(20px)" },
    to: { opacity: 1, transform: "translateY(0)" },
  },
};

export default function HomePage() {
  const theme = useTheme();
  const backgroundColor = theme.palette.whites.main;

  // Memoized styles to avoid recalculation on every render
  const styles = useMemo(() => ({
    container: {
      width: "100%",
      height: { xs: "100%", md: "100%" },
      minHeight: { xs: "auto", md: "100%" },
      display: "flex",
      flexDirection: { xs: "column", md: "row" },
      alignItems: "center",
      justifyContent: "space-between",
      gap: { xs: 2, md: 4 },
      padding: { xs: "3% 4%", md: "3% 4.5%" },
      paddingTop: { xs: "125px", md: "3%" },
      paddingBottom: { xs: "15%", md: "3%" },
      animation: "slideIn 0.6s ease-out",
      maxWidth: { xs: "100%", md: "1600px" },
      margin: "0 auto",
      '@media (max-width: 380px)': {
          height: "80%",
        padding: "2% 3%",
        paddingTop: "120px",
        paddingBottom: "1%",
        gap: 1,
      },
      '@media (min-width: 470px) and (max-width: 820px)': {
        padding: "1% 6%",
        paddingTop: "120px",
        paddingBottom: "12%",
        gap: 3,
      },
    },
    textContent: {
      flex: 1,
      textAlign: { xs: "center", md: "left" },
      display: "flex",
      flexDirection: "column",
      gap: { xs: 2, md: 3 },
      order: { xs: 1, md: 1 },
    },
    heading: {
      ...theme.typography.heading1,
      position: { xs: "relative", md: "absolute" },
      width: { xs: "100%", md: "570px" },
      color: theme.palette.primary.light,
      overflowWrap: "break-word",
      margin: 0,
        '@media (max-width: 380px)': {
            ...theme.typography.heading2,
        },
      animation: "fadeInUp 0.8s ease-out",
      ...fadeInUpAnimation,
    },
    description: {
      ...theme.typography.body1,
      color: theme.palette.bg.contrastText,
      animation: "fadeInUp 0.8s ease-out 0.4s backwards",
      marginTop: { xs: "0%", md: "140px" },
      '@media (min-width: 821px) and (max-width: 1140px)': {
        marginTop: "20px",
      },
      '@media (max-width: 380px)': {
      ...theme.typography.body3,
      },
      ...fadeInUpAnimation,
    },
    desktopButton: {
      display: { xs: "none", md: "block" },
    },
    imageSection: {
      flex: 1,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      order: { xs: 2, md: 2 },
    },
    monitorContainer: {
      maxWidth: "670px",
      width: "90%",
      mx: "auto",
      mt: { xs: "0", md: 2 },
      position: "relative",
      '@media (min-width: 821px) and (max-width: 1140px)': {
        mt: "20px",
      },
      '@media (max-width: 380px)': {
        mt: "1%",
        maxWidth: "300px",
      },
    },
    monitorImage: {
      width: "100%",
      height: "auto",
      cursor: "pointer",
      transition: "opacity 0.3s",
      position: "relative",
      zIndex: 0,
      "&:hover": { opacity: 0.9 },
    },
    screenOverlay: {
      position: "absolute",
      top: "39%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      width: { xs: "85%", md: "89%" },
      height: "auto",
      zIndex: 10,
    },
    mobileButton: {
      position: { xs: "relative", md: "absolute" },
      bottom: { xs: "0", md: "3%" },
      display: { xs: "block", md: "none" },
      order: { xs: 3 },
      mt: { xs: "20px", md: 0 },
      '@media (max-width: 380px)': {
        mt: "3.5%",
        mb: "7%",
      },
      '@media (min-width: 470px) and (max-width: 820px)': {
        mt: "7%",
      },
    },
  }), [theme]);

  return (
    <>
      <Head>
        <title>Auction Fusion - Creating the Finest Auction Websites</title>
        <meta
          name="description"
          content="Auction Fusion is a next-generation auction website platform built for unparalleled AI / search performance and customer experience"
        />
      </Head>

      <Layout
        showContactButton={true}
        nextPage="/features"
        logoVariant={backgroundColor === theme.palette.primary.light ? "light" : "dark"}
        backgroundColor={backgroundColor}
      >
        <Box sx={styles.container}>
          {/* Text Content Section */}
          <Box sx={styles.textContent}>
            <Typography sx={styles.heading}>
              Creating the finest auction websites
            </Typography>

            <Typography sx={styles.description}>
              Auction Fusion is a next-generation auction website platform built for
              unparalleled AI / search performance and customer experience
            </Typography>

            <Box sx={styles.desktopButton}>
              <PrimaryButton href="/features">Let&apos;s start</PrimaryButton>
            </Box>
          </Box>

          {/* Monitor Image Section */}
          <Box sx={styles.imageSection}>
            <Box sx={styles.monitorContainer}>
              <Box
                component="img"
                alt="Monitor Background"
                src={`${bPath}/monitor.png`}
                sx={styles.monitorImage}
              />
              <Box
                component="img"
                alt="Auction Website Preview"
                src={`${bPath}/monitor-screen.jpeg`}
                sx={styles.screenOverlay}
              />
            </Box>
          </Box>

          {/* Mobile Button */}
          <Box sx={styles.mobileButton}>
            <PrimaryButton href="/features">Let&apos;s start</PrimaryButton>
          </Box>
        </Box>
      </Layout>
    </>
  );
}
