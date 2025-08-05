import { ComprehensiveColorStoryDefinition, SingleColorStoryDefinition } from "../type"

type Props = Pick<SingleColorStoryDefinition, 'colors'> | Pick<ComprehensiveColorStoryDefinition, 'render'>
  
export const StoryDefinitionWidget = (props: Props) => {

  if ('colors' in props) {
    const { colors } = props
    return (
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {colors.map((colorSwatch) => (
            <div key={colorSwatch.name} className="border border-semantic-border rounded-lg overflow-hidden">
              <div 
                className="w-full h-20" 
                style={{ backgroundColor: colorSwatch.color }}
              ></div>
              <div className="p-4">
                <h4 className="typography-body1-bold mb-1">{colorSwatch.name}</h4>
                <p className="typography-caption1 text-semantic-text-secondary mb-2">
                  {colorSwatch.description}
                </p>
                <div className="space-y-1">
                  <div className="typography-caption2 font-mono text-semantic-text-secondary">
                    {colorSwatch.color}
                  </div>
                  {colorSwatch.tailwindClass && (
                    <div className="typography-caption2 font-mono text-semantic-text-secondary">
                      {colorSwatch.tailwindClass}
                    </div>
                  )}
                  {colorSwatch.cssVar && (
                    <div className="typography-caption2 font-mono text-semantic-text-secondary">
                      {colorSwatch.cssVar}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-8">
          <h3 className="typography-headline3-bold mb-4">Color Strip</h3>
          <div className="flex h-16 rounded-lg overflow-hidden border border-semantic-border">
            {colors.map((colorSwatch) => (
              <div 
                key={colorSwatch.name}
                className="flex-1 relative group cursor-pointer"
                style={{ backgroundColor: colorSwatch.color }}
                title={`${colorSwatch.name} - ${colorSwatch.color}`}
              >
                <div className="absolute inset-0 bg-opacity-0 group-hover:bg-opacity-10 transition-all flex items-center justify-center">
                  <span className="typography-caption2 text-white opacity-0 group-hover:opacity-100 transition-opacity font-semibold drop-shadow">
                    {colorSwatch.name.split(' ')[1] || colorSwatch.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }

  if ('render' in props) {
    const { render } = props
    return render()
  }

  return null
}