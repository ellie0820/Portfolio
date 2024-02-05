import styles from 'src/components/Button/index.module.css'
import { useDarkModeState } from 'src/states/useDarkModeState'

interface Props {
  ariaLabel?: string
  className: string
  href?: string
  isActive?: boolean
  type?: 'button' | 'link'
  onClick?(): void
}

export function Button({ ariaLabel, className, href, isActive, type, onClick }: Props) {
  const { isDarkMode } = useDarkModeState()

  if (type === 'link') {
    return (
      <a
        className={[styles.Button, styles[className], isDarkMode ? styles.isDark : ''].join(' ')}
        href={href}
        target='_blank'
        rel='noreferrer'
        aria-label={ariaLabel}
      ></a>
    )
  } else {
    return (
      <button
        className={[
          styles.Button,
          styles[className],
          isActive && styles.isActive,
          isDarkMode ? styles.isDark : '',
        ].join(' ')}
        onClick={onClick}
        aria-label={ariaLabel}
      ></button>
    )
  }
}
