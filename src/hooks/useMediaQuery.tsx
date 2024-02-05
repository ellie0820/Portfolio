import { ReactElement } from 'react'
import { useWindowSize } from './useWindowSize'

export const useMediaQuery = () => {
  const [width] = useWindowSize()
  console.log(width)

  const isDesktop = width >= 813
  const isMobile = width < 813
  console.log(isDesktop)
  const Desktop = ({ children }: { children: ReactElement }) => {
    return isDesktop ? children : null
  }
  const Mobile = ({ children }: { children: ReactElement }) => {
    return isMobile ? children : null
  }
  return { isDesktop, isMobile, Desktop, Mobile }
}
