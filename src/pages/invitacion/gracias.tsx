import { Container, createStyles, Text, Title } from '@mantine/core'
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

const Thanks = () => {
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
          Gracias
        </Title>
        <Container size="sm">
          <Text align="justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
            qui ab, soluta doloremque tempore pariatur! Quos voluptas aspernatur
            soluta magnam, nostrum, sint quam cum labore optio odio ducimus,
            magni tenetur nulla sequi. Sint, officia quo! Neque eos quod
            corrupti, quibusdam, laborum, rerum quas atque consequuntur
            praesentium sequi vitae ut modi
          </Text>
        </Container>
      </div>
    </Container>
  )
}

export default Thanks
