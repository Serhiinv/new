import { useMemo } from "react";
import { useZoomDetection } from "./useZoomDetection";

export function useScaleStyles(scale: number) {
  const shouldAllowScroll = useZoomDetection();

  return useMemo(() => ({
    scaleWrapper: {
      width: 375, // Base width iPhone 12mini
      height: shouldAllowScroll ? "auto" : 630, // Auto height when zoomed to allow content expansion
      transform: `scale(${scale})`,
      transformOrigin: "top center",
      position: "relative" as const,
      display: "flex",
      justifyContent: "center",
      maxWidth: "100vw",
      maxHeight: shouldAllowScroll ? "none" : "100vh", // Remove max height restriction when zoomed
      margin: "0 auto",
      overflow: shouldAllowScroll ? "visible" : "hidden", // Allow overflow when zoomed
    },
    verticalStack: {
      width: "100%",
      height: shouldAllowScroll ? "auto" : "100%", // Auto height when zoomed
      minHeight: shouldAllowScroll ? "100vh" : "100%", // Ensure minimum height when zoomed
      display: "flex",
      flexDirection: "column" as const,
      alignItems: "center",
      justifyContent: "center",
      gap: "15px",
      padding: "15px",
      boxSizing: "border-box",
      overflow: shouldAllowScroll ? "visible" : "hidden", // Allow overflow when zoomed
    },
  }), [scale, shouldAllowScroll]);
}
