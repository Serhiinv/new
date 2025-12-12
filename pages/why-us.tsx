import Head from "next/head";
import { Box, Typography, Paper } from "@mui/material";
import Layout from "@/components/Layout";
import { useTheme } from "@mui/material/styles";
import { useMemo } from "react";
import {animations} from "@/config/animations";

export default function WhyUsPage() {
    const theme = useTheme();
    const backgroundColor  = theme.palette.secondary.main;

    const stats = [
        { value: "500+", label: "Active Clients", delay: 0 },
        { value: "99.9%", label: "Uptime", delay: 0.15 },
        { value: "24/7", label: "Support", delay: 0.3 },
    ];

    const styles = useMemo(() => ({
        container: {
            justifyContent: "center",
        },
        wrapper: {
            width: "100%",
            height: "100%",
            textAlign: "center",
            padding: { xs: "60% 25px", sm: "70% 50px", md: "20% 70px" },
            maxWidth: { xs: "100%", md: "1600px" },
            margin: "0 auto",
        },
        title: {
            color: theme.palette.primary.light,
            ...theme.typography.heading1,
            mb: 2,
        },
        description: {
            color: theme.palette.bg.light,
            ...theme.typography.body2,
            mb: { xs: 4, md: 6 },
            animation: "fadeInUp 0.8s ease-out 0.2s backwards",
            ...animations.fadeInUp,
        },
        statsContainer: {
            display: "flex",
            gap: { xs: 3, md: 5 },
            justifyContent: "center",
            flexWrap: "wrap",
            "@media (max-width: 380px)": {
                gap: 2,
            },
        },
        statCard: (delay: number) => ({
            background: "transparent",
            animation: `fadeInUp 0.8s ease-out ${delay}s backwards`,
            ...animations.fadeInUp,
            minWidth: { xs: "120px", md: "150px" },
            "@media (max-width: 380px)": {
                minWidth: "100px",
            },
        }),
        statValue: {
            ...theme.typography.heading1,
            color: "#E91E63",
            lineHeight: 1,
            mb: 1,
        },
        statLabel: {
            ...theme.typography.body1,
            color: theme.palette.bg.light,
        },
    }), [theme]);

    const logoVariant: "dark" | "light" =
        backgroundColor === theme.palette.primary.light ? "light" : "dark";

    const layoutProps = {
        showContactButton: true,
        prevPage: "/reason",
        nextPage: "/contact",
        logoVariant,
        backgroundColor,
    };

    return (
        <>
            <Head>
                <title>Why Choose Us - Auction Fusion</title>
                <meta name="description" content="Industry-leading solutions backed by years of experience" />
            </Head>

            <Layout {...layoutProps}>
                <Box sx={styles.container}>
                    <Box sx={styles.wrapper}>
                        <Typography sx={styles.title}>Why Choose Us</Typography>

                        <Typography sx={styles.description}>
                            Industry-leading solutions backed by years of experience
                        </Typography>

                        <Box sx={styles.statsContainer}>
                            {stats.map((stat, index) => (
                                <Paper
                                    key={index}
                                    elevation={0}
                                    sx={styles.statCard(stat.delay)}
                                >
                                    <Typography sx={styles.statValue}>{stat.value}</Typography>
                                    <Typography sx={styles.statLabel}>{stat.label}</Typography>
                                </Paper>
                            ))}
                        </Box>
                    </Box>
                </Box>
            </Layout>
        </>
    );
}