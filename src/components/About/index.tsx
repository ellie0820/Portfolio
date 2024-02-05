import data from 'src/config/data'
import styles from 'src/components/About/index.module.css'
import Image from 'next/image'
import { Heading } from 'src/components/Heading'
import { List } from 'src/components/List'

export function About() {
  return (
    <section>
      <Heading heading={data.about.heading} classNames={['u-mobile-mb-m u-desktop-mb-l']} />
      <div className={[styles.Thumb, ''].join(' ')}>
        <Image src='/image-profile.jpg' width='100%' height='100%' layout={'responsive'} alt='' />
      </div>
      <div className={[styles.Body].join(' ')}>
        <List contents={data.about.contents} pageType='About' />
      </div>
    </section>
  )
}
