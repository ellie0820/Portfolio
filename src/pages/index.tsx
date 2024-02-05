import Head from 'next/head'
import data from 'src/config/data'
import styles from 'src/styles/Top.module.css'
import { Header } from 'src/components/Header'
import { Footer } from 'src/components/Footer'
import { About } from 'src/components/About'
import { Portfolio } from 'src/components/Portfolio'
import { useDarkModeState } from 'src/states/useDarkModeState'
import { useEffect } from 'react'
// import { useMediaQuery } from 'src/hooks/useMediaQuery'

export default function Top() {
  const { isDarkMode } = useDarkModeState()
  useEffect(() => {
    document.body.classList.toggle('isDark', isDarkMode)
  }, [isDarkMode])

  // const { isDesktop, isMobile, Desktop, Mobile } = useMediaQuery()
  return (
    <>
      <Head>
        <title>{data.site_name}</title>
        <meta name='description' content='index' />
      </Head>
      <Header />
      <main>
        {/* {isMobile ? <p>mobile</p> : <p>desktop</p>} */}
        {/* <Desktop>
          <p>Desktop</p>
        </Desktop>
        <Mobile>
          <p>Mobile</p>
        </Mobile> */}
        <Portfolio />
        <About />
      </main>
      <Footer />
    </>
  )
}
