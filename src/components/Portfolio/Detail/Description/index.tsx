import data from 'src/config/data'
import styles from 'src/components/Portfolio/Detail/Description/index.module.css'
import { List } from 'src/components/List'
import { useDarkModeState } from 'src/states/useDarkModeState'

interface Props {
  detailId?: string
}

export function Description({ detailId }: Props) {
  const { isDarkMode } = useDarkModeState()

  return (
    <>
      {data.portfolio.items
        .filter((item) => item.id === detailId)
        .map((item, index) => {
          return (
            <div
              className={[styles.DescriptionWrapper, isDarkMode ? styles.isDark : ''].join(' ')}
              key={index}
            >
              <List contents={item.contents} />
            </div>
          )
        })}
    </>
  )
}
