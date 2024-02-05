import data from 'src/config/data'
import styles from 'src/components/Header/index.module.css'
import { Button } from 'src/components/Button'
import { Menu } from 'src/components/Menu'
import { useDarkModeState } from 'src/states/useDarkModeState'
import { useUiState } from 'src/states/useUiState'
import Link from 'next/link'

export function Header() {
  const { isDarkMode, toggleDarkModeSate } = useDarkModeState()
  const { toggleMenuState } = useUiState()

  const handleMenuButtonClick = (isShow: boolean) => {
    toggleMenuState(isShow)
  }

  return (
    <>
      <header className={[styles.Header, isDarkMode ? styles.isDark : '', ''].join(' ')}>
        <h1 className={[styles.Heading, isDarkMode ? styles.isDark : ''].join(' ')}>
          <Link href='/'>{data.site_name}</Link>
        </h1>
        <div className={[styles.Buttons].join(' ')}>
          <Button className='Mode' onClick={toggleDarkModeSate} ariaLabel='Mode' />
          <Button
            className='Menu'
            onClick={() => {
              handleMenuButtonClick(true)
            }}
            ariaLabel='Menu'
          />
        </div>
      </header>
      <Menu />
    </>
  )
}
