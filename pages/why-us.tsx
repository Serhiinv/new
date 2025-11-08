import Head from "next/head";
import { Box, Typography, Paper } from "@mui/material";
import Layout from "@/components/Layout";
import { useTheme } from "@mui/material/styles";

export default function WhyUsPage() {
  const theme = useTheme();
  const themeStyle = theme.palette.secondary.main;

  const stats = [
    { value: "500+", label: "Active Clients", delay: 0 },
    { value: "99.9%", label: "Uptime", delay: 0.15 },
    { value: "24/7", label: "Support", delay: 0.3 },
  ];

  return (
    <>
      <Head>
        <title>Why Choose Us - Auction Fusion</title>
        <meta name="description" content="Industry-leading solutions backed by years of experience" />
      </Head>

      <Layout
          showContactButton={true}
          prevPage="/improvement" nextPage="/contact"
          logoVariant={themeStyle === theme.palette.primary.light ? "light" : "dark"}
          backgroundColor={themeStyle}
      >
        <Box sx={{
            width: "100%",
            height: "100%",
            textAlign: "center",
            padding: { xs: "250px 25px", md: "20% 70px" },
            maxWidth: { xs: "100%", md: "1600px"},
            margin: "0 auto",
        }}>
          <Typography
            sx={{
              color: theme.palette.primary.main,
                ...theme.typography.heading1,
              mb: 2,
              animation: "fadeInUp 0.8s ease-out",
              "@keyframes fadeInUp": {
                from: { opacity: 0, transform: "translateY(20px)" },
                to: { opacity: 1, transform: "translateY(0)" },
              },
            }}
          >
            Why Choose Us
          </Typography>

          <Typography
            sx={{
              color: theme.palette.bg.light,
                ...theme.typography.body2,
              mb: { xs: 4, md: 6 },
              animation: "fadeInUp 0.8s ease-out 0.2s backwards",
              "@keyframes fadeInUp": {
                from: { opacity: 0, transform: "translateY(20px)" },
                to: { opacity: 1, transform: "translateY(0)" },
              },
            }}
          >
            Industry-leading solutions backed by years of experience
          </Typography>

          <Box sx={{
            display: "flex",
            gap: { xs: 3, md: 5 },
            justifyContent: "center",
            flexWrap: "wrap",
            '@media (max-width: 380px)': {
              gap: 2,
            },
          }}>
            {stats.map((stat, index) => (
              <Paper
                key={index}
                elevation={0}
                sx={{
                  background: "transparent",
                  animation: `fadeInUp 0.8s ease-out ${stat.delay}s backwards`,
                  "@keyframes fadeInUp": {
                    from: { opacity: 0, transform: "translateY(20px)" },
                    to: { opacity: 1, transform: "translateY(0)" },
                  },
                  minWidth: { xs: "120px", md: "150px" },
                  '@media (max-width: 380px)': {
                    minWidth: "100px",
                  },
                }}
              >
                <Typography
                  sx={{
                      ...theme.typography.heading1,
                    color: "#E91E63",
                    lineHeight: 1,
                    mb: 1,
                  }}
                >
                  {stat.value}
                </Typography>
                <Typography
                  sx={{
                      ...theme.typography.body1,
                    color: theme.palette.bg.light,
                  }}
                >
                  {stat.label}
                </Typography>
              </Paper>
            ))}
          </Box>
        </Box>
      </Layout>
    </>
  );
}
