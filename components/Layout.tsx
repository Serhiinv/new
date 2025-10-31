import { ReactNode, useEffect } from "react";
import { Box, Button } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import { IconButton, Tooltip } from "@mui/material";
import { bPath } from "@/config/basePath";

interface LayoutProps {
  children: ReactNode;
  showContactButton?: boolean;
  prevPage?: string;
  nextPage?: string;
  backgroundColor?: string;
}

// Define all pages in order
const pages = [
  { path: "/home", label: "Home" },
  { path: "/features", label: "Features" },
  { path: "/design", label: "Design" },
  { path: "/improvement", label: "Improvement" },
  { path: "/why-us", label: "Why Us" },
  { path: "/contact", label: "Contact" },
];

export default function Layout({
  children,
  showContactButton = true,
  prevPage,
  nextPage,
  backgroundColor = "rgba(255, 255, 255, 0.98)",
}: LayoutProps) {
  const router = useRouter();
  const currentPath = router.pathname;

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
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        background: "linear-gradient(135deg, #0A1E3F 0%, #1a2f4f 100%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        fontFamily: "'Schibsted Grotesk', sans-serif",
      }}
    >
      <Box
        sx={{
          width: "100%",
          height: "100%",
          background: backgroundColor,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
        }}
      >
        {/* Logo */}
        <Box
          sx={{
            position: "absolute",
            top: { xs: 20, md: 10 },
            left: "50%",
            transform: "translateX(-50%)",
            zIndex: 100,
          }}
        >
          <Link href="/home">
            <Image
              src={`${bPath}/logo.jpeg`}
              alt="Auction Fusion Logo"
              width={300}
              height={60}
              priority
              style={{ maxWidth: "100%", height: "auto", cursor: "pointer" }}
            />
          </Link>
        </Box>

        {/* Contact US Button */}
        {showContactButton && (
          <Button
            component={Link}
            href="/contact"
            variant="contained"
            size="large"
            sx={{
              position: "absolute",
              top: { xs: 80, md: 45 },
              right: { xs: 20, md: 40 },
              background: "linear-gradient(135deg, #E91E63 0%, #d81b60 100%)",
              color: "white",
              fontSize: { xs: "1rem", md: "1.2rem" },
              width: { xs: "130px", md: "180px" },
              height: { xs: "35px", md: "55px" },
              fontWeight: 600,
              borderRadius: "50px",
              boxShadow: "0 5px 15px rgba(233, 30, 99, 0.3)",
              textTransform: "none",
              fontFamily: "'Schibsted Grotesk', sans-serif",
              animation: "fadeInUp 0.6s ease-out backwards",
              zIndex: 100,
              "&:hover": {
                background: "linear-gradient(135deg, #E91E63 0%, #d81b60 100%)",
                transform: "translateY(-3px)",
                boxShadow: "0 10px 25px rgba(233, 30, 99, 0.4)",
              },
              transition: "all 0.3s ease",
            }}
          >
            Contact US
          </Button>
        )}

        {/* Navigation Arrows */}
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
            }}
          >
            {prevPage ? (
              <Tooltip title="Previous page" placement="right">
                <IconButton
                  component={Link}
                  href={prevPage}
                  sx={{
                    width: 40,
                    height: 40,
                    borderRadius: 2,
                    background: "rgba(100, 100, 100, 0.8)",
                    color: "white",
                    pointerEvents: "auto",
                    "&:hover": { background: "rgba(100, 100, 100, 0.9)" },
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
                    width: 40,
                    height: 40,
                    borderRadius: 2,
                    background: "rgba(100, 100, 100, 0.8)",
                    color: "white",
                    pointerEvents: "auto",
                    "&:hover": { background: "rgba(100, 100, 100, 0.9)" },
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
            bottom: { xs: 20, md: 30 },
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            gap: 2,
            zIndex: 100,
          }}
        >
          {pages.map((page, index) => {
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
                      : "rgba(100, 100, 100, 0.4)",
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      background: isActive
                        ? "linear-gradient(135deg, #E91E63 0%, #d81b60 100%)"
                        : "rgba(100, 100, 100, 0.7)",
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
