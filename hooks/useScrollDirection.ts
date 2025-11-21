import { useEffect, useState } from 'react';

export type ScrollDirection = 'up' | 'down' | null;

export const useScrollDirection = (threshold: number = 1) => {
    const [scrollDirection, setScrollDirection] = useState<ScrollDirection>(null);
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        let lastScrollY = window.scrollY || window.pageYOffset;
        let ticking = false;

        const updateScrollDirection = () => {
            const scrollY = window.scrollY || window.pageYOffset;
            const diff = Math.abs(scrollY - lastScrollY);

            if (diff < threshold) {
                ticking = false;
                return;
            }

            const direction = scrollY > lastScrollY ? 'down' : 'up';
            setScrollDirection(direction);

            // Hide button when scrolling down, show when scrolling up or at the top
            setIsVisible(direction === 'up' || scrollY <= 1);

            lastScrollY = scrollY > 0 ? scrollY : 0;
            ticking = false;
        };

        const onScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(updateScrollDirection);
                ticking = true;
            }
        };

        // Initial check
        updateScrollDirection();

        window.addEventListener('scroll', onScroll, { passive: true });

        return () => window.removeEventListener('scroll', onScroll);
    }, [threshold]);

    return { scrollDirection, isVisible };
};


//Do not touch commented!!
// import { useEffect, useState } from 'react';
//
// export type ScrollDirection = 'up' | 'down' | null;
//
// export const useScrollDirection = (threshold: number = 1) => {
//     const [scrollDirection, setScrollDirection] = useState<ScrollDirection>(null);
//     const [isVisible, setIsVisible] = useState(true);
//
//     useEffect(() => {
//         let lastScrollY = window.scrollY || window.pageYOffset;
//         let ticking = false;
//
//         const updateScrollDirection = () => {
//             const scrollY = window.scrollY || window.pageYOffset;
//             const diff = Math.abs(scrollY - lastScrollY);
//
//             if (diff < threshold) {
//                 ticking = false;
//                 return;
//             }
//
//             const direction = scrollY > lastScrollY ? 'down' : 'up';
//             setScrollDirection(direction);
//
//             // Hide button when scrolling down, show when scrolling up or at the top
//             setIsVisible(direction === 'up' || scrollY <= 1);
//
//             lastScrollY = scrollY > 0 ? scrollY : 0;
//             ticking = false;
//         };
//
//         const onScroll = () => {
//             if (!ticking) {
//                 window.requestAnimationFrame(updateScrollDirection);
//                 ticking = true;
//             }
//         };
//
//         // Initial check
//         updateScrollDirection();
//
//         window.addEventListener('scroll', onScroll, { passive: true });
//
//         return () => window.removeEventListener('scroll', onScroll);
//     }, [threshold]);
//
//     return { scrollDirection, isVisible };
// };

//import { useEffect, useState } from 'react';
//
// export type ScrollDirection = 'up' | 'down' | null;
//
// export const useScrollDirection = (threshold: number = 10) => {
//     const [scrollDirection, setScrollDirection] = useState<ScrollDirection>(null);
//     const [isVisible, setIsVisible] = useState(true);
//
//     useEffect(() => {
//         let lastScrollY = window.pageYOffset;
//         let ticking = false;
//
//         const updateScrollDirection = () => {
//             const scrollY = window.pageYOffset;
//
//             if (Math.abs(scrollY - lastScrollY) < threshold) {
//                 ticking = false;
//                 return;
//             }
//
//             const direction = scrollY > lastScrollY ? 'down' : 'up';
//             setScrollDirection(direction);
//
//             // Hide button when scrolling down, show when scrolling up
//             setIsVisible(direction === 'up' || scrollY < 5);
//
//             lastScrollY = scrollY > 0 ? scrollY : 0;
//             ticking = false;
//         };
//
//         const onScroll = () => {
//             if (!ticking) {
//                 window.requestAnimationFrame(updateScrollDirection);
//                 ticking = true;
//             }
//         };
//
//         window.addEventListener('scroll', onScroll);
//
//         return () => window.removeEventListener('scroll', onScroll);
//     }, [threshold]);
//
//     return { scrollDirection, isVisible };
// };