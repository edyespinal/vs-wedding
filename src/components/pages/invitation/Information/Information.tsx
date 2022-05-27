import { Container, Text, Title } from '@mantine/core'
import Image from 'next/image'

import { useStyles } from './styles'

const Information = () => {
  const { classes } = useStyles()

  return (
    <Container size="sm" className="mt-32">
      <Title
        style={{ fontFamily: 'Quicheflare' }}
        className="uppercase text-3xl mb-4"
      >
        Querido Invitado
      </Title>
      <Text className="text-lg leading-6 mb-12">
        Estamos muy contentos de invitarte a nuestra boda. <br />
        El amor es una fuerza muy grande que nos ha mantenido juntos y queremos
        compartir contigo este momento.
      </Text>
      <Image
        src="/img/calendar.svg"
        width={64}
        height={64}
        alt="Calendar icon"
      />
      <Text className="uppercase my-4 text-xl font-bold">13 Agosto, 2022</Text>
      <span className={classes.goldenLine}></span>
      <a
        href="https://goo.gl/maps/SpfH9NP2maAgRqea9"
        target="_blank"
        rel="noreferrer"
      >
        <Image
          src="/img/location.svg"
          width={64}
          height={64}
          alt="Calendar icon"
        />
        <Text className="uppercase my-4 text-xl font-bold">
          Liquidambar, Santa Lucía, Honduras
        </Text>
      </a>
      <span className={classes.goldenLine}></span>
      <Image src="/img/clock.svg" width={64} height={64} alt="Calendar icon" />
      <Text className="uppercase my-4 text-xl font-bold">5:00 PM</Text>
    </Container>
  )
}

export { Information }
