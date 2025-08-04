"use client"

import * as React from "react"
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group"
import { CircleIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import { cva } from "class-variance-authority"

type Props = { 
  options: readonly {label: React.ReactNode, value: string; disabled?: boolean }[];
  onChange: (value: string) => void;
  direction?: "horizontal" | "vertical";
} & React.ComponentProps<typeof RadioGroupPrimitive.Root>;

const groupVariants = cva('inline-flex grow-0', {
  variants: {
    direction: {
      horizontal: 'flex-row gap-4',
      vertical: 'flex-col gap-2',
    },
  },
});

function RadioGroup({
  className,
  options,
  onChange,
  direction = "vertical",
  ...props
}: Props) {
  
  return (
    <RadioGroupPrimitive.Root
      data-slot="radio-group"
      className={cn(groupVariants({ direction }), className)}
      onValueChange={onChange}
      {...props}
    >
      {options.map((option) => (
        <RadioGroupItem key={option.value} value={option.value} disabled={option.disabled ?? false}>
          {option.label}
        </RadioGroupItem>
      ))}
    </RadioGroupPrimitive.Root>
  )
}

function RadioGroupItem({
  className,
  children,
  value,
  disabled,
  ...props
}: React.ComponentProps<typeof RadioGroupPrimitive.Item>) {
  const id = React.useId()
  
  return (
    <div className="flex items-center gap-2">
      <RadioGroupPrimitive.Item
        id={id}
        data-slot="radio-group-item"
        className={cn(
          "border-semantic-border text-semantic-text-primary focus-visible:border-semantic-primary focus-visible:ring-semantic-primary/20 aspect-square size-4 shrink-0 rounded-full border shadow-sm transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:text-semantic-text-disabled disabled:border-semantic-text-disabled",
          className
        )}
        value={value}
        disabled={disabled}
        {...props}
      >
        <RadioGroupPrimitive.Indicator
          data-slot="radio-group-indicator"
          className="relative flex items-center justify-center"
        >
          <CircleIcon className={cn(
            "absolute top-1/2 left-1/2 size-2 -translate-x-1/2 -translate-y-1/2",
            "fill-semantic-primary"
          )} />
        </RadioGroupPrimitive.Indicator>
      </RadioGroupPrimitive.Item>
      <label htmlFor={id} className="cursor-pointer">
        {children}
      </label>
    </div>
  )
}

export { RadioGroup, RadioGroupItem }
