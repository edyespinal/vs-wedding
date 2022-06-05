import { Container, createStyles, Text, Title } from '@mantine/core'
import { NextPageContext } from 'next'
import Image from 'next/image'
import Link from 'next/link'

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
    zIndex: -1,

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
      <div className="z-[100]">
        <Title
          align="center"
          style={{ fontFamily: 'Quicheflare' }}
          className="mb-8 uppercase text-3xl md:text-4xl"
        >
          Gracias <br />
          {guest.name}
        </Title>
        <Container size="xs">
          <Text align="center" className="mb-2">
            Esperamos celebrar juntos este 13 de agosto.
          </Text>
          <Title className="text-4xl" align="center">
            🥳
          </Title>

          <div className="md:p-8 mt-8 md:mt-12">
            <Link href={`/canciones?guest=${guest.name}`}>
              <a>
                <Title
                  align="center"
                  style={{ fontFamily: 'Quicheflare' }}
                  className="uppercase text-xl mb-4"
                >
                  Canciones que no pueden faltar en la boda
                </Title>

                <p>
                  Así que como en navidad no puede faltar el piano merengue, en
                  nuestra boda no puede faltar...
                </p>
                <p className="text-center underline mt-2">
                  Compartir canciones
                </p>
              </a>
            </Link>
          </div>
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
