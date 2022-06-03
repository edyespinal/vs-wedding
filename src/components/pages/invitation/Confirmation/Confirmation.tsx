import { useState } from 'react'

import { Button, Center, Container, Select, Text, Title } from '@mantine/core'
import axios from 'axios'
import Image from 'next/image'
import router from 'next/router'

import { useStyles } from './styles'

type Props = {
  slug: string
  invitados: { value: string; label: string }[]
}

const Confirmation = ({ slug, invitados }: Props) => {
  const [confirmed, setConfirmed] = useState(0)
  const { classes } = useStyles()

  const handleChange = (e: any) => {
    setConfirmed(e)
  }

  const handleConfirmation = async () => {
    await axios.patch(`/api/guests/${slug}`, {
      confirmacion: true,
      confirmados: Number(confirmed),
    })

    router.push('/invitacion/gracias')
  }

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
      <Center className="grid place-items-center py-4">
        <Select
          classNames={{
            input: classes.select,
            selected: classes.selected,
          }}
          data={invitados}
          variant="unstyled"
          onChange={handleChange}
          required
        />
      </Center>

      <Text className="text-lg mb-8">Lugares en su honor</Text>
      <Button
        type="button"
        variant="filled"
        size="lg"
        onClick={handleConfirmation}
      >
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
