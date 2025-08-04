import { ComprehensiveStoryDefinition, SingleStoryDefinition } from "../type"

const HEADLINE_STORY_DEFINITIONS = [
  {
    id: 'headline1',
    name: 'Headline 1',
    description: '가장 큰 제목 (26px, Regular)',
    className: 'typography-headline1',    
  },
  {
    id: 'headline1-bold',
    name: 'Headline 1 Bold',
    description: '가장 큰 제목 (26px, Bold)',
    className: 'typography-headline1-bold',
  },
  {
    id: 'headline2',
    name: 'Headline 2',
    description: '중간 제목 (24px, Regular)',
    className: 'typography-headline2',
  },
  {
    id: 'headline2-bold',
    name: 'Headline 2 Bold',
    description: '중간 제목 (24px, Bold)',
    className: 'typography-headline2-bold',
  },
  {
    id: 'headline3',
    name: 'Headline 3',
    description: '작은 제목 (22px, Regular)',
    className: 'typography-headline3',
  },
  {
    id: 'headline3-bold',
    name: 'Headline 3 Bold',
    description: '작은 제목 (22px, Bold)',
    className: 'typography-headline3-bold',
  }, 
]

const BODY_STORY_DEFINITIONS = [
  {
    id: 'body1',
    name: 'Body 1',
    description: '큰 본문 텍스트 (16px, Regular)',
    className: 'typography-body1',
  },
  {
    id: 'body1-bold',
    name: 'Body 1 Bold',
    description: '큰 본문 텍스트 (16px, Bold)',
    className: 'typography-body1-bold',
  },
  {
    id: 'body2',
    name: 'Body 2',
    description: '작은 본문 텍스트 (14px, Regular)',
    className: 'typography-body2',
  },
  {
    id: 'body2-bold',
    name: 'Body 2 Bold',
    description: '작은 본문 텍스트 (14px, Bold)',
    className: 'typography-body2-bold',
  },
]

const CAPTION_STORY_DEFINITIONS = [
  {
    id: 'caption1',
    name: 'Caption 1',
    description: '캡션 텍스트 (12px, Regular)',
    className: 'typography-caption1',
  },
  {
    id: 'caption1-bold',
    name: 'Caption 1 Bold',
    description: '캡션 텍스트 (12px, Bold)',
    className: 'typography-caption1-bold',
  },
  {
    id: 'caption2',
    name: 'Caption 2',
    description: '작은 캡션 텍스트 (11px, Regular)',
    className: 'typography-caption2',
  },
  {
    id: 'caption2-bold',
    name: 'Caption 2 Bold',
    description: '작은 캡션 텍스트 (11px, Bold)',
    className: 'typography-caption2-bold',
  },
]

const COMPREHENSIVE_STORY_DEFINITIONS = [
  {
    id: 'all-styles',
    name: 'All Typography Styles',
    description: '모든 타이포그래피 스타일을 한 번에 확인',
    render: () => (
      <div className="space-y-6">
        <section>
          <h3 className="text-lg font-semibold mb-4">Headlines</h3>
          <div className="space-y-3">
            <div className="typography-headline1">
              Headline 1 - 가장 큰 제목 (26px, Regular) - typography-headline1
            </div>
            <div className="typography-headline1-bold">
              Headline 1 Bold - 가장 큰 제목 (26px, Bold) - typography-headline1-bold
            </div>
            <div className="typography-headline2">
              Headline 2 - 중간 제목 (24px, Regular) - typography-headline2
            </div>
            <div className="typography-headline2-bold">
              Headline 2 Bold - 중간 제목 (24px, Bold) - typography-headline2-bold
            </div>
            <div className="typography-headline3">
              Headline 3 - 작은 제목 (22px, Regular) - typography-headline3
            </div>
            <div className="typography-headline3-bold">
              Headline 3 Bold - 작은 제목 (22px, Bold) - typography-headline3-bold
            </div>
          </div>
        </section>

        <section>
          <h3 className="text-lg font-semibold mb-4">Body Text</h3>
          <div className="space-y-3">
            <div className="typography-body1">
              Body 1 - 큰 본문 텍스트입니다 (16px, Regular). 주요 콘텐츠나 중요한 설명에 사용됩니다. - typography-body1
            </div>
            <div className="typography-body1-bold">
              Body 1 Bold - 큰 본문 텍스트 (16px, Bold)입니다. 강조가 필요한 부분에 사용합니다. - typography-body1-bold
            </div>
            <div className="typography-body2">
              Body 2 - 작은 본문 텍스트입니다 (14px, Regular). 보조 설명이나 부가 정보에 사용됩니다. - typography-body2
            </div>
            <div className="typography-body2-bold">
              Body 2 Bold - 작은 본문 텍스트 (14px, Bold)입니다. - typography-body2-bold
            </div>
          </div>
        </section>

        <section>
          <h3 className="text-lg font-semibold mb-4">Captions</h3>
          <div className="space-y-2">
            <span className="typography-caption1">
              Caption 1 - 캡션이나 라벨 텍스트 (12px, Regular) - typography-caption1
            </span>
            <br />
            <span className="typography-caption1-bold">
              Caption 1 Bold - 캡션이나 라벨 텍스트 (12px, Bold) - typography-caption1-bold
            </span>
            <br />
            <span className="typography-caption2">
              Caption 2 - 가장 작은 캡션 텍스트 (11px, Regular) - typography-caption2
            </span>
            <br />
            <span className="typography-caption2-bold">
              Caption 2 Bold - 가장 작은 캡션 텍스트 (11px, Bold) - typography-caption2-bold
            </span>
          </div>
        </section>
      </div>
    ),
    code: `
      <div className="space-y-6">
        <section>
          <h3 className="text-lg font-semibold mb-4">Headlines</h3>
          <div className="space-y-3">
            <div className="typography-headline1">Headline 1</div>
            <div className="typography-headline2-bold">Headline 2 Bold</div>
            {/* ... 더 많은 스타일들 */}
          </div>
        </section>
      </div>
    `
  },
  {
    id: 'practical-usage',
    name: 'Practical Usage Example',
    description: '실제 사용 예시',
    render: () => (
      <div className="space-y-6">
        <div className="space-y-4">
          <h1 className="typography-headline1-bold">페이지 제목</h1>
          
          <div className="space-y-3">
            <h2 className="typography-headline2">섹션 제목</h2>
            <p className="typography-body1">
              이것은 본문 텍스트입니다. 주요 콘텐츠를 설명하는데 사용되며, 
              읽기 편한 크기로 설정되어 있습니다.
            </p>
            <p className="typography-body2">
              이것은 더 작은 본문 텍스트입니다. 부가적인 설명이나 보조 정보에 사용됩니다.
            </p>
          </div>

          <div className="border-l-4 border-blue-500 pl-4">
            <h3 className="typography-headline3-bold">중요한 정보</h3>
            <p className="typography-body2">
              강조하고 싶은 내용을 담은 박스입니다.
            </p>
            <span className="typography-caption1">
              참고: 이것은 캡션 텍스트입니다.
            </span>
          </div>

          <div className="bg-gray-50 p-4 rounded">
            <span className="typography-caption2">
              작은 주석: 가장 작은 텍스트 크기입니다.
            </span>
          </div>
        </div>

        <div className="mt-8 p-4 bg-blue-50 rounded">
          <h4 className="typography-headline3-bold mb-3">코드 예시</h4>
          <div className="space-y-2 text-sm font-mono bg-white p-3 rounded">
            <div>&lt;h1 className="typography-headline1-bold"&gt;페이지 제목&lt;/h1&gt;</div>
            <div>&lt;h2 className="typography-headline2"&gt;섹션 제목&lt;/h2&gt;</div>
            <div>&lt;p className="typography-body1"&gt;본문 텍스트&lt;/p&gt;</div>
            <div>&lt;span className="typography-caption1"&gt;캡션&lt;/span&gt;</div>
          </div>
        </div>
      </div>
    ),
    code: `
      <div className="space-y-4">
        <h1 className="typography-headline1-bold">페이지 제목</h1>
        <h2 className="typography-headline2">섹션 제목</h2>
        <p className="typography-body1">본문 텍스트입니다.</p>
        <span className="typography-caption1">캡션 텍스트입니다.</span>
      </div>
    `
  },
]

const stories: (SingleStoryDefinition | ComprehensiveStoryDefinition)[] = [
  ...HEADLINE_STORY_DEFINITIONS.map(story => ({ ...story, category: 'Headline', type: 'single-typography' as const })), 
  ...BODY_STORY_DEFINITIONS.map(story => ({ ...story, category: 'Body', type: 'single-typography' as const })), 
  ...CAPTION_STORY_DEFINITIONS.map(story => ({ ...story, category: 'Caption', type: 'single-typography' as const })), 
  ...COMPREHENSIVE_STORY_DEFINITIONS.map(story => ({ ...story, category: 'Comprehensive', type: 'comprehensive-typography' as const }))
]

export const useStoryDefinition = (storyId: string) => { 
  const story = stories.find(s => s.id === storyId)
  return story
}

export const getStoryDefinitions = (): (SingleStoryDefinition | ComprehensiveStoryDefinition)[] => {
  return stories
}

export const generateStoryDefinitionStaticParams = () => {
  return stories.map(s => ({
    story: s.id,
  }))
}