import * as React from "react"

import { cn } from "@/lib/utils"

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "flex h-9 w-full min-w-0 rounded-md border px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none md:text-sm",
        "bg-palette-static-white border-palette-gray-400 text-palette-gray-1000",
        "placeholder:text-palette-gray-400",
        "selection:bg-semantic-primary selection:text-palette-static-white",
        // 파일 업로드 스타일
        "file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-palette-gray-1000",
        // 포커스 상태
        "focus-visible:border-semantic-primary focus-visible:ring-semantic-primary/30 focus-visible:ring-[3px]",
        // 에러 상태
        "aria-invalid:border-semantic-error aria-invalid:ring-semantic-error/20",
        // Disabled 상태
        "disabled:pointer-events-none disabled:cursor-not-allowed disabled:bg-palette-gray-200 disabled:border-palette-gray-400 disabled:text-palette-gray-400 disabled:placeholder:text-palette-gray-400",
        className
      )}
      {...props}
    />
  )
}

export { Input }
