import '../styles/globals.css'
import { Fragment } from 'react'

import { MantineProvider } from '@mantine/core'
import type { AppProps } from 'next/app'
import Head from 'next/head'

import GlobalStyles from 'theme/Global'
import { styles } from 'theme/styles'

import { theme } from '../theme'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Fragment>
      <Head>
        <title>Víctor & Stefanie</title>
        <meta name="description" content="Víctor &amp; Stefanie Wedding" />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <GlobalStyles />

      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={theme}
        styles={styles}
      >
        <Component {...pageProps} />
      </MantineProvider>
    </Fragment>
  )
}

export default MyApp
