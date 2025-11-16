import { ReactNode, useEffect, useState } from "react";
import { Box } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import { IconButton, Tooltip } from "@mui/material";
import PrimaryButton from "./PrimaryButton";
import { useTheme } from "@mui/material/styles";
import Logo from "./Logo";
import { useScale } from "@/hooks/useScale";

interface LayoutProps {
  children: ReactNode;
  showContactButton?: boolean;
  prevPage?: string;
  nextPage?: string;
  backgroundColor?: string;
  logoVariant?: "light" | "dark";
}

// Define all pages in order
const pages = [
  { path: "/home", label: "Home" },
  { path: "/features", label: "Features" },
  { path: "/design", label: "Design" },
  { path: "/testimonials", label: "Testimonials" },
  { path: "/reason", label: "Reason" },
  { path: "/why-us", label: "Why Us" },
  { path: "/case-study", label: "Case Study" },
  { path: "/contact", label: "Contact" },
];

export default function Layout({
  children,
  showContactButton = true,
  prevPage,
  nextPage,
  backgroundColor,
  logoVariant = "light",
}: LayoutProps) {
  const router = useRouter();
  const currentPath = router.pathname;
  const theme = useTheme();
  const [isActualMobileDevice, setIsActualMobileDevice] = useState(false);

  // Detect if we're on an actual mobile device (not a resized desktop browser)
  useEffect(() => {
    const checkIfActualMobile = () => {
      // Check for touch capability
      const isTouchDevice = () => {
        return (
          (typeof window !== 'undefined' && 'ontouchstart' in window) ||
          (typeof navigator !== 'undefined' && navigator.maxTouchPoints > 0)
        );
      };

      // Check if viewport width is small (actual mobile devices)
      const isSmallViewport = window.innerWidth <= 820;

      // Only consider it a real mobile device if both conditions are true
      setIsActualMobileDevice(isTouchDevice() && isSmallViewport);
    };

    checkIfActualMobile();
    window.addEventListener('resize', checkIfActualMobile);

    return () => {
      window.removeEventListener('resize', checkIfActualMobile);
    };
  }, []);

  // Swipe handler
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  // Minimum swipe distance (in px)
  const minSwipeDistance = 50;

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe && nextPage) {
      router.push(nextPage);
    }
    if (isRightSwipe && prevPage) {
      router.push(prevPage);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" && nextPage) {
        router.push(nextPage);
      }
      if (e.key === "ArrowLeft" && prevPage) {
        router.push(prevPage);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [router, prevPage, nextPage]);

  return (
    <Box
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
      sx={{
        position: isActualMobileDevice ? "fixed" : "relative",
        top: 0,
        left: 0,
        width: "100vw",
        height: isActualMobileDevice ? "100vh" : "auto",
        minHeight: "100vh",
        background: backgroundColor,
        display: "flex",
        justifyContent: "center",
        overflow: "hidden",
        fontFamily: theme.typography.fontFamily,
      }}
    >
      <Box
        sx={{
          width: "100%",
          height: isActualMobileDevice ? "90vh" : "auto",
          maxWidth: { xs: "100%", md: "1600px" },
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: { xs: "flex-start", md: "center" },
          position: "relative",
          overflowY: isActualMobileDevice ? "hidden" : "visible",
          overflowX: "hidden",
        }}
      >
        {/* Logo */}
        <Box
          sx={{
            position: "absolute",
            top: { xs: 20, md: 20 },
            left: "50%",
            transform: "translateX(-50%)",
            zIndex: 100,
          }}
        >
          <Logo variant={logoVariant} />
        </Box>

        {/* Contact US Button */}
        {showContactButton && (
          <Box
            sx={{
              position: "absolute",
              top: { xs: 65, md: 45 },
              right: { xs: 20, md: 40 },
              zIndex: 100,
            }}
          >
            <PrimaryButton href="/contact">Contact us</PrimaryButton>
          </Box>
        )}

        {(prevPage || nextPage) && (
          <Box
            sx={{
              position: "fixed",
              top: { xs: "90%", md: "50%" },
              left: 0,
              right: 0,
              transform: "translateY(-50%)",
              display: "flex",
              justifyContent: "space-between",
              padding: "0 10px",
              zIndex: 10,
              pointerEvents: "none",
              maxWidth: { xs: "100%", md: "1600px" },
              margin: "0 auto",
            }}
          >
            {prevPage ? (
              <Tooltip title="Previous page" placement="right">
                <IconButton
                  component={Link}
                  href={prevPage}
                  sx={{
                    display: { xs: "none", md: "inline-flex" },
                    width: 40,
                    height: 40,
                    borderRadius: 2,
                    background: theme.palette.greys.light,
                    color: theme.palette.whites.main,
                    pointerEvents: "auto",
                    "&:hover": { background: theme.palette.greys.main },
                  }}
                >
                  <ChevronLeft />
                </IconButton>
              </Tooltip>
            ) : (
              <Box />
            )}

            {nextPage ? (
              <Tooltip title="Next page" placement="left">
                <IconButton
                  component={Link}
                  href={nextPage}
                  sx={{
                    display: { xs: "none", md: "inline-flex" },
                    width: 40,
                    height: 40,
                    borderRadius: 2,
                    background: theme.palette.greys.light,
                    color: theme.palette.whites.main,
                    pointerEvents: "auto",
                    "&:hover": { background: theme.palette.greys.main },
                  }}
                >
                  <ChevronRight />
                </IconButton>
              </Tooltip>
            ) : (
              <Box />
            )}
          </Box>
        )}

        {/* Page Content */}
        {children}

        {/* Footer with Pagination Dots */}
        <Box
          sx={{
            position: "absolute",
              bottom: { xs: "2%", md: 30 },
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            gap: 2,
            zIndex: 100,
            '@media (max-width: 380px)': {
              bottom: "3%",
            },
          }}
        >
          {pages.map((page) => {
            const isActive = currentPath === page.path;
            return (
              <Tooltip key={page.path} title={page.label} placement="top">
                <Box
                  component={Link}
                  href={page.path}
                  sx={{
                    width: isActive ? 40 : 12,
                    height: 12,
                    borderRadius: 6,
                    background: isActive
                      ? "linear-gradient(135deg, #E91E63 0%, #d81b60 100%)"
                      : theme.palette.greys.light,
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      background: isActive
                        ? "linear-gradient(135deg, #E91E63 0%, #d81b60 100%)"
                        : theme.palette.greys.main,
                      transform: "scale(1.1)",
                    },
                  }}
                />
              </Tooltip>
            );
          })}
        </Box>
      </Box>
    </Box>
  );
}
