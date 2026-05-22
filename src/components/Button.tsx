import Link from "next/link";
import { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";

type ButtonProps = {
  href?: string;
  variant?: "primary" | "outline" | "brand";
  children: React.ReactNode;
  className?: string;
} & ButtonHTMLAttributes<HTMLButtonElement> &
  AnchorHTMLAttributes<HTMLAnchorElement>;

export default function Button({ href, variant = "primary", children, className = "", ...props }: ButtonProps) {
  let baseClasses = "px-8 py-3 uppercase text-[10px] tracking-[0.2em] font-bold transition-all ";
  
  if (variant === "primary") {
    baseClasses += "bg-(--color-primary) text-white hover:bg-(--color-on-primary-fixed-variant) ";
  } else if (variant === "outline") {
    baseClasses += "border border-(--color-primary) text-(--color-primary) hover:bg-(--color-primary) hover:text-white ";
  } else if (variant === "brand") {
    baseClasses += "px-6 py-2 border border-(--color-brand-dark) hover:bg-(--color-brand-dark) hover:text-(--color-surface) ";
  }

  const combinedClasses = `${baseClasses} ${className}`;

  if (href) {
    return (
      <Link href={href} className={combinedClasses} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {children}
    </button>
  );
}
