import React, {useEffect, useRef, useState} from "react";
import {Box} from "@mui/material";

interface SliderCardProps {
    first: React.ReactNode;
    second: React.ReactNode;
    minH?: number | string;
    minW?: number | string;
    orientation?: "horizontal" | "vertical";
}

export default function SliderCard({
                                       first,
                                       second,
                                       minH = 300,
                                       minW = "100%",
                                       orientation = "horizontal",
                                   }: SliderCardProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const [sliderPosition, setSliderPosition] = useState(50); // percentage
    const [isDragging, setIsDragging] = useState(false);

    const isHorizontal = orientation === "horizontal";

    const updatePosition = (clientX: number, clientY: number) => {
        if (!containerRef.current) return;

        const rect = containerRef.current.getBoundingClientRect();

        if (isHorizontal) {
            const x = clientX - rect.left;
            const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
            setSliderPosition(percentage);
        } else {
            const y = clientY - rect.top;
            const percentage = Math.max(0, Math.min(100, (y / rect.height) * 100));
            setSliderPosition(percentage);
        }
    };

    const handleMouseDown = (e: React.MouseEvent) => {
        setIsDragging(true);
        updatePosition(e.clientX, e.clientY);
    };

    const handleTouchStart = (e: React.TouchEvent) => {
        setIsDragging(true);
        updatePosition(e.touches[0].clientX, e.touches[0].clientY);
    };

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (!isDragging) return;
            updatePosition(e.clientX, e.clientY);
        };

        const handleTouchMove = (e: TouchEvent) => {
            if (!isDragging) return;
            updatePosition(e.touches[0].clientX, e.touches[0].clientY);
        };

        const handleEnd = () => {
            setIsDragging(false);
        };

        if (isDragging) {
            window.addEventListener("mousemove", handleMouseMove);
            window.addEventListener("touchmove", handleTouchMove);
            window.addEventListener("mouseup", handleEnd);
            window.addEventListener("touchend", handleEnd);
        }

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("touchmove", handleTouchMove);
            window.removeEventListener("mouseup", handleEnd);
            window.removeEventListener("touchend", handleEnd);
        };
    }, [isDragging, isHorizontal]);

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (isHorizontal) {
            if (e.key === "ArrowLeft") {
                setSliderPosition(prev => Math.max(0, prev - 2));
            } else if (e.key === "ArrowRight") {
                setSliderPosition(prev => Math.min(100, prev + 2));
            }
        } else {
            if (e.key === "ArrowUp") {
                setSliderPosition(prev => Math.max(0, prev - 2));
            } else if (e.key === "ArrowDown") {
                setSliderPosition(prev => Math.min(100, prev + 2));
            }
        }
    };

    return (
        <Box
            ref={containerRef}
            sx={{
                position: "relative",
                minHeight: minH,
                minWidth: minW,
                width: "100%",
                overflow: "hidden",
                touchAction: "none",
                userSelect: "none",
                cursor: isDragging ? (isHorizontal ? "ew-resize" : "ns-resize") : "default",
            }}
            onMouseDown={handleMouseDown}
            onTouchStart={handleTouchStart}
        >
            {/* First card */}
            <Box
                sx={{
                    position: "relative",
                    width: "100%",
                    height: "100%",
                    minHeight: minH,
                    clipPath: isHorizontal
                        ? `inset(0 ${100 - sliderPosition}% 0 0)`
                        : `inset(0 0 ${100 - sliderPosition}% 0)`,
                    transition: isDragging ? "none" : "clip-path 0.1s ease",
                }}
            >
                {first}
            </Box>

            {/* Second card */}
            <Box
                sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    willChange: "clip-path",
                    userSelect: "none",
                    clipPath: isHorizontal
                        ? `inset(0 0 0 ${sliderPosition}%)`
                        : `inset(${sliderPosition}% 0 0 0)`,
                    transition: isDragging ? "none" : "clip-path 0.1s ease",
                }}
            >
                {second}
            </Box>

            {/* Divider line that spans full height/width */}
            <Box
                sx={{
                    position: "absolute",
                    ...(isHorizontal ? {
                        top: 0,
                        bottom: 0,
                        left: `${sliderPosition}%`,
                        width: "2px",
                        transform: "translateX(-50%)",
                    } : {
                        left: 0,
                        right: 0,
                        top: `${sliderPosition}%`,
                        height: "2px",
                        transform: "translateY(-50%)",
                    }),
                    backgroundColor: "#fff",
                    boxShadow: "0 0 4px rgba(0,0,0,.5)",
                    pointerEvents: "none",
                    transition: isDragging ? "none" : (isHorizontal ? "left 0.1s ease" : "top 0.1s ease"),
                }}
            />

            {/* Draggable handle */}
            <Box
                component="button"
                aria-label="Drag to move or focus and use arrow keys"
                aria-orientation={orientation}
                aria-valuemin={0}
                aria-valuemax={100}
                aria-valuenow={Math.round(sliderPosition)}
                role="slider"
                tabIndex={0}
                onKeyDown={handleKeyDown}
                sx={{
                    position: "absolute",
                    ...(isHorizontal ? {
                        top: "50%",
                        left: `${sliderPosition}%`,
                        transform: "translate(-50%, -50%)",
                    } : {
                        left: "50%",
                        top: `${sliderPosition}%`,
                        transform: "translate(-50%, -50%)",
                    }),
                    background: "none",
                    border: 0,
                    padding: 0,
                    pointerEvents: "all",
                    appearance: "none",
                    outline: 0,
                    transition: isDragging ? "none" : (isHorizontal ? "left 0.1s ease" : "top 0.1s ease"),
                    cursor: isHorizontal ? "ew-resize" : "ns-resize",
                    "&:focus-visible": {
                        outline: "2px solid white",
                        outlineOffset: "2px",
                    },
                }}
            >
                {/* Center button */}
                <Box
                    sx={{
                        display: "grid",
                        gridAutoFlow: "column",
                        gap: 1,
                        placeContent: "center",
                        width: "56px",
                        height: "56px",
                        borderRadius: "50%",
                        borderStyle: "solid",
                        borderWidth: "2px",
                        borderColor: "#fff",
                        pointerEvents: "auto",
                        backdropFilter: "blur(7px)",
                        WebkitBackdropFilter: "blur(7px)",
                        backgroundColor: "rgba(0, 0, 0, 0.125)",
                        boxShadow: "0 0 4px rgba(0,0,0,.35)",
                        color: "#fff",
                        ...(isHorizontal ? {} : {transform: "rotate(90deg)"}),
                    }}
                >
                    {/* First arrow */}
                    <Box
                        sx={{
                            width: 0,
                            height: 0,
                            borderTop: "8px solid transparent",
                            borderRight: "10px solid",
                            borderBottom: "8px solid transparent",
                        }}
                    />
                    {/* Second arrow */}
                    <Box
                        sx={{
                            width: 0,
                            height: 0,
                            borderTop: "8px solid transparent",
                            borderRight: "10px solid",
                            borderBottom: "8px solid transparent",
                            transform: "rotate(180deg)",
                        }}
                    />
                </Box>
            </Box>
        </Box>
    );
}