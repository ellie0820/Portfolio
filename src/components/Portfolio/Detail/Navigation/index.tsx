import data from 'src/config/data'
import { useRouter } from 'next/router'
import styles from 'src/components/Portfolio/Detail/Navigation/index.module.css'
import { useDarkModeState } from 'src/states/useDarkModeState'

interface Props {
  detailId?: string
}

export function Navigation({ detailId }: Props) {
  const { isDarkMode } = useDarkModeState()
  const router = useRouter()

  const handleNextClick = () => {
    if (detailId) {
      const nextDetailId = parseInt(detailId) + 1
      router.push(`/Portfolio/${nextDetailId}`)
    }
  }

  const handlePrevClick = () => {
    if (detailId && parseInt(detailId) > 1) {
      const prevDetailId = parseInt(detailId) - 1
      router.push(`/Portfolio/${prevDetailId}`)
    }
  }

  const isPrevButtonVisible = detailId !== '1'
  const isNextButtonVisible = Number(detailId) !== data.portfolio.items.length

  return (
    <nav className={[styles.Navigation].join(' ')}>
      <button
        className={[
          styles.NavigationItem,
          isDarkMode ? styles.isDark : '',
          styles.Prev,
          !isPrevButtonVisible && styles.isInActive,
        ].join(' ')}
        onClick={handlePrevClick}
      ></button>
      <h1 className={[styles.Heading].join(' ')}>#{detailId}</h1>
      <button
        className={[
          styles.NavigationItem,
          isDarkMode ? styles.isDark : '',
          styles.Next,
          !isNextButtonVisible && styles.isInActive,
        ].join(' ')}
        onClick={handleNextClick}
      ></button>
    </nav>
  )
}
