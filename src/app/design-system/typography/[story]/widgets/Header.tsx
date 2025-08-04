type Props = {
  name: string
  category: string
  description: string
}

export const HeaderWidget = ({ name, category, description }: Props) => {
  return (
    <div className="mb-12">
      <div className="flex items-center gap-3 mb-4">
        <h1 className="typography-headline1-bold">
          {name}
        </h1>
        <span className="typography-caption1 text-semantic-text-secondary bg-semantic-bg-secondary px-2 py-1 rounded">
          {category}
        </span>
      </div>
      <p className="typography-body1 text-semantic-text-secondary">
        {description}
      </p>
    </div>
  )
}