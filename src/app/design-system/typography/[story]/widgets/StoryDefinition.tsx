import { ComprehensiveStoryDefinition, SingleStoryDefinition } from "../type"

type Props = Pick<SingleStoryDefinition, 'name' | 'description' | 'className'> | Pick<ComprehensiveStoryDefinition, 'render'>
  
export const StoryDefinitionWidget = (props: Props) => {

  if ('className' in props) {
    const { className, name, description } = props
    return (
      <span className={className}>
        {name} - {description}
      </span>
    )
  }

  if ('render' in props) {
    const { render } = props
    return render()
  }

  return null
}