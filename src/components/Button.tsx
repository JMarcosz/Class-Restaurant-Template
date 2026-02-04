import { type ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
}

export default function Button({
  children,
  onClick,
  variant = "primary",
  size = "md",
  fullWidth = false,
  disabled = false,
  type = "button",
}: ButtonProps) {
  // Base styles
  const baseStyles = `
    ${fullWidth ? 'flex w-full' : 'inline-flex'} items-center justify-center
    font-semibold rounded-lg
    transition-all duration-300 ease-out
    focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black
    disabled:opacity-50 disabled:cursor-not-allowed
  `;

  // Variant styles
  const variantStyles = {
    primary: `
      bg-white text-black border-2 border-white
      hover:bg-black hover:text-white hover:scale-105
      focus:ring-white
    `,
    secondary: `
      bg-black text-white border-2 border-black
      hover:bg-white hover:text-black hover:scale-105
      focus:ring-black
    `,
    outline: `
      bg-transparent text-white border-2 border-white
      hover:bg-white hover:text-black hover:scale-105
      focus:ring-white
    `,
  };

  // Size styles
  const sizeStyles = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base md:text-lg",
    lg: "px-8 py-4 text-lg md:text-xl",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${fullWidth ? 'w-full' : ''}`}
      aria-label={typeof children === "string" ? children : "Button"}
    >
      {children}
    </button>
  );
}
