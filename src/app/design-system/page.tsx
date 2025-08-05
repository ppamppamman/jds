import Link from 'next/link'

const components = [
  {
    name: 'Typography',
    description: 'Typography 토큰 기반의 CSS 클래스를 직접 사용하여 일관된 텍스트 스타일을 적용합니다.',
    href: '/design-system/typography',
    storyCount: 15
  },
  {
    name: 'Colors',
    description: '브랜드 컬러와 시맨틱 컬러를 포함한 일관된 색상 시스템을 제공합니다.',
    href: '/design-system/colors',
    storyCount: 12
  },
]

export default function DesignSystemPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <div className="mb-12">
        <h1 className="typography-headline1-bold mb-4">
          Design System
        </h1>
        <p className="typography-body1 text-semantic-text-secondary">
          재사용 가능한 UI 컴포넌트들과 디자인 토큰을 확인할 수 있습니다.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {components.map((component) => (
          <Link
            key={component.name}
            href={component.href}
            className="group block p-6 border border-semantic-border rounded-lg hover:border-semantic-primary hover:shadow-lg transition-all duration-200"
          >
            <div className="mb-3">
              <h3 className="typography-headline3-bold group-hover:text-semantic-primary transition-colors">
                {component.name}
              </h3>
              <span className="typography-caption1 text-semantic-text-secondary">
                {component.storyCount}개 스토리
              </span>
            </div>
            <p className="typography-body2 text-semantic-text-secondary">
              {component.description}
            </p>
          </Link>
        ))}
      </div>
    </div>
  )
}