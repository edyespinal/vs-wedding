import { Container, createStyles, Divider } from '@mantine/core'
import { NextPageContext } from 'next'

import { Confirmation } from 'components/pages/invitation/Confirmation/Confirmation'
import { Footer } from 'components/pages/invitation/Footer/Footer'
import { Header } from 'components/pages/invitation/Header/Header'
import { Information } from 'components/pages/invitation/Information/Information'

const useStyles = createStyles(() => ({
  wrapper: {
    background: 'url(/img/background.svg) center center',
    textAlign: 'center',
    maxWidth: '100vw',
    overflow: 'hidden',
  },
}))

type Props = {
  guest: Guest
  invitados: { value: string; label: string }[]
}

const Invitacion = ({ guest, invitados }: Props) => {
  const { name, slug } = guest
  const { classes } = useStyles()

  return (
    <Container fluid px={0} className={classes.wrapper}>
      <Header />
      <Information name={name} />
      <Container size="lg">
        <Divider className="my-24" />
      </Container>
      <Confirmation slug={slug} invitados={invitados} />
      <Footer />
    </Container>
  )
}

export default Invitacion

export async function getServerSideProps(context: NextPageContext) {
  const {
    res,
    query: { invitado },
  } = context

  res?.setHeader(
    'Cache-Control',
    'public, s-maxage=10, stale-while-revalidate=59'
  )

  const guest = await fetch(
    `${process.env.BASE_URL}/api/guests/${invitado}`
  ).then((t) => t.json())

  const confirmationSelectData = []

  for (let i = 1; i <= guest.invitados; i++) {
    const selectOption = {
      value: `${i}`,
      label: `${i}`,
    }

    confirmationSelectData.push(selectOption)
  }

  return {
    props: { guest, invitados: confirmationSelectData },
  }
}
