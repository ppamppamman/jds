import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:ring-2 focus-visible:ring-offset-2 hover:cursor-pointer",
  {
    variants: {
      variant: {
        primary:
          "bg-semantic-primary text-semantic-text-white shadow-sm hover:bg-palette-green-600 focus-visible:ring-palette-green-300 disabled:bg-palette-gray-500 disabled:text-palette-gray-700",
        secondary:
          "bg-semantic-secondary text-semantic-text-white shadow-sm hover:bg-palette-gray-600 focus-visible:ring-palette-gray-400 disabled:bg-palette-gray-500 disabled:text-palette-gray-700",
        tertiary:
          "border border-semantic-border bg-semantic-background text-semantic-text-primary shadow-sm hover:bg-palette-gray-200 hover:text-semantic-text-primary focus-visible:ring-palette-gray-400 disabled:border-palette-gray-500 disabled:bg-transparent disabled:text-palette-gray-600",
        ghost:
          "text-semantic-text-primary hover:bg-palette-gray-200 hover:text-semantic-text-primary focus-visible:ring-palette-gray-400 disabled:text-palette-gray-600",
        danger:
          "bg-semantic-error text-semantic-text-white shadow-sm hover:bg-palette-red-600 focus-visible:ring-palette-red-300 disabled:bg-palette-gray-500 disabled:text-palette-gray-700",
        link: 
          "text-palette-blue-500 underline-offset-4 hover:underline focus-visible:ring-palette-green-300 disabled:text-palette-gray-600 disabled:no-underline",
        success:
          "bg-semantic-success text-semantic-text-white shadow-sm hover:bg-palette-blue-600 focus-visible:ring-palette-blue-300 disabled:bg-palette-gray-500 disabled:text-palette-gray-700",
        warning:
          "bg-semantic-warning text-semantic-text-black shadow-sm hover:bg-palette-yellow-600 focus-visible:ring-palette-yellow-300 disabled:bg-palette-gray-500 disabled:text-palette-gray-700",
      },
      size: {
        md: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
)

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : "button"
  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
