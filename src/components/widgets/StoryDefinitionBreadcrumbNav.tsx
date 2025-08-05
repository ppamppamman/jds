import React, { PropsWithChildren } from "react"

type Props = {
  current: string
}

export const StoryDefinitionBreadcrumbNav = ({ current, children }: PropsWithChildren<Props>) => {
  return (
    <nav className="mb-8">
      <div className="flex items-center gap-2 typography-body2 text-semantic-text-secondary">
        {React.Children.map(children, (child) => (
          <>
            {child}
            <span>/</span>
          </>
        ))}
        <span>/</span>
        <span className="text-semantic-primary">{current}</span>
      </div>
    </nav>
  )
}