import React from "react";

export type BadgeVariant = "primary" | "secondary" | "success" | "warning" | "danger";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  label: string;
  variant?: BadgeVariant;
}

const variantToClasses: Record<BadgeVariant, string> = {
  primary: "bg-blue-600 text-white ring-blue-400/50",
  secondary: "bg-gray-700 text-white ring-gray-400/50",
  success: "bg-emerald-600 text-white ring-emerald-400/50",
  warning: "bg-amber-500 text-black ring-amber-400/50",
  danger: "bg-rose-600 text-white ring-rose-400/50",
};

export function Badge({ label, variant = "primary", className = "", ...rest }: BadgeProps) {
  const base =
    "inline-flex items-center rounded-full px-2.5 py-0.5 text-sm font-medium ring-1 ring-inset shadow-sm";
  const classes = `${base} ${variantToClasses[variant]} ${className}`.trim();

  return (
    <span className={classes} {...rest}>
      {label}
    </span>
  );
}

export default Badge;


