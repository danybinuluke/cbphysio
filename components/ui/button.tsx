import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"
import { ArrowRight } from "lucide-react"; // Import ArrowRight for the interactive-hover variant

// Button style variants
const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 transition-colors duration-200",
  {
    variants: {
      variant: {
        // UPDATED: Default variant with Dotted Button styles
        default:
          "rounded-2xl border-2 border-dashed border-black bg-white px-6 py-3 font-semibold uppercase text-black transition-all duration-300 " +
          "hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_black] " +
          "active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none",
        
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90 rounded-md",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground rounded-md",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80 rounded-md",
        ghost: "hover:bg-accent hover:text-accent-foreground rounded-md",
        link: "text-primary underline-offset-4 hover:underline",

        // Variant: Interactive hover
        "interactive-hover":
          "group relative overflow-hidden cursor-pointer rounded-full border bg-white px-6 py-2 text-center font-semibold text-black hover:text-white transition-colors duration-300 " +
          "inline-flex items-center justify-center", // Ensure flex properties are on the button itself

        // Variant: Draw Outline
        "draw-outline":
          "group relative px-4 py-2 font-medium text-slate-100 transition-colors duration-400 hover:text-indigo-300",
        // Existing "dark-solid" variant for a dark background button with white text
        "dark-solid": "bg-black text-white hover:bg-gray-800 transition-colors duration-200",
      },
      size: {
        default: "h-10 px-4 py-2", // This will be overridden by the default variant's padding
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
        // Adjusted size for interactive-hover to ensure proper padding for rounded-full
        "interactive-lg": "h-11 px-6 py-2", // Custom padding for this variant
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

// Props
export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

// Button component
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, children, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    const isInteractiveHover = variant === "interactive-hover";
    const isDrawOutline = variant === "draw-outline";

    // Adjust size prop for interactive-hover variant
    const currentSize = isInteractiveHover ? "interactive-lg" : size;

    return (
      <Comp
        className={cn(buttonVariants({ variant, size: currentSize, className }))}
        ref={ref}
        {...props}
      >
        {/* Content for "interactive-hover" */}
        {isInteractiveHover && (
          <>
            {/* Initial text that slides out */}
            <span className="inline-flex items-center whitespace-nowrap translate-x-1 transition-all duration-300 group-hover:translate-x-12 group-hover:opacity-0">
              {children}
            </span>
            {/* Hover state content that slides in */}
            <div className="absolute inset-0 z-10 flex items-center justify-center gap-2 text-white opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
              <span className="inline-flex items-center whitespace-nowrap">{children}</span>
              <ArrowRight className="w-4 h-4" />
            </div>
            {/* Expanding background element */}
            <div className="absolute inset-0 z-0 scale-0 bg-black transition-transform duration-300 group-hover:scale-100 rounded-full" />
          </>
        )}

        {/* Draw outline */}
        {isDrawOutline && (
          <>
            <span>{children}</span>
            <span className="absolute left-0 top-0 h-[2px] w-0 bg-indigo-300 transition-all duration-100 group-hover:w-full" />
            <span className="absolute right-0 top-0 h-0 w-[2px] bg-indigo-300 transition-all delay-100 duration-100 group-hover:h-full" />
            <span className="absolute bottom-0 right-0 h-[2px] w-0 bg-indigo-300 transition-all delay-200 duration-100 group-hover:w-full" />
            <span className="absolute bottom-0 left-0 h-0 w-[2px] bg-indigo-300 transition-all delay-300 duration-100 group-hover:h-full" />
          </>
        )}

        {/* Default variant - Renders children directly */}
        {!isInteractiveHover && !isDrawOutline && children}
      </Comp>
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
