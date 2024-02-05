import data from 'src/config/data'
// import Image from 'next/image'
import styles from 'src/components/Movie/index.module.css'
import { useMediaQuery } from 'src/hooks/useMediaQuery'

export function Movie() {
  const { isDesktop, isMobile, Desktop, Mobile } = useMediaQuery()
  return (
    <div>
      <video
        className={[styles.movie].join(' ')}
        src='/movie-12.mp4'
        autoPlay
        loop
        muted
        playsInline
      ></video>
    </div>
  )
}
