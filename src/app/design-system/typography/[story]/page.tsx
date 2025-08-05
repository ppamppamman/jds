import Link from 'next/link'
import { notFound } from 'next/navigation'

import { StoryDefinitionWidget as StoryDefinition, } from './widgets/StoryDefinition'

import { generateStoryDefinitionStaticParams, getStoryDefinition, getStoryDefinitions } from './util/getStoryDefinition'
import { StoryDefinitionCode } from '@/components/widgets/StoryDefinitionCode'
import { StoryDefinitionHeader } from '@/components/widgets/StoryDefinitionHeader'
import { StoryDefinitionBreadcrumbNav } from '@/components/widgets/StoryDefinitionBreadcrumbNav'

const stories = getStoryDefinitions()

export async function generateStaticParams() {
  const slugs = generateStoryDefinitionStaticParams();
  return slugs;
}

export default async function StoryPage({ params }: { params: Promise<{ story: string }> }) {
  const { renderToStaticMarkup } = await import("react-dom/server");
  const { story } = await params;
  
  const storyDefinition = getStoryDefinition(story)
  
  if (!storyDefinition) {
    notFound()
  }

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <StoryDefinitionBreadcrumbNav current={storyDefinition.name}>
        <Link href="/design-system" className="hover:text-semantic-primary">
          Design System
        </Link>
        <Link href="/design-system/typography" className="hover:text-semantic-primary">
          Typography
        </Link>
      </StoryDefinitionBreadcrumbNav>
      <StoryDefinitionHeader name={storyDefinition.name} category={storyDefinition.category} description={storyDefinition.description} />

      <div className="mb-12">
        <h2 className="typography-headline2-bold mb-6">Preview</h2>
        <div className="p-8 border border-semantic-border rounded-lg bg-semantic-bg-primary">
          <StoryDefinition {...storyDefinition} />
        </div>
      </div>

      <div className="mb-12">
        <h2 className="typography-headline2-bold mb-6">Code Example</h2>
        <div className="bg-gray-900 text-gray-100 p-6 rounded-lg overflow-x-auto">
          <pre className="text-sm">
            <StoryDefinitionCode>
              {('render' in storyDefinition) 
                ? storyDefinition.code 
                : renderToStaticMarkup(<StoryDefinition {...storyDefinition} />)
              }
            </StoryDefinitionCode>
          </pre>
        </div>
      </div>

      <div className="border-t border-semantic-border pt-8">
        <h3 className="typography-headline3-bold mb-4">다른 스토리 보기</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {stories
            .filter(s => s.id !== storyDefinition.id)
            .map((otherStory) => (
              <Link
                key={otherStory.id}
                href={`/design-system/typography/${otherStory.id}`}
                className="p-3 border border-semantic-border rounded typography-caption1-bold hover:text-semantic-primary hover:border-semantic-primary hover:bg-semantic-bg-secondary transition-all text-center"
              >
                {otherStory.name} 
              </Link>
            ))}
        </div>
      </div>
    </div>
  )
}