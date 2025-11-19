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
                minWidth: {xs: "100%", md: "800px"},
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
                {/* Flip indicator overlay */}
                <Box
                    className="flip-indicator"
                    sx={{
                        position: "absolute",
                        bottom: 0,
                        width: "100%",
                        bgcolor: flipped ? "primary.dark" : "background.paper",
                        color: flipped ? "background.paper" : "primary.dark",
                        borderRadius: 3,
                        px: 0,
                        py: 0.7,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: 1,
                        fontSize: 14,
                        pointerEvents: "none",
                        // transition: "transform 0.5s",
                        transition: "background-color 0.6s cubic-bezier(0.4, 0, 0.2, 1), color 0.6s cubic-bezier(0.4, 0, 0.2, 1)",

                        zIndex: 10,
                        userSelect: "none",
                        textAlign: "center",
                        transform: `${flipped ? " rotateY(180deg)" : ""}`,

                    }}
                >
                    <AutorenewIcon fontSize="small" sx={{mr: 1}}/>
                    <Typography variant="body2" sx={{fontWeight: 500}}>
                        Flip
                    </Typography>
                </Box>
                {/* Flip top overlay */}
                <Box
                    className="flip-indicator"
                    sx={{
                        position: "absolute",
                        top: 0,
                        width: "100%",
                        bgcolor: flipped ? "primary.dark" : "background.paper",
                        borderRadius: 3,
                        px: 0,
                        py: 1.7,
                        display: "flex",
                        transition: "background-color 0.6s cubic-bezier(0.4, 0, 0.2, 1), color 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
                        zIndex: 10,
                    }}
                />
            </Box>
        </Box>
    );
}
