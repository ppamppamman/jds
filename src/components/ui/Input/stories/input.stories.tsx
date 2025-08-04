import type { Meta, StoryObj } from '@storybook/react'
import { Input } from '@/components/ui/Input/Input'

const meta = {
  title: 'Components/UI/Input',
  component: Input,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: '시맨틱 컬러 기반의 일관된 Input 컴포넌트입니다. 다양한 상태(기본, 포커스, 에러, disabled)에서 적절한 색상을 사용합니다.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['text', 'email', 'password', 'number', 'search', 'tel', 'url', 'file'],
    },
    placeholder: {
      control: { type: 'text' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
    defaultValue: {
      control: { type: 'text' },
    },
  },
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>

// 기본 스토리
export const Default: Story = {
  args: {
    placeholder: '텍스트를 입력하세요',
  },
}

// 다양한 타입들
export const EmailType: Story = {
  args: {
    type: 'email',
    placeholder: '이메일을 입력하세요',
  },
}

export const PasswordType: Story = {
  args: {
    type: 'password',
    placeholder: '비밀번호를 입력하세요',
  },
}

export const NumberType: Story = {
  args: {
    type: 'number',
    placeholder: '숫자를 입력하세요',
  },
}

export const SearchType: Story = {
  args: {
    type: 'search',
    placeholder: '검색어를 입력하세요',
  },
}

// 값이 있는 상태
export const WithValue: Story = {
  args: {
    defaultValue: '입력된 텍스트입니다',
    placeholder: '텍스트를 입력하세요',
  },
}

// Disabled 상태
export const Disabled: Story = {
  args: {
    placeholder: '비활성화된 입력 필드',
    disabled: true,
  },
}

export const DisabledWithValue: Story = {
  args: {
    defaultValue: '비활성화된 상태의 텍스트',
    disabled: true,
  },
}

// 에러 상태 (aria-invalid 사용)
export const ErrorState: Story = {
  args: {
    placeholder: '에러 상태의 입력 필드',
    'aria-invalid': true,
  },
}

export const ErrorStateWithValue: Story = {
  args: {
    defaultValue: '잘못된 형식의 데이터',
    'aria-invalid': true,
  },
}

// 파일 업로드
export const FileUpload: Story = {
  args: {
    type: 'file',
  },
}

// 모든 상태를 보여주는 종합 스토리
export const AllStates: Story = {
  render: () => (
    <div className="space-y-6 w-80">
      <section>
        <h3 className="typography-headline3-bold mb-4">기본 상태</h3>
        <div className="space-y-3">
          <div>
            <label className="typography-body2-bold block mb-1">일반 입력</label>
            <Input placeholder="텍스트를 입력하세요" />
          </div>
          <div>
            <label className="typography-body2-bold block mb-1">값이 있는 상태</label>
            <Input defaultValue="입력된 텍스트" />
          </div>
        </div>
      </section>

      <section>
        <h3 className="typography-headline3-bold mb-4">포커스 상태</h3>
        <div className="space-y-3">
          <div>
            <label className="typography-body2-bold block mb-1">포커스된 입력 (클릭해보세요)</label>
            <Input placeholder="포커스 시 녹색 테두리" />
          </div>
        </div>
      </section>

      <section>
        <h3 className="typography-headline3-bold mb-4">에러 상태</h3>
        <div className="space-y-3">
          <div>
            <label className="typography-body2-bold block mb-1">에러 상태</label>
            <Input placeholder="에러 상태" aria-invalid />
            <p className="typography-caption1 text-semantic-error mt-1">
              올바른 형식으로 입력해주세요
            </p>
          </div>
          <div>
            <label className="typography-body2-bold block mb-1">에러 상태 (값 포함)</label>
            <Input defaultValue="잘못된@이메일" aria-invalid />
            <p className="typography-caption1 text-semantic-error mt-1">
              유효하지 않은 이메일 형식입니다
            </p>
          </div>
        </div>
      </section>

      <section>
        <h3 className="typography-headline3-bold mb-4">비활성화 상태</h3>
        <div className="space-y-3">
          <div>
            <label className="typography-body2-bold block mb-1">비활성화된 입력</label>
            <Input placeholder="비활성화된 필드" disabled />
          </div>
          <div>
            <label className="typography-body2-bold block mb-1">비활성화된 입력 (값 포함)</label>
            <Input defaultValue="읽기 전용 텍스트" disabled />
          </div>
        </div>
      </section>

      <section>
        <h3 className="typography-headline3-bold mb-4">다양한 타입</h3>
        <div className="space-y-3">
          <div>
            <label className="typography-body2-bold block mb-1">이메일</label>
            <Input type="email" placeholder="example@email.com" />
          </div>
          <div>
            <label className="typography-body2-bold block mb-1">비밀번호</label>
            <Input type="password" placeholder="비밀번호를 입력하세요" />
          </div>
          <div>
            <label className="typography-body2-bold block mb-1">숫자</label>
            <Input type="number" placeholder="숫자를 입력하세요" />
          </div>
          <div>
            <label className="typography-body2-bold block mb-1">검색</label>
            <Input type="search" placeholder="검색어를 입력하세요" />
          </div>
          <div>
            <label className="typography-body2-bold block mb-1">파일 업로드</label>
            <Input type="file" />
          </div>
        </div>
      </section>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Input 컴포넌트의 모든 상태와 타입을 한 번에 확인할 수 있습니다. 각 상태별로 적절한 시맨틱 컬러가 적용된 것을 확인할 수 있습니다.',
      },
    },
  },
}

// 시맨틱 컬러 정보
export const SemanticColors: Story = {
  render: () => (
    <div className="space-y-6">
      <h3 className="typography-headline3-bold mb-4">Input 컴포넌트에 적용된 시맨틱 컬러</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div>
            <h4 className="typography-body1-bold mb-3">기본 상태</h4>
            <div className="space-y-2 typography-caption1">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-palette-static-white border border-palette-gray-400 rounded"></div>
                <span>배경: palette-static-white</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-palette-gray-400 rounded"></div>
                <span>테두리: palette-gray-400</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-palette-gray-1000 rounded"></div>
                <span>텍스트: palette-gray-1000</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-palette-gray-400 rounded"></div>
                <span>Placeholder: palette-gray-400</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="typography-body1-bold mb-3">포커스 상태</h4>
            <div className="space-y-2 typography-caption1">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-semantic-primary rounded"></div>
                <span>테두리: semantic-primary</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-semantic-primary/30 rounded"></div>
                <span>링: semantic-primary/30</span>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div>
            <h4 className="typography-body1-bold mb-3">에러 상태</h4>
            <div className="space-y-2 typography-caption1">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-semantic-error rounded"></div>
                <span>테두리: semantic-error</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-semantic-error/20 rounded"></div>
                <span>링: semantic-error/20</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="typography-body1-bold mb-3">비활성화 상태</h4>
            <div className="space-y-2 typography-caption1">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-palette-gray-200 border border-palette-gray-400 rounded"></div>
                <span>배경: palette-gray-200</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-palette-gray-400 rounded"></div>
                <span>테두리 & 텍스트: palette-gray-400</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="typography-body1-bold mb-3">텍스트 선택</h4>
            <div className="space-y-2 typography-caption1">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-semantic-primary rounded"></div>
                <span>선택 배경: semantic-primary</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-palette-static-white rounded border"></div>
                <span>선택 텍스트: palette-static-white</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Input 컴포넌트에 적용된 시맨틱 컬러들을 시각적으로 확인할 수 있습니다. 각 상태별로 사용된 색상과 그 의미를 파악할 수 있습니다.',
      },
    },
  },
}