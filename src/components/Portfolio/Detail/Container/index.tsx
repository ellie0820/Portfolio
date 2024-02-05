import styles from 'src/components/Portfolio/Detail/Container/index.module.css'
import { Button } from 'src/components/Button'
import { Hero } from 'src/components/Portfolio/Detail/Hero'
import { Description } from 'src/components/Portfolio/Detail/Description'
import { useMediaQuery } from 'src/hooks/useMediaQuery'
import { useState } from 'react'

interface Props {
  detailId?: string
}

export function Container({ detailId }: Props) {
  const { isDesktop, isMobile, Desktop, Mobile } = useMediaQuery()
  const [isContainerShow, toggleContainerState] = useState(true)
  const handleShow = (isShow: boolean) => {
    toggleContainerState(isShow)
  }

  return (
    <div className={[styles.Wrapper].join(' ')}>
      <div className={[styles.Container].join(' ')}>
        <div className={[styles.Buttons].join(' ')}>
          {isDesktop && isContainerShow && (
            <Button ariaLabel='非表示' className='Invisible' onClick={() => handleShow(false)} />
          )}
          {isDesktop && !isContainerShow && (
            <Button ariaLabel='表示' className='Visible' onClick={() => handleShow(true)} />
          )}
        </div>
        <Hero detailId={detailId} />
        {(isDesktop && isContainerShow) || isMobile ? <Description detailId={detailId} /> : ''}
      </div>
    </div>
  )
}
