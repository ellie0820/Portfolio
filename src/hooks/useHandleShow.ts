import { useCallback, useState } from 'react'

export const useHandleShow = () => {
  const [isShow, setIsShow] = useState(false)

  const handleShow = useCallback(() => {
    setIsShow((prevIsShow) => !prevIsShow)
  }, [])

  return { isShow, handleShow }
}
