import Head from "next/head";
import { Box, Typography } from "@mui/material";
import Layout from "@/components/Layout";
import { bPath } from "@/config/basePath";
import PrimaryButton from "@/components/PrimaryButton";
import { useTheme } from "@mui/material/styles";
import { useMemo } from "react";
import { useMediaQuery } from "@mui/material";
import { useScale } from "@/hooks/useScale";
import { useScaleStyles } from "@/hooks/useScaleStyles";

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
  const scale = useScale();
  const { scaleWrapper, verticalStack } = useScaleStyles(scale);
  const isMobile = useMediaQuery("(max-width:1140px)");

  const styles = useMemo(
    () => ({
      textContent: {
        textAlign: { xs: "center", md: "left" },
        display: "flex",
        flexDirection: "column",
        gap: { md: 3 },
        padding: { md: "0 10px" },
        maxWidth: { xs: "100%", md: "670px" },
          // Tablet  // TODO  width 1140px on desktop
          "@media (min-width: 600px) and (max-width: 1140px)": {
              textAlign: "center",
          },
      },
      heading: {
        ...theme.typography.heading1,
        color: theme.palette.primary.light,
        margin: 0,
        // pt: '175px', //same as 51%
        pt: { xs: "51%", md: 0 },
        pb: "15px",
        animation: "fadeInUp 0.8s ease-out",
        ...fadeInUpAnimation,

        // Tablet
        "@media (min-width: 600px) and (max-width: 1140px)": {
          fontWeight: { xs: 600, md: 400 },
          fontSize: { xs: "30px" },
          pt: "135px",
        },
      },
      description: {
        ...theme.typography.body1,
        color: theme.palette.bg.contrastText,
        margin: 0,
        pb: "5px",
        animation: "fadeInUp 0.8s ease-out 0.4s backwards",
        ...fadeInUpAnimation,

        // Tablet
        "@media (min-width: 600px) and (max-width: 1140px)": {
          fontSize: { xs: "16px" },
        },
      },
      monitorContainer: {
        maxWidth: { xs: "300px", md: "550px" },
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: { md: "0 20px" },

        // Tablet
        "@media (min-width: 600px) and (max-width: 1140px)": {
          fontWeight: { xs: 600, md: 400 },
          fontSize: { xs: "30px" },
          pb: "18%",
        },
        // Desktop
        "@media (min-width: 1141px) and (max-width: 5760px)": {
          alignItems: "bottom",
          justifyContent: "bottom",
          height: "100%",
          transform: "translateY(130px)",
        },
      },
      monitorImage: {
        width: "100%",
        height: "auto",
        position: "relative",
        zIndex: 0,
      },
      screenOverlay: {
        position: "relative",
        width: "87%",
        height: "auto",
        zIndex: 10,
        transform: "translate(0, -155%)",
      },

      //     Desktop styles only
      container: {
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 4,
        padding: "3% 4.5%",
        paddingTop: "3%",
        paddingBottom: "3%",
        animation: "slideIn 0.6s ease-out",
        maxWidth: "1600px",
        margin: "0 auto",
      },
      imageSection: {
        flex: 1,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        paddingBottom: "0",
        order: 2,
      },
      emptyBox: {
        "@media (min-width: 420px) and (max-width: 810px)": {
        height: { xs: '110px', md: '0' },
        },

      },
    }),
    [theme]
  );

  //                     *********** Mobile version **********

  if (isMobile) {
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
          logoVariant={
            backgroundColor === theme.palette.primary.light ? "light" : "dark"
          }
          backgroundColor={backgroundColor}
        >
          <Box sx={scaleWrapper}>
            <Box sx={verticalStack}>
              <Box sx={styles.textContent}>
                <Typography sx={styles.heading}>
                  Creating the finest auction websites
                </Typography>
                <Typography sx={styles.description}>
                  Auction Fusion is a next-generation auction website platform built
                  for unparalleled AI / search performance and customer experience
                </Typography>
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
            {/*Empty box that hold space for let's Start Btn while resizing on desktop*/}
                <Box sx={styles.emptyBox}> </Box>

            </Box>
          </Box>
          <Box
            sx={{
              position: "absolute", // TODO change to relative
              display: { xs: "flex", md: "none" },
                bottom: 41,
            }}
          >
            <PrimaryButton href="/features">Let&apos;s start</PrimaryButton>
          </Box>
        </Layout>
      </>
    );
  } else {
    //                ********** Desktop version **********

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
          logoVariant={
            backgroundColor === theme.palette.primary.light ? "light" : "dark"
          }
          backgroundColor={backgroundColor}
        >
          <Box sx={styles.container}>
            {/* Text Content Section */}
            <Box sx={styles.textContent}>
              <Typography sx={styles.heading}>
                Creating the finest auction websites
              </Typography>

              <Typography sx={styles.description}>
                Auction Fusion is a next-generation auction website platform built
                for unparalleled AI / search performance and customer experience
              </Typography>

              <Box>
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
          </Box>
        </Layout>
      </>
    );
  }
}
