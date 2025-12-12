import Head from "next/head";
import {Box, Typography, useMediaQuery} from "@mui/material";
import Layout from "@/components/Layout";
import {useTheme} from "@mui/material/styles";
import {useMemo} from "react";
import {useScale} from "@/hooks/useScale";
import {useScaleStyles} from "@/hooks/useScaleStyles";
import {animations} from "@/config/animations";

const QUOTE_ICON_SIZE = {xs: 36, md: 70};

export default function TestimonialsPage() {
    const theme = useTheme();
    const backgroundColor = theme.palette.primary.light;
    const scale = useScale();
    const {scaleWrapper, verticalStack} = useScaleStyles(scale);
    const isMobile = useMediaQuery("(max-width:1139px)");

    const styles = useMemo(() => ({
        mainContainer: {
            width: "100%",
            minHeight: {xs: "90vh", md: "100%"},
            height: {xs: "auto", md: "100%"},
            display: "flex",
            justifyContent: "center",
            padding: {xs: "29px 5px", sm:"0px 0px", md: "0px 50px"},
            flexDirection: "column",
            gap: {xs: 4, md: 7},
            paddingTop: {xs: "135px", md: "0"},
            maxWidth: {xs: "100%", md: "1600px"},
            margin: "0 auto",
            transform: {sm:  "scale(1.05)"},
        },
        contentWrapper: {
            maxWidth: {xs: "100%", md: "1320px"},
            margin: "0 auto",
            position: "relative",
            width: "100%",
            boxSizing: "border-box",
            padding: {xs: "28px 0px", sm:"0 0", md: "15px 60px"},
        },
        testimonialBox: {
            textAlign: {xs: "center", md: "left"},
            color: theme.palette.whites.main,
            position: "relative",
            zIndex: 2,
            fontWeight: 200,
            padding: {xs: "0 7%", sm: "0 5%", md: "0 9%"},
            py: {xs: "8%", sm: "8%", md: "80px"},
            backgroundColor: {xs: theme.palette.primary.dark, md: backgroundColor},
            borderRadius: 3,
        },
        quoteIcon: (position: "top-left" | "bottom-right") => ({
            position: "absolute",
            ...(position === "top-left"
                ? {top: {xs: 3, md: 5}, left: {xs: 0, md: 0}, transform: "rotate(180deg)"}
                : {bottom: {xs: 5, md: 5}, right: {xs: 8, md: 0}}
            ),
            width: QUOTE_ICON_SIZE,
            height: QUOTE_ICON_SIZE,
            zIndex: 2,
        }),
        testimonialText: {
            ...theme.typography.body3,
            [theme.breakpoints.up("md")]: {
                ...theme.typography.body1,
            },
            m: 0,
        },
        triangleArrow: {
            position: "relative",
            margin: "0 auto",
            width: 0,
            height: 0,
            borderLeft: "28px solid transparent",
            borderRight: "28px solid transparent",
            borderTop: {
                xs: `28px solid ${theme.palette.primary.dark}`,
                md: `28px solid ${backgroundColor}`,
            },
        },
        authorMobileText: {
            display: {xs: "inline-block", md: "none"},
        },
        authorDesktopText: {
            display: {xs: "none", md: "inline-block"},
        },
    }), [theme, backgroundColor]);

    const logoVariant: "dark" | "light" =
        backgroundColor === theme.palette.primary.light ? "light" : "dark";

    const pageHead = (
        <Head>
            <title>Testimonials - Auction Fusion</title>
            <meta
                name="description"
                content="Client testimonials and success stories from Auction Fusion platform"
            />
        </Head>
    );

    const renderQuoteIcon = (position: "top-left" | "bottom-right") => (
        <Box sx={styles.quoteIcon(position)} aria-hidden>
            <svg viewBox="-1 -2 600 100" style={{width: "100%", height: "100%"}}>
                <g style={{fill: "#E91E63"}}>
                    <path d="M438.21,35.94C417,12.09,391.22,0,361.63,0c-26.59,0-49.13,9.47-67,28.14s-26.76,41.59-26.76,68.49c0,25.42,9.09,48.06,27,67.32,15.82,17,35.75,27.79,59.35,32.19-4.13,31.28-31.78,59.6-82.36,84.27l-9.11,4.44,37.34,68.94,8.43-4.27c107-54.22,161.2-130.84,161.2-227.74C469.75,88.34,459.14,59.46,438.21,35.94Z"/>
                    <path d="M174.91,35.89C153.45,12.08,127.58,0,98,0,71.4,0,49,9.49,31.33,28.19,13.85,46.74,5,69.76,5,96.63c0,25.42,9.09,48.06,27,67.32a105.37,105.37,0,0,0,58.63,32.16C86.57,227.42,59.14,255.74,9,280.42l-9,4.41,36.41,69,8.51-4.3c107.45-54.22,161.93-130.84,161.93-227.75C206.85,88.31,196.1,59.42,174.91,35.89Z"/>
                </g>
            </svg>
        </Box>
    );

    const renderTestimonialContent = () => (
        <Box sx={styles.contentWrapper}>
            {/* Testimonial text with quote icons */}
            <Box sx={styles.testimonialBox}>
                {renderQuoteIcon("top-left")}

                <Typography component="p" sx={styles.testimonialText}>
                    To Auction Fusion&apos;s credit{" "}
                    <strong>
                        our improvement in SEO has been nothing less than stratospheric.
                    </strong>{" "}
                    Coupled with much improved functionality in critical areas like searching,
                    image rendering, and lot alerts we are in a much better position to
                    compete for consignments and bidders.
                    <br/>
                    <br/>
                </Typography>

                <Typography component="p" sx={styles.testimonialText}>
                    The exciting results continue with <strong>100% sold</strong> in our
                    following 2 auctions. Thanks for all the hard work behind the scenes to
                    make this auction a success.
                </Typography>

                {renderQuoteIcon("bottom-right")}
            </Box>

            {/* Triangle arrow */}
            <Box sx={styles.triangleArrow}/>

            {/* Author information */}
            <Box>
                <Typography component="p"
                            sx={{textAlign: "center",
                                    color: theme.palette.whites.main,
                                    ...theme.typography.body2,
                                    mt: 2,
                                    paddingTop: {xs: "8%", md: "0"},
                                    paddingBottom: {xs: "8%", md: "0"},
                                    animation: "slideInFromLeft 0.8s ease-out 1s backwards",
                                    ...animations.slideInFromLeft,}}
                >
                    <Box component="span" sx={styles.authorMobileText}>
                        <strong>Edward Barrow</strong>
                        <br/>
                        Auction Manager at Stanley Gibbons Baldwin&apos;s
                    </Box>

                    <Box component="span" sx={styles.authorDesktopText}>
                        -<strong> Edward Barrow</strong>, Auction Manager at Stanley Gibbons
                        Baldwin&apos;s
                    </Box>
                </Typography>
            </Box>
        </Box>
    );

    const layoutProps = {
        showContactButton: true,
        prevPage: "/design",
        nextPage: "/reason",
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
                            <Box sx={styles.mainContainer}>
                                {renderTestimonialContent()}
                            </Box>
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
                <Box sx={styles.mainContainer}>
                    {renderTestimonialContent()}
                </Box>
            </Layout>
        </>
    );
}
