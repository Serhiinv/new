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
  // const BASE_HEIGHT = 812;
  const BASE_WIDTH = 375;
  const BASE_HEIGHT = 630; // 812-browser ui = 630

  useEffect(() => {
    const calculateScale = () => {
      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;

      // Only scale on mobile devices (under 820px)
      if (windowWidth <= 600) {
        // Calculate scale based on width
        const scaleX = windowWidth / BASE_WIDTH;
        // Calculate scale based on height
        const scaleY = windowHeight / BASE_HEIGHT;

        // Use the smaller scale to ensure content fits
        const newScale = Math.min(scaleX, scaleY);
        setScale(newScale);
      }
      else if (windowWidth <= 1140) {
        // For devices between 601px and 820px, scale based on width only
          const scaleX = windowWidth / BASE_WIDTH ;
          // Calculate scale based on height
          const scaleY = windowHeight / BASE_HEIGHT * 1.1;

          // Use the smaller scale to ensure content fits
          const newScale = Math.min(scaleX, scaleY);
          setScale(newScale);
      }
      else {
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
          justifyContent: 'center',

          // Desktop
          '@media (min-width: 1141px) and (max-width: 5760px)': {
              width: '100%',
              height: '100%',
              // height: 'auto',
              transform: 'none',
              // pt: '0px'
          },
      },
      verticalStack: {
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: {xs: "column", md: "row"},
          alignItems: 'center',
          justifyContent: 'center',
          gap: '15px',
          padding: {xs: '15px', md: '3% 4.5%'},
          boxSizing: 'border-box',
      },
      textContent: {
          textAlign: { xs: "center", md: "left" },
          display: "flex",
          flexDirection: "column",
          gap: {  md: 3 },
          padding: {md: '0 0px'},
            maxWidth: {xs: '100%', md: '670px'},
      },
      heading: {
          ...theme.typography.heading1,
          color: theme.palette.primary.light,
          margin: 0,
          // pt: '175px', //same as 51%
          pt: '51%',
          pb: '15px',
          animation: 'fadeInUp 0.8s ease-out',
          ...fadeInUpAnimation,

          // Tablet
          '@media (min-width: 600px) and (max-width: 1140px)': {
              fontWeight: {xs: 600, md: 400},
              fontSize: {xs: '30px'},
              pt: '135px',
          },
          // Desktop
          '@media (min-width: 1141px) and (max-width: 5760px)': {
              pt: '0px'
          },
      },
      description: {
          ...theme.typography.body1,
          color: theme.palette.bg.contrastText,
          margin: 0,
          pb: '5px',
          animation: 'fadeInUp 0.8s ease-out 0.4s backwards',
          ...fadeInUpAnimation,

          // Tablet
          '@media (min-width: 600px) and (max-width: 1140px)': {
              fontSize: {xs: '16px'},
          },
      },
      monitorContainer: {
          maxWidth: {xs: '300px', md: '570px'},
          width: '100%',
          mx: 'auto',
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: {md: '0 20px'},

          // Tablet
          '@media (min-width: 600px) and (max-width: 1140px)': {
              fontWeight: {xs: 600, md: 400},
              fontSize: {xs: '30px'},
              pb: '18%',
          },
          // Desktop
          '@media (min-width: 1141px) and (max-width: 5760px)': {
              // pt: '150px'
          },
      },
      monitorImage: {
          width: '100%',
          height: 'auto',
          cursor: 'pointer',
          transition: 'opacity 0.3s',
          position: 'relative',
          zIndex: 0,
          '&:hover': {opacity: 0.9},
      },
      screenOverlay: {
          position: 'relative',
          width: '87%',
          height: 'auto',
          zIndex: 10,
          transform: 'translate(0, -155%)',
      },

      desktopButton: {
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
          display: {xs: "none", md: "block"},
      },
      mobileButton: {
          position: "relative",
          display: { xs: "flex", md: "none" },
          order: { xs: 3 },
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

             <Box sx={styles.textContent}>
            <Typography sx={styles.heading}>
              Creating the finest auction websites
            </Typography>
            <Typography sx={styles.description}>
              Auction Fusion is a next-generation auction website platform built for unparalleled AI / search performance and customer experience
            </Typography>

                 <Box sx={styles.desktopButton}>
                     <PrimaryButton href="/features">Let&apos;s start</PrimaryButton>
                 </Box>
             </Box>
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
        </Box>
          <Box sx={{
              position: "absolute",
              display: { xs: "flex", md: "none" },
              bottom: 41,
          }}>
              <PrimaryButton href="/features">Let&apos;s start</PrimaryButton>
          </Box>
      </Layout>
    </>
  );
}
