# Sample Design System

컴포넌트 기반 디자인 시스템으로 재사용 가능한 UI 컴포넌트를 제공합니다.

## 활용한 도구

- **Next.js 15** - React 프레임워크
- **React 19** - UI 라이브러리
- **TypeScript 5** - 타입 안전성
- **Tailwind CSS 4** - 유틸리티 기반 CSS 프레임워크
  - **Class Variance Authority** - 조건부 클래스 생성
  
- **Storybook 9** - 컴포넌트 문서화 및 개발
- **Shadcn/ui** - Radix UI 기반의 헤드리스 컴포넌트
- **Lucide React** - 아이콘 라이브러리
- **Vitest** - 테스트 프레임워크

## 디자인 토큰

### 컬러 시스템

#### Palette Colors
```tsx
// 기본 컬러 팔레트 (각 색상별 100-1000 스케일)
green: { 100: '#f1f8f2', 500: '#51B848', 1000: '#1a3e19' }
blue: { 100: '#eff6ff', 500: '#2563eb', 1000: '#172554' }
red: { 100: '#fef2f2', 500: '#E03A3A', 1000: '#5b1313' }
yellow: { 100: '#fefdf7', 500: '#FFEB00', 1000: '#807a00' }
gray: { 100: '#F9FAF9', 600: '#5A5D5D', 800: '#2F2F2F' }
static: { black: '#000000', white: '#FFFFFF' }
```

#### Semantic Colors
```tsx
primary: '#51B848'     // 주요 액션 (Green 500)
secondary: '#b8bdb8'   // 보조 액션 (Gray 500)
success: '#2563eb'     // 성공 상태 (Blue 500)
warning: '#FFEB00'     // 경고 상태 (Yellow 500)
error: '#E03A3A'       // 오류 상태 (Red 500)
background: '#F9FAF9'  // 배경색 (Gray 100)
```

#### Text Colors
```tsx
text: {
  primary: '#171717',    // 주요 텍스트 (Gray 1000)
  secondary: '#2F2F2F',  // 보조 텍스트 (Gray 800)
  disabled: '#d4d7d4',   // 비활성화 텍스트 (Gray 400)
  black: '#000000',      // 순수 검정
  white: '#FFFFFF'       // 순수 흰색
}
```

### 타이포그래피 시스템

#### Typography Tokens
```tsx
fontSize: {
  t1: '11px', t2: '12px', t3: '13px', t4: '14px', t5: '16px',
  t6: '18px', t7: '20px', t8: '22px', t9: '24px', t10: '26px'
}

fontWeight: {
  regular: '400',
  medium: '500', 
  bold: '700'
}
```

#### Typography Variants
```tsx
// Tailwind 클래스로 사용 가능
.typography-headline1      // 26px, bold
.typography-headline2      // 24px, bold  
.typography-headline3      // 22px, bold
.typography-body1          // 16px, regular
.typography-body2          // 14px, regular
.typography-caption1       // 12px, regular
.typography-caption2       // 11px, regular
```

## 컬러 사용법

### Tailwind CSS 클래스

```tsx
// Palette 컬러
<div className="bg-palette-green-500 text-palette-static-white">
<div className="bg-palette-gray-100 text-palette-gray-800">

// Semantic 컬러  
<div className="bg-semantic-primary text-semantic-text-white">
<div className="bg-semantic-error text-semantic-text-white">

// 텍스트 컬러
<p className="text-semantic-text-primary">주요 텍스트</p>
<p className="text-semantic-text-secondary">보조 텍스트</p>
```


## 컴포넌트

### Button
8가지 시맨틱 variant를 지원하는 버튼 컴포넌트

```tsx
import { Button } from '@/components/ui/Button/Button'

<Button variant="primary">Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="tertiary">Tertiary</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="danger">Danger</Button>
<Button variant="link">Link</Button>
<Button variant="success">Success</Button>
<Button variant="warning">Warning</Button>

// 크기 옵션
<Button size="sm">Small</Button>
<Button size="md">Medium</Button>
<Button size="lg">Large</Button>
<Button size="icon">Icon</Button>
```

### Input
폼 입력을 위한 텍스트 필드 컴포넌트

```tsx
import { Input } from '@/components/ui/Input/Input'

<Input placeholder="입력하세요" />
<Input type="email" placeholder="이메일" />
<Input type="password" placeholder="비밀번호" />
<Input disabled placeholder="비활성화" />
```

### Checkbox
라벨과 설명을 지원하는 체크박스 컴포넌트

```tsx
import { Checkbox } from '@/components/ui/CheckBox/CheckBox'

<Checkbox />
<Checkbox label="동의합니다" />
<Checkbox 
  label="이용약관 동의" 
  description="서비스 이용을 위해 필요합니다" 
/>
```

### RadioGroup
옵션 목록을 제공하는 라디오 버튼 그룹

```tsx
import { RadioGroup } from '@/components/ui/RadioGroup/RadioGroup'

<RadioGroup
  options={[
    { label: '옵션 1', value: 'option1' },
    { label: '옵션 2', value: 'option2' },
    { label: '비활성화', value: 'option3', disabled: true }
  ]}
  direction="vertical" // 또는 "horizontal"
/>
```

## 개발 환경

### 설치 및 실행

```bash
# 의존성 설치
pnpm install

# 개발 서버 실행
pnpm run dev

# 빌드
pnpm run build

# Storybook 개발 서버 실행
npm run storybook

# Storybook 빌드
npm run build-storybook
```

## 프로젝트 구조

```
src/
├── app/                    # Next.js App Router
│   ├── globals.css         # 전역 CSS
│   ├── layout.tsx          # 루트 레이아웃
│   └── page.tsx            # 메인 페이지
├── components/
│   └── ui/                 # UI 컴포넌트
│       ├── Button/
│       │   ├── Button.tsx  # 컴포넌트
│       │   └── stories/    # 해당 컴포넌트의 스토리북 문서
│       ├── CheckBox/
│       │   ├── CheckBox.tsx
│       │   └── stories/
│       ├── Input/
│       │   ├── Input.tsx
│       │   └── stories/
│       └── RadioGroup/
│           ├── RadioGroup.tsx
│           └── stories/
├── foundations/           # 디자인 토큰 정보
│   ├── colors.ts          # 컬러 토큰
│   └── typography.ts      # 타이포그래피 토큰
└── lib/
    └── utils.ts           # 유틸 함수

.storybook/                # Storybook 세팅
├── main.ts
├── preview.ts
└── vitest.setup.ts

.vscode/                   # 워크스페이스 종속 에디터 룰
├── settings.json
├── preview.ts
└── vitest.setup.ts
```

## 🧪 테스트

- **Vitest**: 컴포넌트 단위 테스트
- **Playwright**: 브라우저 테스트  
- **Storybook Addon A11y**: 접근성 테스트
- **Storybook Addon Vitest**: Storybook 내 테스트 실행

## 🔧 설정 파일

- `tailwind.config.js`: Tailwind CSS 설정 (컬러/타이포그래피 토큰 포함)
- `components.json`: shadcn/ui 설정 (New York 스타일)
- `vitest.config.ts`: 테스트 설정
- `tsconfig.json`: TypeScript 설정

## 📚 기여 가이드

1. 새로운 컴포넌트 추가 시 `src/components/ui/` 하위에 폴더 생성
2. 각 컴포넌트마다 Storybook stories 파일 작성
3. 디자인 토큰은 `src/foundations/` 에서 관리
4. 모든 컴포넌트는 Radix UI 기반으로 접근성 고려
5. Class Variance Authority로 variant 관리

---

> 이 디자인 시스템은 일관성, 재사용성, 접근성을 중심으로 설계되었습니다.