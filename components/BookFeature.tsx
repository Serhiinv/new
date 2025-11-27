import React, {useState, useRef, useEffect, useCallback} from "react";
import {Box} from "@mui/material";

export interface BookFeatureProps {
    pages?: React.ReactNode[];
    width?: number;
    height?: number;
    currentPage?: number; // controlled page index
    onPageChange?: (page: number) => void; // notify parent on page change
}

const PAGE_WIDTH = 400;
const PAGE_HEIGHT = 500;
const FLIP_DURATION = 1000; // ms

export default function BookFeature({
                                        pages,
                                        width = PAGE_WIDTH * 2,
                                        height = PAGE_HEIGHT,
                                        currentPage, // new prop
                                        onPageChange, // new prop
                                    }: BookFeatureProps) {
    const bookPages = pages ?? [];
    const isControlled = typeof currentPage === 'number';
    const [internalPageIndex, setInternalPageIndex] = useState(0);
    const pageIndex = isControlled ? currentPage! : internalPageIndex;
    const [isFlipping, setIsFlipping] = useState(false);
    const [flipDirection, setFlipDirection] = useState<"next" | "prev" | null>(null);
    const [flippingProgress, setFlippingProgress] = useState<"idle" | "start" | "end">("idle");
    const containerRef = useRef<HTMLDivElement>(null);

    // Show two pages at a time: left and right
    const leftPage = bookPages[pageIndex] ?? null;
    const rightPage = bookPages[pageIndex + 1] ?? null;
    const nextLeftPage = bookPages[pageIndex + 2] ?? null;
    const prevLeftPage = bookPages[pageIndex - 2] ?? null;
    // const isFirstPage = pageIndex === 0;
    // const isThirdPage = pageIndex === 2;
    // const prevLeftPage = isThirdPage ? null : (bookPages[pageIndex - 2] ?? null);
    const nextRightPage = bookPages[pageIndex + 3] ?? null;
    const prevRightPage = bookPages[pageIndex - 1] ?? null;


    const canFlipNext = pageIndex + 2 < bookPages.length;
    const canFlipPrev = pageIndex - 2 >= 0;

    const handleFlip = useCallback((direction: "next" | "prev") => {
        if (isFlipping) return;
        setFlipDirection(direction);
        setIsFlipping(true);
        setFlippingProgress("start");
    }, [isFlipping]);

    const handleLeftPageClick = () => {
        if (canFlipPrev) handleFlip("prev");
    };
    const handleRightPageClick = () => {
        if (canFlipNext) handleFlip("next");
    };

    // Keyboard navigation
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (isFlipping) return;
            if (e.key === "ArrowRight" && canFlipNext) {
                handleFlip("next");
            } else if (e.key === "ArrowLeft" && canFlipPrev) {
                handleFlip("prev");
            }
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [isFlipping, canFlipNext, canFlipPrev, pageIndex, handleFlip]);

    // Animate flipping progress
    useEffect(() => {
        if (isFlipping && flippingProgress === "start") {
            // Trigger transition to 'end' on next tick
            const id = setTimeout(() => setFlippingProgress("end"), 20);
            return () => clearTimeout(id);
        }
        if (!isFlipping) {
            setFlippingProgress("idle");
        }
    }, [isFlipping, flippingProgress]);

    // Complete flip after animation
    useEffect(() => {
        if (isFlipping && flippingProgress === "end") {
            const id = setTimeout(() => {
                const newIndex = flipDirection === "next" ? pageIndex + 2 : pageIndex - 2;
                if (isControlled) {
                    onPageChange && onPageChange(newIndex);
                } else {
                    setInternalPageIndex(newIndex);
                    onPageChange && onPageChange(newIndex);
                }
                setIsFlipping(false);
                setFlipDirection(null);
                setFlippingProgress("idle");
            }, FLIP_DURATION);
            return () => clearTimeout(id);
        }
    }, [isFlipping, flippingProgress, flipDirection, isControlled, pageIndex, onPageChange]);


    // Flipping page faces
    let flippingFront: React.ReactNode = null;
    let flippingBack: React.ReactNode = null;
    let flippingPageStyle: React.CSSProperties = {};
    let flippingTransform = "none";
    let gradientOpacity = 0;

    if (isFlipping && flipDirection === "next") {
        flippingFront = rightPage;
        flippingBack = nextLeftPage;
        gradientOpacity = flippingProgress === "end" ? 0.3 : 0;
        flippingPageStyle = {
            left: width / 2,
            borderTopRightRadius: 8,
            borderBottomRightRadius: 8,
            transformOrigin: "left center",
            boxShadow: flippingProgress === "end"
                ? "-12px 0 32px 0 rgba(0,0,0,0.25)"
                : "-8px 0 24px 0 rgba(0,0,0,0.15)",
            zIndex: 10,
        };
        flippingTransform = flippingProgress === "start" ? "rotateY(0deg)" : "rotateY(-180deg)";
    } else if (isFlipping && flipDirection === "prev") {
        flippingFront = leftPage;
        flippingBack = prevRightPage;
        gradientOpacity = flippingProgress === "end" ? 0.3 : 0;
        flippingPageStyle = {
            left: 0,
            borderTopLeftRadius: 8,
            borderBottomLeftRadius: 8,
            transformOrigin: "right center",
            boxShadow: flippingProgress === "end"
                ? "12px 0 32px 0 rgba(0,0,0,0.25)"
                : "8px 0 24px 0 rgba(0,0,0,0.15)",
            zIndex: 10,
        };
        flippingTransform = flippingProgress === "start" ? "rotateY(0deg)" : "rotateY(180deg)";
    }

    // Determine what to render for static left/right pages for smooth flip
    const isFirstPage = pageIndex === 0;
    const isThirdPage = pageIndex === 2; ////
    let staticLeftPage = isFirstPage ? null : leftPage;
    // let staticLeftPage = leftPage;
    let staticRightPage = rightPage;
    if (isFlipping && flipDirection === "next") {
        // Show the next Right page under the flipping page
        staticRightPage = nextRightPage;
    } else if (isFlipping && flipDirection === "prev") {
        // Show the previous Left page under the flipping page
        // staticLeftPage = prevLeftPage;
        staticLeftPage = isThirdPage ? null : prevLeftPage; //////
    }
    return (
        <Box
            ref={containerRef}
            tabIndex={0}
            sx={{
                width,
                height,
                perspective: 1500,
                display: "flex",
                position: "relative",
                userSelect: "none",
                background: "transparent",
                // background: "#d4cfc4",
                borderRadius: 0,
                overflow: "visible",
                outline: "none",
                boxShadow: isFirstPage ? "transparent" : "0 4px 32px 0 rgba(0,0,0,0.10)",
            }}
        >
            {/*Left Page Stack (thickness visualization - multiple layers)*/}
            {[...Array(5)].map((_, i) => (
                <Box
                    key={`left-stack-${i}`}
                    sx={{
                        position: "absolute",
                        left: -6 - i * 0.8,
                        top: 8 + i * 0.5,
                        width: width / 2 + 6,
                        height: height - 4,
                        // background: isFirstPage ? "transparent" : `linear-gradient(to right, #d8d8d8, #e8e8e8)`,
                        background: pageIndex<4  ? "transparent" : `linear-gradient(to right, #d8d8d8, #e8e8e8)`,
                        borderTopLeftRadius: 8,
                        borderBottomLeftRadius: 8,
                        borderBottomRightRadius: 3,
                        boxShadow: isFirstPage ? "transparent" : "-1px 0 3px rgba(0,0,0,0.15)",
                        zIndex: -5 + i,
                        opacity: 0.7 - i * 0.1,
                        // display: "none"
                    }}
                />
            ))}
            {/*Left Page Stack (thickness visualization - back layer)*/}
            {[...Array(5)].map((_, i) => (
                <Box
                    key={`left-stack-${i}`}
                    sx={{
                        position: "absolute",
                        left: -9 - i * 0.8,
                        top: 10 + i * 0.5,
                        width: width / 2 + 4.5,
                        height: height - 3,
                        // background: isFirstPage ? "transparent" : "#999999",
                        // background: pageIndex>2 ? "transparent" : "#999999",
                        background: pageIndex<5 ? "transparent" : "#999999",
                        borderTopLeftRadius: 8,
                        borderBottomLeftRadius: 8,
                        zIndex: -10 + i,
                        // display: "none"
                    }}
                />
            ))}

            {/* Right Page Stack (thickness visualization - multiple layers) */}
            {[...Array(5)].map((_, i) => (
                 <Box
                    key={`right-stack-${i}`}
                    sx={{
                        position: "absolute",
                        right: -6 - i * 0.8,
                        top: 8 + i * 0.5,
                        width: width / 2 + 6,
                        height: height - 4,
                        background: `linear-gradient(to left, #d8d8d8, #e8e8e8)`,
                        borderTopRightRadius: 8,
                        borderBottomRightRadius: 8,
                        borderBottomLeftRadius: 3,
                        boxShadow: "1px 0 3px rgba(0,0,0,0.15)",
                        zIndex: -5 + i,
                        opacity: 0.7 - i * 0.1,
                    }}
                />
            ))}
            {/* Right Page Stack (thickness visualization - back layer) */}
            {[...Array(5)].map((_, i) => (
                <Box
                    key={`right-stack-${i}`}
                    sx={{
                        position: "absolute",
                        right: -9 - i * 0.8,
                        top: 10 + i * 0.5,
                        width: width / 2 + 4.5,
                        height: height - 3,
                        background: "#999999",
                        borderTopRightRadius: 8,
                        borderBottomRightRadius: 8,
                        zIndex: -10 + i,
                    }}
                />
            ))}

            {/* Left Page (static, updates after flip) */}
            <Box
                onClick={handleLeftPageClick}
                sx={{
                    width: width / 2,
                    height,
                    background: isFirstPage ? "transparent" : "#fff",
                    boxShadow: isFirstPage
                        ? "none"
                        : "inset -2px 0 8px rgba(0,0,0,0.1), 4px 0 12px rgba(0,0,0,0.15)",
                    zIndex: 1,
                    position: "relative",
                    borderTopLeftRadius: 8,
                    borderBottomLeftRadius: 8,
                    overflow: "hidden",
                    display: "flex",
                    flexDirection: "column",
                    cursor: canFlipPrev ? "pointer" : "default",
                    transition: "box-shadow 0.3s",
                    "&:hover": canFlipPrev
                        ? { boxShadow: "inset -2px 0 8px rgba(0,0,0,0.1), 0 0 20px rgba(0,0,0,0.2)" }
                        : {},
                    "&::before": isFirstPage
                        ? {}
                        : {
                            content: '""',
                            position: "absolute",
                            left: 0,
                            top: 0,
                            bottom: 0,
                            width: "8px",
                            background: "linear-gradient(to right, #f5f5f5, transparent)",
                            pointerEvents: "none",
                            zIndex: 1,
                        },
                }}
            >
                {staticLeftPage}
            </Box>
            {/* Right Page (static, updates after flip) */}
            <Box
                onClick={handleRightPageClick}
                sx={{
                    width: width / 2,
                    height,
                    background: "#fafafa",
                    boxShadow: "inset 2px 0 8px rgba(0,0,0,0.1), -4px 0 12px rgba(0,0,0,0.15)",
                    zIndex: 1,
                    position: "relative",
                    borderTopRightRadius: 8,
                    borderBottomRightRadius: 8,
                    overflow: "hidden",
                    display: "flex",
                    flexDirection: "column",
                    cursor: canFlipNext ? "pointer" : "default",
                    transition: "box-shadow 0.3s",
                    "&:hover": canFlipNext ? {boxShadow: "inset 2px 0 8px rgba(0,0,0,0.1), 0 0 20px rgba(0,0,0,0.2)"} : {},
                    // Add page edge visibility
                    "&::before": {
                        content: '""',
                        position: "absolute",
                        right: 0,
                        top: 0,
                        bottom: 0,
                        width: "8px",
                        background: "linear-gradient(to left, #f5f5f5, transparent)",
                        pointerEvents: "none",
                        zIndex: 1,
                    },
                }}
            >
                {staticRightPage}
            </Box>
            {/* Flipping Page (on top, only during animation) */}
            {isFlipping && (
                <Box
                    sx={{
                        width: width / 2,
                        height,
                        position: "absolute",
                        top: 0,
                        ...flippingPageStyle,
                        background: "transparent",
                        transformStyle: "preserve-3d",
                        transition: `transform ${FLIP_DURATION}ms cubic-bezier(0.645, 0.045, 0.355, 1)`,
                        transform: flippingTransform,
                        pointerEvents: "none",
                    }}
                >
                    {/* Front face */}
                    <Box
                        sx={{
                            width: "100%",
                            height: "100%",
                            background: flipDirection === "next" ? "#f7f7f7" : "#fff",
                            borderTopRightRadius: flipDirection === "next" ? 8 : 0,
                            borderBottomRightRadius: flipDirection === "next" ? 8 : 0,
                            borderTopLeftRadius: flipDirection === "prev" ? 8 : 0,
                            borderBottomLeftRadius: flipDirection === "prev" ? 8 : 0,
                            overflow: "hidden",
                            position: "absolute",
                            top: 0,
                            left: 0,
                            backfaceVisibility: "hidden",
                            display: "flex",
                            flexDirection: "column",
                            boxShadow: flipDirection === "next"
                                ? "-8px 0 24px 0 rgba(0,0,0,0.15)"
                                : "8px 0 24px 0 rgba(0,0,0,0.15)",
                        }}
                    >
                        {flippingFront}
                        {/* Gradient overlay for depth effect */}
                        <Box
                            sx={{
                                position: "absolute",
                                top: 0,
                                left: 0,
                                width: "100%",
                                height: "100%",
                                background: flipDirection === "next"
                                    ? `linear-gradient(to right, rgba(0,0,0,${gradientOpacity}), transparent)`
                                    : `linear-gradient(to left, rgba(0,0,0,${gradientOpacity}), transparent)`,
                                pointerEvents: "none",
                                transition: `opacity ${FLIP_DURATION / 2}ms ease`,
                            }}
                        />
                    </Box>
                    {/* Back face */}
                    <Box
                        sx={{
                            width: "100%",
                            height: "100%",
                            background: flipDirection === "next" ? "#fff" : "#f7f7f7",
                            borderTopLeftRadius: flipDirection === "next" ? 8 : 0,
                            borderBottomLeftRadius: flipDirection === "next" ? 8 : 0,
                            borderTopRightRadius: flipDirection === "prev" ? 8 : 0,
                            borderBottomRightRadius: flipDirection === "prev" ? 8 : 0,
                            overflow: "hidden",
                            position: "absolute",
                            top: 0,
                            left: 0,
                            backfaceVisibility: "hidden",
                            transform: "rotateY(180deg)",
                            display: "flex",
                            flexDirection: "column",
                            boxShadow: flipDirection === "next"
                                ? "8px 0 24px 0 rgba(0,0,0,0.10)"
                                : "-8px 0 24px 0 rgba(0,0,0,0.10)",
                        }}
                    >
                        {flippingBack}
                        {/* Gradient overlay for back face */}
                        <Box
                            sx={{
                                position: "absolute",
                                top: 0,
                                left: 0,
                                width: "100%",
                                height: "100%",
                                background: flipDirection === "next"
                                    ? `linear-gradient(to left, rgba(0,0,0,${gradientOpacity}), transparent)`
                                    : `linear-gradient(to right, rgba(0,0,0,${gradientOpacity}), transparent)`,
                                pointerEvents: "none",
                                transition: `opacity ${FLIP_DURATION / 2}ms ease`,
                            }}
                        />
                    </Box>
                </Box>
            )}
            {/* Book spine */}
            <Box
                sx={{
                    position: "absolute",
                    left: width / 2 - 3,
                    top: 0,
                    width: 3,
                    height,
                    background: "#e0e0e0",
                    zIndex: 3,
                    borderRadius: 3,
                }}
            />
        </Box>
    );
}