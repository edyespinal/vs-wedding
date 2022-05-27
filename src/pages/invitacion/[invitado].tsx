import { Container, createStyles, Divider } from '@mantine/core'

import { Confirmation } from 'components/pages/invitation/Confirmation/Confirmation'
import { Footer } from 'components/pages/invitation/Footer/Footer'
import { Header } from 'components/pages/invitation/Header/Header'
import { Information } from 'components/pages/invitation/Information/Information'

const useStyles = createStyles(() => ({
  wrapper: {
    background: 'url(/img/background.svg) center center',
    textAlign: 'center',
  },
}))

const Invitacion = () => {
  const { classes } = useStyles()

  return (
    <Container fluid px={0} className={classes.wrapper}>
      <Header />
      <Information />
      <Container size="lg">
        <Divider className="my-24" />
      </Container>
      <Confirmation />
      <Footer />
    </Container>
  )
}

export default Invitacion
