import setting from 'src/config/setting'
import styles from 'src/components/List/index.module.css'
import { Button } from 'src/components/Button'
import { TagWithTextGroup } from 'src/components/TagWithTextGroup'
import { convertNewlineToBr } from 'src/utility/convertNewlineToBr'

interface Props {
  id?: string
  contents: ContentProps[]
  pageType?: 'About' | 'Detail'
}

interface ContentProps {
  id: string
  text?: string
  href?: string
  lists?: ListsProps[]
  tags?: string[]
  links?: LinksProps[]
}

interface ListsProps {
  text: string
}

interface LinksProps {
  ariaLabel: string
  className: string
  href: string
}

export function List({ contents, pageType }: Props) {
  return (
    <ul className={[styles.Lists, pageType && styles[pageType], ''].join(' ')}>
      {contents.map((content, index) => {
        return (
          <li key={index} className={[styles.ListItem].join(' ')}>
            <Item content={content} />
          </li>
        )
      })}
    </ul>
  )
}

export function Item({ content }: { content: ContentProps }) {
  const matchedObjects = setting.definition.filter((item) => item.id === content.id)
  const capitalizeFirstLetter = (text: string) => {
    return text.charAt(0).toUpperCase() + text.slice(1)
  }
  return (
    <dl
      className={[
        styles.DefinitionItem,
        content.id && styles[capitalizeFirstLetter(content.id)],
        '',
      ].join(' ')}
    >
      <dt className={[styles.DefinitionItem_Heading].join(' ')}>{matchedObjects[0].text}: </dt>
      {content.text && !content.href && (
        <dd className={[styles.DefinitionItem_Body].join(' ')}>
          {convertNewlineToBr(content.text)}
        </dd>
      )}
      {content.text && content.href && (
        <dd className={[styles.DefinitionItem_Body].join(' ')}>
          <a
            href={content.href}
            className={[styles.Blank].join(' ')}
            target='_blank'
            rel='noreferrer'
          >
            {convertNewlineToBr(content.text)}
          </a>
        </dd>
      )}

      {content.lists && content.lists.length > 0 && (
        <dd>
          <ul className={[styles.SummaryItems, ''].join(' ')}>
            {content.lists?.map((item, index) => {
              return (
                <li key={index} className={[styles.SummaryItem, ''].join(' ')}>
                  {item.text}
                </li>
              )
            })}
          </ul>
        </dd>
      )}
      {content.tags && content.tags.length > 0 && (
        <dd className={[styles.DefinitionItem_Body].join(' ')}>
          <TagWithTextGroup tags={content.tags} />
        </dd>
      )}

      {content.links && content.links.length > 0 && (
        <dd>
          <ul className={[styles.Links, ''].join(' ')}>
            {content.links?.map((link, index) => {
              return (
                <li key={index} className={[styles.LinkItem, ''].join(' ')}>
                  <Button
                    ariaLabel={link.ariaLabel}
                    className={link.className}
                    href={link.href}
                    type='link'
                  />
                </li>
              )
            })}
          </ul>
        </dd>
      )}
    </dl>
  )
}
