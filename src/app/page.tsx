import { Button } from '@/components/ui/Button/Button';
import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen bg-semantic-background">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <h1 className="typography-headline1-bold text-semantic-text-primary mb-4">
            디자인 시스템
          </h1>
          <p className="typography-body1 text-semantic-text-secondary mx-auto">
            컴포넌트 기반 디자인 시스템으로 재사용 가능한 UI 컴포넌트를 제공합니다.
            Next.js, TypeScript, TailwindCSS 를 활용했습니다.
          </p>
        </div>

        <div className="grid gap-8 mb-12">
          <div className="bg-semantic-text-white rounded-lg p-8 shadow-sm border border-semantic-border">
            <h2 className="typography-headline2-bold text-semantic-text-primary mb-4">
              # Design System
            </h2>
            <p className="typography-body2 text-semantic-text-secondary mb-6">
              재사용 가능한 UI 컴포넌트들과 디자인 토큰을 확인할 수 있습니다.
              Typography, Button, Input, Checkbox, RadioGroup 등의 컴포넌트가 포함되어 있습니다.
            </p>
            <Link 
              href="/design-system"
              className="inline-flex items-center px-6 py-3 bg-semantic-primary text-semantic-text-white typography-body1-medium rounded-lg hover:bg-semantic-primary/90 transition-colors"
            >
              Design System 문서 보기 →
            </Link>
          </div>

          <div className="bg-semantic-text-white rounded-lg p-8 shadow-sm border border-semantic-border">
            <h2 className="typography-headline2-bold text-semantic-text-primary mb-4">
              # Storybook 
              <Button variant="link" asChild>
                <a href="https://jds-storybook.vercel.app/" target="_blank">
                  Storybook 문서 보기 →
                </a>
              </Button>
            </h2>
            <p className="typography-body2 text-semantic-text-secondary mb-6">
              모든 컴포넌트의 상세한 예시와 문서를 Storybook에서 확인할 수 있습니다.
              다양한 variant와 상태를 인터랙티브하게 테스트해보세요.
            </p>
            <div className="space-y-4">
              <code className="block bg-palette-gray-100 px-4 py-3 rounded typography-body2 text-semantic-text-primary">
                pnpm run storybook
              </code>
              <p className="typography-caption1 text-semantic-text-secondary">
                프로젝트를 내려받은 후 위 명령어로 Storybook 개발 서버를 실행할 수 있습니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
