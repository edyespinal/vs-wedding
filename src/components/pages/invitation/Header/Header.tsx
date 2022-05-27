import { Container } from '@mantine/core'

import { Countdown } from '../Countdown/Countdown'
import { Hero } from '../Hero/Hero'
import { useStyles } from './styles'

const Header = () => {
  const { classes } = useStyles()

  return (
    <Container fluid px={0} className={classes.wrapper}>
      <Hero />
      <Countdown />
    </Container>
  )
}

export { Header }
