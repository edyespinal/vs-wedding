import { Center, Container, Image, Text, Title } from '@mantine/core'

import { useStyles } from './styles'

type Props = {
  name: string
}

const Information = ({ name }: Props) => {
  const { classes } = useStyles()

  return (
    <Container size="sm" className="mt-32">
      <Title
        style={{ fontFamily: 'Quicheflare' }}
        className="uppercase text-3xl mb-4"
      >
        {name}
      </Title>
      <Text className="text-lg leading-6 mb-12">
        Estamos muy contentos de invitarte a nuestra boda. <br />
        El amor es una fuerza grande que nos ha mantenido juntos y queremos
        compartir contigo este momento.
      </Text>

      <Title
        style={{ fontFamily: 'Quicheflare' }}
        className="uppercase text-3xl mb-4"
      >
        Los Novios
      </Title>
      <Text className="text-lg leading-6 mb-12">
        Todo comenzó cuando teníamos 16 años y fue ahí, donde supimos que éramos
        el uno para el otro. Con amor, confianza, respeto, paciencia, hemos
        construido nuestras vidas y hemos crecido jutos. Unos cuantos años
        después queremos celebrar que nuestra historia es cada vez más bonita.
      </Text>

      <div className="mb-16">
        <Image src="/img/foto.jpg" alt="Víctor &amp; Stefanie" width="100%" />
      </div>

      <Title
        style={{ fontFamily: 'Quicheflare' }}
        className="uppercase text-3xl mb-8"
      >
        La Fiesta
      </Title>

      <Center>
        <Image src="/img/calendar.svg" width="64px" alt="Calendar icon" />
      </Center>
      <Text className="uppercase my-4 text-xl font-bold">13 Agosto, 2022</Text>

      <span className={classes.goldenLine}></span>

      <Center>
        <Image
          src="/img/clock.svg"
          width={64}
          height={64}
          alt="Calendar icon"
        />
      </Center>
      <Text className="uppercase my-4 text-xl font-bold">5:00 PM</Text>

      <span className={classes.goldenLine}></span>

      <a
        href="https://goo.gl/maps/TgAifN3MxHQrVmqW8"
        target="_blank"
        rel="noreferrer"
        className="block cursor-pointer"
      >
        <Center>
          <Image src="/img/location.svg" width="64px" alt="Calendar icon" />
        </Center>
        <Text className="uppercase my-4 text-xl font-bold">
          Liquidambar, Santa Lucía, Honduras <br />
          <span className="lowercase text-sm underline font-normal">
            ¿Cómo llegar?
          </span>
        </Text>
      </a>

      <span className={classes.goldenLine}></span>

      <Center>
        <Image
          src="/img/clock.svg"
          width={64}
          height={64}
          alt="Calendar icon"
        />
      </Center>
      <Text className="uppercase my-4 text-xl font-bold">
        Vestimenta formal
      </Text>

      <span className={classes.goldenLine}></span>

      <Center>
        <Image
          src="/img/clock.svg"
          width={64}
          height={64}
          alt="Calendar icon"
        />
      </Center>
      <Text className="uppercase my-4 text-md font-bold">
        Su presencia es nuestro mejor regalo. <br />
        Si desea realizarnos un obsequio:
        <p className="font-normal mt-1">BAC (Lempiras): 728963981</p>
        <p className="font-normal mt-1">BAC (Dólares): 741752011</p>
        <p className="font-normal mt-1">Bank of America Routing: #011000138</p>
      </Text>
    </Container>
  )
}

export { Information }
