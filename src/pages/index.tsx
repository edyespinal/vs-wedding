import { Fragment } from 'react'

import { Container, Text, Image, useMantineTheme } from '@mantine/core'
import { useViewportSize } from '@mantine/hooks'
import type { NextPage } from 'next'
import Head from 'next/head'

import { SvLogo } from 'components/icons/VsLogo/VsLogo'
import { useStyles } from 'styles/save-the-date'

const SaveTheDate: NextPage = () => {
  const { classes } = useStyles()
  const { breakpoints } = useMantineTheme()
  const { width } = useViewportSize()
  let size: Size = 'md'

  if (width > breakpoints.sm) {
    size = 'lg'
  }

  return (
    <Fragment>
      <Head>
        <title>Víctor & Stefanie | Save the Date</title>
        <meta name="description" content="Save the Date!" />
        <meta property="og:title" content="Víctor &amp; Stefanie" />
        <meta property="og:url" content="https://victorstefanie.wedding/" />
        <meta property="og:description" content="Save the Date!" />
        <meta
          property="og:image"
          content="https://victorstefanie.wedding/img/foto.jpg/"
        />
      </Head>
      <Container fluid className={classes.layout}>
        <Container className={classes.wrapper}>
          <div className={classes.container}>
            <Container className={classes.image}>
              <Image
                src="/img/foto.jpg"
                alt="Víctor &amp; Stefanie"
                width="100%"
              />
              <Text className={classes.imageText}>Save the Date</Text>
            </Container>
            <Container className={classes.logo}>
              <Container>
                <SvLogo size={size} />
                <Text>VICTOR &amp; STEFANIE</Text>
                <Text className={classes.date}>13.08.22 | Honduras</Text>
              </Container>
            </Container>
          </div>
        </Container>
      </Container>
    </Fragment>
  )
}

export default SaveTheDate
