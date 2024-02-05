import data from 'src/config/data'
import styles from 'src/components/Portfolio/Detail/Hero/index.module.css'
import Image from 'next/image'
import { useMediaQuery } from 'src/hooks/useMediaQuery'

interface Props {
  detailId?: string
}

export function Hero({ detailId }: Props) {
  const { isDesktop, isMobile, Desktop, Mobile } = useMediaQuery()
  const portfolioItem = data.portfolio.items.find((item) => item.id === detailId)
  const imageName = portfolioItem?.imageName || detailId
  const desktopWidth = portfolioItem?.desktopWidth || '1280'
  const desktopHeight = portfolioItem?.desktopHeight || '1920'
  const mobileWidth = portfolioItem?.mobileWidth || '750'
  const mobileHeight = portfolioItem?.mobileHeight || '4002'

  return (
    <div className={[styles.Hero].join(' ')}>
      <Desktop>
        <Image
          src={`/heros/desktop/${imageName}.jpg`}
          alt=''
          width={desktopWidth}
          height={desktopHeight}
          layout={'responsive'}
        />
      </Desktop>
      <Mobile>
        <Image
          src={`/heros/mobile/${imageName}.jpg`}
          alt=''
          width={mobileWidth}
          height={mobileHeight}
          layout={'responsive'}
        />
      </Mobile>
    </div>
  )
}
