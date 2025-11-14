import Head from "next/head";
import { Box, Typography } from "@mui/material";
import Layout from "@/components/Layout";
import { bPath } from "@/config/basePath";
import PrimaryButton from "@/components/PrimaryButton";
import { useTheme } from "@mui/material/styles";
import { useMemo, useEffect, useState } from "react";

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
  const [scale, setScale] = useState(1);

  // Base dimensions for iPhone 12 mini
  // const BASE_WIDTH = 375;
  // const BASE_HEIGHT = 812;
  const BASE_WIDTH = 375;
  const BASE_HEIGHT = 630;

  useEffect(() => {
    const calculateScale = () => {
      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;

      // Only scale on mobile devices (under 820px)
      if (windowWidth <= 800) {
        // Calculate scale based on width
        const scaleX = windowWidth / BASE_WIDTH;
        // Calculate scale based on height
        const scaleY = windowHeight / BASE_HEIGHT;

        // Use the smaller scale to ensure content fits
        const newScale = Math.min(scaleX, scaleY);
        setScale(newScale);
      } else {
        setScale(1);
      }
    };

    calculateScale();
    window.addEventListener('resize', calculateScale);
    return () => window.removeEventListener('resize', calculateScale);
  }, []);

  // Memoized styles to avoid recalculation on every render
  const styles = useMemo(() => ({
    scaleWrapper: {
      width: BASE_WIDTH,
      height: BASE_HEIGHT,
      transform: `scale(${scale})`,
      transformOrigin: 'top center',
      position: 'relative' as const,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      '@media (min-width: 821px)': {
        width: '100%',
        height: 'auto',
        transform: 'none',
      },
    },
    verticalStack: {
      width: '100%',
      height: '100%',
      display: 'flex',
      // flexDirection: 'column',
        flexDirection: { xs: "column", md: "row" },
      alignItems: 'center',
      justifyContent: 'center',
      // justifyContent: 'space-around',
      gap: '15px',
      padding: '15px',
      boxSizing: 'border-box',
    },
    heading: {
      ...theme.typography.heading1,
      color: theme.palette.primary.light,
      textAlign: 'center',
      margin: 0,
        pt: '95px',
      animation: 'fadeInUp 0.8s ease-out',
      ...fadeInUpAnimation,
    },
    description: {
      ...theme.typography.body2,
        fontWeight: 'bold',
      color: theme.palette.bg.contrastText,
      textAlign: 'center',
      margin: 0,
      animation: 'fadeInUp 0.8s ease-out 0.4s backwards',
      ...fadeInUpAnimation,
    },
    monitorContainer: {
      maxWidth: '300px',
      width: '100%',
      mx: 'auto',
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
        pb: '15px',
    },
    monitorImage: {
      width: '100%',
      height: 'auto',
      cursor: 'pointer',
      transition: 'opacity 0.3s',
      position: 'relative',
      zIndex: 0,
      '&:hover': { opacity: 0.9 },
    },
    screenOverlay: {
      position: 'absolute',
      top: '39%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: '85%',
      height: 'auto',
      zIndex: 10,
    },
    button: {
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
  }), [theme, scale]);

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
        <Box sx={styles.scaleWrapper}>
          <Box sx={styles.verticalStack}>
            <Typography sx={styles.heading}>
              Creating the finest auction websites
            </Typography>
            <Typography sx={styles.description}>
              Auction Fusion is a next-generation auction website platform built for unparalleled AI / search performance and customer experience
            </Typography>
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
            <Box sx={styles.button}>
              <PrimaryButton href="/features">Let&apos;s start</PrimaryButton>
            </Box>
          </Box>
        </Box>
      </Layout>
    </>
  );
}
