import { useMemo } from "react";

export function useScaleStyles(scale: number) {
  return useMemo(() => ({
    scaleWrapper: {
      width: 375, // Base width iPhone 12mini
      height: 630, // Base height iPhone 12mini without browser UI
      transform: `scale(${scale})`,
      transformOrigin: "top center",
      position: "relative" as const,
      display: "flex",
      justifyContent: "center",
      maxWidth: "100vw",
      maxHeight: "100vh",
      margin: "0 auto",
      overflow: "hidden",
    },
    verticalStack: {
      width: "100%",
      height: "100%",
      minHeight: "100%",
      display: "flex",
      flexDirection: "column" as const,
      alignItems: "center",
      justifyContent: "center",
      gap: "15px",
      padding: "15px",
      boxSizing: "border-box",
      overflow: "hidden",
    },
  }), [scale]);
}
