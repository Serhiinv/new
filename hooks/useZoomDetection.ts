import { useEffect, useState } from "react";

export function useZoomDetection() {
  const [shouldAllowScroll, setShouldAllowScroll] = useState(false);

  useEffect(() => {
    const detectZoomAndViewport = () => {
      // Get the device pixel ratio (zoom level)
      const zoomLevel = window.devicePixelRatio;

      // Get actual viewport dimensions
      const viewportWidth = window.innerWidth;

      // Detect if we're on an actual mobile device
      const isTouchDevice = () => {
        return (
          (typeof window !== 'undefined' && 'ontouchstart' in window) ||
          (typeof navigator !== 'undefined' && navigator.maxTouchPoints > 0)
        );
      };

      const isActualMobileDevice = isTouchDevice() && viewportWidth <= 820;

      // Allow scroll only when:
      // 1. User is on desktop (not actual mobile device)
      // 2. Zoom is 150% or more (devicePixelRatio >= 1.5)
      // 3. Mobile view is triggered (viewport width <= 1140px due to zoom)
      const isZoomedIn = zoomLevel >= 1.5;
      const isMobileViewTriggered = viewportWidth <= 1140;
      const isDesktopUser = !isActualMobileDevice;

      const allow = isDesktopUser && isZoomedIn && isMobileViewTriggered;
      setShouldAllowScroll(allow);
    };

    detectZoomAndViewport();
    window.addEventListener('resize', detectZoomAndViewport);
    window.addEventListener('orientationchange', detectZoomAndViewport);

    return () => {
      window.removeEventListener('resize', detectZoomAndViewport);
      window.removeEventListener('orientationchange', detectZoomAndViewport);
    };
  }, []);

  return shouldAllowScroll;
}


// import { useState, useEffect } from 'react';
//
// export function useZoomDetection() {
//     const [shouldAllowScroll, setShouldAllowScroll] = useState(false);
//
//     useEffect(() => {
//         const checkZoom = () => {
//             const isActualMobile = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
//             const isMobileWidth = window.innerWidth <= 1140;
//
//             // Allow scroll on desktop mobile view (not actual mobile devices)
//             setShouldAllowScroll(!isActualMobile && isMobileWidth);
//         };
//
//         checkZoom();
//         window.addEventListener('resize', checkZoom);
//
//         return () => {
//             window.removeEventListener('resize', checkZoom);
//         };
//     }, []);
//
//     return shouldAllowScroll;
// }

