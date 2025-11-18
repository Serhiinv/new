import Head from "next/head";
import {Box, Typography} from "@mui/material";
import Layout from "@/components/Layout";
import {bPath} from "@/config/basePath";
import PrimaryButton from "@/components/PrimaryButton";
import InfoModal from "@/components/InfoModal";
import {useTheme} from "@mui/material/styles";
import {useMemo, useState} from "react";
import {useMediaQuery} from "@mui/material";
import {useScale} from "@/hooks/useScale";
import {useScaleStyles} from "@/hooks/useScaleStyles";
import {animations} from "@/config/animations";

// Animation keyframes
const fadeInUpAnimation = {
    "@keyframes fadeInUp": {
        from: {opacity: 0, transform: "translateY(20px)"},
        to: {opacity: 1, transform: "translateY(0)"},
    },
};

export default function HomePage() {
    const theme = useTheme();
    const backgroundColor = theme.palette.whites.main;
    const scale = useScale();
    const {scaleWrapper, verticalStack} = useScaleStyles(scale);
    const isMobile = useMediaQuery("(max-width:1140px)");
    const [openInfoModal, setOpenInfoModal] = useState(false);

    const styles = useMemo(
        () => ({
            textContent: {
                textAlign: {xs: "center", md: "left"},
                display: "flex",
                flexDirection: "column",
                gap: {md: 3},
                padding: {md: "0 10px"},
                maxWidth: {xs: "100%", md: "670px"},
                "@media (min-width: 600px) and (max-width: 1140px)": {
                    textAlign: "center",
                },
            },
            heading: {
                ...theme.typography.heading1,
                color: theme.palette.primary.light,
                margin: 0,
                pt: {xs: "51%", md: 0},
                pb: "15px",
                animation: "fadeInUp 0.8s ease-out",
                ...animations.fadeInUp,
                "@media (min-width: 600px) and (max-width: 1140px)": {
                    fontWeight: 600,
                    fontSize: "30px",
                    pt: "135px",
                },
            },
            description: {
                ...theme.typography.body1,
                color: theme.palette.bg.contrastText,
                margin: 0,
                pb: "5px",
                animation: "fadeInUp 0.8s ease-out 0.4s backwards",
                ...fadeInUpAnimation,
                "@media (min-width: 600px) and (max-width: 1140px)": {
                    fontSize: "16px",
                },
            },
            monitorContainer: {
                maxWidth: {xs: "300px", md: "530px"},
                position: "relative",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                padding: {md: "0 20px"},
                "@media (min-width: 600px) and (max-width: 1140px)": {
                    pb: "18%",
                },
                "@media (min-width: 1141px)": {
                    height: "100%",
                    transform: "translateY(90px)",
                },
            },
            monitorImage: {
                width: "100%",
                height: "auto",
                position: "relative",
                zIndex: 0,
            },
            screenOverlay: {
                position: "relative",
                width: "87%",
                height: "auto",
                zIndex: 10,
                transform: "translate(0, -155%)",
            },
            desktopContainer: {
                width: "100%",
                height: "100%",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                gap: 4,
                padding: "3% 4.5%",
                maxWidth: "1600px",
                margin: "0 auto",
                boxSizing: "border-box",
            },
            desktopImageSection: {
                flex: 1,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                order: 2,
            },
            mobileBtn: {
                position: "absolute",
                display: {xs: "flex", md: "none"},
                bottom: 41,
                left: 0,
                right: 0,
                justifyContent: "center",
            },
            mobileSpacer: {
                height: 0,
                "@media (min-width: 420px) and (max-width: 810px)": {
                    height: "110px",
                },
            },
            infoLink: {
                ...theme.typography.body1,
                color: theme.palette.primary.main,
                cursor: "pointer",
                textDecoration: "underline",
                display: "inline",
                animation: "fadeInUp 0.8s ease-out 0.4s backwards",
                ...fadeInUpAnimation,
                "&:hover": {
                    opacity: 0.8,
                },
            },
        }),
        [theme]
    );

    const logoVariant =
        backgroundColor === theme.palette.primary.light ? "light" : "dark";

    // Shared page head
    const pageHead = (
        <Head>
            <title>Auction Fusion - Creating the Finest Auction Websites</title>
            <meta
                name="description"
                content="Auction Fusion is a next-generation auction website platform built for unparalleled AI / search performance and customer experience"
            />
        </Head>
    );

    // Shared hero content
    const renderHeroContent = () => (
        <Box sx={styles.textContent}>
            <Typography sx={styles.heading}>
                Creating the finest auction websites
            </Typography>
            <Typography sx={styles.description}>
                Auction Fusion is a next-generation auction website platform built
                for unparalleled AI / search performance and customer experience
            </Typography>
            <Typography
                component="span"
                sx={styles.infoLink}
                onClick={() => setOpenInfoModal(true)}
            >
                see more
            </Typography>
            <InfoModal open={openInfoModal} onClose={() => setOpenInfoModal(false)} title={"More info here"}>
                <Typography id="info-modal-description" sx={{mb: 2}}>
                    Auction Fusion is a next-generation auction website platform built
                    for unparalleled AI / search performance and customer experience.
                    Our platform offers a wide range of features and tools to create
                    stunning auction websites that cater to your business needs.
                </Typography>
                <Typography id="info-modal-description" sx={{mb: 2}}>
                    Auction Fusion is a next-generation auction website platform built
                    for unparalleled AI / search performance and customer experience.
                    Our platform offers a wide range of features and tools to create
                    stunning auction websites that cater to your business needs.
                </Typography>
                <Typography id="info-modal-description" sx={{mb: 2}}>
                    Auction Fusion is a next-generation auction website platform built
                    for unparalleled AI / search performance and customer experience.
                    Our platform offers a wide range of features and tools to create
                    stunning auction websites that cater to your business needs.
                </Typography>
            </InfoModal>
            <Box sx={{display: {xs: "none", md: "block"},}}>
                <PrimaryButton href="/features">Let&apos;s start</PrimaryButton>
            </Box>
        </Box>
    );

    // Shared monitor display
    const renderMonitor = () => (
        <Box sx={styles.monitorContainer}>
            <Box
                component="img"
                alt="Monitor Background"
                src={`${bPath}/monitor.png`}
                sx={styles.monitorImage}
            />
            <Box
                component="img"
                alt="Auction Website Preview"
                src={`${bPath}/monitor-screen.jpeg`}
                sx={styles.screenOverlay}
            />
        </Box>
    );

    // *********** Mobile version **********
    if (isMobile) {
        return (
            <>
                {pageHead}
                <Layout
                    showContactButton={true}
                    nextPage="/features"
                    logoVariant={logoVariant}
                    backgroundColor={backgroundColor}
                >
                    <Box sx={scaleWrapper}>
                        <Box sx={verticalStack}>
                            {renderHeroContent()}
                            {renderMonitor()}
                            <Box sx={styles.mobileSpacer}/>
                        </Box>
                    </Box>
                    <Box sx={styles.mobileBtn}>
                        <PrimaryButton href="/features">Let&apos;s start</PrimaryButton>
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
                nextPage="/features"
                logoVariant={logoVariant}
                backgroundColor={backgroundColor}
            >
                <Box sx={styles.desktopContainer}>
                    {renderHeroContent()}
                    <Box sx={styles.desktopImageSection}>{renderMonitor()}</Box>
                </Box>
            </Layout>
        </>
    );
}
