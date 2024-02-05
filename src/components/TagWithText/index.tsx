import styles from 'src/components/TagWithText/index.module.css'
import { useActiveTags } from 'src/states/useActiveTags'
import { useDarkModeState } from 'src/states/useDarkModeState'

interface Props {
  id: string
  className?: string
  text: string
  type?: 'Button' | null
  onClick?(): void
}

export function TagWithText({ id, className, text, type, onClick }: Props) {
  const { isDarkMode } = useDarkModeState()
  const { activeTags, updateActiveTags } = useActiveTags()
  const toggleIsActive = () => {
    updateActiveTags(id)
    onClick && onClick()
  }

  const isActive = activeTags.includes(id)

  if (type === 'Button') {
    return (
      <button
        className={[
          styles.TagWithText,
          styles.Button,
          isDarkMode ? styles.isDark : '',
          className && styles[className],
          isActive && styles.isActive,
          id === 'responsive' &&
            (activeTags.includes('desktop') || activeTags.includes('mobile')) &&
            styles.isInActive,
          id === 'desktop' &&
            (activeTags.includes('responsive') || activeTags.includes('mobile')) &&
            styles.isInActive,
          id === 'mobile' &&
            (activeTags.includes('desktop') || activeTags.includes('responsive')) &&
            styles.isInActive,
          id === 'html' &&
            (activeTags.includes('pug') ||
              activeTags.includes('next') ||
              activeTags.includes('react') ||
              activeTags.includes('vue')) &&
            styles.isInActive,
          id === 'pug' &&
            (activeTags.includes('html') ||
              activeTags.includes('next') ||
              activeTags.includes('react') ||
              activeTags.includes('vue')) &&
            styles.isInActive,
          id === 'css' &&
            (activeTags.includes('postcss') || activeTags.includes('sass')) &&
            styles.isInActive,
          id === 'postcss' &&
            (activeTags.includes('css') || activeTags.includes('sass')) &&
            styles.isInActive,
          id === 'sass' &&
            (activeTags.includes('css') || activeTags.includes('postcss')) &&
            styles.isInActive,
          id === 'javascript' &&
            (activeTags.includes('es6') ||
              activeTags.includes('typescript') ||
              activeTags.includes('next') ||
              activeTags.includes('react') ||
              activeTags.includes('vue')) &&
            styles.isInActive,
          id === 'es6' &&
            (activeTags.includes('javascript') ||
              activeTags.includes('typescript') ||
              activeTags.includes('next') ||
              activeTags.includes('react') ||
              activeTags.includes('vue')) &&
            styles.isInActive,
          id === 'typescript' &&
            (activeTags.includes('javascript') ||
              activeTags.includes('es6') ||
              activeTags.includes('next') ||
              activeTags.includes('react') ||
              activeTags.includes('vue')) &&
            styles.isInActive,
          id === 'next' &&
            (activeTags.includes('html') ||
              activeTags.includes('pug') ||
              activeTags.includes('javascript') ||
              activeTags.includes('es6') ||
              activeTags.includes('typescript') ||
              activeTags.includes('react') ||
              activeTags.includes('vue')) &&
            styles.isInActive,
          id === 'react' &&
            (activeTags.includes('html') ||
              activeTags.includes('pug') ||
              activeTags.includes('javascript') ||
              activeTags.includes('es6') ||
              activeTags.includes('typescript') ||
              activeTags.includes('next') ||
              activeTags.includes('vue')) &&
            styles.isInActive,
          id === 'vue' &&
            (activeTags.includes('html') ||
              activeTags.includes('pug') ||
              activeTags.includes('javascript') ||
              activeTags.includes('es6') ||
              activeTags.includes('typescript') ||
              activeTags.includes('next') ||
              activeTags.includes('react')) &&
            styles.isInActive,
        ].join(' ')}
        onClick={toggleIsActive}
      >
        {text}
      </button>
    )
  } else {
    return (
      <div
        className={[
          styles.TagWithText,
          className && styles[className],
          isDarkMode ? styles.isDark : '',
        ].join(' ')}
      >
        {text}
      </div>
    )
  }
}
