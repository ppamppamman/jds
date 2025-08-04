import Link from "next/link"

type Props = {
  name: string
}

export const NavWidget = ({ name }: Props) => {
  return (
    <nav className="mb-8">
      <div className="flex items-center gap-2 typography-body2 text-semantic-text-secondary">
        <Link href="/design-system" className="hover:text-semantic-primary">
          Design System
        </Link>
        <span>/</span>
        <Link href="/design-system/typography" className="hover:text-semantic-primary">
          Typography
        </Link>
        <span>/</span>
        <span className="text-semantic-text-primary">{name}</span>
      </div>
    </nav>
  )
}