import setting from 'src/config/setting'
import styles from 'src/components/TagWithTextGroup/index.module.css'
import { TagWithText } from 'src/components/TagWithText'

interface Props {
  tags: string[]
  type?: 'Button' | null
  onFilterButtonClick?(filterId: string): void
}

export function TagWithTextGroup({ tags, type, onFilterButtonClick }: Props) {
  return (
    <ul className={[styles.Lists, ''].join(' ')}>
      {tags &&
        tags.map((tagId, index) => {
          const tag = setting.tagWithText.find((t) => t.id === tagId)

          if (tag) {
            return (
              <li key={index} className={[styles.ListItem].join(' ')}>
                <TagWithText
                  text={tag.text}
                  className={tag.className}
                  id={tag.id}
                  type={type}
                  onClick={() => onFilterButtonClick && onFilterButtonClick(tag.id)}
                />
              </li>
            )
          }

          return null
        })}
    </ul>
  )
}
