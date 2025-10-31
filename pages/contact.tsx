import Head from "next/head";
import { Box, Typography, Button } from "@mui/material";
import Link from "next/link";
import Layout from "@/components/Layout";

export default function ContactPage() {
  return (
    <>
      <Head>
        <title>Contact Us - Auction Fusion</title>
        <meta name="description" content="Get started with Auction Fusion today" />
      </Head>

      <Layout showContactButton={false} prevPage="/why-us">
        <Box
          sx={{
            width: "100%",
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: { xs: "100px 25px", md: "120px 70px" },
          }}
        >
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
            Get Started Today
          </Typography>

          <Typography
            variant="body1"
            sx={{
              fontSize: { xs: "1.1rem", md: "1.3rem" },
              color: "#666",
              mb: 5,
              animation: "fadeInUp 0.8s ease-out 0.2s backwards",
            }}
          >
            Transform your auction business with our comprehensive platform
          </Typography>

          <Button
            variant="contained"
            size="large"
            href="mailto:contact@auctionfusion.com"
            sx={{
              background: "linear-gradient(135deg, #E91E63 0%, #d81b60 100%)",
              color: "white",
              padding: { xs: "15px 40px", md: "10px 60px" },
              fontSize: { xs: "1.2rem", md: "1.5rem" },
              fontWeight: 600,
              borderRadius: "50px",
              boxShadow: "0 5px 15px rgba(233, 30, 99, 0.3)",
              textTransform: "none",
              fontFamily: "'Schibsted Grotesk', sans-serif",
              animation: "fadeInUp 0.6s ease-out 0.4s backwards",
              "&:hover": {
                background: "linear-gradient(135deg, #E91E63 0%, #d81b60 100%)",
                transform: "translateY(-10px)",
                boxShadow: "0 10px 25px rgba(233, 30, 99, 0.4)",
              },
              transition: "all 0.3s ease",
            }}
          >
            Send email
          </Button>

          <Box sx={{ mt: 6, display: "flex", gap: 3, flexWrap: "wrap", justifyContent: "center" }}>
            <Button component={Link} href="/home" variant="outlined" sx={{ borderColor: "#E91E63", color: "#E91E63", "&:hover": { borderColor: "#d81b60", background: "rgba(233, 30, 99, 0.05)" } }}>
              Back to Home
            </Button>
          </Box>
        </Box>
      </Layout>
    </>
  );
}
