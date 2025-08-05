import Link from 'next/link'

const primaryStories = [
  { id: 'green-palette', name: 'Green Palette', description: '메인 브랜드 컬러 그린 팔레트 (100-1000)' },
  { id: 'green-variants', name: 'Green Variants', description: '그린 컬러 사용 예시와 조합' },
];

const secondaryStories = [
  { id: 'blue-palette', name: 'Blue Palette', description: '블루 컬러 팔레트 (100-1000)' },
  { id: 'red-palette', name: 'Red Palette', description: '레드 컬러 팔레트 (100-1000)' },
  { id: 'yellow-palette', name: 'Yellow Palette', description: '옐로우 컬러 팔레트 (100-1000)' },
];

const grayStories = [
  { id: 'gray-palette', name: 'Gray Palette', description: '그레이 컬러 팔레트 (100-1000)' },
  { id: 'static-colors', name: 'Static Colors', description: '정적 컬러 (Black, White)' },
];

const semanticStories = [
  { id: 'semantic-colors', name: 'Semantic Colors', description: '시맨틱 컬러 (Primary, Success, Warning, Error)' },
  { id: 'text-colors', name: 'Text Colors', description: '텍스트 컬러 시스템' },
  { id: 'background-colors', name: 'Background Colors', description: '배경 컬러 시스템' },
];

const comprehensiveStories = [
  { id: 'all-colors', name: 'All Color Palette', description: '모든 컬러 팔레트를 한 번에 확인' },
  { id: 'practical-usage', name: 'Practical Usage Example', description: '실제 사용 예시와 조합' },
];

const categories = [
  { name: 'Primary Colors', stories: primaryStories },
  { name: 'Secondary Colors', stories: secondaryStories },
  { name: 'Gray & Static', stories: grayStories },
  { name: 'Semantic Colors', stories: semanticStories },
  { name: 'Comprehensive', stories: comprehensiveStories },
];

export default function ColorsPage() {
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
          Colors
        </h1>
        <p className="typography-body1 text-semantic-text-secondary w-[100%]">
          브랜드 컬러와 시맨틱 컬러를 포함한 색상 시스템입니다. 
          각 컬러는 100부터 1000까지의 스케일로 제공되며, CSS 변수와 Tailwind 클래스로 사용할 수 있습니다.
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
                  href={`/design-system/colors/${story.id}`}
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
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-3">
          <div className="space-y-1">
            <div className="w-full h-12 bg-green-500 rounded border"></div>
            <span className="typography-caption2">Green 500</span>
          </div>
          <div className="space-y-1">
            <div className="w-full h-12 bg-blue-500 rounded border"></div>
            <span className="typography-caption2">Blue 500</span>
          </div>
          <div className="space-y-1">
            <div className="w-full h-12 bg-red-500 rounded border"></div>
            <span className="typography-caption2">Red 500</span>
          </div>
          <div className="space-y-1">
            <div className="w-full h-12 bg-yellow-500 rounded border"></div>
            <span className="typography-caption2">Yellow 500</span>
          </div>
          <div className="space-y-1">
            <div className="w-full h-12 bg-gray-300 rounded border"></div>
            <span className="typography-caption2">Gray 300</span>
          </div>
          <div className="space-y-1">
            <div className="w-full h-12 bg-gray-600 rounded border"></div>
            <span className="typography-caption2">Gray 600</span>
          </div>
          <div className="space-y-1">
            <div className="w-full h-12 bg-black rounded border"></div>
            <span className="typography-caption2">Black</span>
          </div>
          <div className="space-y-1">
            <div className="w-full h-12 bg-white rounded border border-gray-300"></div>
            <span className="typography-caption2">White</span>
          </div>
        </div>
      </div>
    </div>
  )
}