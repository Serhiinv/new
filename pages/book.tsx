import Head from "next/head";
import {Box, Typography, useMediaQuery} from "@mui/material";
import Layout from "@/components/Layout";
import BookFeature from "@/components/BookFeature";
import {useTheme} from "@mui/material/styles";
import {useState, useMemo} from "react";
import {useScale} from "@/hooks/useScale";
import {useScaleStyles} from "@/hooks/useScaleStyles";
import {bPath} from "@/config/basePath";

export default function FlipPage() {
    const theme = useTheme();
    const backgroundColor = theme.palette.primary.light;
    const scale = useScale();
    const {scaleWrapper, verticalStack} = useScaleStyles(scale);
    const isMobile = useMediaQuery("(max-width:1139px)");
    const [currentPage, setCurrentPage] = useState(0);

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
            ...theme.typography.heading1,
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
            {/*<Typography sx={styles.heading}>*/}
            {/*    Auction Fusion Book*/}
            {/*</Typography>*/}
            <Box sx={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                // gap: 3,
                pt: 1,
                minHeight: 300,
            }}>
                <Box
                    sx={{
                        transition: 'transform 0.5s cubic-bezier(0.645, 0.045, 0.355, 1)',
                        transform: [
                            currentPage === 0 ? 'translateX(-100px) scale(44%)' : 'scale(44%)', // xs
                            null, // sm
                            currentPage === 0 ? 'translateX(-190px) scale(90%)' : 'scale(90%)' // md and up
                        ],

                }}
                >
                    <BookFeature
                        pages={[
                            // Hidden page
                            <Box key="page1">
                            </Box>,
                            // First visible page - cover
                            <Box key="pag2" sx={{position: "relative", width: "100%", minHeight: 400}}>
                                <Box
                                    component="img"
                                    alt="Auction Website Preview"
                                    src={`${bPath}/bookTexture.png`}
                                    draggable={false}
                                    sx={{
                                        position: "absolute",
                                        top: 0,
                                        left: 0,
                                        width: "100%",
                                        height: "150%",
                                        objectFit: "cover",
                                        zIndex: 1,
                                    }}
                                />
                                <Typography
                                    sx={{
                                        position: "absolute",
                                        top: 150,
                                        left: 0,
                                        width: "100%",
                                        textAlign: "center",
                                        ...theme.typography.heading2,
                                        backgroundColor: "transparent",
                                        color: theme.palette.primary.light,
                                        zIndex: 2,
                                        opacity: 0.8,
                                    }}
                                >
                                    Auction Fusion <br/> Story
                                </Typography>
                            </Box>,
                            // Cover back
                            <Box key="pag3">
                                <Box
                                    component="img"
                                    alt="Auction Website Preview"
                                    src={`${bPath}/bookTexture.png`}
                                    draggable={false}
                                    sx={{
                                        position: "relative",
                                        width: "200%",
                                        minHeight: "100%",
                                        zIndex: 10,
                                    }}
                                />
                            </Box>,
                            // Book pages start here
                            <Box key="page4">
                                <Typography variant="h6"
                                            sx={{position: "absolute", left: 200, bottom: 0,}}>1</Typography>
                                <Typography sx={{padding: 3}}>
                                    <strong>Creating the finest
                                        auction websites</strong>
                                    <br/><br/>
                                    Auction Fusion is a next-generation auction website platform built for unparalleled
                                    AI / search performance and customer experience
                                    <br/><br/>
                                    <br/>
                                </Typography>
                            </Box>,
                            <Box key="page5">
                                <Typography variant="h6"
                                            sx={{position: "absolute", left: 200, bottom: 0,}}>2</Typography>
                                <Typography sx={{padding: 3}}>
                                    <strong>Why Auction Fusion?</strong>
                                    <br/><br/>
                                    - More consignors and buyers find you on Google and AI.
                                    <br/>
                                    - AI-ready.
                                    Mobile-optimised. Future-proof.
                                    <br/>
                                    -Better conversion from first click to sold.
                                    <br/>
                                    - Low monthly licence fee.
                                </Typography>
                            </Box>,
                            <Box key="page6">
                                <Typography variant="h6"
                                            sx={{position: "absolute", left: 200, bottom: 0,}}>3</Typography>
                                <Typography sx={{padding: 3}}>
                                    <strong>Designed for clicks.
                                        Built for people.</strong>
                                    <br/><br/>

                                    From the first online query to a seamless customer experience on your new website,
                                    Auction Fusion drives consignment and sales at every step. <br/>
                                    And with your upcoming lots visible on Google in hours, Auction Fusion is beating
                                </Typography>
                            </Box>,
                            <Box key="page7">
                                <Typography variant="h6"
                                            sx={{position: "absolute", left: 200, bottom: 0,}}>4</Typography>
                                <Typography sx={{padding: 3}}>
                                    the biggest and best in the auction world.
                                    <br/><br/>
                                    <strong>That’s why our auction clients are seeing conversions per customer up by
                                        over 500%.</strong>
                                </Typography>
                                <Box
                                    component="img"
                                    alt="Auction Website Preview"
                                    src={`${bPath}/design.jpeg`}
                                    sx={{
                                        position: "relative",
                                        // pt: 2,
                                        width: "65%",
                                        transform: "translateX(25%) translateY(-5%)",
                                        minHeight: "auto",
                                        zIndex: 10,
                                    }}
                                />
                            </Box>,
                            <Box key="page8">
                                <Typography variant="h6"
                                            sx={{position: "absolute", left: 200, bottom: 0,}}>5</Typography>
                                <Typography sx={{padding: 3}}>
                                    The Auction Fusion model is simple: create a modular, highly extensible auctions
                                    platform and integrate with the best-in-class globally, notably:
                                    <br/>
                                </Typography>
                                <Box
                                    component="img"
                                    alt="Auction Website Preview"
                                    src={`${bPath}/monitor-screen.jpeg`}
                                    sx={{
                                        position: "relative",
                                        pt: 2,
                                        width: "90%",
                                        transform: "translateX(5%)",
                                        height: "auto",
                                        zIndex: 10,
                                    }}
                                />
                            </Box>,
                            <Box key="page9">
                                <Typography variant="h6"
                                            sx={{position: "absolute", left: 200, bottom: 0,}}>6</Typography>
                                <Typography sx={{padding: 3}}>
                                    &quot; To Auction Fusion&apos;s credit our improvement in SEO has been nothing less than
                                    stratospheric. Coupled with much improved functionality in critical areas like
                                    searching, image rendering, and lot alerts we are in a much better position to
                                    compete for consignments and bidders.
                                    <br/>
                                </Typography>

                            </Box>,
                            <Box key="page10">
                                <Typography variant="h6"
                                            sx={{position: "absolute", left: 200, bottom: 0,}}>7</Typography>
                                <Typography sx={{padding: 3}}>
                                    The exciting results continue with 100% sold in our following 2 auctions. Thanks for
                                    all the hard work behind the scenes to make this auction a success. &quot;
                                    <br/><br/>
                                    <strong>- Edward Barrow, Auction Manager at Stanley Gibbons Baldwin&apos;s</strong>
                                </Typography>
                            </Box>,
                            <Box key="pag11">
                                <Typography variant="h6"
                                            sx={{position: "absolute", left: 200, bottom: 0,}}>8</Typography>

                                <Typography sx={{padding: 3}}>
                                    <strong>Answer Engine Optimised</strong>
                                    <br/><br/>
                                    Search is changing fast. Auction Fusion is ready.
                                </Typography>
                                <Box
                                    component="a"
                                    href="https://production-stanleygibbonsbaldwins.auctionfusion.com/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <Box
                                        component="img"
                                        alt="Auction Website Preview"
                                        src={`${bPath}/sgb.png`}
                                        sx={{
                                            position: "relative",
                                            pt: 2,
                                            width: "80%",
                                            transform: "translateX(10%) translateY(-10%)",
                                            height: "auto",
                                            zIndex: 10,
                                            "&:hover": {opacity: 0.8},
                                        }}
                                    />
                                </Box>

                            </Box>, <Box key="pag12">
                                <Typography variant="h6"
                                            sx={{position: "absolute", left: 200, bottom: 0,}}>9</Typography>
                                <Typography sx={{padding: 3}}>
                                    Here’s how Auction Fusion delivers consignments and sales in a world of AI-generated
                                    results:
                                    <br/><br/>
                                    - Automated AI-friendly webpage ‘mark-up’, surfacing the expertise and content you
                                    want to share.
                                    <br/><br/>
                                    - Dedicated answer-ready content components.
                                </Typography>
                            </Box>, <Box key="pag13">
                                <Typography variant="h6"
                                            sx={{position: "absolute", left: 200, bottom: 0,}}>10</Typography>
                                <Typography sx={{padding: 3}}>
                                    - Built to deliver actionable AI outputs and links -
                                    with a focus on consignment and bidding.
                                </Typography>
                                <Box
                                    component="a"
                                    href="https://www.lyonandturnbull.com/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <Box
                                        component="img"
                                        alt="Case Study Background"
                                        src={`${bPath}/case-study.jpeg`}
                                        sx={{
                                            width: "80%",
                                            height: "auto",
                                            cursor: "pointer",
                                            transition: "opacity 0.3s",
                                            position: "relative",
                                            zIndex: 10,
                                            transform: "translateX(10%)",
                                            "&:hover": {opacity: 0.8},
                                        }}
                                    />
                                </Box>
                            </Box>,

                            // -------------- End page --------------
                            <Box key="pag14">
                                {/*End page*/}
                                <Box
                                    component="img"
                                    alt="Auction Website Preview"
                                    src={`${bPath}/bookTexture.png`}
                                    sx={{
                                        position: "relative",
                                        width: "200%",
                                        minHeight: "100%",
                                        zIndex: 10,
                                    }}
                                />
                            </Box>,
                        ]}
                        currentPage={currentPage}
                        onPageChange={setCurrentPage}
                    />
                </Box>
                {currentPage > 0 ? (
                    <Box
                        onClick={() => setCurrentPage(0)}
                        sx={{
                            cursor: 'pointer',
                            padding: '7px 15px',
                            background: theme.palette.whites.main,
                            color: theme.palette.primary.main,
                            borderRadius: '8px',
                            fontWeight: 600,
                            fontSize: '14px',
                            transition: 'all 0.3s ease',
                            boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                            // transform: 'translateY(-25px)',
                            '&:hover': {
                                background: theme.palette.primary.main,
                                color: theme.palette.whites.main,
                                boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
                                transform: 'translateY(-2px)',
                            },
                        }}
                    >
                        Reset to Beginning
                    </Box>
                ) : <Box
                    sx={{
                        cursor: 'pointer',
                        padding: '7px 15px',
                        background: theme.palette.whites.main,
                        color: theme.palette.primary.main,
                        borderRadius: '8px',
                        fontWeight: 600,
                        fontSize: '14px',
                        transition: 'all 0.3s ease',
                        boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                        opacity: 0.5,
                        // transform: 'translateY(-25px)',
                    }}
                >
                    Reset to Beginning
                </Box>
                }
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
                    prevPage="/flip"
                    nextPage="/slider"
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
                prevPage="/flip"
                nextPage="/slider"
                logoVariant={logoVariant}
                backgroundColor={backgroundColor}
            >
                {renderPageContent()}
            </Layout>
        </>
    );
}

//import Head from "next/head";
// import {Box, Typography, useMediaQuery} from "@mui/material";
// import Layout from "@/components/Layout";
// import BookFeature from "@/components/BookFeature";
// import {useTheme} from "@mui/material/styles";
// import {useMemo} from "react";
// import {useScale} from "@/hooks/useScale";
// import {useScaleStyles} from "@/hooks/useScaleStyles";
// import {bPath} from "@/config/basePath";
//
// export default function FlipPage() {
//     const theme = useTheme();
//     const backgroundColor = theme.palette.primary.light;
//     const scale = useScale();
//     const {scaleWrapper, verticalStack} = useScaleStyles(scale);
//     const isMobile = useMediaQuery("(max-width:1139px)");
//
//     const styles = useMemo(() => ({
//         container: {
//             width: "100%",
//             height: "100%",
//             display: "flex",
//             background: backgroundColor,
//             padding: {xs: "3% 3%", md: "3% 5.5%"},
//             flexDirection: "column",
//             gap: {xs: 3, md: 7},
//             paddingTop: {xs: "30%", md: "0%"},
//             paddingBottom: {xs: "0%", md: "0%"},
//             maxWidth: {xs: "100%", md: "1600px"},
//             justifyContent: {md: "center"},
//             margin: "0 auto",
//             boxSizing: "border-box",
//             "@media (min-width: 600px) and (max-width: 1140px)": {
//                 pt: "70px",
//                 gap: 2,
//             },
//         },
//         heading: {
//             ...theme.typography.heading1,
//             color: theme.palette.whites.main,
//             textAlign: "center",
//             "@media (min-width: 600px) and (max-width: 1140px)": {
//                 fontWeight: 600,
//                 fontSize: "30px",
//             },
//         },
//     }), [theme, backgroundColor]);
//
//     const logoVariant = backgroundColor === theme.palette.primary.light ? "light" : "dark";
//
//     // Shared page head
//     const pageHead = (
//         <Head>
//             <title>Features - Auction Fusion</title>
//             <meta name="description" content="Discover the powerful features of Auction Fusion platform"/>
//         </Head>
//     );
//
//     // Shared content
//     const renderPageContent = () => (
//         <Box sx={styles.container}>
//             <Typography sx={styles.heading}>
//                 Auction Fusion Book
//             </Typography>
//             <Box sx={{width: "100%", display: "flex", justifyContent: "center", alignItems: "center", minHeight: 300}}>
//                 <BookFeature
//                     pages={[
//                         <Box key="page1">
//                             <Typography variant="h6" sx={{position: "absolute", left: 200, bottom:0,}}>1</Typography>
//
//                             <Typography sx={{padding: 3}}>Binary Vision have been trailblazers in digital for 40 years, working with high-profile clients such as: Royal Air Force, Barnardo’s and AstraZeneca.
//                             <br/><br/>
//                             Starting three years ago, Binary Vision moved into the auctions sector, bringing the latest and best in web and digital expertise to a sector </Typography>
//                         </Box>,
//                         <Box key="page2">
//                             <Typography variant="h6" sx={{position: "absolute", left: 200, bottom:0,}}>2</Typography>
//                             <Typography sx={{padding: 3}}>trapped in legacy technologies.
//                             <br/><br/>
//                                 Binary Vision's Auction Fusion team have, between them, over a hundred years of digital expertise.
//                                 <br/>
//                                 Auction Fusion provides a dedicated, feature-rich auction experience for a low monthly licence fee. This also includes technical
//                             </Typography>
//
//                         </Box>,
//                         <Box key="page3">
//                             <Typography variant="h6" sx={{position: "absolute", left: 200, bottom:0,}}>3</Typography>
//                             <Typography sx={{padding: 3}}>support, cloud hosting and maintenance.
//                                 <br/><br/>
//                                 There are no per auction, hammer or user costs.
//                                 <br/><br/>
//                                 We provide some optional extras should you want them -
//                                 for instance to customise your website design / features
//                                 to be more “you”.
//                             </Typography>
//                         </Box>,
//                         <Box key="page4">
//                             <Typography variant="h6" sx={{position: "absolute", left: 200, bottom:0,}}>4</Typography>
//                             <Typography sx={{padding: 3}}>
//                                 To Auction Fusion's credit our improvement in SEO has been nothing less than stratospheric.
//                                 <br/>
//                                 Coupled with much improved functionality in critical areas like searching, image rendering, and lot alerts we are in a much better position to compete for consignments and bidders.
//                             </Typography>
//                         </Box>,
//                         <Box key="page5">
//                             <Typography variant="h6" sx={{position: "absolute", left: 200, bottom:0,}}>5</Typography>
//                             <Typography sx={{padding: 3}}>
//                                 The exciting results continue with 100% sold in our following 2 auctions. Thanks for all the hard work behind the scenes to make this auction a success.
//                                 <br/>
//                             </Typography>
//                         </Box>,
//                         <Box key="page6">
//                             <Typography variant="h6" sx={{position: "absolute", left: 200, bottom:0,}}>6</Typography>
//                             <Typography sx={{padding: 3}}>
//                                 From the first online query to a seamless customer experience on your new website, Auction Fusion drives consignment and sales at every step.                                 <br/>
//                            <br/>
//                                 And with your upcoming lots visible on Google in hours, Auction Fusion is beating the biggest and best in the auction world.
//                             </Typography>
//                         </Box>,
//                         <Box key="page7">
//                             <Typography variant="h6" sx={{position: "absolute", left: 200, bottom:0,}}>7</Typography>
//                             <Typography sx={{padding: 3}}>
//                                 The exciting results continue with 100% sold in our following 2 auctions. Thanks for all the hard work behind the scenes to make this auction a success.
//                             <br/>
//                             <br/>
//                                 That’s why our auction clients are seeing conversions per customer up by over 500%.
//                             </Typography>
//                         </Box>,
//                         <Box key="page8">
//                             <Typography variant="h6" sx={{position: "absolute", left: 200, bottom:0,}}>8</Typography>
//                             <Typography sx={{padding: 3}}>
//                                 The Auction Fusion model is simple: create a modular, highly extensible auctions
//                                 platform and integrate with the best-in-class globally, notably:
//                                 <br/>
//                             </Typography>
//                         </Box>,
//                         <Box key="page9">
//                             <Typography variant="h6" sx={{position: "absolute", left: 200, bottom:0,}}>9</Typography>
//                             <Box
//                                 component="img"
//                                 alt="Auction Website Preview"
//                                 src={`${bPath}/monitor-screen.jpeg`}
//                                 sx={{position: "relative",
//                                     pt: 2,
//                                     width: "90%",
//                                     transform: "translateX(5%)",
//                                     height: "auto",
//                                     zIndex: 10,
//                                 }}
//                             />
//                             <Box
//                                 component="img"
//                                 alt="Auction Website Preview"
//                                 src={`${bPath}/monitor-screen.jpeg`}
//                                 sx={{position: "relative",
//                                     pt: 2,
//                                     width: "90%",
//                                     transform: "translateX(5%)",
//                                     height: "auto",
//                                     zIndex: 10,
//                                 }}
//                             />
//                         </Box>,
//                         <Box key="page10">
//                             <Typography variant="h6" sx={{position: "absolute", left: 200, bottom:0,}}>10</Typography>
//                             <Box
//                                 component="img"
//                                 alt="Auction Website Preview"
//                                 src={`${bPath}/case-study.jpeg`}
//                                 sx={{position: "relative",
//                                     pt: 2,
//                                     width: "90%",
//                                     transform: "translateX(5%)",
//                                     height: "auto",
//                                     zIndex: 10,
//                                 }}
//                             />
//                         </Box>,
//                         <Box key="pag11">
//                             <Typography variant="h6" sx={{position: "absolute", left: 200, bottom:0,}}>11</Typography>
//                             <Box
//                                 component="img"
//                                 alt="Auction Website Preview"
//                                 src={`${bPath}/design.jpeg`}
//                                 sx={{position: "relative",
//                                     pt: 2,
//                                     width: "90%",
//                                     transform: "translateX(5%)",
//                                     height: "auto",
//                                     zIndex: 10,
//                                 }}
//                             />
//                         </Box>,
//                     ]}
//                 />
//             </Box>
//
//         </Box>
//     );
//
//     // *********** Mobile version **********
//     if (isMobile) {
//         return (
//             <>
//                 {pageHead}
//                 <Layout
//                     showContactButton={true}
//                     prevPage="/why-us"
//                     nextPage="/case-study"
//                     logoVariant={logoVariant}
//                     backgroundColor={backgroundColor}
//                 >
//                     <Box sx={scaleWrapper}>
//                         <Box sx={verticalStack}>
//                             {renderPageContent()}
//                         </Box>
//                     </Box>
//                 </Layout>
//             </>
//         );
//     }
//
//     // ********** Desktop version **********
//     return (
//         <>
//             {pageHead}
//             <Layout
//                 showContactButton={true}
//                 prevPage="/why-us"
//                 nextPage="/case-study"
//                 logoVariant={logoVariant}
//                 backgroundColor={backgroundColor}
//             >
//                 {renderPageContent()}
//             </Layout>
//         </>
//     );
// }
