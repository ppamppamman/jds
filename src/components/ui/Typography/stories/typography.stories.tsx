import type { Meta, StoryObj } from '@storybook/react-vite'

const meta = {
  title: 'Components/UI/Typography',
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Typography 토큰 기반의 CSS 클래스를 직접 사용하여 일관된 텍스트 스타일을 적용합니다. className에 typography-{variant} 또는 typography-{variant}-bold 형태로 사용할 수 있습니다.',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta

export default meta
type Story = StoryObj

// Headline 스토리들
export const Headline1: Story = {
  render: () => (
    <span className="typography-headline1">
      Headline 1 - 가장 큰 제목 (typography-headline1)
    </span>
  ),
}

export const Headline1Bold: Story = {
  render: () => (
    <span className="typography-headline1-bold">
      Headline 1 Bold - 가장 큰 제목 (typography-headline1-bold)
    </span>
  ),
}

export const Headline2: Story = {
  render: () => (
    <span className="typography-headline2">
      Headline 2 - 중간 제목 (typography-headline2)
    </span>
  ),
}

export const Headline2Bold: Story = {
  render: () => (
    <span className="typography-headline2-bold">
      Headline 2 Bold - 중간 제목 (typography-headline2-bold)
    </span>
  ),
}

export const Headline3: Story = {
  render: () => (
    <span className="typography-headline3">
      Headline 3 - 작은 제목 (typography-headline3)
    </span>
  ),
}

export const Headline3Bold: Story = {
  render: () => (
    <span className="typography-headline3-bold">
      Headline 3 Bold - 작은 제목 (typography-headline3-bold)
    </span>
  ),
}

// Body 스토리들
export const Body1: Story = {
  render: () => (
    <span className="typography-body1">
      Body 1 - 본문 텍스트 (typography-body1)
    </span>
  ),
}

export const Body1Bold: Story = {
  render: () => (
    <span className="typography-body1-bold">
      Body 1 Bold - 본문 텍스트 (typography-body1-bold)
    </span>
  ),
}

export const Body2: Story = {
  render: () => (
    <span className="typography-body2">
      Body 2 - 작은 본문 텍스트 (typography-body2)
    </span>
  ),
}

export const Body2Bold: Story = {
  render: () => (
    <span className="typography-body2-bold">
      Body 2 Bold - 작은 본문 텍스트 (typography-body2-bold)
    </span>
  ),
}

// Caption 스토리들
export const Caption1: Story = {
  render: () => (
    <span className="typography-caption1">
      Caption 1 - 캡션 텍스트 (typography-caption1)
    </span>
  ),
}

export const Caption1Bold: Story = {
  render: () => (
    <span className="typography-caption1-bold">
      Caption 1 Bold - 캡션 텍스트 (typography-caption1-bold)
    </span>
  ),
}

export const Caption2: Story = {
  render: () => (
    <span className="typography-caption2">
      Caption 2 - 작은 캡션 텍스트 (typography-caption2)
    </span>
  ),
}

export const Caption2Bold: Story = {
  render: () => (
    <span className="typography-caption2-bold">
      Caption 2 Bold - 작은 캡션 텍스트 (typography-caption2-bold)
    </span>
  ),
}

// 모든 스타일을 보여주는 종합 스토리
export const AllTypographyStyles: Story = {
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
  parameters: {
    docs: {
      description: {
        story: 'Typography 토큰 기반의 모든 CSS 클래스를 한 번에 확인할 수 있습니다. 표준 HTML DOM 혹은 className prop을 지원하는 컴포넌트에 적용 가능합니다.',
      },
    },
  },
}

// 실제 사용 예시
export const PracticalUsageExample: Story = {
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
          <div>{`<h1 className="typography-headline1-bold">페이지 제목</h1>`}</div>
          <div>{`<h2 className="typography-headline2">섹션 제목</h2>`}</div>
          <div>{`<p className="typography-body1">본문 텍스트</p>`}</div>
          <div>{`<span className="typography-caption1">캡션</span>`}</div>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: '실제 웹페이지에서 사용되는 방식으로 typography 클래스들을 적용한 예시입니다. span, div, h1-h6, p 태그 등 어떤 HTML 태그에든 className으로 적용할 수 있습니다.',
      },
    },
  },
}

// 토큰 정보 표시
export const TokenInformation: Story = {
  render: () => (
    <div className="space-y-6">
      <h3 className="text-lg font-semibold mb-4">Typography 토큰 정보</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h4 className="font-semibold mb-3">폰트 크기 토큰</h4>
          <div className="space-y-1 text-sm">
            <div>t1: 11px</div>
            <div>t2: 12px</div>
            <div>t3: 13px</div>
            <div>t4: 14px</div>
            <div>t5: 16px (기본)</div>
            <div>t6: 18px</div>
            <div>t7: 20px</div>
            <div>t8: 22px</div>
            <div>t9: 24px</div>
            <div>t10: 26px</div>
          </div>
        </div>
        
        <div>
          <h4 className="font-semibold mb-3">줄 높이 토큰</h4>
          <div className="space-y-1 text-sm">
            <div>t1: 15px</div>
            <div>t2: 16px</div>
            <div>t3: 18px</div>
            <div>t4: 19px</div>
            <div>t5: 22px</div>
            <div>t6: 24px</div>
            <div>t7: 27px</div>
            <div>t8: 30px</div>
            <div>t9: 32px</div>
            <div>t10: 35px</div>
          </div>
        </div>
      </div>
      
      <div>
        <h4 className="font-semibold mb-3">폰트 두께 토큰</h4>
        <div className="space-y-1 text-sm">
          <div>regular: 400</div>
          <div>medium: 500</div>
          <div>bold: 700</div>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Typography 시스템에서 사용하는 토큰들의 정보를 확인할 수 있습니다.',
      },
    },
  },
}