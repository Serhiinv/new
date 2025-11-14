import Head from "next/head";
import { Box, Typography } from "@mui/material";
import Layout from "@/components/Layout";
import { useTheme } from "@mui/material/styles";
import { useEffect, useState, useMemo } from "react";

interface Feature {
    id: string;
    text: string;
    svgViewBox: string;
    svgPaths: React.ReactNode;
    ariaLabel: string;
}

// Animation keyframes
const animations = {
    fadeInUp: {
        "@keyframes fadeInUp": {
            from: { opacity: 0, transform: "translateY(20px)" },
            to: { opacity: 1, transform: "translateY(0)" },
        },
    },
    slideInRight: {
        "@keyframes slideInRight": {
            from: { opacity: 0, transform: "translateX(100px)" },
            to: { opacity: 1, transform: "translateX(0)" },
        },
    },
    handSwipe: {
        "@keyframes handSwipe": {
            "0%": { right: "10%", opacity: 0 },
            "10%": { opacity: 1 },
            "40%": { right: "60%", opacity: 1 },
            "50%": { right: "60%", opacity: 0 },
            "50.1%": { right: "10%", opacity: 0 },
            "100%": { right: "10%", opacity: 0 },
        },
    },
};

// Feature data
const features: Feature[] = [
    {
        id: "seo-ai",
        text: "More consignors and buyers find you on Google and AI.",
        svgViewBox: "-1 -2 50 50",
        ariaLabel: "Search icon",
        svgPaths: (
            <g className="color1" style={{ fill: "#E91E63" }}>
                <path d="M19.16,5.6A13.47,13.47,0,1,0,32.63,19.07,13.48,13.48,0,0,0,19.16,5.6Zm0,24.94A11.47,11.47,0,1,1,30.63,19.07,11.48,11.48,0,0,1,19.16,30.54Z"></path>
                <path d="M43.7,37.54l-8.39-8.41A19,19,0,0,0,19.11,0h-.05A19.11,19.11,0,0,0,5.63,32.65,19,19,0,0,0,19.1,38.21h.06a18.94,18.94,0,0,0,10-2.89l8.37,8.4A4.34,4.34,0,0,0,40.61,45h0a4.37,4.37,0,0,0,3.09-7.46ZM19.15,36.21A17.11,17.11,0,0,1,19.06,2h0a17.11,17.11,0,0,1,0,34.21ZM42.29,42.3a2.35,2.35,0,0,1-1.68.7h0a2.35,2.35,0,0,1-1.68-.7l-8.12-8.15a19.28,19.28,0,0,0,3.35-3.35L42.29,39A2.38,2.38,0,0,1,42.29,42.3Z"></path>
            </g>
        ),
    },
    {
        id: "conversion",
        text: "Better conversion from first click to sold.",
        svgViewBox: "-1 0 100 100",
        ariaLabel: "Conversion icon",
        svgPaths: (
            <g className="color1" style={{ fill: "#E91E63" }}>
                <path d="m86.89,53.83c-1.57-6.4-4.51-10.68-8.74-12.73-4.91-2.38-11.09-1.13-14.69,2.97-.02.03-.05.05-.07.08-.2-.24-.4-.47-.62-.7-2.73-2.95-7.09-4.85-11.22-4.37.28-1.53.43-3.09.43-4.7,0-14.33-11.66-25.99-25.99-25.99S0,20.03,0,34.36s11.66,25.99,25.99,25.99c.23,0,.45-.02.67-.03,1.95,4.76,3.93,9.52,5.93,14.26-1.15-.12-2.31-.21-3.47-.21h-.03c-4.19,0-7.28,1.2-9.18,3.57-2.34,2.9-2.43,7.39-.24,10.91,1.8,2.88,4.62,4.64,6.88,5.86,6.95,3.73,14.94,5.71,22.86,5.71,1.2,0,2.4-.05,3.59-.14,1.93-.15,3.37-1.83,3.22-3.76-.15-1.93-1.83-3.36-3.76-3.22-7.73.6-15.76-1.09-22.6-4.76-1.5-.8-3.33-1.91-4.25-3.39-.6-.96-.71-2.25-.25-2.82.49-.61,1.85-.96,3.73-.96h.02c2.3,0,4.57.33,6.78.94.26.61.52,1.23.79,1.84.57,1.32,1.86,2.11,3.21,2.11.46,0,.93-.09,1.39-.29,1.77-.77,2.59-2.83,1.83-4.6-4.59-10.63-9.1-21.47-13.4-32.19-1.01-2.52-2.15-5.37-1.93-7.91.16-1.87,1.43-3.62,2.7-3.74,1.61-.16,3.56,1.82,5.62,5.70l8.04,15.16c.71,1.57,1.53,3.03,2.3,4.41.95,1.68,3.08,2.29,4.77,1.34,1.15-.64,1.78-1.84,1.77-3.07.01-.57-.10-1.16-.39-1.70l-2.13-4.02c-.53-1.19-.94-2.39-1.11-3.59-.31-2.18.36-4.32,1.63-5.22,1.84-1.29,4.99-.16,6.67,1.66,1.24,1.34,2.13,3.09,2.82,4.94.14,2.07.78,4.10,1.95,5.87.95,1.44,2.8,1.98,4.37,1.27,1.57-.71,2.39-2.45,1.94-4.12-.37-1.34-.76-2.79-1.26-4.27.07-1.18.5-2.34,1.27-3.21,1.51-1.72,4.31-2.29,6.37-1.29,2.82,1.37,4.27,5.16,4.99,8.10,2.84,11.6-.05,24.57-7.56,33.85-1.22,1.50-.98,3.71.52 4.92.65.52,1.43.78,2.20.78,1.02,0,2.03-.44,2.72-1.30,8.85-10.95,12.27-26.25,8.92-39.92ZM29.83,30.56c-5.33.5-8.63,5.58-9.02,10.10-.37,4.2,1.17,8.04,2.4,11.12.19.48.39.96.58,1.43-9.44-1.10-16.79-9.13-16.79-18.86,0-10.47,8.52-18.99,18.99-18.99s18.99,8.52,18.99,18.99c0,2.72-.59,5.29-1.62,7.63l-1.08-2.04c-1.32-2.49-5.34-10.05-12.46-9.39Z"></path>
                <path d="m49.9,12.19c.63.48,1.37.71,2.11.71,1.06,0,2.11-.48,2.79-1.39l4.46-5.9c1.17-1.54.86-3.74-.68-4.9-1.54-1.17-3.74-.86-4.9.68l-4.46,5.9c-1.17,1.54-.86,3.74.68,4.9Z"></path>
                <path d="m56.36,17.8c.53,1.4,1.86,2.27,3.28,2.27.41,0,.82-.07,1.23-.22l10.68-4.01c1.81-.68,2.73-2.7,2.05-4.51-.68-1.81-2.7-2.73-4.51-2.05l-10.68,4.01c-1.81.68-2.73,2.7-2.05,4.51Z"></path>
                <path d="m60.33,23.95c-1.91-.31-3.7.99-4.01,2.9-.31,1.91.99,3.71,2.9,4.01l7.88,1.27c.19.03.38.05.56.05,1.69,0,3.17-1.22,3.45-2.94.31-1.91-.99-3.71-2.9-4.01l-7.88-1.27Z"></path>
            </g>
        ),
    },
    {
        id: "mobile-ai",
        text: "AI-ready. Mobile-optimised. Future-proof.",
        svgViewBox: "-1 -2 50 50",
        ariaLabel: "Mobile device icon",
        svgPaths: (
            <g className="color1" style={{ fill: "#E91E63" }}>
                <circle cx="12.7" cy="40.18" r="1.86"></circle>
                <path d="M33.33,9.34H25.4V6a6,6,0,0,0-6-6H6A6,6,0,0,0,0,6V39.69a6,6,0,0,0,6,6H19.4a6,6,0,0,0,6-6V23.83h7.93a2.15,2.15,0,0,0,2.15-2.15V11.49A2.15,2.15,0,0,0,33.33,9.34ZM6,2H19.4a4,4,0,0,1,3.86,3H2.14A4,4,0,0,1,6,2ZM19.4,43.69H6a4,4,0,0,1-4-4V36.5H23.4v3.19A4,4,0,0,1,19.4,43.69Zm4-9.19H2V7H23.4V9.34H18.45a2.15,2.15,0,0,0-2.15,2.15v8.33l-1.95,1.69a1.32,1.32,0,0,0,.87,2.32H23.4ZM33.48,21.68a.15.15,0,0,1-.15.15H17L18,21a1,1,0,0,0,.34-.76V11.49a.15.15,0,0,1,.15-.15H33.33a.15.15,0,0,1,.15.15Z"></path>
                <path d="M30.74,15.65H21a1,1,0,0,0,0,2h9.75a1,1,0,0,0,0-2Z"></path>
            </g>
        ),
    },
    {
        id: "pricing",
        text: "Low monthly licence fee.",
        svgViewBox: "-1 -1 40 40",
        ariaLabel: "Pricing icon",
        svgPaths: (
            <g className="color1" style={{ fill: "#E91E63" }}>
                <path d="M15.4,27.85a2.65,2.65,0,0,1-2.65,2.65,2.32,2.32,0,0,1-1.7-.74,2.24,2.24,0,0,1-1.65.74A.77.77,0,0,1,9.4,29a.7.7,0,0,0,.7-.71,7.9,7.9,0,0,0-.64-2.34H8.37a.78.78,0,0,1,0-1.55h.56a7.18,7.18,0,0,1-.37-2.09h0a2.88,2.88,0,0,1,5.75,0,.77.77,0,0,1-1.54,0,1.34,1.34,0,0,0-2.67,0,6.66,6.66,0,0,0,.45,2.1h1.6a.78.78,0,0,1,0,1.55H11.1a9.57,9.57,0,0,1,.48,1.66l0,.06C12,29,12.53,29,12.75,29a1.11,1.11,0,0,0,1.11-1.11.77.77,0,0,1,1.54,0ZM37,19.05h0V31.19c0,3.68-10.76,3.78-12,3.78a43.23,43.23,0,0,1-6.4-.5A11.5,11.5,0,1,1,5.11,15.93H5V3.78C5,.11,15.8,0,17,0S29,.11,29,3.78V15.11c3.52.32,8.05,1.21,8.05,3.59A2,2,0,0,1,37,19.05Zm-2,1.93c-3.17,1.44-9.1,1.5-10,1.5-.32,0-1.27,0-2.5-.09a11.45,11.45,0,0,1,.37,4.28c.68,0,1.38,0,2.13,0,6,0,9.6-1.18,10-1.86Zm-10-4.06a36.58,36.58,0,0,0-5.5.39,11.76,11.76,0,0,1,2.2,3l.27,0,.41,0,.54,0,.6,0H24l1.07,0,1.07,0h.34l.68,0,.4,0,.56,0,.4,0,.51,0,.39-.05.46,0,.36-.05.43-.06L31,20,31.4,20l.32-.06.35-.07.29-.07.31-.08.26-.07.28-.08.23-.07.25-.08.2-.07.21-.08.17-.07.17-.08.14-.07.13-.08.1-.07.1-.07.07-.06,0,0C34.36,18,30.78,16.92,25.07,16.92ZM7.09,3.78c.63.68,4.22,1.78,9.94,1.78s9.3-1.1,9.93-1.78C26.33,3.09,22.74,2,17,2S7.72,3.09,7.09,3.78ZM7,10c.34.57,4,1.77,10,1.77S26.61,10.62,27,10V6.06c-3.18,1.44-9.1,1.5-10,1.5S10.21,7.5,7,6.06Zm0,4.86a11.46,11.46,0,0,1,10.41.77,39.89,39.89,0,0,1,7.62-.74c.27,0,1,0,1.95.05V12.3c-3.17,1.45-9.1,1.5-10,1.5s-6.82-.05-10-1.49Zm14,10.6A9.5,9.5,0,1,0,11.5,35,9.51,9.51,0,0,0,21,25.49ZM35.08,31.1V27.22c-3.17,1.45-9.11,1.5-10,1.5-.32,0-1.28,0-2.52-.08a11.41,11.41,0,0,1-2.11,4.06,38.66,38.66,0,0,0,4.63.27C31.06,33,34.71,31.77,35.08,31.1Z"></path>
            </g>
        ),
    },
];

// Hand icon SVG path
const HAND_ICON_PATH = "m86.89,53.83c-1.57-6.4-4.51-10.68-8.74-12.73-4.91-2.38-11.09-1.13-14.69,2.97-.02.03-.05.05-.07.08-.2-.24-.4-.47-.62-.7-2.73-2.95-7.09-4.85-11.22-4.37.28-1.53.43-3.09.43-4.7,0-14.33-11.66-25.99-25.99-25.99S0,20.03,0,34.36s11.66,25.99,25.99,25.99c.23,0,.45-.02.67-.03,1.95,4.76,3.93,9.52,5.93,14.26-1.15-.12-2.31-.21-3.47-.21h-.03c-4.19,0-7.28,1.2-9.18,3.57-2.34,2.9-2.43,7.39-.24,10.91,1.8,2.88,4.62,4.64,6.88,5.86,6.95,3.73,14.94,5.71,22.86,5.71,1.2,0,2.4-.05,3.59-.14,1.93-.15,3.37-1.83,3.22-3.76-.15-1.93-1.83-3.36-3.76-3.22-7.73.6-15.76-1.09-22.6-4.76-1.5-.8-3.33-1.91-4.25-3.39-.6-.96-.71-2.25-.25-2.82.49-.61,1.85-.96,3.73-.96h.02c2.3,0,4.57.33,6.78.94.26.61.52,1.23.79,1.84.57,1.32,1.86,2.11,3.21,2.11.46,0,.93-.09,1.39-.29,1.77-.77,2.59-2.83,1.83-4.6-4.59-10.63-9.1-21.47-13.4-32.19-1.01-2.52-2.15-5.37-1.93-7.91.16-1.87,1.43-3.62,2.7-3.74,1.61-.16,3.56,1.82,5.62,5.70l8.04,15.16c.71,1.57,1.53,3.03,2.3,4.41.95,1.68,3.08,2.29,4.77,1.34,1.15-.64,1.78-1.84,1.77-3.07.01-.57-.10-1.16-.39-1.70l-2.13-4.02c-.53-1.19-.94-2.39-1.11-3.59-.31-2.18.36-4.32,1.63-5.22,1.84-1.29,4.99-.16,6.67,1.66,1.24,1.34,2.13,3.09,2.82,4.94.14,2.07.78,4.10,1.95,5.87.95,1.44,2.8,1.98,4.37,1.27,1.57-.71,2.39-2.45,1.94-4.12-.37-1.34-.76-2.79-1.26-4.27.07-1.18.5-2.34,1.27-3.21,1.51-1.72,4.31-2.29,6.37-1.29,2.82,1.37,4.27,5.16,4.99,8.10,2.84,11.6-.05,24.57-7.56,33.85-1.22,1.50-.98,3.71.52 4.92.65.52,1.43.78,2.20.78,1.02,0,2.03-.44,2.72-1.30,8.85-10.95,12.27-26.25,8.92-39.92ZM29.83,30.56c-5.33.5-8.63,5.58-9.02,10.10-.37,4.2,1.17,8.04,2.4,11.12.19.48.39.96.58,1.43-9.44-1.10-16.79-9.13-16.79-18.86,0-10.47,8.52-18.99,18.99-18.99s18.99,8.52,18.99,18.99c0,2.72-.59,5.29-1.62,7.63l-1.08-2.04c-1.32-2.49-5.34-10.05-12.46-9.39Z";

export default function FeaturesPage() {
    const theme = useTheme();
    const backgroundColor = theme.palette.primary.light;
    const [showHandAnimation, setShowHandAnimation] = useState(true);

    useEffect(() => {
        // Hide hand animation after it completes (2 swipes = ~10 seconds)
        const timer = setTimeout(() => {
            setShowHandAnimation(false);
        }, 10000);
        return () => clearTimeout(timer);
    }, []);

    // Memoized styles to avoid recalculation on every render
    const styles = useMemo(() => ({
        handAnimation: {
            display: { xs: "block", md: "none" },
            position: "fixed",
            bottom: "12.5%",
            '@media (max-width: 380px)': {
                bottom: "15%",
            },
            right: "10%",
            transform: "translateY(50%)",
            zIndex: 1000,
            pointerEvents: "none",
            animation: "handSwipe 2.5s ease-in-out 4s 2",
            opacity: 0,
            ...animations.handSwipe,
        },
        container: {
            width: "100%",
            minHeight: { xs: "90vh", md: "100%" },
            height: { xs: "auto", md: "100%" },
            display: "flex",
            background: backgroundColor,
            padding: { xs: "3% 3%", md: "3% 5.5%" },
            flexDirection: "column",
            gap: { xs: 3, md: 7 },
            paddingTop: { xs: "37%", md: "0%" },
            paddingBottom: { xs: "0%", md: "0%" },
            maxWidth: { xs: "100%", md: "1600px" },
            justifyContent: { md: "center" },
            margin: "0 auto",
            '@media (max-width: 380px)': {
                padding: "2% 3%",
                paddingTop: "122px",
                paddingBottom: "26.5%",
            },
            '@media (min-width: 470px) and (max-width: 1140px)': {
                minHeight: "94.5vh",
                paddingTop: "200px",
                paddingBottom: "30%",
                gap: 3,
            },
        },
        heading: {
            ...theme.typography.heading1,
            color: theme.palette.whites.main,
            textAlign: "center",
            animation: "fadeInUp 0.8s ease-out",
            ...animations.fadeInUp,
        },
        featuresGrid: {
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "repeat(2, 1fr)" },
            gap: { xs: "5%", md: 7 },
            maxWidth: "1100px",
            margin: "0 auto",
            '@media (max-width: 380px)': {
                gap: 0.7,
            },
        },
        featureCard: (index: number) => ({
            display: "flex",
            alignItems: "center",
            gap: { xs: 1.5, md: 3 },
            padding: { xs: 1.5, md: 3 },
            background: theme.palette.whites.dark,
            borderRadius: 3,
            animation: `flipIn 0.8s ease-out ${index * 0.8}s backwards`,
            "@keyframes flipIn": {
                from: { opacity: 0, transform: "perspective(400px) rotateX(-90deg)" },
                to: { opacity: 1, transform: "perspective(400px) rotateX(0)" },
            },
            '@media (max-width: 380px)': {
                padding: 0.7,
                gap: 1,
            },
        }),
        iconContainer: {
            flexShrink: 0,
            width: { xs: 60, md: 100 },
            height: { xs: 60, md: 100 },
        },
        featureText: () => ({
            ...theme.typography.body1,
            color: theme.palette.primary.main,
        }),
    }), [theme, backgroundColor]);

    return (
        <>
            <Head>
                <title>Features - Auction Fusion</title>
                <meta name="description" content="Discover the powerful features of Auction Fusion platform" />
            </Head>

            <Layout
                showContactButton={true}
                prevPage="/home"
                nextPage="/design"
                logoVariant={backgroundColor === theme.palette.primary.light ? "light" : "dark"}
                backgroundColor={backgroundColor}
            >
                {/* Hand Swipe Animation */}
                {showHandAnimation && (
                    <Box sx={styles.handAnimation}>
                        <svg width="70" height="70" viewBox="-1 0 100 100">
                            <path d={HAND_ICON_PATH} fill="white" />
                        </svg>
                    </Box>
                )}

                {/* Main Content */}
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
                                        style={{ width: "100%", height: "100%" }}
                                    >
                                        {feature.svgPaths}
                                    </svg>
                                </Box>
                                <Typography sx={styles.featureText()}>
                                    {feature.text}
                                </Typography>
                            </Box>
                        ))}
                    </Box>
                </Box>
            </Layout>
        </>
    );
}
