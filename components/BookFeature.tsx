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

    // Manual drag state
    const [isDragging, setIsDragging] = useState(false);
    const [dragProgress, setDragProgress] = useState(0);
    const [dragStartX, setDragStartX] = useState(0);
    const [dragDirection, setDragDirection] = useState<"next" | "prev" | null>(null);
    const [hasMovedMouse, setHasMovedMouse] = useState(false);

    // Show two pages at a time: left and right
    const leftPage = bookPages[pageIndex] ?? null;
    const rightPage = bookPages[pageIndex + 1] ?? null;
    const nextLeftPage = bookPages[pageIndex + 2] ?? null;
    const prevLeftPage = bookPages[pageIndex - 2] ?? null;
    const nextRightPage = bookPages[pageIndex + 3] ?? null;
    const prevRightPage = bookPages[pageIndex - 1] ?? null;


    const canFlipNext = pageIndex + 2 < bookPages.length;
    const canFlipPrev = pageIndex - 2 >= 0;

    const handleFlip = useCallback((direction: "next" | "prev", force = false) => {
        if (!force && (isFlipping || isDragging)) return;
        setFlipDirection(direction);
        setIsFlipping(true);
        setFlippingProgress("start");
    }, [isFlipping, isDragging]);

    // const handleLeftPageClick = () => {
    //     if (canFlipPrev) handleFlip("prev");
    // };
    const handleLeftPageClick = (e: React.MouseEvent) => {
        // Check if the click was on a link or inside a link
        let el = e.target as HTMLElement | null;
        while (el) {
            if (el.tagName === "A") return; // Do not flip if a link was clicked
            el = el.parentElement;
        }
        if (canFlipPrev) handleFlip("prev");
    };
    // const handleRightPageClick = () => {
    //     if (canFlipNext) handleFlip("next");
    // };
    const handleRightPageClick = (e: React.MouseEvent) => {
        // Check if the click was on a link or inside a link
        let el = e.target as HTMLElement | null;
        while (el) {
            if (el.tagName === "A") return; // Do not flip if a link was clicked
            el = el.parentElement;
        }
        if (canFlipNext) handleFlip("next");
    };

    // Manual drag handlers
    const handleMouseDown = (e: React.MouseEvent, direction: "next" | "prev") => {
        // Check if the click was on a link or inside a link
        let el = e.target as HTMLElement | null;
        while (el) {
            if (el.tagName === "A") return; // Do not drag if a link was clicked
            el = el.parentElement;
        }

        if (direction === "next" && !canFlipNext) return;
        if (direction === "prev" && !canFlipPrev) return;

        e.preventDefault();
        setDragStartX(e.clientX);
        setDragDirection(direction);
        setHasMovedMouse(false);
        // Don't set isDragging yet - wait for mouse move
    };

    const handleMouseMove = useCallback((e: MouseEvent) => {
        if (!dragDirection) return;

        const deltaX = e.clientX - dragStartX;
        const pageWidth = width / 2;

        // Calculate progress regardless of dragging state
        let progress = 0;
        if (dragDirection === "next") {
            progress = Math.max(-1, Math.min(0, deltaX / pageWidth));
        } else {
            progress = Math.max(0, Math.min(1, deltaX / pageWidth));
        }

        // Only start dragging if moved more than 5 pixels
        if (!isDragging && Math.abs(deltaX) > 5) {
            setIsDragging(true);
            setHasMovedMouse(true);
        }

        setDragProgress(progress);
    }, [isDragging, dragStartX, dragDirection, width]);

    const handleMouseUp = useCallback(() => {
        if (!dragDirection) return;

        const threshold = 0.3;
        const shouldFlip = Math.abs(dragProgress) > threshold;

        // If we should flip, transition smoothly from current drag position
        if (shouldFlip) {
            // Keep isDragging true to maintain the flipping page visualization
            // But allow the flip to start
            setIsFlipping(true);
            setFlipDirection(dragDirection);
            setFlippingProgress("end"); // Skip to end state immediately

            // Calculate remaining rotation needed
            const currentRotation = Math.abs(dragProgress * 180);
            const remainingRotation = 180 - currentRotation;
            const adjustedDuration = (remainingRotation / 180) * FLIP_DURATION;

            // Complete the page change after the remaining animation time
            setTimeout(() => {
                const newIndex = dragDirection === "next" ? pageIndex + 2 : pageIndex - 2;
                if (isControlled) {
                    onPageChange && onPageChange(newIndex);
                } else {
                    setInternalPageIndex(newIndex);
                    onPageChange && onPageChange(newIndex);
                }
                setIsFlipping(false);
                setFlipDirection(null);
                setFlippingProgress("idle");
                setIsDragging(false);
                setDragProgress(0);
                setDragDirection(null);
                setHasMovedMouse(false);
            }, adjustedDuration);
        } else {
            // Snap back - no flip
            setIsDragging(false);
            setDragProgress(0);
            setDragDirection(null);
            setHasMovedMouse(false);
        }

        // Handle click (no mouse movement)
        if (!hasMovedMouse) {
            setDragDirection(null);
            setTimeout(() => handleFlip(dragDirection, true), 0);
        }
    }, [isDragging, hasMovedMouse, dragProgress, dragDirection, handleFlip, pageIndex, isControlled, onPageChange]);

    // }, [isDragging, hasMovedMouse, dragProgress, dragDirection, handleFlip]);
    useEffect(() => {
        if (dragDirection) {
            window.addEventListener("mousemove", handleMouseMove);
            window.addEventListener("mouseup", handleMouseUp);
            return () => {
                window.removeEventListener("mousemove", handleMouseMove);
                window.removeEventListener("mouseup", handleMouseUp);
            };
        }
    }, [dragDirection, handleMouseMove, handleMouseUp]);

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

    // Handle manual drag visualization
    if (isDragging && dragDirection) {
        const rotation = dragProgress * 180;
        gradientOpacity = Math.abs(dragProgress) * 0.3;

        if (dragDirection === "next") {
            flippingFront = rightPage;
            flippingBack = nextLeftPage;
            flippingPageStyle = {
                left: width / 2,
                borderTopRightRadius: 8,
                borderBottomRightRadius: 8,
                transformOrigin: "left center",
                zIndex: 10,
            };
            flippingTransform = `rotateY(${rotation}deg)`;
        } else {
            flippingFront = leftPage;
            flippingBack = prevRightPage;
            flippingPageStyle = {
                left: 0,
                borderTopLeftRadius: 8,
                borderBottomLeftRadius: 8,
                transformOrigin: "right center",
                zIndex: 10,
            };
            flippingTransform = `rotateY(${rotation}deg)`;
        }
    } else if (isFlipping && flipDirection === "next") {
        flippingFront = rightPage;
        flippingBack = nextLeftPage;
        gradientOpacity = flippingProgress === "end" ? 0.3 : 0;
        flippingPageStyle = {
            left: width / 2,
            borderTopRightRadius: 8,
            borderBottomRightRadius: 8,
            transformOrigin: "left center",
            // boxShadow: flippingProgress === "end"
            //     ? "-12px 0 32px 0 rgba(0,0,0,0.25)"
            //     : "-8px 0 24px 0 rgba(0,0,0,0.15)",
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
            // boxShadow: flippingProgress === "end"
            //     ? "12px 0 32px 0 rgba(0,0,0,0.25)"
            //     : "8px 0 24px 0 rgba(0,0,0,0.15)",
            zIndex: 10,
        };
        flippingTransform = flippingProgress === "start" ? "rotateY(0deg)" : "rotateY(180deg)";
    }

    // Determine what to render for static left/right pages for smooth flip
    const isFirstPage = pageIndex === 0;
    const isThirdPage = pageIndex === 2;
    let staticLeftPage = isFirstPage ? null : leftPage;
    let staticRightPage = rightPage;

    if (isDragging && dragDirection === "next") {
        staticRightPage = nextRightPage;
    } else if (isDragging && dragDirection === "prev") {
        staticLeftPage = isThirdPage ? null : prevLeftPage;
    } else if (isFlipping && flipDirection === "next") {
        // Show the next Right page under the flipping page
        staticRightPage = nextRightPage;
    } else if (isFlipping && flipDirection === "prev") {
        // Show the previous Left page under the flipping page
        staticLeftPage = isThirdPage ? null : prevLeftPage;
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
                borderRadius: 0,
                overflow: "visible",
                outline: "none",
                boxShadow: (isFirstPage || isThirdPage) ? "transparent" : "0 4px 32px 0 rgba(0,0,0,0.10)",
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
                        background: pageIndex < 4  ? "transparent" : `linear-gradient(to right, #d8d8d8, #e8e8e8)`,
                        borderTopLeftRadius: 8,
                        borderBottomLeftRadius: 8,
                        borderBottomRightRadius: 3,
                        zIndex: -5 + i,
                        opacity: 0.7 - i * 0.1,
                        boxShadow: pageIndex < 4 ? "transparent" : "-1px 0 3px rgba(0,0,0,0.15)",

                    }}
                />
            ))}
            {/*Left Page Stack (thickness visualization - back layer)*/}
            {[...Array(5)].map((_, i) => (
                <Box
                    key={`left-stack-back-${i}`}
                    sx={{
                        position: "absolute",
                        left: -9 - i * 0.8,
                        top: 10 + i * 0.5,
                        width: width / 2 + 4.5,
                        height: height - 3,
                        background: pageIndex < 5 ? "transparent" : "#999999",
                        borderTopLeftRadius: 8,
                        borderBottomLeftRadius: 8,
                        zIndex: -10 + i,
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
                        background: pageIndex > (bookPages.length - 3) ? "transparent" : `linear-gradient(to left, #d8d8d8, #e8e8e8)`,
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
                    key={`right-stack-back-${i}`}
                    sx={{
                        position: "absolute",
                        right: -9 - i * 0.8,
                        top: 10 + i * 0.5,
                        width: width / 2 + 4.5,
                        height: height - 3,
                        background: pageIndex > (bookPages.length - 5) ? "transparent" : "#999999",
                        borderTopRightRadius: 8,
                        borderBottomRightRadius: 8,
                        zIndex: -10 + i,
                    }}
                />
            ))}

            {/* Left Page (static, updates after flip) */}
            <Box
                onClick={handleLeftPageClick}
                onMouseDown={(e) => handleMouseDown(e, "prev")}
                onDragStart={(e) => e.preventDefault()}
                sx={{
                    width: width / 2,
                    height,
                    background: (isFirstPage || isThirdPage) ? "transparent" : "#fff",
                    boxShadow: (isFirstPage || isThirdPage)
                        ? "none"
                        : "inset -2px 0 8px rgba(0,0,0,0.1), 4px 0 12px rgba(0,0,0,0.15)",
                    zIndex: 1,
                    position: "relative",
                    borderTopLeftRadius: 8,
                    borderBottomLeftRadius: 8,
                    borderTopRightRadius: 6,
                    borderBottomRightRadius: 2,
                    overflow: "hidden",
                    display: "flex",
                    flexDirection: "column",
                    cursor: canFlipPrev ? "pointer" : "default",
                    transition: "box-shadow 0.3s",
                    "&:hover": canFlipPrev
                        ? { boxShadow: "inset -2px 0 8px rgba(0,0,0,0.1), 0 0 20px rgba(0,0,0,0.2)" }
                        : {},
                    "&::before": (isFirstPage || isThirdPage)
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
                    "& *": {
                        pointerEvents: "none",
                    },
                    "& a": {
                        pointerEvents: "auto",
                    },
                }}
            >
                {staticLeftPage}
            </Box>
            {/* Right Page (static, updates after flip) */}
            <Box
                onClick={handleRightPageClick}
                onMouseDown={(e) => handleMouseDown(e, "next")}
                onDragStart={(e) => e.preventDefault()}
                sx={{
                    width: width / 2,
                    height,
                    background: "#fafafa",
                    boxShadow: "inset 2px 0 8px rgba(0,0,0,0.1), -4px 0 12px rgba(0,0,0,0.15)",
                    zIndex: 1,
                    position: "relative",
                    borderTopRightRadius: 8,
                    borderTopLeftRadius: 6,
                    borderBottomLeftRadius: 2,
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
                    "& *": {
                        pointerEvents: "none",
                    },
                    "& a": {
                        pointerEvents: "auto",
                    },
                }}
            >
                {staticRightPage}
            </Box>
            {/* Flipping Page (on top, during animation OR manual drag) */}
            {(isFlipping || isDragging) && (
                <Box
                    sx={{
                        width: width / 2,
                        height,
                        position: "absolute",
                        top: 0,
                        ...flippingPageStyle,
                        background: "transparent",
                        transformStyle: "preserve-3d",
                        transition: isDragging ? "none" : `transform ${FLIP_DURATION}ms cubic-bezier(0.25, 0.46, 0.45, 0.94)`,
                        transform: flippingTransform,
                        willChange: "transform",
                    }}
                >
                    {/* Front face */}
                    <Box
                        sx={{
                            width: "100%",
                            height: "100%",
                            background: (flipDirection === "next" || dragDirection === "next") ? "#f7f7f7" : "#fff",
                            borderTopRightRadius: (flipDirection === "next" || dragDirection === "next") ? 8 : 6,
                            borderBottomRightRadius: (flipDirection === "next" || dragDirection === "next") ? 8 : 0,
                            borderTopLeftRadius: (flipDirection === "prev" || dragDirection === "prev") ? 8 : 6,
                            borderBottomLeftRadius: (flipDirection === "prev" || dragDirection === "prev") ? 8 : 0,
                            overflow: "hidden",
                            position: "absolute",
                            top: 0,
                            left: 0,
                            backfaceVisibility: "hidden",
                            display: "flex",
                            flexDirection: "column",
                            transformStyle: "preserve-3d",
                            boxShadow: (flipDirection === "next" || dragDirection === "next")
                                ? "-2px 0 8px rgba(0,0,0,0.1)"
                                : "2px 0 8px rgba(0,0,0,0.1)",
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
                                background: (flipDirection === "next" || dragDirection === "next")
                                    ? `linear-gradient(to left, rgba(0,0,0,${gradientOpacity}), transparent)`
                                    : `linear-gradient(to right, rgba(0,0,0,${gradientOpacity}), transparent)`,
                                pointerEvents: "none",
                                transition: isDragging ? "none" : `opacity ${FLIP_DURATION / 2}ms ease`,
                            }}
                        />
                    </Box>
                    {/* Back face */}
                    <Box
                        sx={{
                            width: "100%",
                            height: "100%",
                            background: (flipDirection === "next" || dragDirection === "next") ? "#fff" : "#f7f7f7",
                            borderTopLeftRadius: (flipDirection === "next" || dragDirection === "next") ? 8 : 6,
                            borderBottomLeftRadius: (flipDirection === "next" || dragDirection === "next") ? 8 : 0,
                            borderTopRightRadius: (flipDirection === "prev" || dragDirection === "prev") ? 8 : 6,
                            borderBottomRightRadius: (flipDirection === "prev" || dragDirection === "prev") ? 8 : 0,
                            overflow: "hidden",
                            position: "absolute",
                            top: 0,
                            left: 0,
                            backfaceVisibility: "hidden",
                            transform: "rotateY(180deg)",
                            display: "flex",
                            flexDirection: "column",
                            boxShadow: (flipDirection === "next" || dragDirection === "next")
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
                                background: (flipDirection === "next" || dragDirection === "next")
                                    ? `linear-gradient(to left, rgba(0,0,0,${gradientOpacity}), transparent)`
                                    : `linear-gradient(to right, rgba(0,0,0,${gradientOpacity}), transparent)`,
                                pointerEvents: "none",
                                transition: isDragging ? "none" : `opacity ${FLIP_DURATION / 2}ms ease`,
                            }}
                        />
                    </Box>
                </Box>
            )}
            {/* Book spine */}
            <Box
                sx={{
                    position: "absolute",
                    left: width / 2 - 0.5,
                    top: 5.5,
                    width: 3,
                    height: height - 5.5,
                    background: isFirstPage ? "transparent" : "#e0e0e0",
                    zIndex: 3,
                    borderRadius: 3,
                }}
            />
        </Box>
    );
}