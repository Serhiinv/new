import Head from "next/head";
import { Box, Typography } from "@mui/material";
import Layout from "@/components/Layout";
import { bPath } from "@/config/basePath";
import PrimaryButton from "@/components/PrimaryButton";
import { useTheme } from "@mui/material/styles";

export default function CaseStudyPage() {
  const theme = useTheme();

  const startButton = (
    <PrimaryButton href="https://www.lyonandturnbull.com/">
      Lion & Turnbull website
    </PrimaryButton>
  );

  const themeStyle = theme.palette.whites.main;

  return (
    <>
      <Head>
        <title>Case Study - Auction Fusion</title>
        <meta name="description" content="Real-world success stories and case studies from Auction Fusion clients" />
      </Head>

      <Layout
        showContactButton={true}
        prevPage="/why-us"
        nextPage="/contact"
        logoVariant={themeStyle === theme.palette.primary.light ? "light" : "dark"}
        backgroundColor={themeStyle}
      >
          <Box sx={{
              width: "100%",
              minHeight: { xs: "90vh", md: "100%" },
              height: { xs: "auto", md: "100%" },
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
              padding: { xs: "3% 4%", md: "3% 4.5%" },
              paddingTop: { xs: "140px", md: "1%" },
              paddingBottom: { xs: "15%", md: "0%" },
              maxWidth: { xs: "100%", md: "1600px"},
              margin: "0 auto",
              '@media (max-width: 380px)': {
                  padding: "0 3%",
                  paddingTop: "80px",
              },
              '@media (min-width: 470px) and (max-width: 820px)': {
                  paddingTop: "50px",
                  minHeight: "95vh",
              },
          }}>
              <Typography
                  sx={{
                      ...theme.typography.heading2,
                      textAlign: "center",
                      color: theme.palette.primary.light,
                      paddingBottom: { xs: "5%", md: "4%" },
                      margin: 0,
                      animation: "fadeInUp 0.8s ease-out",
                      "@keyframes fadeInUp": {
                          from: { opacity: 0, transform: "translateY(20px)" },
                          to: { opacity: 1, transform: "translateY(0)" },
                      },
                      '@media (min-width: 900px) and (max-width: 1180px)': {
                          ...theme.typography.heading2,
                          fontSize: "38px",
                      },
                      '@media (max-width: 380px)': {
                          fontSize: "1.8rem",
                      },
                  }}
              >
                  Case study: conversions per customer up 500%
              </Typography>

              <Box
                  sx={{
                      width: "100%",
                      display: "flex",
                      flexDirection: { xs: "column", md: "row" },
                      alignItems: "center",
                      justifyContent: "center",
                      gap: { xs: 3, md: 4 },
                      '@media (max-width: 380px)': {
                          gap: 2,
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
                          maxWidth: "670px",
                          pl: { xs: 0, md: "2%"},
                          pr: { xs: 0, md: 0 },
                      }}
                  >
                      <Typography
                          sx={{
                              ...theme.typography.body2,
                              fontWeight: "bold",
                              color: theme.palette.bg.contrastText,
                              animation: "fadeInUp 0.8s ease-out 0.4s backwards",
                              "@keyframes fadeInUp": {
                                  from: { opacity: 0, transform: "translateY(20px)" },
                                  to: { opacity: 1, transform: "translateY(0)" },
                              },
                              '@media (max-width: 380px)': {
                                  fontSize: "0.9rem",
                              },
                          }}
                      >
                          Auction Fusion has transformed Lyon and Turnbull&apos;s website and digital brand. It&apos;s revolutionised their SEO and AEO - reach, relevancy and ranking. It&apos;s given L&T a bespoke online web brand which their customers love (88% rating it 4 or 5 out of 5).
                          <br /><br />
                          From &apos;go live&apos; of the new Auction Fusion site, we retained over 100,000 historic lots and auction links with smart 1-2-1 redirection.
                          <br /><br />
                          <Box component="span" sx={{
                              display: { xs: "none", md: "inline" },
                          }}>
                              The site also features automated and personalised content and cross-links, thematic pages (e.g. Artists and makers) and a host of customer-friendly auction features - all delivered by Auction Fusion, with a customisation layer to make the site uniquely L&T.
                          </Box>
                      </Typography>
                  </Box>

                  {/* Right half - Image with overlay */}
                  <Box
                      sx={{
                          flex: 1,
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          order: { xs: 2, md: 2 },
                          mb: { xs: "20%", md: "90px" },
                          maxWidth: "670px",
                      }}
                  >
                      <Box
                          sx={{
                              maxWidth: {xs: "80%", md: "600px"},
                              width: "90%",
                              position: "relative",
                              transform: 'translateY(-20px)',
                          }}
                      >
                          <Box
                              component="a"
                              href="https://www.lyonandturnbull.com/"
                              target="_blank"
                              rel="noopener noreferrer"
                              sx={{ display: 'block' }}
                          >
                              <Box
                                  component="img"
                                  alt="Case Study Background"
                                  src={`${bPath}/case-study.jpeg`}
                                  sx={{
                                      width: "100%",
                                      height: "auto",
                                      cursor: "pointer",
                                      transition: "opacity 0.3s",
                                      position: "relative",
                                      zIndex: 0,
                                      "&:hover": { opacity: 0.8 },
                                  }}
                              />
                          </Box>
                          <Box
                              component="a"
                              href="https://www.lyonandturnbull.com/"
                              target="_blank"
                              rel="noopener noreferrer"
                              sx={{
                                  position: "absolute",
                                  top: "39%",
                                  left: "50%",
                                  transform: "translate(-30%, 40%) rotate(20deg)",
                                  zIndex: 10,
                              }}
                          >
                              <Box
                                  component="img"
                                  alt="Auction Website Preview"
                                  src={`${bPath}/case-study-over.png`}
                                  sx={{
                                      cursor: "pointer",
                                      transition: "opacity 0.3s",
                                      "&:hover": { opacity: 0.8 },
                                      width: { xs: "100%", md: "120%" },
                                      height: "auto",
                                      '@media (max-width: 380px)': {
                                          width: "65%",
                                      },
                                  }}
                              />
                          </Box>
                      </Box>
                  </Box>
              </Box>

              {/* Button - visible on desktop only */}
              <Box sx={{
                  position: "absolute",
                    bottom: "12%",
                    right: "30%",
                    zIndex: 15,
                  display: { xs: "none", md: "block" },
                      to: { opacity: 1, transform: "translateY(0)" },
              }}>
                  {startButton}
              </Box>

              {/* Button - visible on mobile only */}
              <Box sx={{
                  display: { xs: "block", md: "none" },
                      position: "absolute",
                  justifyContent: "center",
                  bottom: "15px",
                  paddingBottom: { xs: "5%", md: "0" },
                  zIndex: 15,
                  '@media (max-width: 380px)': {
                      paddingTop: "3%",
                      paddingBottom: "3%",
                      zIndex: 15,
                  },
              }}>
                  {startButton}
              </Box>
          </Box>
      </Layout>
    </>
  );
}
