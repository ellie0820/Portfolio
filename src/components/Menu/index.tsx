import data from 'src/config/data'
import styles from 'src/components/Menu/index.module.css'
import { Button } from 'src/components/Button'
import { useUiState } from 'src/states/useUiState'
import { useDarkModeState } from 'src/states/useDarkModeState'
import { useRouter } from 'next/router'
import Link from 'next/link'

interface Props {
  id: string
  contents: ContentProps[]
}

interface ContentProps {
  id: string
  text?: string
  href?: string
  tags?: string[]
}

export function Menu() {
  const { isDarkMode, toggleDarkModeSate } = useDarkModeState()
  const { isMenuShow, toggleMenuState } = useUiState()
  const handleShow = (isShow: boolean) => {
    toggleMenuState(isShow)
  }

  return (
    <>
      <nav
        className={[
          styles.Menu,
          isMenuShow ? styles.isShow : '',
          isDarkMode ? styles.isDark : '',
        ].join(' ')}
      >
        <div className={[styles.Buttons].join(' ')}>
          <Button
            className='Cancel'
            onClick={() => {
              handleShow(false)
            }}
            ariaLabel='Close Button'
          />
        </div>
        <h2 className={[styles.Heading].join(' ')}>
          <Link href='/'>{data.portfolio.heading}</Link>
        </h2>
        <ul className={[styles.Lists, ''].join(' ')}>
          {data.portfolio.items.map((item, index) => {
            return (
              <li key={index} className={[styles.ListItem, ''].join(' ')}>
                <Item item={item} />
              </li>
            )
          })}
        </ul>
        <h2 className={[styles.Heading].join(' ')}>
          <Link href='/'>{data.about.heading}</Link>
        </h2>
      </nav>
      <div
        className={[
          styles.Overlay,
          isDarkMode ? styles.isDark : '',
          isMenuShow ? styles.isShow : '',
          '',
        ].join(' ')}
        onClick={() => handleShow(false)}
      ></div>
    </>
  )
}

export function Item({ item }: { item: Props }) {
  const router = useRouter()
  const { toggleMenuState } = useUiState()
  const handleClickLink = () => {
    toggleMenuState(false)
    router.push('/Portfolio/' + item.id)
  }
  return (
    <a onClick={() => handleClickLink()}>
      <div className={[styles.Detail_Heading].join(' ')}>
        <div className={[styles.Detail_Number].join(' ')}>#{item.id}</div>
        {item.contents
          .filter((content) => content.id === 'project' || content.id === 'site')
          .map((content, index) => {
            return (
              <div className={[styles.Detail_Name].join(' ')} key={index}>
                {content.text}
              </div>
            )
          })}
      </div>
    </a>
  )
}
