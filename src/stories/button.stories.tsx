import type { Meta, StoryObj } from '@storybook/react'
import { Button } from '@/components/ui/button'
import { Heart, Download, ChevronRight } from 'lucide-react'

const meta = {
  title: 'Components/UI/Button',
  component: Button,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: '다양한 스타일과 크기를 제공하는 재사용 가능한 버튼 컴포넌트입니다.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'tertiary', 'danger', 'success', 'warning', 'ghost', 'link'],
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg', 'icon'],
    },
    asChild: {
      control: { type: 'boolean' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
  },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

// Variant 스토리들
export const Primary: Story = {
  args: {
    variant: 'primary',
    children: 'Primary 버튼',
  },
}

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Secondary 버튼',
  },
}

export const Tertiary: Story = {
  args: {
    variant: 'tertiary',
    children: 'Tertiary 버튼',
  },
}

export const Ghost: Story = {
  args: {
    variant: 'ghost',
    children: 'Ghost 버튼',
  },
}

export const Danger: Story = {
  args: {
    variant: 'danger',
    children: 'Danger 버튼',
  },
}

export const Success: Story = {
  args: {
    variant: 'success',
    children: 'Success 버튼',
  },
}

export const Warning: Story = {
  args: {
    variant: 'warning',
    children: 'Warning 버튼',
  },
}

export const Link: Story = {
  args: {
    variant: 'link',
    children: 'Link 버튼',
  },
}


// Size 스토리들
export const Small: Story = {
  args: {
    size: 'sm',
    children: '작은 버튼',
  },
}

export const Large: Story = {
  args: {
    size: 'lg',
    children: '큰 버튼',
  },
}

export const Icon: Story = {
  args: {
    size: 'icon',
    children: <Heart className="size-4" />,
  },
}

// 아이콘이 포함된 버튼들
export const WithIcon: Story = {
  args: {
    children: (
      <>
        <Download className="size-4" />
        다운로드
      </>
    ),
  },
}

export const WithIconRight: Story = {
  args: {
    children: (
      <>
        계속하기
        <ChevronRight className="size-4" />
      </>
    ),
  },
}

// 상태별 스토리들
export const Disabled: Story = {
  args: {
    disabled: true,
    children: '비활성화된 버튼',
  },
}

export const Loading: Story = {
  args: {
    disabled: true,
    children: (
      <>
        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
        로딩 중...
      </>
    ),
  },
}

// 모든 variants를 보여주는 스토리
export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <h3 className="text-lg font-semibold">사용자 정의 디자인 토큰 기반 버튼들</h3>
      <div className="flex gap-2 flex-wrap">
        <Button variant="primary">Primary</Button>
        <Button variant="danger">Error</Button>
        <Button variant="success">Success</Button>
        <Button variant="warning">Warning</Button>
      </div>
      <div className="flex gap-2 flex-wrap">
        <Button variant="secondary">Secondary</Button>
        <Button variant="tertiary">Tertiary</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="link">Link</Button>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: '팔레트 토큰과 시맨틱 토큰을 활용한 버튼 컴포넌트를 확인할 수 있습니다.',
      },
    },
  },
}

// 모든 sizes를 보여주는 스토리
export const AllSizes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Button size="sm">Small</Button>
      <Button size="md">Default</Button>
      <Button size="lg">Large</Button>
      <Button size="icon" variant="ghost">
        <Heart className="size-4" />
      </Button>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: '모든 버튼 크기를 한 번에 확인할 수 있습니다.',
      },
    },
  },
}

// 디자인 토큰 시연 스토리
export const DesignTokenShowcase: Story = {
  render: () => (
    <div className="space-y-6">
      <div className="space-y-2">
        <h3 className="text-lg font-semibold">시맨틱 토큰 활용</h3>
        <div className="flex gap-2 flex-wrap">
          <Button variant="primary">Primary (시맨틱)</Button>
          <Button variant="secondary">Secondary (시맨틱)</Button>
          <Button variant="tertiary">Tertiary (시맨틱)</Button>
          <Button variant="ghost">Ghost (시맨틱)</Button>
          <Button variant="success">Success (시맨틱)</Button>
          <Button variant="warning">Warning (시맨틱)</Button>
          <Button variant="danger">Error (시맨틱)</Button>
        </div>
        <p className="text-sm text-semantic-text-secondary">
          시맨틱 토큰: primary(green-500), secondary(gray-500), tertiary(gray-500), ghost(gray-500), success(blue-500), warning(yellow-500), error(red-500)
        </p>
        <p className="text-sm text-semantic-text-secondary">
          각 버튼에 마우스를 올려서 팔레트 토큰 기반 호버 효과를 확인해보세요
        </p>
      </div>
      
      <div className="space-y-2">
        <h3 className="text-lg font-semibold">비활성화 상태 - 개선된 가시성</h3>
        <div className="flex gap-2 flex-wrap">
          <Button variant="primary" disabled>primary</Button>
          <Button variant="secondary" disabled>secondary</Button>
          <Button variant="tertiary" disabled>tertiary</Button>
          <Button variant="ghost" disabled>ghost</Button>
          <Button variant="success" disabled>success</Button>
          <Button variant="warning" disabled>warning</Button>
          <Button variant="danger" disabled>danger</Button>
          <Button variant="link" disabled>link</Button>
        </div>
        <p className="text-sm text-semantic-text-secondary">
          비활성화 상태 버튼입니다.
        </p>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: '팔레트 토큰과 시맨틱 토큰이 실제로 어떻게 적용되는지 확인할 수 있습니다.',
      },
    },
  },
}

// 사용 예시 스토리
export const UsageExamples: Story = {
  render: () => (
    <div className="space-y-6">
      <div className="space-y-2">
        <h3 className="text-lg font-semibold">기본 액션</h3>
        <div className="flex gap-2">
          <Button>저장</Button>
          <Button variant="tertiary">취소</Button>
        </div>
      </div>
      
      <div className="space-y-2">
        <h3 className="text-lg font-semibold">상태별 액션</h3>
        <div className="flex gap-2 flex-wrap">
          <Button variant="success">완료</Button>
          <Button variant="warning">주의</Button>
          <Button variant="danger">삭제</Button>
          <Button variant="tertiary">취소</Button>
        </div>
      </div>
      
      <div className="space-y-2">
        <h3 className="text-lg font-semibold">아이콘 버튼</h3>
        <div className="flex gap-2">
          <Button size="icon">
            <Heart className="size-4" />
          </Button>
          <Button variant="tertiary" size="icon">
            <Download className="size-4" />
          </Button>
          <Button variant="ghost" size="icon">
            <ChevronRight className="size-4" />
          </Button>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: '실제 사용 상황에서의 버튼 조합 예시입니다.',
      },
    },
  },
}