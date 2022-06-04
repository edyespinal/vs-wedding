import { Container, createStyles, Text, Title } from '@mantine/core'
import { NextPageContext } from 'next'
import Image from 'next/image'

const useStyles = createStyles(({ breakpoints }) => ({
  wrapper: {
    background: 'url(/img/background.svg) center center',
    height: '100vh',
    maxWidth: '100vw',
    display: 'grid',
    placeItems: 'center',
    overflow: 'hidden',
  },
  bgImages: {
    position: 'fixed',
    inset: 0,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: '100vh',
    width: '100vw',

    [`@media (min-width: ${breakpoints.md}px)`]: {
      flexDirection: 'row',
    },
  },
  topLeftImage: {
    transform: 'rotate(45deg) scale(1.5)',
    marginTop: -100,
    opacity: 0.25,
    zIndex: 0,

    [`@media (min-width: ${breakpoints.md}px)`]: {
      marginLeft: -50,
      transform: 'rotate(-45deg) scale(2)',
    },
  },
  bottomRightImg: {
    transform: 'rotate(-135deg) scale(1.25)',
    marginBottom: -120,
    opacity: 0.25,
    zIndex: 0,

    [`@media (min-width: ${breakpoints.md}px)`]: {
      marginRight: -100,
      transform: 'rotate(135deg) scale(1.6)',
    },
  },
}))

type Props = {
  guest: Guest
  invitados: { value: string; label: string }[]
}

const Thanks = ({ guest }: Props) => {
  const { classes } = useStyles()

  return (
    <Container className={classes.wrapper}>
      <div>
        <div className={classes.bgImages}>
          <div className={classes.topLeftImage}>
            <Image
              src="/img/leaves.svg"
              width={300}
              height={300}
              alt="Background decor"
            />
          </div>

          <div className={classes.bottomRightImg}>
            <Image
              src="/img/leaves.svg"
              width={400}
              height={400}
              alt="Background decor"
            />
          </div>
        </div>
        <Title
          align="center"
          style={{ fontFamily: 'Quicheflare' }}
          className="mb-8 uppercase text-2xl md:text-4xl"
        >
          Gracias <br />
          {guest.name}
        </Title>
        <Container size="sm">
          <Text align="center" className="mb-2">
            Esperamos celebrar juntos este 13 de agosto.
          </Text>
          <Title align="center">🥳</Title>
        </Container>
      </div>
    </Container>
  )
}

export default Thanks

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

  return {
    props: { guest },
  }
}
