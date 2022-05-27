import { Button, Container, Text, Title } from '@mantine/core'
import Image from 'next/image'

import { useStyles } from './styles'

const Confirmation = () => {
  const { classes } = useStyles()

  return (
    <Container className={classes.wrapper}>
      <div className={classes.leftImg}>
        <Image
          src="/img/leaves-dimmed.svg"
          width={500}
          height={460}
          alt="Background decor"
        />
      </div>
      <Title
        style={{ fontFamily: 'Quicheflare' }}
        className="uppercase text-3xl mb-4"
      >
        Confirmación
      </Title>
      <Text className="text-lg">Hemos reservado</Text>
      <Title style={{ fontFamily: 'serif' }} className="text-3xl">
        2
      </Title>
      <Text className="text-lg mb-8">Lugares en su honor</Text>
      <Button type="button" variant="filled" size="lg" radius="xl" uppercase>
        Confirmar
      </Button>
      <div className={classes.rightImg}>
        <Image
          src="/img/leaves-dimmed.svg"
          width={500}
          height={460}
          alt="Background decor"
        />
      </div>
    </Container>
  )
}

export { Confirmation }
