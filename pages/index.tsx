import Head from "next/head";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { Box, CircularProgress, Typography } from "@mui/material";

export default function Index() {
    const router = useRouter();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
            router.push("/home");
        }, 1500);

        return () => clearTimeout(timer);
    }, [router]);

    return (
        <>
            <Head>
                <title>Auction Fusion</title>
                <meta name="description" content="Creating the finest auction websites" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>

            {loading && (
                <Box
                    sx={{
                        position: "fixed",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        background: "#0A1E3F",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "white",
                        zIndex: 999,
                        transition: "opacity 0.5s ease",
                        fontFamily: "'Schibsted Grotesk', sans-serif",
                    }}
                >
                    <CircularProgress
                        sx={{
                            color: "#E91E63",
                            mb: 2,
                        }}
                        size={40}
                    />
                    <Typography variant="body1" sx={{ fontSize: "1.1em" }}>
                        Loading ...
                    </Typography>
                </Box>
            )}
        </>
    );
}
