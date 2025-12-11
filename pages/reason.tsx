import Head from "next/head";
import {Box, Typography} from "@mui/material";
import Layout from "@/components/Layout";
import { useTheme } from "@mui/material/styles";
import { features } from "@/config/reasonData";


export default function FeaturesPage() {
    const theme = useTheme();
    const themeStyle = theme.palette.primary.light;

    return (
        <>
            <Head>
                <title>Features - Auction Fusion</title>
                <meta name="description" content="Discover the powerful features of Auction Fusion platform"/>
            </Head>

            <Layout
                showContactButton={true}
                prevPage="/testimonials"
                nextPage="/why-us"
                logoVariant={themeStyle === theme.palette.primary.light ? "light" : "dark"}
                backgroundColor={themeStyle}
            >

                <Box sx={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    background: themeStyle,
                    padding: {xs: "3% 0%", md: "3% 5.5%"},
                    flexDirection: "column",
                    gap: { xs: 3, md: 10 },
                    paddingTop: { xs: "120px", md: "0" },
                    maxWidth: { xs: "100%", md: "1600px"},
                    justifyContent: {md: "center"},
                    margin: "0 auto",
                    '@media (max-width: 380px)': {
                        paddingTop: "115px",
                    },
                    '@media (min-width: 820px) and (max-width: 1140px)': {
                        paddingTop: "135px",
                        mb: "7%",
                    },
                    '@media (min-width: 470px) and (max-width: 820px)': {
                        paddingTop: "165px",
                        mb: "20%",
                    },
                }}>

                    <Box sx={{
                        display: "grid",
                        gridTemplateColumns: {xs: "1fr", md: "repeat(3, 1fr)"},
                        gap: { xs: 2, md: 4 },
                        margin: "0 auto",
                        paddingTop: { xs: "5%", md: "5.5%" },
                        '@media (max-width: 400px)': {
                          gap: 1.2,
                        },
                        '@media (min-width: 470px) and (max-width: 820px)': {
                            gap: 3,
                        },
                        '@media (min-width: 1220px) and (max-height: 595px)': {
                           gap: 2,
                        },
                    }}>
                        {features.map((feature, index) => (
                            <Box key={feature.id} sx={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: {xs: "flex-start", md: "center"},
                                width: {xs: "95%", md: 350},
                                height: {xs: "auto", md: 235},
                                padding: { xs: 0.7, md: 1.5 },
                                background: theme.palette.whites.dark,
                                borderRadius: 3,
                                pl: {xs: 1, md: 1.5},
                                pt: {xs: 0.8, md: 2},
                                margin: "0 auto",

                                animation: `slideInFromTop 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${index * 0.9}s backwards`,
                                "@keyframes slideInFromTop": {
                                    from: { opacity: 0, transform: "translateY(-100vh)" },
                                    to: { opacity: 1, transform: "translateY(0)" },
                                },
                                '@media (max-width: 400px)': {
                                  // padding: 0.55,
                                  gap: 0.5,
                                },
                                '@media (min-width: 900px) and (max-width: 1180px)': {
                                    width: {xs: "100%", md: 300},
                                    height: {xs: "auto", md: 215},
                                },
                                '@media (min-width: 1220px) and (max-height: 595px)': {
                                    width: 330,
                                    height: 190,
                                },

                            }}>
                                <Typography sx={{
                                    ...theme.typography.heading2,
                                    color: theme.palette.primary.light,
                                    textAlign: {xs: "left", md: "center"},
                                    width: "100%",
                                    '@media (max-width: 400px)': {
                                        pl: 1,
                                        pt: 0.2,
                                        lineHeight: 0.6,
                                    },
                                }}>{feature.heading}</Typography>
                                <Box sx={{
                                    display: {xs:"flex", md:"block"},
                                    width: "100%",
                                    textAlign: {xs: "left", md: "center"},
                                }}>
                                <Typography sx={{
                                    ...theme.typography.heading1,
                                    fontSize: { xs: 40, md: 60 },
                                    mt: {xs: 1, md: 2},
                                    mb: {xs: 1, md: 2},
                                    color: "#E91E63",
                                    pl: {xs:1},
                                    '@media (max-width: 380px)': {
                                        pl: 1,
                                        lineHeight: 0.7,
                                    },
                                    '@media (min-width: 1220px) and (max-height: 595px)': {
                                        ...theme.typography.heading2,
                                    },
                                }}>{feature.data}</Typography>
                                <Typography sx={{
                                    ...theme.typography.body1,
                                    color: theme.palette.primary.main,
                                    lineHeight: 1,
                                    pl: {xs: 2, md: 1.5},
                                    '@media (max-width: 380px)': {
                                        pl: 1,
                                        ...theme.typography.body2,
                                        lineHeight: 1,
                                    },
                                    '@media (min-width: 900px) and (max-width: 1180px)': {
                                        ...theme.typography.body2,
                                    },
                                    '@media (min-width: 1220px) and (max-height: 595px)': {
                                        fontSize: 23,
                                    },
                                }}>{feature.text}</Typography>
                                </Box>
                            </Box>
                        ))}
                    </Box>
                </Box>
            </Layout>
        </>
    );
}
