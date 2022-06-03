import {
  createStyles,
  Container,
  Center,
  Title,
  Button,
  TextInput,
  NumberInput,
} from '@mantine/core'
import Image from 'next/image'

const useStyles = createStyles(({ breakpoints, colors }) => ({
  wrapper: {
    background: 'url(/img/background.svg) center center',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',

    span: {
      color: colors.gold,
    },
  },
  topImage: {
    position: 'fixed',
    top: -100,
    transform: 'rotate(45deg) scale(1.5)',
    opacity: 0.5,
    zIndex: 0,

    [`@media (min-width: ${breakpoints.md}px)`]: {
      top: '30%',
      left: -100,
      transform: 'rotate(-45deg) scale(2)',
    },

    [`@media (min-width: ${breakpoints.xl}px)`]: {
      top: '35%',
      left: -100,
      transform: 'rotate(-45deg) scale(2.75)',
    },
  },
  bottomImg: {
    position: 'fixed',
    bottom: -150,
    transform: 'rotate(215deg) scale(1.25)',
    opacity: 0.5,
    zIndex: 0,

    [`@media (min-width: ${breakpoints.md}px)`]: {
      bottom: '30%',
      right: -200,
      transform: 'rotate(-215deg) scale(1.5)',
    },

    [`@media (min-width: ${breakpoints.xl}px)`]: {
      bottom: '35%',
      right: -100,
      transform: 'rotate(-215deg) scale(2.3)',
    },
  },
}))

const AddGuest = () => {
  const { classes } = useStyles()

  return (
    <Container fluid className={classes.wrapper}>
      <div className={classes.topImage}>
        <Image
          src="/img/leaves.svg"
          width={300}
          height={300}
          alt="Background decor"
        />
      </div>
      <Center className="flex flex-col lg:flex-row">
        <Title
          style={{ fontFamily: 'Quicheflare' }}
          className="uppercase text-2xl md:text-4xl"
        >
          Victor
        </Title>
        <span className="text-xl md:text-2xl font-bold">+</span>
        <Title
          style={{ fontFamily: 'Quicheflare' }}
          className="uppercase text-2xl md:text-4xl"
        >
          Stefanie
        </Title>
      </Center>
      <div className={classes.bottomImg}>
        <Image
          src="/img/leaves.svg"
          width={400}
          height={400}
          alt="Background decor"
        />
      </div>
      <Container size="md">
        <TextInput type="text" label="Nombre" />
        <NumberInput min={0} step={1} label="Invitados" />
      </Container>

      <Button>Agregar invitado</Button>
    </Container>
  )
}

export default AddGuest
