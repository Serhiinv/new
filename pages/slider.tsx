import Head from "next/head";
import {Box, Typography, useMediaQuery} from "@mui/material";
import Layout from "@/components/Layout";
import SliderCard from "@/components/SliderCard";
import {useTheme} from "@mui/material/styles";
import {useMemo} from "react";
import {useScale} from "@/hooks/useScale";
import {useScaleStyles} from "@/hooks/useScaleStyles";

export default function SliderPage() {
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
            ...theme.typography.heading2,
            color: theme.palette.whites.main,
            textAlign: "center",
            "@media (min-width: 600px) and (max-width: 1140px)": {
                fontWeight: 600,
                fontSize: "30px",
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

    // Shared content
    const renderPageContent = () => (
        <Box sx={styles.container}>
            <Typography sx={styles.heading}>
                Binary Vision: creators of Auction Fusion
            </Typography>
            <Box sx={{width: "100%", display: "flex", justifyContent: "center", alignItems: "center", minHeight: 300}}>
                <SliderCard
                    // orientation="vertical"
                    orientation="horizontal"
                    first={
                        <Box sx={{padding: 4,
                        backgroundColor: theme.palette.whites.main,}}>
                            <Typography variant="h5" sx={{mb: 3, textAlign: "center",}}>Affordable excellence</Typography>
                            <Typography>Auction Fusion provides a dedicated, feature-rich auction experience for a low monthly licence fee. This also includes technical support, cloud hosting and maintenance.
                                <br/><br/>
                                There are no per auction, hammer or user costs.
                                <br/><br/>
                                Please get in touch for details on Auction Fusion prices and features.
                            </Typography>
                        </Box>
                    }
                    second={
                        <Box sx={{padding: 4,
                        color: theme.palette.whites.main,}}>
                            <Typography variant="h5" sx={{mb: 3, textAlign: "center"}}>Auction Fusion</Typography>
                            <Typography>  is built and supported by web and digital experts, Binary Vision.
                                <br/><br/>
                                Binary Vision have been trailblazers in digital for 40 years, working with high-profile clients such as: Royal Air Force, Barnardo’s and AstraZeneca.
                                <br/><br/>
                                Binary Vision&apos;s Auction Fusion team have, between them, over a hundred years of digital expertise.</Typography>
                        <br/>
                        <br/>
                        </Box>
                    }
                />
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
                    prevPage="/book"
                    nextPage="/case-study"
                    logoVariant={logoVariant}
                    backgroundColor={backgroundColor}
                >
                    <Box sx={scaleWrapper}>
                        <Box sx={verticalStack}>
                            {renderPageContent()}
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
                prevPage="/book"
                nextPage="/case-study"
                logoVariant={logoVariant}
                backgroundColor={backgroundColor}
            >
                {renderPageContent()}
            </Layout>
        </>
    );
}