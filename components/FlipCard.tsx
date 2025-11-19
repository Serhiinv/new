import React, {useState} from "react";
import {Box, Typography} from "@mui/material";
import AutorenewIcon from '@mui/icons-material/Autorenew';

interface FlipCardProps {
    front: React.ReactNode;
    back: React.ReactNode;
}

export default function FlipCard({front, back}: FlipCardProps) {
    const [flipped, setFlipped] = useState(false);

    return (
        <Box
            sx={{
                perspective: "1200px",
                minHeight: 400,
                minWidth: {xs:"100%", md: "800px"},
                maxWidth: 600,
                // maxHeight: 500,
                margin: "0 auto",
                position: "relative",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                transition: 'transform 0.2s ease-in-out',
                "&:hover": {
                    transform: 'scale(1.01)'
                },
            }}
            onClick={() => setFlipped((f) => !f)}
        >
            <Box
                sx={{
                    width: "100%",
                    height: "100%",
                    position: "absolute",
                    cursor: "pointer",
                    transition: "transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
                    transformStyle: "preserve-3d",
                    borderRadius: 3,
                    // boxShadow: 3,
                    background: "transparent",
                    transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
                }}
            >
                {/* Front Side */}
                <Box
                    sx={{
                        position: "absolute",
                        width: "100%",
                        height: "100%",
                        backfaceVisibility: "hidden",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        bgcolor: "background.paper",
                        borderRadius: 3,
                        // boxShadow: 3,
                        fontSize: 22,
                        p: 3,
                    }}
                >
                    {front}
                </Box>
                {/* Back Side */}
                <Box
                    sx={{
                        position: "absolute",
                        width: "100%",
                        height: "100%",
                        backfaceVisibility: "hidden",
                        display: "flex",
                        // alignItems: "center",
                        justifyContent: "center",
                        bgcolor: "primary.dark",
                        color: "whites.main",
                        borderRadius: 3,
                        boxShadow: 3,
                        fontSize: 22,
                        p: 3,
                        transform: "rotateY(180deg)",
                        overflowY: "auto",
                    }}
                >
                    {back}
                </Box>
            </Box>
            {/* Flip indicator overlay */}
            <Box
                className="flip-indicator"
                sx={{
                    position: "absolute",
                    left: "50%",
                    bottom: 10,
                    transform: "translateX(-50%)",
                    // bgcolor: "primary.light",
                    bgcolor: flipped ? "primary.dark" : "background.paper",
                    color: flipped ? "background.paper" : "primary.dark",
                    // color: "#fff",
                    borderRadius: 2,
                    px: 1,
                    py: 0.5,
                    display: "flex",
                    alignItems: "center",
                    gap: 0,
                    fontSize: 14,
                    pointerEvents: "none",
                    transition: "transform 0.5s,",
                    zIndex: 10,
                    userSelect: "none",
                }}
            >
                <AutorenewIcon fontSize="small" sx={{mr: 1}}/>
                <Typography variant="body2" sx={{fontWeight: 500}}>
                    Flip
                </Typography>
            </Box>
        </Box>
    );
}
