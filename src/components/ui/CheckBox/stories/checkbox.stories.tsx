import type { Meta, StoryObj } from '@storybook/react'
import { Checkbox } from '@/components/ui/CheckBox/CheckBox'

const meta = {
  title: 'Components/UI/CheckBox',
  component: Checkbox,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: '시맨틱 컬러 기반의 CheckBox 컴포넌트입니다.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: { type: 'text' },
      description: '체크박스 라벨',
    },
    description: {
      control: { type: 'text' },
      description: '체크박스 설명 텍스트',
    },
    disabled: {
      control: { type: 'boolean' },
    },
    defaultChecked: {
      control: { type: 'boolean' },
    },
    id: {
      control: { type: 'text' },
    },
  },
} satisfies Meta<typeof Checkbox>

export default meta
type Story = StoryObj<typeof meta>

// 라벨이 있는 체크박스
export const WithLabel: Story = {
  args: {
    id: 'terms',
    label: 'Accept terms and conditions',
  },
}

// 라벨과 설명이 있는 체크박스
export const WithLabelAndDescription: Story = {
  args: {
    id: 'notifications',
    label: 'Enable notifications',
    description: 'You can enable or disable notifications at any time.',
  },
}

// 체크된 상태
export const Checked: Story = {
  args: {
    id: 'checked',
    label: 'Checked state',
    defaultChecked: true,
  },
}

// 비활성화 상태
export const Disabled: Story = {
  args: {
    id: 'disabled',
    label: 'Disabled checkbox',
    disabled: true,
  },
}

// 비활성화된 체크 상태
export const DisabledChecked: Story = {
  args: {
    id: 'disabled-checked',
    label: 'Disabled checked state',
    disabled: true,
    defaultChecked: true,
  },
}

// 에러 상태
export const ErrorState: Story = {
  args: {
    id: 'error',
    label: 'Error state',
    'aria-invalid': true,
  },
}

// 복합 예시 - 체크박스 그룹
export const CheckboxGroup: Story = {
  render: () => (
    <div className="space-y-4 w-80">
      <h3 className="typography-headline3-bold">Select your preferences</h3>
      <div className="space-y-3">
        <Checkbox
          id="email-notifications"
          label="Email notifications"
          description="Receive email updates about your account"
          defaultChecked
        />
        <Checkbox
          id="push-notifications"
          label="Push notifications"
          description="Receive push notifications on your device"
        />
        <Checkbox
          id="sms-notifications"
          label="SMS notifications"
          description="Receive SMS updates for important alerts"
          disabled
        />
        <Checkbox
          id="newsletter"
          label="Newsletter subscription"
          description="Subscribe to our weekly newsletter"
          aria-invalid
        />
      </div>
    </div>
  ),
}

// 모든 상태를 보여주는 종합 스토리
export const AllStates: Story = {
  render: () => (
    <div className="space-y-6 w-96">
      <section>
        <h3 className="typography-headline3-bold mb-4">기본 상태</h3>
        <div className="space-y-3">
          <Checkbox id="basic-1" />
          <Checkbox id="basic-2" label="라벨이 있는 체크박스" />
          <Checkbox 
            id="basic-3" 
            label="설명이 있는 체크박스"
            description="부가적인 설명 텍스트입니다"
          />
        </div>
      </section>

      <section>
        <h3 className="typography-headline3-bold mb-4">체크된 상태</h3>
        <div className="space-y-3">
          <Checkbox id="checked-1" defaultChecked />
          <Checkbox 
            id="checked-2" 
            label="체크된 라벨 체크박스" 
            defaultChecked 
          />
          <Checkbox 
            id="checked-3" 
            label="체크된 설명 체크박스"
            description="이 체크박스는 기본적으로 체크되어 있습니다"
            defaultChecked
          />
        </div>
      </section>

      <section>
        <h3 className="typography-headline3-bold mb-4">포커스 상태</h3>
        <div className="space-y-3">
          <p className="typography-body2 text-palette-gray-600">
            체크박스를 클릭하거나 탭으로 포커스하면 녹색 테두리와 링이 나타납니다
          </p>
          <Checkbox 
            id="focus-1" 
            label="포커스 테스트 체크박스"
            description="이 체크박스를 클릭해보세요"
          />
        </div>
      </section>

      <section>
        <h3 className="typography-headline3-bold mb-4">에러 상태</h3>
        <div className="space-y-3">
          <Checkbox 
            id="error-1" 
            aria-invalid 
          />
          <Checkbox 
            id="error-2" 
            label="에러 상태 체크박스"
            aria-invalid
          />
          <div>
            <Checkbox 
              id="error-3" 
              label="필수 동의 항목"
              description="이 항목에 동의해야 계속 진행할 수 있습니다"
              aria-invalid
            />
            <p className="typography-caption1 text-semantic-error mt-1">
              필수 항목입니다. 체크해주세요.
            </p>
          </div>
        </div>
      </section>

      <section>
        <h3 className="typography-headline3-bold mb-4">비활성화 상태</h3>
        <div className="space-y-3">
          <Checkbox 
            id="disabled-1" 
            disabled 
          />
          <Checkbox 
            id="disabled-2" 
            label="비활성화된 체크박스"
            disabled
          />
          <Checkbox 
            id="disabled-3" 
            label="비활성화된 체크된 체크박스"
            description="이 옵션은 현재 사용할 수 없습니다"
            disabled
            defaultChecked
          />
        </div>
      </section>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'CheckBox 컴포넌트의 모든 상태를 한 번에 확인할 수 있습니다.',
      },
    },
  },
}

// 시맨틱 컬러 정보
export const SemanticColors: Story = {
  render: () => (
    <div className="space-y-6">
      <h3 className="typography-headline3-bold mb-4">CheckBox 컴포넌트에 적용된 시맨틱 컬러</h3>
      
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
            </div>
          </div>

          <div>
            <h4 className="typography-body1-bold mb-3">체크된 상태</h4>
            <div className="space-y-2 typography-caption1">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-semantic-primary rounded"></div>
                <span>배경: semantic-primary</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-semantic-primary rounded"></div>
                <span>테두리: semantic-primary</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-palette-static-white rounded border"></div>
                <span>체크 아이콘: palette-static-white</span>
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
                <span>테두리: palette-gray-400</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-palette-gray-400 rounded"></div>
                <span>체크된 배경: palette-gray-400</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="typography-body1-bold mb-3">라벨 및 텍스트</h4>
            <div className="space-y-2 typography-caption1">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-palette-gray-1000 rounded"></div>
                <span>라벨: palette-gray-1000</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-palette-gray-400 rounded"></div>
                <span>설명 텍스트: palette-gray-400</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-palette-gray-400 rounded"></div>
                <span>비활성화 텍스트: palette-gray-400</span>
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
        story: 'CheckBox 컴포넌트에 적용된 시맨틱 컬러들을 시각적으로 확인할 수 있습니다.',
      },
    },
  },
}

// 실제 사용 예시 스토리
export const UsageExamples: Story = {
  render: () => (
    <div className="space-y-8 w-96">
      <div className="space-y-4">
        <h3 className="typography-headline3-bold">회원가입 약관 동의</h3>
        <div className="space-y-3">
          <Checkbox
            id="terms-required"
            label="서비스 이용약관 동의 (필수)"
            description="서비스 이용을 위해 반드시 동의해야 합니다"
          />
          <Checkbox
            id="privacy-required"
            label="개인정보 처리방침 동의 (필수)"
            description="개인정보 보호를 위한 필수 약관입니다"
          />
          <Checkbox
            id="marketing-optional"
            label="마케팅 정보 수신 동의 (선택)"
            description="이벤트, 할인 혜택 등의 정보를 받아보실 수 있습니다"
          />
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="typography-headline3-bold">알림 설정</h3>
        <div className="space-y-3">
          <Checkbox
            id="email-notifications-example"
            label="이메일 알림"
            description="중요한 업데이트를 이메일로 받아보세요"
            defaultChecked
          />
          <Checkbox
            id="push-notifications-example"
            label="푸시 알림"
            description="실시간 알림을 받아보세요"
            defaultChecked
          />
          <Checkbox
            id="sms-notifications-example"
            label="SMS 알림"
            description="긴급한 알림을 문자로 받아보세요"
          />
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="typography-headline3-bold">필터 옵션</h3>
        <div className="space-y-3">
          <Checkbox
            id="filter-new"
            label="신상품"
            defaultChecked
          />
          <Checkbox
            id="filter-sale"
            label="할인 상품"
            defaultChecked
          />
          <Checkbox
            id="filter-bestseller"
            label="베스트셀러"
          />
          <Checkbox
            id="filter-review"
            label="리뷰 4점 이상"
          />
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="typography-headline3-bold">에러 및 검증 상태</h3>
        <div className="space-y-3">
          <div>
            <Checkbox
              id="validation-error"
              label="필수 약관 동의"
              aria-invalid
            />
            <p className="typography-caption1 text-semantic-error mt-1">
              이 항목은 필수입니다.
            </p>
          </div>
          <Checkbox
            id="validation-success"
            label="선택 약관 동의"
            description="추가 혜택을 받으실 수 있습니다"
            defaultChecked
          />
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: '실제 애플리케이션에서 사용될 수 있는 CheckBox 컴포넌트의 다양한 활용 예시입니다. 회원가입, 설정, 필터링 등의 상황에서 어떻게 사용할 수 있는지 확인할 수 있습니다.',
      },
    },
  },
}