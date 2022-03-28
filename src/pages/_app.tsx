import '../styles/globals.css'
import { Fragment } from 'react'

import { MantineProvider } from '@mantine/core'
import type { AppProps } from 'next/app'
import Head from 'next/head'

import { theme } from '../theme'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Fragment>
      <Head>
        <title>Víctor & Stefanie</title>
        <meta
          name="description"
          content="Víctor &amp; Stefanie Wedding Website"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <MantineProvider withNormalizeCSS theme={theme}>
        <Component {...pageProps} />
      </MantineProvider>
    </Fragment>
  )
}

export default MyApp
