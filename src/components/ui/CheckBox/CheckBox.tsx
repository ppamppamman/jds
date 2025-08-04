"use client"

import * as React from "react"
import * as CheckboxPrimitive from "@radix-ui/react-checkbox"
import { CheckIcon } from "lucide-react"

import { cn } from "@/lib/utils"

interface CheckboxProps extends React.ComponentProps<typeof CheckboxPrimitive.Root> {
  label?: string
  description?: string
}

function CheckboxItem({ className, ...props }: React.ComponentProps<typeof CheckboxPrimitive.Root>) {
  return (
    <CheckboxPrimitive.Root
      data-slot="checkbox"
      className={cn(
        "size-4 shrink-0 rounded-[4px] border shadow-xs transition-[color,box-shadow], transition-color-palette-static-white outline-none",
        "bg-palette-static-white border-palette-gray-400",
        "data-[state=checked]:bg-semantic-primary data-[state=checked]:border-semantic-primary data-[state=checked]:text-palette-static-white",
        "focus-visible:border-semantic-primary focus-visible:ring-semantic-primary/30 focus-visible:ring-[3px]",
        // 에러 상태
        "aria-invalid:border-semantic-error aria-invalid:ring-semantic-error/20",
        // Disabled 상태
        "disabled:cursor-not-allowed disabled:bg-palette-gray-200 disabled:border-palette-gray-400",
        "disabled:data-[state=checked]:bg-palette-gray-400 disabled:data-[state=checked]:border-palette-gray-400",
        className
      )}
      {...props}
    >
      <CheckboxPrimitive.Indicator
        data-slot="checkbox-indicator"
        className="flex items-center justify-center text-current transition-none"
      >
        <CheckIcon className="size-3.5" />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  )
}

function Checkbox({
  className,
  label,
  description,
  ...props
}: CheckboxProps) {
  if (!label) {
    return <CheckboxItem className={className} {...props} />
  } 

  return (
    <div className="flex items-start space-x-3">
      <CheckboxItem className={className} {...props} />
      <div className="grid gap-1 leading-none">
        <label
          htmlFor={props.id}
          className={cn(
            "text-sm font-medium leading-none text-palette-gray-1000 cursor-pointer",
            "peer-disabled:cursor-not-allowed peer-disabled:text-palette-gray-400"
          )}
        >
          {label}
        </label>
        {description && (
          <p className="text-sm text-palette-gray-400">
            {description}
          </p>
        )}
      </div>
    </div>
  )
}

export { Checkbox }
