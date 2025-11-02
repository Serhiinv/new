import Image from "next/image";
import Link from "next/link";
import { bPath } from "@/config/basePath";

interface LogoProps {
  variant?: "light" | "dark";
  width?: number;
  height?: number;
}

export default function Logo({
  variant = "dark",
  width = 300,
  height = 60
}: LogoProps) {
  const logoSrc = variant === "light"
    ? `${bPath}/auction_fusion_light.svg`
    : `${bPath}/auction_fusion_dark.svg`;

  return (
    <Link href="/home">
      <Image
        src={logoSrc}
        alt="Auction Fusion Logo"
        width={width}
        height={height}
        priority
        style={{ maxWidth: "100%", height: "auto", cursor: "pointer" }}
      />
    </Link>
  );
}

