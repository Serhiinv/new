// Animation keyframes for pages
export const animations = {
    fadeInUp: {
        "@keyframes fadeInUp": {
            from: { opacity: 0, transform: "translateY(20px)" },
            to: { opacity: 1, transform: "translateY(0)" },
        },
    },
    slideInRight: {
        "@keyframes slideInRight": {
            from: { opacity: 0, transform: "translateX(100px)" },
            to: { opacity: 1, transform: "translateX(0)" },
        },
    },
    flipIn: {
        "@keyframes flipIn": {
            from: { opacity: 0, transform: "perspective(400px) rotateX(-90deg)" },
            to: { opacity: 1, transform: "perspective(400px) rotateX(0)" },
        },
    },
    handSwipe: {
        "@keyframes handSwipe": {
            "0%": { right: "10%", opacity: 0 },
            "10%": { opacity: 1 },
            "40%": { right: "60%", opacity: 1 },
            "50%": { right: "60%", opacity: 0 },
            "50.1%": { right: "10%", opacity: 0 },
            "100%": { right: "10%", opacity: 0 },
        },
    },
    slideInFromLeft: {
        "@keyframes slideInFromLeft": {
            from: {opacity: 0, transform: "translateX(-50px)"},
            to: { opacity: 1, transform: "translateX(0)" },
        }
    },
    slideInFromTop: {
        "@keyframes slideInFromTop": {
            from: { opacity: 0, transform: "translateY(-20vh)" },
            to: { opacity: 1, transform: "translateY(0)" },
        },
    },
};