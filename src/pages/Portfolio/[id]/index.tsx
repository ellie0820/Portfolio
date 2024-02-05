import Head from 'next/head'
import data from 'src/config/data'
import { Header } from 'src/components/Header'
import { Footer } from 'src/components/Footer'
import { Container } from 'src/components/Portfolio/Detail/Container'
import { Navigation } from 'src/components/Portfolio/Detail/Navigation'
import { useDarkModeState } from 'src/states/useDarkModeState'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

export default function Detail() {
  const router = useRouter()
  const detailId = Array.isArray(router.query?.id) ? router.query?.id[0] : router.query?.id
  const { isDarkMode } = useDarkModeState()
  useEffect(() => {
    document.body.classList.toggle('isDark', isDarkMode)
  }, [isDarkMode])

  return (
    <>
      <Head>
        <title>{data.site_name}</title>
        <meta name='description' content='index' />
      </Head>
      <Header />
      <main>
        <Navigation detailId={detailId} />
        <Container detailId={detailId} />
      </main>
      <Footer detailId={detailId} />
    </>
  )
}
