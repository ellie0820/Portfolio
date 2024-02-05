import data from 'src/config/data'
import styles from 'src/components/Footer/index.module.css'
import { useDarkModeState } from 'src/states/useDarkModeState'
import Link from 'next/link'

interface Props {
  detailId?: string
}

interface BreadcrumbsProps {
  detailId?: string
}

export function Footer({ detailId }: Props) {
  const { isDarkMode } = useDarkModeState()

  return (
    <footer className={[styles.Footer, isDarkMode ? styles.isDark : ''].join(' ')}>
      {!!detailId && <Breadcrumbs detailId={detailId} />}
      <div className={[styles.Footer_Container, isDarkMode ? styles.isDark : ''].join(' ')}>
        <span className={[styles.CopyRight, isDarkMode ? styles.isDark : ''].join(' ')}>
          {data.copyright}
        </span>
      </div>
    </footer>
  )
}

export function Breadcrumbs({ detailId }: BreadcrumbsProps) {
  const { isDarkMode } = useDarkModeState()
  return (
    <ul className={[styles.Breadcrumbs, isDarkMode ? styles.isDark : ''].join(' ')}>
      <li className={[styles.BreadcrumbItem, isDarkMode ? styles.isDark : ''].join(' ')}>
        <Link href='/'>TOP</Link>
      </li>
      <li className={[styles.BreadcrumbItem, isDarkMode ? styles.isDark : ''].join(' ')}>
        <Link href='/'>{data.portfolio.heading}</Link>
      </li>
      <li className={[styles.BreadcrumbItem, isDarkMode ? styles.isDark : ''].join(' ')}>
        <span className={[styles.BreadcrumbItem_Number].join(' ')}>{`#${detailId}`}</span>
        {data.portfolio.items
          .filter((item) => item.id === detailId)
          .map((item, index) => {
            return item.contents
              .filter((content) => content.id === 'project' || content.id === 'site')
              .map((content, index) => {
                return <span key={index}>{content.text}</span>
              })
          })}
      </li>
    </ul>
  )
}
