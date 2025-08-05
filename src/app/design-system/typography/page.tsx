import Link from 'next/link'

const headlineStories = [
  { id: 'headline1', name: 'Headline 1', description: '가장 큰 제목 (26px, Regular)' },
  { id: 'headline1-bold', name: 'Headline 1 Bold', description: '가장 큰 제목 (26px, Bold)' },
  { id: 'headline2', name: 'Headline 2', description: '중간 제목 (24px, Regular)' },
  { id: 'headline2-bold', name: 'Headline 2 Bold', description: '중간 제목 (24px, Bold)' },
  { id: 'headline3', name: 'Headline 3', description: '작은 제목 (22px, Regular)' },
  { id: 'headline3-bold', name: 'Headline 3 Bold', description: '작은 제목 (22px, Bold)' }, 
];

const bodyStories = [
  { id: 'body1', name: 'Body 1', description: '큰 본문 텍스트 (16px, Regular)' },
  { id: 'body1-bold', name: 'Body 1 Bold', description: '큰 본문 텍스트 (16px, Bold)' },
  { id: 'body2', name: 'Body 2', description: '작은 본문 텍스트 (14px, Regular)' },
  { id: 'body2-bold', name: 'Body 2 Bold', description: '작은 본문 텍스트 (14px, Bold)' },
]

const captionStories = [
  { id: 'caption1', name: 'Caption 1', description: '캡션 텍스트 (12px, Regular)' },
  { id: 'caption1-bold', name: 'Caption 1 Bold', description: '캡션 텍스트 (12px, Bold)' },
  { id: 'caption2', name: 'Caption 2', description: '작은 캡션 텍스트 (11px, Regular)' },
  { id: 'caption2-bold', name: 'Caption 2 Bold', description: '작은 캡션 텍스트 (11px, Bold)' },
]

const comprehensiveStories = [
  { id: 'all-styles', name: 'All Typography Styles', description: '모든 타이포그래피 스타일을 한 번에 확인' },
  { id: 'practical-usage', name: 'Practical Usage Example', description: '실제 사용 예시' },
]

const categories = [
  { name: 'Headlines', stories: headlineStories },
  { name: 'Body Text', stories: bodyStories },
  { name: 'Captions', stories: captionStories },
  { name: 'Comprehensive', stories: comprehensiveStories },
]

export default function TypographyPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <div className="mb-12">
        <nav className="mb-6">
          <Link 
            href="/design-system" 
            className="typography-body2 text-semantic-primary hover:text-semantic-primary-dark"
          >
            ← Design System
          </Link>
        </nav>
        
        <h1 className="typography-headline1-bold mb-4">
          Typography
        </h1>
        <p className="typography-body1 text-semantic-text-secondary w-[100%]">
          Typography 토큰 기반의 CSS 클래스를 직접 사용하여 일관된 텍스트 스타일을 적용합니다. 
          className에 typography-{'{variant}'} 또는 typography-{'{variant}'}-bold 형태로 사용할 수 있습니다.
        </p>
      </div>

      <div className="space-y-12">
        {categories.map((category) => (
          <section key={category.name}>
            <h2 className="typography-headline2-bold mb-6">
              {category.name}
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {category.stories.map((story) => (
                <Link
                  key={story.id}
                  href={`/design-system/typography/${story.id}`}
                  className="group block p-4 border border-semantic-border rounded-lg hover:border-semantic-primary hover:shadow-md transition-all duration-200"
                >
                  <h3 className="typography-body1-bold group-hover:text-semantic-primary transition-colors mb-2">
                    {story.name}
                  </h3>
                  <p className="typography-caption1 text-semantic-text-secondary">
                    {story.description}
                  </p>
                </Link>
              ))}
            </div>
          </section>
        ))}
      </div>

      <div className="mt-16 p-8 bg-semantic-bg-secondary rounded-lg">
        <h3 className="typography-headline2-bold mb-6">Quick Preview</h3>
        <div className="space-y-4">
          <div className="typography-headline1">Headline 1 - typography-headline1</div>
          <div className="typography-headline2-bold">Headline 2 Bold - typography-headline2-bold</div>
          <div className="typography-body1">Body 1 - 본문 텍스트입니다. typography-body1</div>
          <div className="typography-body2">Body 2 - 작은 본문 텍스트입니다. typography-body2</div>
          <div className="typography-caption1">Caption 1 - 캡션 텍스트입니다. typography-caption1</div>
        </div>
      </div>
    </div>
  )
}