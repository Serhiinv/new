import Head from "next/head";
import {Box, Typography} from "@mui/material";
import Layout from "@/components/Layout";
import { useTheme } from "@mui/material/styles";

export default function TestimonialsPage() {
  const theme = useTheme();
  const themeStyle = theme.palette.primary.light;

  return (
    <>
      <Head>
        <title>Testimonials - Auction Fusion</title>
        <meta name="description" content="Client testimonials and success stories from Auction Fusion platform" />
      </Head>

      <Layout
          showContactButton={true}
          prevPage="/design" nextPage="/reason"
          logoVariant={themeStyle === theme.palette.primary.light ? "light" : "dark"}
          backgroundColor={themeStyle}
      >
        <Box
          sx={{
            width: "100%",
              minHeight: { xs: "90vh", md: "100%" },
              height: { xs: "auto", md: "100%" },
            display: "flex",
              justifyContent: "center",
            padding: { xs: "29px 10px", md: "0px 50px" },
            flexDirection: "column",
            gap: { xs: 4, md: 7 },
            paddingTop: { xs: "140px", md: "0" },
            maxWidth: { xs: "100%", md: "1600px"},
            margin: "0 auto",
              '@media (max-width: 380px)': {
                  padding: { xs: "0px 15px"},
                  marginTop: "55px",
              },
              '@media (min-width: 470px) and (max-width: 820px)': {
                  paddingTop: "120px",
                  minHeight: "94.5vh",
              },
              // '@media (min-width: 1228px) and (min-height: 590px)': {  //wor windows 125%
              //
              // },
          }}
        >
          {/* Container for all content */}
          <Box sx={{
              maxWidth: { xs: "100%", md: "1320px"},
              margin: "0 auto",
            position: "relative",
            width: "100%",
            boxSizing: "border-box",
            padding: { xs: "28px 0px", md: "15px 60px" },
            animation: "fadeInUp 0.8s ease-out",
              '@media (min-width: 900px) and (max-width: 1180px)': {
                    padding: "30px 15px",
              },
            "@keyframes fadeInUp": {
              from: { opacity: 0, transform: "translateY(20px)" },
              to: { opacity: 1, transform: "translateY(0)" },
            },
          }}>

            {/* Text content sits above SVGs */}
            <Box sx={{
                textAlign: {xs: "center", md: "left"},
              color: theme.palette.whites.main,
              position: "relative",
              zIndex: 2,
              fontWeight: 200,
              padding: { xs: "0 7%", md: "0 9%" },
              paddingTop: { xs: "5%", md: "80px" },
              paddingBottom: { xs: "5%", md: "80px" },
                backgroundColor: {xs: theme.palette.primary.dark, md: themeStyle},
                borderRadius: 3,
            }}>

                {/* Opening quote - top-left */}
                <Box sx={{ position: "absolute",
                    top: { xs: 3, md:5 },
                    left: { xs: 0, md: 0 },
                    width: { xs: 36, md: 70 }, height: { xs: 36, md: 70 },
                    '@media (min-width: 470px) and (max-width: 820px)': {
                        width: 50,
                        height: 50,
                        top: 5, left: 0,
                    },
                    transform: "rotate(180deg)", zIndex: 2 }} aria-hidden>
                    <svg viewBox="-1 -2 600 100" style={{ width: "100%", height: "100%" }}>
                        <g style={{ fill: "#E91E63" }}>
                            <path d="M438.21,35.94C417,12.09,391.22,0,361.63,0c-26.59,0-49.13,9.47-67,28.14s-26.76,41.59-26.76,68.49c0,25.42,9.09,48.06,27,67.32,15.82,17,35.75,27.79,59.35,32.19-4.13,31.28-31.78,59.6-82.36,84.27l-9.11,4.44,37.34,68.94,8.43-4.27c107-54.22,161.2-130.84,161.2-227.74C469.75,88.34,459.14,59.46,438.21,35.94Z" />
                            <path d="M174.91,35.89C153.45,12.08,127.58,0,98,0,71.4,0,49,9.49,31.33,28.19,13.85,46.74,5,69.76,5,96.63c0,25.42,9.09,48.06,27,67.32a105.37,105.37,0,0,0,58.63,32.16C86.57,227.42,59.14,255.74,9,280.42l-9,4.41,36.41,69,8.51-4.3c107.45-54.22,161.93-130.84,161.93-227.75C206.85,88.31,196.1,59.42,174.91,35.89Z" />
                        </g>
                    </svg>
                </Box>

                {/* Closing quote - bottom-right (rotated) */}
                <Box sx={{ position: "absolute",
                    bottom: { xs: 5, md: 5 },
                    right: { xs: 8, md: 0 },
                    width: { xs: 36, md: 70 },
                    height: { xs: 36, md: 70 },
                    '@media (min-width: 470px) and (max-width: 820px)': {
                        width: 50,
                        height: 50,
                        bottom: 5, right: "0",
                    },
                    zIndex: 2 }} aria-hidden>
                    <svg viewBox="-1 -2 600 100" style={{ width: "100%", height: "100%" }}>
                        <g style={{ fill: "#E91E63" }}>
                            <path d="M438.21,35.94C417,12.09,391.22,0,361.63,0c-26.59,0-49.13,9.47-67,28.14s-26.76,41.59-26.76,68.49c0,25.42,9.09,48.06,27,67.32,15.82,17,35.75,27.79,59.35,32.19-4.13,31.28-31.78,59.6-82.36,84.27l-9.11,4.44,37.34,68.94,8.43-4.27c107-54.22,161.2-130.84,161.2-227.74C469.75,88.34,459.14,59.46,438.21,35.94Z" />
                            <path d="M174.91,35.89C153.45,12.08,127.58,0,98,0,71.4,0,49,9.49,31.33,28.19,13.85,46.74,5,69.76,5,96.63c0,25.42,9.09,48.06,27,67.32a105.37,105.37,0,0,0,58.63,32.16C86.57,227.42,59.14,255.74,9,280.42l-9,4.41,36.41,69,8.51-4.3c107.45-54.22,161.93-130.84,161.93-227.75C206.85,88.31,196.1,59.42,174.91,35.89Z" />
                        </g>
                    </svg>
                </Box>

              <Typography component="p" sx={{
                  ...theme.typography.body1,
                  '@media (max-width: 380px)': {
                      ...theme.typography.body3,
                  },

                  m: 0 }}>
                To Auction Fusion&apos;s credit <strong>our improvement in SEO has been nothing less than stratospheric.</strong> Coupled with much improved functionality in critical areas like searching, image rendering, and lot alerts we are in a much better position to compete for consignments and bidders.
              </Typography>

              <Typography component="p" sx={{
                  ...theme.typography.body1,
                  '@media (max-width: 380px)': {
                      ...theme.typography.body2,
                  },
                  mt: 2, mb: 0 }}>
                The exciting results continue with <strong>100% sold</strong> in our following 2 auctions. Thanks for all the hard work behind the scenes to make this auction a success.
              </Typography>

            </Box>
              {/* Triangle arrow pointing down */}
              <Box sx={{
                  position: "relative",
                  margin: "0 auto",
                  width: 0,
                  height: 0,
                  borderLeft: "28px solid transparent",
                  borderRight: "28px solid transparent",
                  borderTop: { xs: `28px solid ${theme.palette.primary.dark}`, md: `28px solid ${themeStyle}` },
              }} />
            <Box>
                <Typography component="p" sx={{
                    textAlign: 'center',
                    color: theme.palette.whites.main,
                    ...theme.typography.body2,
                    mt: 2,
                    paddingTop: { xs: "8%", md: "0" },
                    paddingBottom: { xs: "8%", md: "0" },
                    '@media (max-width: 380px)':{
                        paddingTop: "3%",
                        mt: 1,
                        // marginBottom: "10px",
                        paddingBottom: "1px",
                    },
                    // '@media (min-width: 1228px) and (min-height: 590px)': {  //wor windows 125%
                    // },
                }}>
                    <Box component="span" sx={{
                        display: { xs: 'inline-block', md: 'none' },
                    }}>
                        <strong>Edward Barrow </strong>
                        <br/>
                        Auction Manager at Stanley Gibbons Baldwin&apos;s
                    </Box>

                    <Box component="span" sx={{
                        display: { xs: 'none', md: 'inline-block' },
                        '@media (min-width: 1228px) and (min-height: 590px)': {  //wor windows 125%
                            transform: 'translateY(-20px)',
                        },
                    }}>
                        -<strong> Edward Barrow</strong>
                        , Auction Manager at Stanley Gibbons Baldwin&apos;s
                    </Box>
                </Typography>
            </Box>
          </Box>
        </Box>
      </Layout>
    </>
  );
}
