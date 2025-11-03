import Head from "next/head";
import {Box, Typography} from "@mui/material";
import Layout from "@/components/Layout";
import { useTheme } from "@mui/material/styles";

export default function ImprovementPage() {
  const theme = useTheme();
  const themeStyle = theme.palette.primary.light;

  return (
    <>
      <Head>
        <title>Improvement - Auction Fusion</title>
        <meta name="description" content="Discover the powerful features of Auction Fusion platform" />
      </Head>

      <Layout
          showContactButton={true}
          prevPage="/design" nextPage="/why-us"
          logoVariant={themeStyle === theme.palette.primary.light ? "light" : "dark"}
          backgroundColor={themeStyle}
      >
        <Box
          sx={{
            width: "100%",
            height: "100%",
            display: "flex",
            padding: { xs: "100px 25px 25px", md: "200px 110px 50px" },
            flexDirection: "column",
            gap: { xs: 4, md: 7 },
            paddingTop: { xs: "140px", md: "200px" },
            maxWidth: { xs: "100%", md: "1600px"},
            margin: "0 auto",
          }}
        >
          {/* Container so SVG quotes can be absolutely positioned over the text */}
          <Box sx={{
            position: "relative",
            width: "100%",
            boxSizing: "border-box",
            padding: { xs: "28px 20px", md: "48px 60px" },
            animation: "fadeInUp 0.8s ease-out",
            "@keyframes fadeInUp": {
              from: { opacity: 0, transform: "translateY(20px)" },
              to: { opacity: 1, transform: "translateY(0)" },
            },
          }}>

            {/* Opening quote - top-left */}
            <Box sx={{ position: "absolute", top: { xs: 8, md:-30 }, left: { xs: 8, md: 10 }, width: { xs: 36, md: 80 }, height: { xs: 36, md: 80 }, transform: "rotate(180deg)", zIndex: 1 }} aria-hidden>
              <svg viewBox="-1 -2 600 100" style={{ width: "100%", height: "100%" }}>
                <g style={{ fill: "#E91E63" }}>
                  <path d="M438.21,35.94C417,12.09,391.22,0,361.63,0c-26.59,0-49.13,9.47-67,28.14s-26.76,41.59-26.76,68.49c0,25.42,9.09,48.06,27,67.32,15.82,17,35.75,27.79,59.35,32.19-4.13,31.28-31.78,59.6-82.36,84.27l-9.11,4.44,37.34,68.94,8.43-4.27c107-54.22,161.2-130.84,161.2-227.74C469.75,88.34,459.14,59.46,438.21,35.94Z" />
                  <path d="M174.91,35.89C153.45,12.08,127.58,0,98,0,71.4,0,49,9.49,31.33,28.19,13.85,46.74,5,69.76,5,96.63c0,25.42,9.09,48.06,27,67.32a105.37,105.37,0,0,0,58.63,32.16C86.57,227.42,59.14,255.74,9,280.42l-9,4.41,36.41,69,8.51-4.3c107.45-54.22,161.93-130.84,161.93-227.75C206.85,88.31,196.1,59.42,174.91,35.89Z" />
                </g>
              </svg>
            </Box>

            {/* Closing quote - bottom-right (rotated) */}
            <Box sx={{ position: "absolute", bottom: { xs: 150, md: 180 }, right: { xs: 8, md: 30 }, width: { xs: 36, md: 80 }, height: { xs: 36, md: 80 }, zIndex: 1 }} aria-hidden>
              <svg viewBox="-1 -2 600 100" style={{ width: "100%", height: "100%" }}>
                <g style={{ fill: "#E91E63" }}>
                  <path d="M438.21,35.94C417,12.09,391.22,0,361.63,0c-26.59,0-49.13,9.47-67,28.14s-26.76,41.59-26.76,68.49c0,25.42,9.09,48.06,27,67.32,15.82,17,35.75,27.79,59.35,32.19-4.13,31.28-31.78,59.6-82.36,84.27l-9.11,4.44,37.34,68.94,8.43-4.27c107-54.22,161.2-130.84,161.2-227.74C469.75,88.34,459.14,59.46,438.21,35.94Z" />
                  <path d="M174.91,35.89C153.45,12.08,127.58,0,98,0,71.4,0,49,9.49,31.33,28.19,13.85,46.74,5,69.76,5,96.63c0,25.42,9.09,48.06,27,67.32a105.37,105.37,0,0,0,58.63,32.16C86.57,227.42,59.14,255.74,9,280.42l-9,4.41,36.41,69,8.51-4.3c107.45-54.22,161.93-130.84,161.93-227.75C206.85,88.31,196.1,59.42,174.91,35.89Z" />
                </g>
              </svg>
            </Box>

            {/* Text content sits above SVGs */}
            <Box sx={{

              color: theme.palette.whites.main,
              position: "relative",
              zIndex: 2,
              fontWeight: 200,
              paddingTop: { xs: "20px", md: "20px" },
              paddingBottom: { xs: "20px", md: "30px" }
            }}>
              <Typography component="p" sx={{
                  ...theme.typography.body1,
                  m: 0 }}>
                To Auction Fusion&apos;s credit <strong>our improvement in SEO has been nothing less than stratospheric.</strong> Coupled with much improved functionality in critical areas like searching, image rendering, and lot alerts we are in a much better position to compete for consignments and bidders.
              </Typography>

              <Typography component="p" sx={{
                  ...theme.typography.body1,
                  mt: 2, mb: 0 }}>
                The exciting results continue with <strong>100% sold</strong> in our following 2 auctions. Thanks for all the hard work behind the scenes to make this auction a success.
              </Typography>
              <br />
              <br />

              <Typography component="p" sx={{
                ...theme.typography.body2,
                mt: 2,
                paddingTop: { xs: "20px", md: "100px" }
              }}>
                - Edward Barrow, Auction Manager at Stanley Gibbons Baldwin&apos;s
              </Typography>
            </Box>
          </Box>
        </Box>
      </Layout>
    </>
  );
}
