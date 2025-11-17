import Head from "next/head";
import {Box, Typography, useMediaQuery} from "@mui/material";
import Layout from "@/components/Layout";
import {useTheme} from "@mui/material/styles";
import {useMemo} from "react";
import {useScale} from "@/hooks/useScale";
import {useScaleStyles} from "@/hooks/useScaleStyles";
import {animations} from "@/config/animations";
import {features, HAND_ICON_PATH} from "@/config/featuresData";

export default function FeaturesPage() {
    const theme = useTheme();
    const backgroundColor = theme.palette.primary.light;
    const scale = useScale();
    const {scaleWrapper, verticalStack} = useScaleStyles(scale);
    const isMobile = useMediaQuery("(max-width:1139px)");

    const styles = useMemo(() => ({
        handAnimation: {
            display: {xs: "block", md: "none"},
            position: "relative",
            pt: "25px",
            pb: "20px",
            transform: "translateX(80%)",
            zIndex: 1000,
            pointerEvents: "none",
            animation: "handSwipe 2.5s ease-in-out 4s 2",
            opacity: 0,
            ...animations.handSwipe,
            "@media (min-width: 600px) and (max-width: 1140px)": {
                pt: 0,
                transform: "translateY(-20px) translateX(70%) scale(0.7)",
            },
            '@media (max-width: 380px)': {
                pt: "20px",
                transform: "translateX(80%) scale(0.7)",
            },
        },
        container: {
            width: "100%",
            height: "100%",
            display: "flex",
            background: backgroundColor,
            padding: {xs: "3% 3%", md: "3% 5.5%"},
            flexDirection: "column",
            gap: {xs: 3, md: 7},
            paddingTop: {xs: "30%", md: "0%"},
            paddingBottom: {xs: "0%", md: "0%"},
            maxWidth: {xs: "100%", md: "1600px"},
            justifyContent: {md: "center"},
            margin: "0 auto",
            boxSizing: "border-box",
            "@media (min-width: 600px) and (max-width: 1140px)": {
                pt: "70px",
                gap: 2,
            },
        },
        heading: {
            ...theme.typography.heading1,
            color: theme.palette.whites.main,
            textAlign: "center",
            "@media (min-width: 600px) and (max-width: 1140px)": {
                fontWeight: 600,
                fontSize: "30px",
            },
        },
        featuresGrid: {
            display: "grid",
            gridTemplateColumns: {xs: "1fr", md: "repeat(2, 1fr)"},
            gap: {xs: "5%", md: 7},
            maxWidth: "1100px",
            margin: "0 auto",
            '@media (min-width: 600px) and (max-width: 1140px)': {
                minWidth: "350px",
                gap: 2,
                transform: "translateX(-12px)",
            },
        },
        featureCard: (index: number) => ({
            display: "flex",
            alignItems: "center",
            gap: {xs: 1.5, md: 3},
            padding: {xs: 1.5, md: 3},
            background: theme.palette.whites.dark,
            borderRadius: 3,
            animation: `flipIn 0.8s ease-out ${index * 0.9}s backwards`,
            "@keyframes flipIn": {
                from: {opacity: 0, transform: "perspective(400px) rotateX(-90deg)"},
                to: {opacity: 1, transform: "perspective(400px) rotateX(0)"},
            },
            '@media (min-width: 470px) and (max-width: 1140px)': {
                padding: 0.7,
            },
        }),
        iconContainer: {
            flexShrink: 0,
            width: {xs: 60, md: 100},
            height: {xs: 60, md: 100},
        },
        featureText: {
            ...theme.typography.body1,
            color: theme.palette.primary.main,
            "@media (min-width: 600px) and (max-width: 1140px)": {
                fontSize: "16px",
            },
        },
    }), [theme, backgroundColor]);

    const logoVariant = backgroundColor === theme.palette.primary.light ? "light" : "dark";

    // Shared page head
    const pageHead = (
        <Head>
            <title>Features - Auction Fusion</title>
            <meta name="description" content="Discover the powerful features of Auction Fusion platform"/>
        </Head>
    );

    // Shared features content
    const renderFeaturesContent = () => (
        <Box sx={styles.container}>
            <Typography sx={styles.heading}>
                Why Auction Fusion?
            </Typography>
            <Box sx={styles.featuresGrid}>
                {features.map((feature, index) => (
                    <Box key={feature.id} sx={styles.featureCard(index)}>
                        <Box sx={styles.iconContainer}>
                            <svg
                                viewBox={feature.svgViewBox}
                                aria-label={feature.ariaLabel}
                                style={{width: "100%", height: "100%"}}
                            >
                                {feature.svgPaths}
                            </svg>
                        </Box>
                        <Typography sx={styles.featureText}>
                            {feature.text}
                        </Typography>
                    </Box>
                ))}
            </Box>
            {isMobile && (
                <Box sx={styles.handAnimation}>
                    <svg width="70" height="70" viewBox="-1 0 100 100">
                        <path d={HAND_ICON_PATH} fill="white"/>
                    </svg>
                </Box>
            )}
        </Box>
    );

    // *********** Mobile version **********
    if (isMobile) {
        return (
            <>
                {pageHead}
                <Layout
                    showContactButton={true}
                    prevPage="/home"
                    nextPage="/design"
                    logoVariant={logoVariant}
                    backgroundColor={backgroundColor}
                >
                    <Box sx={scaleWrapper}>
                        <Box sx={verticalStack}>
                            {renderFeaturesContent()}
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
            <Layout
                showContactButton={true}
                prevPage="/home"
                nextPage="/design"
                logoVariant={logoVariant}
                backgroundColor={backgroundColor}
            >
                {renderFeaturesContent()}
            </Layout>
        </>
    );
}