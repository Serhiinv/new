import Head from "next/head";
import {Box, Typography} from "@mui/material";
import Layout from "@/components/Layout";
import PrimaryButton from "@/components/PrimaryButton";
import {useTheme} from "@mui/material/styles";
import {useMemo} from "react";
import {animations} from "@/config/animations";

export default function ContactPage() {
    const theme = useTheme();
    const backgroundColor  = theme.palette.secondary.main;

    const styles = useMemo(() => ({
        container: {
            justifyContent: "center",
            width: "100%",
            height: "100%",
            display: "flex",
            textAlign: "center",
            flexDirection: "column",
            alignItems: "center",
            padding: {xs: "250px 25px", md: "20% 70px"},
            maxWidth: {xs: "100%", md: "1600px"},
            margin: "0 auto",
        },
        title: {
            ...theme.typography.heading1,
            color: theme.palette.primary.light,
            mb: 2,
            animation: "fadeInUp 0.8s ease-out",
            ...animations.fadeInUp
        },
        description: {
            ...theme.typography.body1,
            color: theme.palette.bg.light,
            mb: {xs: 3, md: 5},
            animation: "fadeInUp 0.8s ease-out 0.2s backwards",
            ...animations.fadeInUp
        },
        backHomeBtn: {
            mt: 6, display: "flex", gap: 3, flexWrap: "wrap", justifyContent: "center"
        },
    }), [theme]);

    const logoVariant: "dark" | "light" =
        backgroundColor === theme.palette.primary.light ? "light" : "dark";

    const layoutProps = {
        showContactButton: false,
        prevPage: "/why-us",
        logoVariant,
        backgroundColor,
    };

    return (
        <>
            <Head>
                <title>Contact Us - Auction Fusion</title>
                <meta name="description" content="Get started with Auction Fusion today"/>
            </Head>

            <Layout {...layoutProps}>
                <Box sx={styles.container}>
                    <Typography sx={styles.title}>
                        Get Started Today
                    </Typography>

                    <Typography sx={styles.description}>
                        Transform your auction business with our comprehensive platform
                    </Typography>

                    <PrimaryButton href="mailto:contact@auctionfusion.com">
                        Send email
                    </PrimaryButton>

                    <Box sx={{mt: 6, display: "flex", gap: 3, flexWrap: "wrap", justifyContent: "center"}}>
                        <PrimaryButton href="/home" variant="outlined">
                            Back Home
                        </PrimaryButton>
                    </Box>
                </Box>
            </Layout>
        </>
    );
}
