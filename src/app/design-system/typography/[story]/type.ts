export type SingleStoryDefinition = {
  id: string
  name: string
  description: string
  category: string
  className: string
}

export type ComprehensiveStoryDefinition = {
  id: string
  name: string
  description: string
  category: string
  render: () => React.ReactNode
  code: string
}
