import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { useState } from 'react'
import { RadioGroup } from '@/components/ui/RadioGroup/RadioGroup'

const meta = {
  title: 'Components/UI/RadioGroup',
  component: RadioGroup,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: '라디오 그룹 컴포넌트입니다. options 배열을 받아 자동으로 옵션들을 렌더링하며, 사용자가 여러 옵션 중 하나를 선택할 수 있도록 합니다.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    direction: {
      control: { type: 'select' },
      options: ['horizontal', 'vertical'],
    },
    disabled: {
      control: { type: 'boolean' },
    },
    defaultValue: {
      control: { type: 'text' },
    },
    options: {
      control: false,
    },
    onValueChange: {
      control: false,
    },
  },
} satisfies Meta<typeof RadioGroup>

export default meta
type Story = StoryObj<typeof meta>

// 가로 레이아웃
export const Horizontal: Story = {
  args: {
    options: [
      { label: <span className="typography-body2">라이트</span>, value: 'light' },
      { label: <span className="typography-body2">다크</span>, value: 'dark' },
      { label: <span className="typography-body2">시스템</span>, value: 'system' },
    ],
    direction: 'horizontal',
  },
  render: () => {
    const [value, setValue] = useState('light')
    
    return (
      <div className="flex flex-col gap-4">
        <h3 className="typography-body1-bold">테마 선택</h3>
        <RadioGroup 
          options={[
            { label: <span className="typography-body2">라이트</span>, value: 'light' },
            { label: <span className="typography-body2">다크</span>, value: 'dark' },
            { label: <span className="typography-body2">시스템</span>, value: 'system' },
          ]}
          value={value}
          onValueChange={(value) => setValue(value as string)}
          direction="horizontal"
        />
        <p className="typography-caption1 text-semantic-text-secondary">
          선택된 값: {value}
        </p>
      </div>
    )
  },
}

// 많은 옵션들
export const ManyOptions: Story = {
  args: {
    options: [
      { label: <span className="typography-body2">신용카드</span>, value: 'card' },
      { label: <span className="typography-body2">계좌이체</span>, value: 'bank' },
      { label: <span className="typography-body2">휴대폰 결제</span>, value: 'mobile' },
      { label: <span className="typography-body2">카카오페이</span>, value: 'kakaopay' },
      { label: <span className="typography-body2">네이버페이</span>, value: 'naverpay' },
      { label: <span className="typography-body2">페이코</span>, value: 'payco' },
    ],
    direction: 'vertical',
  },
  render: () => {
    const [value, setValue] = useState('card')
    
    return (
      <div className="space-y-4">
        <h3 className="typography-body1-bold">결제 방법 선택</h3>
        <RadioGroup 
          options={[
            { label: <span className="typography-body2">신용카드</span>, value: 'card' },
            { label: <span className="typography-body2">계좌이체</span>, value: 'bank' },
            { label: <span className="typography-body2">휴대폰 결제</span>, value: 'mobile' },
            { label: <span className="typography-body2">카카오페이</span>, value: 'kakaopay' },
            { label: <span className="typography-body2">네이버페이</span>, value: 'naverpay' },
            { label: <span className="typography-body2">페이코</span>, value: 'payco' },
          ]}
          value={value}
          onValueChange={setValue}
          direction="vertical"
        />
        <p className="typography-caption1 text-semantic-text-secondary">
          선택된 값: {value}
        </p>
      </div>
    )
  },
}

// 비활성화 상태
export const Disabled: Story = {
  args: {
    options: [
      { label: <span className="typography-body2 text-semantic-text-disabled">옵션 1</span>, value: 'option1' },
      { label: <span className="typography-body2 text-semantic-text-disabled">옵션 2</span>, value: 'option2' },
    ],
    disabled: true,
  },
  render: () => {
    const [value1, setValue1] = useState('option1')
    const [value2, setValue2] = useState('enabled1')
    
    return (
      <div className="space-y-8">
        <div className="space-y-4">
          <h3 className="typography-body1-bold">전체 비활성화</h3>
          <RadioGroup 
            options={[
              { label: <span className="typography-body2 text-semantic-text-disabled">옵션 1</span>, value: 'option1' },
              { label: <span className="typography-body2 text-semantic-text-disabled">옵션 2</span>, value: 'option2' },
            ]}
            value={value1}
            onValueChange={setValue1}
            disabled
          />
        </div>

        <div className="space-y-4">
          <h3 className="typography-body1-bold">일부 비활성화</h3>
          <RadioGroup 
            options={[
              { label: <span className="typography-body2">활성화된 옵션 1</span>, value: 'enabled1' },
              { label: <span className="typography-body2 text-semantic-text-disabled">비활성화된 옵션</span>, value: 'disabled1', disabled: true },
              { label: <span className="typography-body2">활성화된 옵션 2</span>, value: 'enabled2' },
            ]}
            value={value2}
            onValueChange={setValue2}
          />
          <p className="typography-caption1 text-semantic-text-secondary">
            선택된 값: {value2}
          </p>
        </div>
      </div>
    )
  },
}

// 에러 상태
export const ErrorState: Story = {
  args: {
    options: [
      { label: <span className="typography-body2">이용약관에 동의합니다</span>, value: 'agree' },
      { label: <span className="typography-body2">이용약관에 동의하지 않습니다</span>, value: 'disagree' },
    ],
    required: true,
  },
  render: () => {
    const [value, setValue] = useState('')
    
    return (
      <div className="space-y-4">
        <h3 className="typography-body1-bold">필수 선택 항목</h3>
        <RadioGroup 
          options={[
            { label: <span className="typography-body2">이용약관에 동의합니다</span>, value: 'agree' },
            { label: <span className="typography-body2">이용약관에 동의하지 않습니다</span>, value: 'disagree' },
          ]}
          value={value}
          onValueChange={setValue}
          aria-invalid={!value}
        />
        {!value && (
          <p className="typography-caption1 text-semantic-error">
            이용약관 동의는 필수입니다
          </p>
        )}
        <p className="typography-caption1 text-semantic-text-secondary">
          선택된 값: {value || '없음'}
        </p>
      </div>
    )
  },
}

// 복잡한 레이블
export const ComplexLabels: Story = {
  args: {
    options: [
      { 
        label: (
          <div className="flex-1 p-3 border border-semantic-border rounded-lg hover:bg-palette-gray-100">
            <div className="typography-body2-bold">베이직 플랜</div>
            <p className="typography-caption1 text-semantic-text-secondary mt-1">
              월 ₩9,900 • 기본 기능 • 5GB 저장공간
            </p>
          </div>
        ), 
        value: 'basic' 
      },
    ],
    direction: 'vertical',
  },
  render: () => {
    const [value, setValue] = useState('pro')
    
    return (
      <div className="space-y-4">
        <h3 className="typography-body1-bold">구독 플랜 선택</h3>
        <RadioGroup 
          options={[
            { 
              label: (
                <div className="flex-1 p-3 border border-semantic-border rounded-lg hover:bg-palette-gray-100">
                  <div className="typography-body2-bold">베이직 플랜</div>
                  <p className="typography-caption1 text-semantic-text-secondary mt-1">
                    월 ₩9,900 • 기본 기능 • 5GB 저장공간
                  </p>
                </div>
              ), 
              value: 'basic' 
            },
            { 
              label: (
                <div className="flex-1 p-3 border border-semantic-border rounded-lg hover:bg-palette-gray-100">
                  <div className="typography-body2-bold">프로 플랜</div>
                  <p className="typography-caption1 text-semantic-text-secondary mt-1">
                    월 ₩19,900 • 모든 기능 • 100GB 저장공간 • 우선 지원
                  </p>
                </div>
              ), 
              value: 'pro' 
            },
            { 
              label: (
                <div className="flex-1 p-3 border border-semantic-border rounded-lg hover:bg-palette-gray-100">
                  <div className="typography-body2-bold">엔터프라이즈 플랜</div>
                  <p className="typography-caption1 text-semantic-text-secondary mt-1">
                    월 ₩49,900 • 모든 기능 • 무제한 저장공간 • 전용 지원 • 고급 보안
                  </p>
                </div>
              ), 
              value: 'enterprise' 
            },
          ]}
          value={value}
          onValueChange={setValue}
          direction="vertical"
        />
        <p className="typography-caption1 text-semantic-text-secondary">
          선택된 값: {value}
        </p>
      </div>
    )
  },
}

// 모든 상태를 보여주는 종합 스토리
export const AllStates: Story = {
  args: {
    options: [
      { label: <span className="typography-body2">선택되지 않은 옵션</span>, value: 'option1' },
      { label: <span className="typography-body2">선택된 옵션</span>, value: 'option2' },
    ],
  },
  render: () => {
    const [basicValue, setBasicValue] = useState('option2')
    const [horizontalValue, setHorizontalValue] = useState('horizontal2')
    const [errorValue, setErrorValue] = useState('')
    const [disabledValue, setDisabledValue] = useState('disabled2')
    
    return (
      <div className="space-y-8 max-w-2xl">
        <section>
          <h3 className="typography-headline3-bold mb-4">기본 상태</h3>
          <RadioGroup 
            options={[
              { label: <span className="typography-body2">선택되지 않은 옵션</span>, value: 'option1' },
              { label: <span className="typography-body2">선택된 옵션</span>, value: 'option2' },
            ]}
            value={basicValue}
            onValueChange={setBasicValue}
          />
        </section>

        <section>
          <h3 className="typography-headline3-bold mb-4">포커스 상태</h3>
          <p className="typography-caption1 text-semantic-text-secondary mb-3">
            라디오 버튼을 클릭하거나 Tab 키로 포커스하면 녹색 테두리와 링이 나타납니다
          </p>
          <RadioGroup 
            options={[
              { label: <span className="typography-body2">포커스 가능한 옵션 1</span>, value: 'focus1' },
              { label: <span className="typography-body2">포커스 가능한 옵션 2</span>, value: 'focus2' },
            ]}
            value=""
            onValueChange={() => {}}
          />
        </section>

        <section>
          <h3 className="typography-headline3-bold mb-4">에러 상태</h3>
          <RadioGroup 
            options={[
              { label: <span className="typography-body2">에러 상태 옵션 1</span>, value: 'error1' },
              { label: <span className="typography-body2">에러 상태 옵션 2</span>, value: 'error2' },
            ]}
            value={errorValue}
            onValueChange={setErrorValue}
            aria-invalid={true}
          />
          <p className="typography-caption1 text-semantic-error mt-2">
            에러 상태를 표시합니다
          </p>
        </section>

        <section>
          <h3 className="typography-headline3-bold mb-4">비활성화 상태</h3>
          <RadioGroup 
            options={[
              { label: <span className="typography-body2 text-semantic-text-disabled">비활성화된 옵션 1</span>, value: 'disabled1' },
              { label: <span className="typography-body2 text-semantic-text-disabled">비활성화된 옵션 2 (선택됨)</span>, value: 'disabled2' },
            ]}
            value={disabledValue}
            onValueChange={setDisabledValue}
            disabled
          />
          <p className="typography-caption1 text-semantic-text-secondary mt-2">
            회색으로 표시되며 클릭할 수 없습니다
          </p>
        </section>

        <section>
          <h3 className="typography-headline3-bold mb-4">가로 레이아웃</h3>
          <RadioGroup 
            options={[
              { label: <span className="typography-body2">옵션 1</span>, value: 'horizontal1' },
              { label: <span className="typography-body2">옵션 2</span>, value: 'horizontal2' },
              { label: <span className="typography-body2">옵션 3</span>, value: 'horizontal3' },
            ]}
            value={horizontalValue}
            onValueChange={setHorizontalValue}
            direction="horizontal"
          />
        </section>
      </div>
    )
  },
  parameters: {
    docs: {
      description: {
        story: 'RadioGroup 컴포넌트의 모든 상태를 한 번에 확인할 수 있습니다. 각 상태별로 적절한 시맨틱 컬러가 적용된 것을 확인할 수 있습니다.',
      },
    },
  },
}

// 시맨틱 컬러 정보
export const SemanticColors: Story = {
  args: {
    options: [
      { label: <span className="typography-body2">일반 옵션</span>, value: 'demo1' },
      { label: <span className="typography-body2">비활성화 옵션 1</span>, value: 'disabled-demo1' },
      { label: <span className="typography-body2">비활성화 옵션 2</span>, value: 'disabled-demo2' },
    ],
  },
  render: () => {
    const [normalValue, setNormalValue] = useState('demo1')
    const [disabledValue, setDisabledValue] = useState('disabled-demo1')
    
    return (
      <div className="space-y-6">
        <h3 className="typography-headline3-bold mb-4">RadioGroup 컴포넌트에 적용된 시맨틱 컬러</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div>
              <h4 className="typography-body1-bold mb-3">기본 상태</h4>
              <div className="space-y-2 typography-caption1">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-semantic-border border border-semantic-border rounded-full"></div>
                  <span>테두리: semantic-border (#171717)</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-semantic-text-primary rounded"></div>
                  <span>텍스트: semantic-text-primary (#171717)</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="typography-body1-bold mb-3">포커스 상태</h4>
              <div className="space-y-2 typography-caption1">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-semantic-primary rounded-full"></div>
                  <span>테두리: semantic-primary (#51B848)</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-semantic-primary/20 rounded-full"></div>
                  <span>링: semantic-primary/20</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="typography-body1-bold mb-3">선택된 상태</h4>
              <div className="space-y-2 typography-caption1">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-semantic-primary rounded-full"></div>
                  <span>인디케이터: semantic-primary (#51B848)</span>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <h4 className="typography-body1-bold mb-3">비활성화 상태</h4>
              <div className="space-y-2 typography-caption1">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-semantic-text-disabled border border-semantic-text-disabled rounded-full"></div>
                  <span>테두리 & 텍스트: semantic-text-disabled (#d4d7d4)</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h4 className="typography-body1-bold">실제 적용 예시</h4>
          <div className="flex gap-8">
            <div className="space-y-3">
              <p className="typography-body2-bold">정상 상태</p>
              <RadioGroup 
                options={[
                  { label: <span className="typography-body2">일반 옵션</span>, value: 'demo1' },
                  { label: <span className="typography-body2">다른 옵션</span>, value: 'demo2' },
                ]}
                value={normalValue}
                onValueChange={setNormalValue}
              />
            </div>

            <div className="space-y-3">
              <p className="typography-body2-bold">비활성화 상태</p>
              <RadioGroup 
                options={[
                  { label: <span className="typography-body2 text-semantic-text-disabled">비활성화 옵션 1</span>, value: 'disabled-demo1' },
                  { label: <span className="typography-body2 text-semantic-text-disabled">비활성화 옵션 2</span>, value: 'disabled-demo2' },
                ]}
                value={disabledValue}
                onValueChange={setDisabledValue}
                disabled
              />
            </div>
          </div>
        </div>
      </div>
    )
  },
  parameters: {
    docs: {
      description: {
        story: 'RadioGroup 컴포넌트에 적용된 시맨틱 컬러들을 시각적으로 확인할 수 있습니다. 각 상태별로 사용된 색상과 그 의미를 파악할 수 있습니다.',
      },
    },
  },
}

// 사용 예시 스토리
export const UsageExamples: Story = {
  args: {
    options: [
      { label: <span className="typography-body2">모든 알림 받기</span>, value: 'all' },
      { label: <span className="typography-body2">중요한 알림만 받기</span>, value: 'important' },
      { label: <span className="typography-body2">알림 받지 않기</span>, value: 'none' },
    ],
  },
  render: () => {
    const [notificationValue, setNotificationValue] = useState('all')
    const [languageValue, setLanguageValue] = useState('ko')
    const [shippingValue, setShippingValue] = useState('standard')
    
    return (
      <div className="space-y-8 max-w-lg">
        <div className="space-y-4">
          <h3 className="typography-headline3-bold">설정 폼</h3>
          <form className="space-y-6">
            <div>
              <label className="typography-body1-bold block mb-3">알림 설정</label>
              <RadioGroup 
                options={[
                  { label: <span className="typography-body2">모든 알림 받기</span>, value: 'all' },
                  { label: <span className="typography-body2">중요한 알림만 받기</span>, value: 'important' },
                  { label: <span className="typography-body2">알림 받지 않기</span>, value: 'none' },
                ]}
                value={notificationValue}
                onValueChange={setNotificationValue}
              />
            </div>

            <div>
              <label className="typography-body1-bold block mb-3">언어 설정</label>
              <RadioGroup 
                options={[
                  { label: <span className="typography-body2">한국어</span>, value: 'ko' },
                  { label: <span className="typography-body2">English</span>, value: 'en' },
                  { label: <span className="typography-body2">日本語</span>, value: 'ja' },
                ]}
                value={languageValue}
                onValueChange={setLanguageValue}
                direction="horizontal"
              />
            </div>
          </form>
        </div>

        <div className="space-y-4">
          <h3 className="typography-headline3-bold">주문 폼</h3>
          <form className="space-y-6">
            <div>
              <label className="typography-body1-bold block mb-3">배송 방법</label>
              <RadioGroup 
                options={[
                  { label: <span className="typography-body2">일반 배송 (2-3일) - 무료</span>, value: 'standard' },
                  { label: <span className="typography-body2">빠른 배송 (1일) - ₩3,000</span>, value: 'express' },
                  { label: <span className="typography-body2">당일 배송 - ₩5,000</span>, value: 'same-day' },
                ]}
                value={shippingValue}
                onValueChange={setShippingValue}
              />
            </div>
          </form>
        </div>
      </div>
    )
  },
  parameters: {
    docs: {
      description: {
        story: '실제 사용 상황에서의 RadioGroup 활용 예시입니다. 폼과 설정 화면에서 자주 사용됩니다.',
      },
    },
  },
}