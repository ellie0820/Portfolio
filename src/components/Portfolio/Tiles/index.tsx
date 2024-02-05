import styles from 'src/components/Portfolio/Tiles/index.module.css'
import { useDarkModeState } from 'src/states/useDarkModeState'
import Image from 'next/image'
import Link from 'next/link'
import { useActiveTags } from 'src/states/useActiveTags'

interface Props {
  items: ItemProps[]
}

interface ItemProps {
  id: string
  imageName?: string
  contents: ContentProps[]
}

interface ContentProps {
  body?: string
  href?: string
  tags?: string[]
}

export function Tiles({ items }: Props) {
  const { isDarkMode } = useDarkModeState()

  return (
    <ul className={[styles.Tiles, ''].join(' ')}>
      {items.map((item: ItemProps, index) => {
        return (
          <li
            key={index}
            className={[
              styles.TileItem,
              styles[`TileItem${index + 1}`],
              index === 0 || index === 3 || index === 6 || index === 9
                ? styles.Large
                : styles.Small,
              isDarkMode ? styles.isDark : '',
              '',
            ].join(' ')}
          >
            <Link href={`Portfolio/${item.id}`}>
              <div className={[styles.TileItem_Container].join(' ')}>
                <div className={[styles.TileItem_Number].join(' ')}>#{item.id}</div>
                <Image
                  className={[styles.TileItem_Thumb].join(' ')}
                  src={item.imageName ? `/thumbs/${item.imageName}.jpg` : `/thumbs/${item.id}.jpg`}
                  alt=''
                  width='100%'
                  height='100%'
                  layout={'responsive'}
                />
              </div>
            </Link>
          </li>
        )
      })}
    </ul>
  )
}
