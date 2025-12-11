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
            flexDirection: {xs: "column", md: "row"},
            alignItems: "center",
            justifyContent: "center",
            gap: {xs: 1, md: 10},
            padding: {xs: "2% 2%", md: "3% 4.5%"},
            paddingTop: {xs: "100px", sm: 27, md: ""},
            pb: {sm: 35},
            maxWidth: {xs: "100%", md: "1600px"},
            margin: "0 auto",
            scale: {sm: 0.95},
        },
        imageSection: {
            flex: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            maxWidth: "670px",
            width: "90%",
            margin: "0 auto",
        },
        image: {
            width: "100%",
            height: "auto",
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
        },
        bodyText: {
            ...theme.typography.body1,
            fontSize: "22px",
            color: theme.palette.bg.light,
            animation: "fadeInUp 0.8s ease-out 0.4s backwards",
            ...animations.fadeInUp,
        },
    }), [theme]);

    const logoVariant: "dark" | "light" =
        backgroundColor === theme.palette.primary.light ? "light" : "dark";

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
                <Box
                    component="img"
                    alt="Design Preview"
                    src={`${bPath}/design.jpeg`}
                    sx={styles.image}
                />
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

    const layoutProps = {
        showContactButton: true,
        prevPage: "/features",
        nextPage: "/testimonials",
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
            <Layout {...layoutProps}>
                {renderDesignContent()}
            </Layout>
        </>
    );
}
