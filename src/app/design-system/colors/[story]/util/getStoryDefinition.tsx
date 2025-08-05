import { ColorStoryDefinition, SingleColorStoryDefinition, ComprehensiveColorStoryDefinition } from "../type"
import colorVariants from "@/foundations/colors"

const GREEN_PALETTE_STORY = {
  id: 'green-palette',
  name: 'Green Palette',
  description: '메인 브랜드 컬러 그린 팔레트 (100-1000)',
  colors: [
    { color: colorVariants.palette.green[100], name: 'Green 100', description: '매우 밝은 초록', tailwindClass: 'bg-green-100' },
    { color: colorVariants.palette.green[200], name: 'Green 200', description: '밝은 초록', tailwindClass: 'bg-green-200' },
    { color: colorVariants.palette.green[300], name: 'Green 300', description: '연한 초록', tailwindClass: 'bg-green-300' },
    { color: colorVariants.palette.green[400], name: 'Green 400', description: '중간 초록', tailwindClass: 'bg-green-400' },
    { color: colorVariants.palette.green[500], name: 'Green 500', description: '기준 초록 (Primary)', tailwindClass: 'bg-green-500' },
    { color: colorVariants.palette.green[600], name: 'Green 600', description: '진한 초록', tailwindClass: 'bg-green-600' },
    { color: colorVariants.palette.green[700], name: 'Green 700', description: '어두운 초록', tailwindClass: 'bg-green-700' },
    { color: colorVariants.palette.green[800], name: 'Green 800', description: '더 어두운 초록', tailwindClass: 'bg-green-800' },
    { color: colorVariants.palette.green[900], name: 'Green 900', description: '매우 어두운 초록', tailwindClass: 'bg-green-900' },
    { color: colorVariants.palette.green[1000], name: 'Green 1000', description: '가장 어두운 초록', tailwindClass: 'bg-green-1000' },
  ]
}

const GREEN_VARIANTS_STORY = {
  id: 'green-variants',
  name: 'Green Variants',
  description: '그린 컬러 사용 예시와 조합',
  colors: [
    { color: colorVariants.palette.green[500], name: 'Primary Green', description: '메인 브랜드 컬러', tailwindClass: 'bg-green-500' },
    { color: colorVariants.palette.green[100], name: 'Light Background', description: '배경용 밝은 초록', tailwindClass: 'bg-green-100' },
    { color: colorVariants.palette.green[700], name: 'Hover State', description: '호버 상태용 진한 초록', tailwindClass: 'bg-green-700' },
  ]
}

const BLUE_PALETTE_STORY = {
  id: 'blue-palette',
  name: 'Blue Palette',
  description: '블루 컬러 팔레트 (100-1000)',
  colors: [
    { color: colorVariants.palette.blue[100], name: 'Blue 100', description: '매우 밝은 파랑', tailwindClass: 'bg-blue-100' },
    { color: colorVariants.palette.blue[200], name: 'Blue 200', description: '밝은 파랑', tailwindClass: 'bg-blue-200' },
    { color: colorVariants.palette.blue[300], name: 'Blue 300', description: '연한 파랑', tailwindClass: 'bg-blue-300' },
    { color: colorVariants.palette.blue[400], name: 'Blue 400', description: '중간 파랑', tailwindClass: 'bg-blue-400' },
    { color: colorVariants.palette.blue[500], name: 'Blue 500', description: '기준 파랑 (Success)', tailwindClass: 'bg-blue-500' },
    { color: colorVariants.palette.blue[600], name: 'Blue 600', description: '진한 파랑', tailwindClass: 'bg-blue-600' },
    { color: colorVariants.palette.blue[700], name: 'Blue 700', description: '어두운 파랑', tailwindClass: 'bg-blue-700' },
    { color: colorVariants.palette.blue[800], name: 'Blue 800', description: '더 어두운 파랑', tailwindClass: 'bg-blue-800' },
    { color: colorVariants.palette.blue[900], name: 'Blue 900', description: '매우 어두운 파랑', tailwindClass: 'bg-blue-900' },
    { color: colorVariants.palette.blue[1000], name: 'Blue 1000', description: '가장 어두운 파랑', tailwindClass: 'bg-blue-1000' },
  ]
}

const RED_PALETTE_STORY = {
  id: 'red-palette',
  name: 'Red Palette',
  description: '레드 컬러 팔레트 (100-1000)',
  colors: [
    { color: colorVariants.palette.red[100], name: 'Red 100', description: '매우 밝은 빨강', tailwindClass: 'bg-red-100' },
    { color: colorVariants.palette.red[200], name: 'Red 200', description: '밝은 빨강', tailwindClass: 'bg-red-200' },
    { color: colorVariants.palette.red[300], name: 'Red 300', description: '연한 빨강', tailwindClass: 'bg-red-300' },
    { color: colorVariants.palette.red[400], name: 'Red 400', description: '중간 빨강', tailwindClass: 'bg-red-400' },
    { color: colorVariants.palette.red[500], name: 'Red 500', description: '기준 빨강 (Error)', tailwindClass: 'bg-red-500' },
    { color: colorVariants.palette.red[600], name: 'Red 600', description: '진한 빨강', tailwindClass: 'bg-red-600' },
    { color: colorVariants.palette.red[700], name: 'Red 700', description: '어두운 빨강', tailwindClass: 'bg-red-700' },
    { color: colorVariants.palette.red[800], name: 'Red 800', description: '더 어두운 빨강', tailwindClass: 'bg-red-800' },
    { color: colorVariants.palette.red[900], name: 'Red 900', description: '매우 어두운 빨강', tailwindClass: 'bg-red-900' },
    { color: colorVariants.palette.red[1000], name: 'Red 1000', description: '가장 어두운 빨강', tailwindClass: 'bg-red-1000' },
  ]
}

const YELLOW_PALETTE_STORY = {
  id: 'yellow-palette',
  name: 'Yellow Palette',
  description: '옐로우 컬러 팔레트 (100-1000)',
  colors: [
    { color: colorVariants.palette.yellow[100], name: 'Yellow 100', description: '매우 밝은 노랑', tailwindClass: 'bg-yellow-100' },
    { color: colorVariants.palette.yellow[200], name: 'Yellow 200', description: '밝은 노랑', tailwindClass: 'bg-yellow-200' },
    { color: colorVariants.palette.yellow[300], name: 'Yellow 300', description: '연한 노랑', tailwindClass: 'bg-yellow-300' },
    { color: colorVariants.palette.yellow[400], name: 'Yellow 400', description: '중간 노랑', tailwindClass: 'bg-yellow-400' },
    { color: colorVariants.palette.yellow[500], name: 'Yellow 500', description: '기준 노랑 (Warning)', tailwindClass: 'bg-yellow-500' },
    { color: colorVariants.palette.yellow[600], name: 'Yellow 600', description: '진한 노랑', tailwindClass: 'bg-yellow-600' },
    { color: colorVariants.palette.yellow[700], name: 'Yellow 700', description: '어두운 노랑', tailwindClass: 'bg-yellow-700' },
    { color: colorVariants.palette.yellow[800], name: 'Yellow 800', description: '더 어두운 노랑', tailwindClass: 'bg-yellow-800' },
    { color: colorVariants.palette.yellow[900], name: 'Yellow 900', description: '매우 어두운 노랑', tailwindClass: 'bg-yellow-900' },
    { color: colorVariants.palette.yellow[1000], name: 'Yellow 1000', description: '가장 어두운 노랑', tailwindClass: 'bg-yellow-1000' },
  ]
}

const GRAY_PALETTE_STORY = {
  id: 'gray-palette',
  name: 'Gray Palette',
  description: '그레이 컬러 팔레트 (100-1000)',
  colors: [
    { color: colorVariants.palette.gray[100], name: 'Gray 100', description: '매우 밝은 회색', tailwindClass: 'bg-gray-100' },
    { color: colorVariants.palette.gray[200], name: 'Gray 200', description: '밝은 회색', tailwindClass: 'bg-gray-200' },
    { color: colorVariants.palette.gray[300], name: 'Gray 300', description: '연한 회색', tailwindClass: 'bg-gray-300' },
    { color: colorVariants.palette.gray[400], name: 'Gray 400', description: '중간 회색', tailwindClass: 'bg-gray-400' },
    { color: colorVariants.palette.gray[500], name: 'Gray 500', description: '기준 회색', tailwindClass: 'bg-gray-500' },
    { color: colorVariants.palette.gray[600], name: 'Gray 600', description: '진한 회색', tailwindClass: 'bg-gray-600' },
    { color: colorVariants.palette.gray[700], name: 'Gray 700', description: '어두운 회색', tailwindClass: 'bg-gray-700' },
    { color: colorVariants.palette.gray[800], name: 'Gray 800', description: '더 어두운 회색', tailwindClass: 'bg-gray-800' },
    { color: colorVariants.palette.gray[900], name: 'Gray 900', description: '매우 어두운 회색', tailwindClass: 'bg-gray-900' },
    { color: colorVariants.palette.gray[1000], name: 'Gray 1000', description: '가장 어두운 회색', tailwindClass: 'bg-gray-1000' },
  ]
}

const STATIC_COLORS_STORY = {
  id: 'static-colors',
  name: 'Static Colors',
  description: '정적 컬러 (Black, White)',
  colors: [
    { color: colorVariants.palette.static.black, name: 'Black', description: '완전한 검정', tailwindClass: 'bg-black' },
    { color: colorVariants.palette.static.white, name: 'White', description: '완전한 하양', tailwindClass: 'bg-white' },
  ]
}

const SEMANTIC_COLORS_STORY = {
  id: 'semantic-colors',
  name: 'Semantic Colors',
  description: '시맨틱 컬러 (Primary, Success, Warning, Error)',
  colors: [
    { color: colorVariants.semantic.primary, name: 'Primary', description: '메인 브랜드 컬러', tailwindClass: 'bg-semantic-primary' },
    { color: colorVariants.semantic.success, name: 'Success', description: '성공 상태 컬러', tailwindClass: 'bg-semantic-success' },
    { color: colorVariants.semantic.warning, name: 'Warning', description: '경고 상태 컬러', tailwindClass: 'bg-semantic-warning' },
    { color: colorVariants.semantic.error, name: 'Error', description: '에러 상태 컬러', tailwindClass: 'bg-semantic-error' },
    { color: colorVariants.semantic.secondary, name: 'Secondary', description: '보조 컬러', tailwindClass: 'bg-semantic-secondary' },
  ]
}

const TEXT_COLORS_STORY = {
  id: 'text-colors',
  name: 'Text Colors',
  description: '텍스트 컬러 시스템',
  colors: [
    { color: colorVariants.semantic.text.primary, name: 'Text Primary', description: '주요 텍스트 컬러', tailwindClass: 'text-semantic-text-primary' },
    { color: colorVariants.semantic.text.secondary, name: 'Text Secondary', description: '보조 텍스트 컬러', tailwindClass: 'text-semantic-text-secondary' },
    { color: colorVariants.semantic.text.disabled, name: 'Text Disabled', description: '비활성 텍스트 컬러', tailwindClass: 'text-semantic-text-disabled' },
    { color: colorVariants.semantic.text.black, name: 'Text Black', description: '검정 텍스트', tailwindClass: 'text-semantic-text-black' },
    { color: colorVariants.semantic.text.white, name: 'Text White', description: '흰색 텍스트', tailwindClass: 'text-semantic-text-white' },
  ]
}

const BACKGROUND_COLORS_STORY = {
  id: 'background-colors',
  name: 'Background Colors',
  description: '배경 컬러 시스템',
  colors: [
    { color: colorVariants.semantic.background, name: 'Background Primary', description: '기본 배경색', tailwindClass: 'bg-semantic-bg-primary' },
    { color: colorVariants.palette.gray[200], name: 'Background Secondary', description: '보조 배경색', tailwindClass: 'bg-semantic-bg-secondary' },
    { color: colorVariants.semantic.border, name: 'Border', description: '테두리 컬러', tailwindClass: 'border-semantic-border' },
  ]
}

const COMPREHENSIVE_STORIES = [
  {
    id: 'all-colors',
    name: 'All Color Palette',
    description: '모든 컬러 팔레트를 한 번에 확인',
    render: () => (
      <div className="space-y-8">
        <section>
          <h3 className="typography-headline3-bold mb-4">Green Palette</h3>
          <div className="grid grid-cols-5 md:grid-cols-10 gap-2">
            {Object.entries(colorVariants.palette.green).map(([key, color]) => (
              <div key={key} className="text-center">
                <div 
                  className="w-full h-16 rounded border mb-1" 
                  style={{ backgroundColor: color }}
                ></div>
                <span className="typography-caption2">{key}</span>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h3 className="typography-headline3-bold mb-4">Secondary Palettes</h3>
          <div className="space-y-4">
            {['blue', 'red', 'yellow'].map((colorName) => (
              <div key={colorName}>
                <h4 className="typography-body1-bold mb-2 capitalize">{colorName}</h4>
                <div className="grid grid-cols-5 md:grid-cols-10 gap-2">
                  {Object.entries(colorVariants.palette[colorName as keyof typeof colorVariants.palette]).map(([key, color]) => (
                    <div key={key} className="text-center">
                      <div 
                        className="w-full h-12 rounded border mb-1" 
                        style={{ backgroundColor: color }}
                      ></div>
                      <span className="typography-caption2">{key}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h3 className="typography-headline3-bold mb-4">Gray Scale</h3>
          <div className="grid grid-cols-5 md:grid-cols-10 gap-2">
            {Object.entries(colorVariants.palette.gray).map(([key, color]) => (
              <div key={key} className="text-center">
                <div 
                  className="w-full h-16 rounded border mb-1" 
                  style={{ backgroundColor: color }}
                ></div>
                <span className="typography-caption2">{key}</span>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h3 className="typography-headline3-bold mb-4">Semantic Colors</h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {['primary' as const, 'secondary' as const, 'success' as const, 'warning' as const, 'error' as const].map((key) => (
              <div key={key} className="text-center">
                <div 
                  className="w-full h-16 rounded border mb-2" 
                  style={{ backgroundColor: colorVariants.semantic[key] }}
                ></div>
                <span className="typography-body2-bold capitalize">{key}</span>
                <div className="typography-caption1 text-semantic-text-secondary">{colorVariants.semantic[key]}</div>
              </div>
            ))}
          </div>
        </section>
      </div>
    ),
    code: `
      <div className="space-y-4">
        {/* Primary Colors */}
        <div className="bg-green-500 p-4 text-white">Primary Green</div>
        <div className="bg-blue-500 p-4 text-white">Success Blue</div>
        
        {/* Semantic Colors */}
        <div className="bg-semantic-primary p-4 text-white">Semantic Primary</div>
        <div className="bg-semantic-error p-4 text-white">Semantic Error</div>
      </div>
    `
  },
  {
    id: 'practical-usage',
    name: 'Practical Usage Example',
    description: '실제 사용 예시와 조합',
    render: () => (
      <div className="space-y-6">
        <div className="bg-semantic-bg-primary p-6 rounded-lg border border-semantic-border">
          <h3 className="typography-headline3-bold text-semantic-text-primary mb-4">
            UI 컴포넌트 예시
          </h3>
          
          <div className="space-y-4">
            <div className="flex gap-3">
              <button className="px-4 py-2 bg-semantic-primary text-semantic-text-white rounded hover:bg-green-600 transition-colors">
                Primary Button
              </button>
              <button className="px-4 py-2 bg-semantic-success text-semantic-text-white rounded hover:bg-blue-600 transition-colors">
                Success Button
              </button>
              <button className="px-4 py-2 bg-semantic-error text-semantic-text-white rounded hover:bg-red-600 transition-colors">
                Error Button
              </button>
            </div>

            <div className="p-4 bg-green-100 border-l-4 border-green-500 rounded">
              <div className="typography-body1-bold text-green-800">성공 메시지</div>
              <div className="typography-body2 text-green-700">작업이 성공적으로 완료되었습니다.</div>
            </div>

            <div className="p-4 bg-red-100 border-l-4 border-red-500 rounded">
              <div className="typography-body1-bold text-red-800">오류 메시지</div>
              <div className="typography-body2 text-red-700">오류가 발생했습니다. 다시 시도해주세요.</div>
            </div>

            <div className="p-4 bg-yellow-100 border-l-4 border-yellow-500 rounded">
              <div className="typography-body1-bold text-yellow-800">경고 메시지</div>
              <div className="typography-body2 text-yellow-700">주의가 필요한 상황입니다.</div>
            </div>
          </div>
        </div>

        <div className="bg-semantic-bg-secondary p-6 rounded-lg">
          <h4 className="typography-headline3-bold mb-4">텍스트 컬러 예시</h4>
          <div className="space-y-2">
            <div className="typography-body1 text-semantic-text-primary">Primary Text - 주요 텍스트</div>
            <div className="typography-body1 text-semantic-text-secondary">Secondary Text - 보조 텍스트</div>
            <div className="typography-body1 text-semantic-text-disabled">Disabled Text - 비활성 텍스트</div>
          </div>
        </div>

        <div className="bg-gray-900 p-6 rounded-lg">
          <h4 className="typography-headline3-bold text-white mb-4">다크 테마 예시</h4>
          <div className="space-y-3">
            <div className="typography-body1 text-gray-100">Dark theme primary text</div>
            <div className="typography-body1 text-gray-300">Dark theme secondary text</div>
            <div className="typography-body1 text-gray-500">Dark theme disabled text</div>
          </div>
        </div>
      </div>
    ),
    code: `
      <div className="space-y-4">
        {/* Buttons with semantic colors */}
        <button className="bg-semantic-primary text-white px-4 py-2 rounded">
          Primary Button
        </button>
        
        {/* Status messages */}
        <div className="bg-green-100 border-l-4 border-green-500 p-4">
          <div className="text-green-800">Success Message</div>
        </div>
        
        {/* Text colors */}
        <div className="text-semantic-text-primary">Primary Text</div>
        <div className="text-semantic-text-secondary">Secondary Text</div>
      </div>
    `
  },
]

const stories: ColorStoryDefinition[] = [
  ...([GREEN_PALETTE_STORY, GREEN_VARIANTS_STORY].map(story => ({ ...story, category: 'Primary', type: 'single-color' as const }))),
  ...([BLUE_PALETTE_STORY, RED_PALETTE_STORY, YELLOW_PALETTE_STORY].map(story => ({ ...story, category: 'Secondary', type: 'single-color' as const }))),
  ...([GRAY_PALETTE_STORY, STATIC_COLORS_STORY].map(story => ({ ...story, category: 'Gray & Static', type: 'single-color' as const }))),
  ...([SEMANTIC_COLORS_STORY, TEXT_COLORS_STORY, BACKGROUND_COLORS_STORY].map(story => ({ ...story, category: 'Semantic', type: 'single-color' as const }))),
  ...COMPREHENSIVE_STORIES.map(story => ({ ...story, category: 'Comprehensive', type: 'comprehensive-color' as const }))
]

export const getStoryDefinition = (storyId: string) => { 
  const story = stories.find(s => s.id === storyId)
  return story
}

export const getStoryDefinitions = (): ColorStoryDefinition[] => {
  return stories
}

export const generateStoryDefinitionStaticParams = () => {
  return stories.map(s => ({
    story: s.id,
  }))
}