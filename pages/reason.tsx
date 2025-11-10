import Head from "next/head";
import {Box, Typography} from "@mui/material";
import Layout from "@/components/Layout";
import { useTheme } from "@mui/material/styles";

interface Feature {
    id: string;
    heading: string;
    data: string;
    text: string;
    ariaLabel: string;
}

const features: Feature[] = [
    {
        id: "Impact",
        heading: "Instant impact",
        data: "+70%",
        text: "Auction registrations \n" +
            "up in three months \n" +
            "after go live.",
        ariaLabel: "Impact",
    },
    {
        id: "Targeted search",
        heading: "Targeted search",
        data: "2/3",
        text: "Of target actions (e.g. request estimate) from free-search customers.",
        ariaLabel: "Targeted search",
    },
    {
        id: "Customers love it",
        heading: "Customers love it",
        data: "88%",
        text: "Of customers rated site \n" +
            "4 or 5 out of 5 (200+ customers).",
        ariaLabel: "Customers love it",
    },
    {
        id: "Google loves it",
        heading: "Google loves it",
        data: "100%",
        text: "Upcoming lots on \n" +
            "Google within hours -\n" +
            "way ahead of competitors.",
        ariaLabel: "Google loves it",
    },
    {
        id: "Improved reach",
        heading: "Improved reach",
        data: "16,700%",
        text: "Recent site launch saw this massive increase in weeks.",
        ariaLabel: "Improved reach",
    },
    {
        id: "Key to ALL sales ",
        heading: "Key to ALL sales ",
        data: "91%",
        text: "Of all winning bidders\n" +
            "are registered on \n" +
            "the website.",
        ariaLabel: "Key to ALL sales ",
    },
];


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
                    padding: {xs: "3% 4%", md: "3% 5.5%"},
                    flexDirection: "column",
                    gap: { xs: 3, md: 10 },
                    paddingTop: { xs: "31%", md: "0" },
                    maxWidth: { xs: "100%", md: "1600px"},
                    justifyContent: {md: "center"},
                    margin: "0 auto",
                    '@media (max-width: 380px)': {
                        paddingTop: "34%",
                    },
                    '@media (min-width: 900px) and (max-width: 1180px)': {
                        pt: 5,
                    },
                }}>

                    <Box sx={{
                        display: "grid",
                        gridTemplateColumns: {xs: "1fr", md: "repeat(3, 1fr)"},
                        gap: { xs: 2, md: 7 },
                        margin: "0 auto",
                        paddingTop: { xs: "0%", md: "5%" },
                        '@media (max-width: 380px)': {
                          gap: 1.2,
                        },
                    }}>
                        {features.map((feature, index) => (
                            <Box key={feature.id} sx={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: {xs: "flex-start", md: "center"},
                                width: {xs: "100%", md: 310},
                                height: {xs: "auto", md: 270},
                                padding: { xs: 0.7, md: 1.5 },
                                background: theme.palette.whites.dark,
                                borderRadius: 3,
                                pl: {xs: 1, md: 1.5},
                                pt: {xs: 0.7, md: 2},
                                animation: `fadeInUp 0.8s ease-out ${index * 0.4}s backwards`,
                                "@keyframes fadeInUp": {
                                  from: { opacity: 0, transform: "translateY(20px)" },
                                  to: { opacity: 1, transform: "translateY(0)" },
                                },
                                '@media (max-width: 380px)': {
                                  padding: 0.5,
                                  gap: 1,
                                },
                                '@media (min-width: 900px) and (max-width: 1180px)': {
                                    width: {xs: "100%", md: 300},
                                    height: {xs: "auto", md: 240},
                                },
                            }}>
                                <Typography sx={{
                                    ...theme.typography.heading2,
                                    color: theme.palette.primary.light,
                                    textAlign: {xs: "left", md: "center"},
                                    width: "100%",
                                    '@media (max-width: 380px)': {
                                        pl: 1,
                                        pt: 0.6,
                                        lineHeight: 0.6,
                                    },
                                    animation: `slideInRight 0.8s ease-out ${index * 0.4 + 0.4}s backwards`,
                                    "@keyframes slideInRight": {
                                      from: { opacity: 0, transform: "translateX(100px)" },
                                      to: { opacity: 1, transform: "translateX(0)" },
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
                                    '@media (max-width: 380px)': {
                                        pl: 1,
                                        lineHeight: 0.7,
                                    },
                                    animation: `slideInRight 0.8s ease-out ${index * 0.4 + 0.4}s backwards`,
                                    "@keyframes slideInRight": {
                                        from: { opacity: 0, transform: "translateX(100px)" },
                                        to: { opacity: 1, transform: "translateX(0)" },
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
                                    animation: `slideInRight 0.8s ease-out ${index * 0.4 + 0.4}s backwards`,
                                    "@keyframes slideInRight": {
                                        from: { opacity: 0, transform: "translateX(100px)" },
                                        to: { opacity: 1, transform: "translateX(0)" },
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
