import Head from "next/head";
import {Box, Typography, useMediaQuery} from "@mui/material";
import Layout from "@/components/Layout";
import {useTheme} from "@mui/material/styles";
import {useMemo} from "react";
import {useScale} from "@/hooks/useScale";
import {useScaleStyles} from "@/hooks/useScaleStyles";
import {features} from "@/config/reasonData";
import {animations} from "@/config/animations";

export default function ReasonPage() {
    const theme = useTheme();
    const backgroundColor = theme.palette.primary.light;
    const scale = useScale();
    const {scaleWrapper, verticalStack} = useScaleStyles(scale);
    const isMobile = useMediaQuery("(max-width:1139px)");

    const styles = useMemo(() => ({
        container: {
            width: "100%",
            height: "100%",
            display: "flex",
            background: backgroundColor,
            padding: {xs: "0% 0%", md: "3% 5.5%"},
            flexDirection: "column",
            paddingTop: {xs: "95px", sm: "40px", md: "0"},
            maxWidth: "1600px",
            margin: "0 auto",
            boxSizing: "border-box",
            justifyContent: {md: "center"},
        },
        featuresGrid: {
            display: "grid",
            gridTemplateColumns: {xs: "1fr", md: "repeat(3, 1fr)"},
            gap: {xs: 1, md: 4},
            margin: "0 auto",
            paddingTop: {xs: "4%", md: "5.5%"},
        },
        featureCard: (index: number) => ({
            display: "flex",
            flexDirection: "column",
            alignItems: {xs: "flex-start", md: "center"},
            width: {xs: "100%", md: 350},
            height: {xs: "auto", md: 235},
            padding: {xs: 0.3, md: 1.5},
            background: theme.palette.whites.dark,
            borderRadius: 3,
            pl: {xs: 1, md: 1.5},
            pt: {xs: 0.8, md: 2},
            margin: "0 auto",
            animation: `slideInFromTop 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${index * 0.9}s backwards`,
            ...animations.slideInFromTop,
            '@media (min-width: 900px) and (max-width: 1180px)': {
                width: {xs: "100%", md: 300},
                height: {xs: "auto", md: 215},
            },
            '@media (min-width: 1220px) and (max-height: 595px)': {
                width: 330,
                height: 190,
            },
        }),
        heading: {
            ...theme.typography.heading2,
            color: theme.palette.primary.light,
            textAlign: {xs: "left", md: "center"},
            width: "100%",
            pt: {xs: 0.1},
            pl: {xs: 1, sm: 0.5},
            lineHeight: {xs: 0.7},

        },
        dataBox: {
            display: {xs: "flex", md: "block"},
            width: "100%",
            textAlign: {xs: "left", md: "center"},
        },
        dataValue: {
            ...theme.typography.heading1,
            fontSize: {xs: 40, md: 60},
            mt: {xs: 1, md: 2},
            mb: {xs: 1, md: 2},
            color: "#E91E63",
            pl: {xs: 1, sm: 0.5},
            pt: {xs: 0.2},
            lineHeight: {xs: 0.8},
            '@media (min-width: 1220px) and (max-height: 595px)': {
                ...theme.typography.heading2,
            },
        },
        featureText: {
            ...theme.typography.body1,
            color: theme.palette.primary.main,
            lineHeight: 0.95,
            pt: {xs: 0.25, sm: 0.9},
            pl: {xs: 1, sm: 0.7, md: 1.5},
            '@media (min-width: 900px) and (max-width: 1180px)': {
                ...theme.typography.body2,
            },
            '@media (min-width: 1220px) and (max-height: 595px)': {
                fontSize: 23,
            },
        },
    }), [theme, backgroundColor]);

    const logoVariant: "dark" | "light" =
        backgroundColor === theme.palette.primary.light ? "light" : "dark";

    const pageHead = (
        <Head>
            <title>Why Auction Fusion - Auction Fusion</title>
            <meta name="description" content="Discover why Auction Fusion is the best choice for your auction business"/>
        </Head>
    );

    const renderReasonContent = () => (
        <Box sx={styles.container}>
            <Box sx={styles.featuresGrid}>
                {features.map((feature, index) => (
                    <Box key={feature.id} sx={styles.featureCard(index)}>
                        <Typography sx={styles.heading}>
                            {feature.heading}
                        </Typography>
                        <Box sx={styles.dataBox}>
                            <Typography sx={styles.dataValue}>
                                {feature.data}
                            </Typography>
                            <Typography sx={styles.featureText}>
                                {feature.text}
                            </Typography>
                        </Box>
                    </Box>
                ))}
            </Box>
        </Box>
    );

    const layoutProps = {
        showContactButton: true,
        prevPage: "/testimonials",
        nextPage: "/why-us",
        logoVariant,
        backgroundColor,
    };

    // *********** Mobile version **********
    if (isMobile) {
        return (
            <>
                {pageHead}
                <Layout {...layoutProps}>
                    <Box sx={scaleWrapper}>
                        <Box sx={verticalStack}>
                            {renderReasonContent()}
                        </Box>
                    </Box>
                </Layout>
            </>
        );
    }

    // ********** Desktop version **********
    return (
        <>
            {pageHead}
            <Layout {...layoutProps}>
                {renderReasonContent()}
            </Layout>
        </>
    );
}
