import Head from "next/head";
import {Box, Typography, useMediaQuery} from "@mui/material";
import Layout from "@/components/Layout";
import {bPath} from "@/config/basePath";
import {useTheme} from "@mui/material/styles";
import {useMemo} from "react";
import {useScale} from "@/hooks/useScale";
import {useScaleStyles} from "@/hooks/useScaleStyles";
import {animations} from "@/config/animations";
import {designContent} from "@/config/designData";

export default function DesignPage() {
    const theme = useTheme();
    const backgroundColor = theme.palette.secondary.main;
    const scale = useScale();
    const {scaleWrapper, verticalStack} = useScaleStyles(scale);
    const isMobile = useMediaQuery("(max-width:1139px)");

    const styles = useMemo(() => ({
        container: {
            display: "flex",
            // height: "100%",
            flexDirection: {xs: "column", md: "row"},
            alignItems: "center",
            justifyContent: "center",
            gap: {xs: 1, md: 4},
            padding: {xs: "2% 2%", md: "3% 4.5%"},
            paddingTop: {xs: "115px", md: ""},
            maxWidth: {xs: "100%", md: "1600px"},
            margin: "0 auto",
            "@media (min-width: 600px) and (max-width: 1140px)": {
                // transform: "translateY(-5%)",
                textAlign: "center",
                pt: 27,
                pb:35,
                scale: 0.95,
            },
        },
        imageSection: {
            flex: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            order: {xs: 1, md: 1},
        },
        imageWrapper: {
            maxWidth: "670px",
            width: "90%",
            position: "relative",
        },
        image: {
            width: "100%",
            height: "auto",
            position: "relative",
            zIndex: 0,
            borderRadius: 2,
        },
        textSection: {
            flex: 1,
            textAlign: {xs: "center", md: "left"},
            display: "flex",
            flexDirection: "column",
            gap: {xs: 2, md: 2},
            order: {xs: 2, md: 2},
            maxWidth: "670px",
            padding: {xs: 0, md: "0"},
            pr: {xs: 0, md: "3%"},
        },
        heading: {
            ...theme.typography.heading1,
            color: theme.palette.primary.light,
            overflowWrap: "break-word",
            animation: "fadeInUp 0.8s ease-out",
            ...animations.fadeInUp,
            "@media (min-width: 600px) and (max-width: 1140px)": {
                fontWeight: 600,
                fontSize: "30px",
            },
        },
        bodyText: {
            ...theme.typography.body1,
            fontSize: "22px",
            color: theme.palette.bg.light,
            animation: "fadeInUp 0.8s ease-out 0.4s backwards",
            ...animations.fadeInUp,
            "@media (min-width: 600px) and (max-width: 1140px)": {
                fontSize: "16px",
            },
        },
    }), [theme]);

    const logoVariant = backgroundColor === theme.palette.primary.light ? "light" : "dark";

    // Shared page head
    const pageHead = (
        <Head>
            <title>Design Philosophy - Auction Fusion</title>
            <meta name="description" content="Designed for clicks. Built for people."/>
        </Head>
    );

    // Shared design content
    const renderDesignContent = () => (
        <Box sx={styles.container}>
            {/* Left half - Image */}
            <Box sx={styles.imageSection}>
                <Box sx={styles.imageWrapper}>
                    <Box
                        component="img"
                        alt="Design Preview"
                        src={`${bPath}/design.jpeg`}
                        sx={styles.image}
                    />
                </Box>
            </Box>

            {/* Right half - Text content */}
            <Box sx={styles.textSection}>
                <Typography sx={styles.heading}>
                    {designContent.title.split('\n').map((line, index) => (
                        <span key={index}>
              {line}
                            {index === 0 && <br/>}
            </span>
                    ))}
                </Typography>

                <Typography sx={styles.bodyText}>
                    {designContent.bodyText}
                    <br/>
                    <Box component="span" sx={{display: {xs: "none", md: "inline"}}}>
                        {designContent.additionalText}
                        <br/>
                    </Box>
                    <br/>
                    <strong>{designContent.emphasizedText}</strong>
                </Typography>
            </Box>
        </Box>
    );

    // *********** Mobile version **********
    if (isMobile) {
        return (
            <>
                {pageHead}
                <Layout
                    showContactButton={true}
                    prevPage="/features"
                    nextPage="/testimonials"
                    logoVariant={logoVariant}
                    backgroundColor={backgroundColor}
                >
                    <Box sx={scaleWrapper}>
                        <Box sx={verticalStack}>
                            {renderDesignContent()}
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
                prevPage="/features"
                nextPage="/testimonials"
                logoVariant={logoVariant}
                backgroundColor={backgroundColor}
            >
                {renderDesignContent()}
            </Layout>
        </>
    );
}
