import React, { PropsWithChildren } from 'react'

export const StoryDefinitionCode = ({ children }: PropsWithChildren<unknown>) => {
  return (
    <code>{children}</code>
  )
}