import { atom, useRecoilState } from 'recoil'

interface DarkModeState {
  isDarkMode: boolean
  toggleDarkModeSate: () => void
  toggleMenuState: (isOpen: boolean) => void
}

export const isDarkModeState = atom({
  key: 'isDarkModeState',
  default: true,
})

export const useDarkModeState = (): DarkModeState => {
  const [isDarkMode, setDarkMode] = useRecoilState<boolean>(isDarkModeState)

  const toggleDarkModeSate = () => {
    setDarkMode((prev: boolean) => !prev)
  }

  const toggleMenuState = (isOpen: boolean) => {
    // ここにメニューの状態を更新するロジックを追加
  }

  return {
    isDarkMode,
    toggleDarkModeSate,
    toggleMenuState,
  }
}
