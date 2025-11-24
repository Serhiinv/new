import { useState, useEffect } from 'react';

export function useZoomDetection() {
    const [shouldAllowScroll, setShouldAllowScroll] = useState(false);

    useEffect(() => {
        const checkZoom = () => {
            const isActualMobile = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
            const isMobileWidth = window.innerWidth <= 1140;

            // Allow scroll on desktop mobile view (not actual mobile devices)
            setShouldAllowScroll(!isActualMobile && isMobileWidth);
        };

        checkZoom();
        window.addEventListener('resize', checkZoom);

        return () => {
            window.removeEventListener('resize', checkZoom);
        };
    }, []);

    return shouldAllowScroll;
}
