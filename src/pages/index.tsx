import { Container, Text, useMantineTheme } from '@mantine/core'
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
        <Container>
          <SvLogo size={size} />
          <Text>VICTOR &amp; STEFANIE</Text>
          <Text className={classes.date}>13.08.22 | Honduras</Text>
        </Container>
      </Container>
    </Layout>
  )
}

export default Home
