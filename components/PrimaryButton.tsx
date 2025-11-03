import { Button, ButtonProps, SxProps, Theme } from "@mui/material";
import Link from "next/link";
import { ReactNode } from "react";
import { useTheme } from "@mui/material/styles";

interface PrimaryButtonProps extends Omit<ButtonProps, 'variant' | 'size'> {
  children: ReactNode;
  href?: string;
  variant?: 'contained' | 'outlined';
  size?: 'small' | 'medium' | 'large';
}

export default function PrimaryButton({
  children,
  href,
  variant = 'contained',
  size = 'large',
  sx,
  ...props
}: PrimaryButtonProps) {
  const theme = useTheme();

  const btnStyleColor = "#E91E63";

  const baseStyles: SxProps<Theme> = {
    fontWeight: 600,
    fontSize: 18,
    background: variant === 'contained'
      ? btnStyleColor
      : "transparent",
    color: variant === 'contained' ? theme.palette.whites.main : btnStyleColor,
    borderRadius: "50px",
    border: variant === 'outlined' ? `1px solid ${btnStyleColor}` : `1px solid transparent`,
    boxShadow: "none",
    textTransform: "none" as const,
    "&:hover": {
      transform: "translateY(-8px)",
      boxShadow: "none",
    },
    "&:active": {
      boxShadow: "none",
    },
    transition: "all 0.3s ease",
    ...sx,
  };

  if (href) {
    return (
      <Button
        component={Link}
        href={href}
        variant={variant}
        size={size}
        sx={baseStyles}
        {...props}
      >
        {children}
      </Button>
    );
  }

  return (
    <Button
      variant={variant}
      size={size}
      sx={baseStyles}
      {...props}
    >
      {children}
    </Button>
  );
}
