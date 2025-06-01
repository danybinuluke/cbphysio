'use client';

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "relative inline-block rounded-full px-8 py-3 font-medium overflow-hidden border border-current group transition-colors duration-300",
  {
    variants: {
      variant: {
        default: "text-white",
        outline: "text-black",
      },
      size: {
        default: "text-base",
        sm: "text-sm px-4 py-2",
        lg: "text-lg px-10 py-4",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(buttonVariants({ variant, size, className }))}
        {...props}
      >
        <span
          className={cn(
            "absolute inset-0 rounded-full border border-current scale-0 group-hover:scale-100 transition-transform duration-500 ease-in-out",
          )}
          aria-hidden="true"
        />
        <span className="relative z-10">{children}</span>
      </button>
    );
  }
);

Button.displayName = "Button";

export { Button, buttonVariants };
