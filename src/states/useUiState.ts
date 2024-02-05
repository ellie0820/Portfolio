import { atom, useAtom } from 'jotai'

const menuDisplayAtom = atom(false)
const scrollPositionAtom = atom(0)

const useUiState = () => {
  const [isMenuShow, setMenuState] = useAtom(menuDisplayAtom)
  const [scrollY, setScrollY] = useAtom(scrollPositionAtom)
  const toggleMenuState = (isShow: boolean) => {
    setMenuState(isShow)
    if (isShow) {
      const currentScrollY = window.pageYOffset || document.documentElement.scrollTop
      setScrollY(currentScrollY)
      document.body.classList.add('isMenuShow')
      document.body.style.top = `-${currentScrollY}px`
    } else {
      //　ここは Menu.tsx にある Close Button を押した時に動くようにしたい
      document.body.classList.remove('isMenuShow')
      document.body.style.top = 'unset'
      window.scrollTo(0, scrollY)
    }
  }
  return { isMenuShow, toggleMenuState }
}
export { useUiState }
