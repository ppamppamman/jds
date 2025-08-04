import React, { PropsWithChildren } from 'react'

export const StoryDefinitionCodeWidget = ({ children }: PropsWithChildren<unknown>) => {
  return (
    <code>{children}</code>
  )
}