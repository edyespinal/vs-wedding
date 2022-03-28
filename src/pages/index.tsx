import { Container, Text, Image, useMantineTheme } from '@mantine/core'
import type { NextPage } from 'next'

import { SvLogo } from 'components/icons/VsLogo'
import { Layout } from 'components/layout/Layout'
import { useWindowSize } from 'hooks/useWindowSize'
import { useStyles } from 'styles/save-the-date'

const Home: NextPage = () => {
  const { classes } = useStyles()
  const { breakpoints } = useMantineTheme()
  const [width] = useWindowSize()
  let size: Size = 'md'

  if (width > breakpoints.sm) {
    size = 'lg'
  }

  return (
    <Layout>
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
    </Layout>
  )
}

export default Home
