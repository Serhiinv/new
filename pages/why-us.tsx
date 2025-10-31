import Head from "next/head";
import { Box, Typography, Paper } from "@mui/material";
import Layout from "@/components/Layout";

export default function WhyUsPage() {
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

      <Layout showContactButton={true} prevPage="/improvement" nextPage="/contact">
        <Box sx={{ width: "100%", textAlign: "center", padding: { xs: "100px 25px", md: "120px 70px" } }}>
          <Typography
            variant="h2"
            component="h1"
            sx={{
              fontSize: { xs: "2rem", md: "3rem" },
              fontWeight: 600,
              color: "#0A1E3F",
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
            variant="body1"
            sx={{
              fontSize: { xs: "1.1rem", md: "1.3rem" },
              color: "#666",
              mb: 6,
              animation: "fadeInUp 0.8s ease-out 0.2s backwards",
            }}
          >
            Industry-leading solutions backed by years of experience
          </Typography>

          <Box sx={{ display: "flex", gap: 5, justifyContent: "center", flexWrap: "wrap" }}>
            {stats.map((stat, index) => (
              <Paper
                key={index}
                elevation={0}
                sx={{
                  background: "transparent",
                  animation: `fadeInUp 0.8s ease-out ${stat.delay}s backwards`,
                  minWidth: "150px",
                }}
              >
                <Typography
                  sx={{
                    fontSize: { xs: "3rem", md: "4rem" },
                    fontWeight: 700,
                    color: "#E91E63",
                    lineHeight: 1,
                    mb: 1,
                  }}
                >
                  {stat.value}
                </Typography>
                <Typography
                  sx={{
                    fontSize: { xs: "1.1rem", md: "1.3rem" },
                    color: "#666",
                    fontWeight: 500,
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
