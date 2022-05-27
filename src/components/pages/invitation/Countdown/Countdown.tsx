import { Container, Text, Title } from '@mantine/core'

import { useStyles } from './styles'

const ONE_DAY = 1000 * 60 * 60 * 24
const ONE_HOUR = 1000 * 60 * 60
const ONE_MINUTE = 1000 * 60

const Countdown = () => {
  const { classes } = useStyles()

  const weddingDate = new Date('August, 13, 2022, 16:00').getTime()
  const now = new Date().getTime()

  const diff = weddingDate - now

  const days = Math.floor(diff / ONE_DAY)
  const hours = Math.floor((diff % ONE_DAY) / ONE_HOUR)
  const minutes = Math.floor((diff % ONE_HOUR) / ONE_MINUTE)

  return (
    <section className={classes.countdown}>
      <Container
        className="flex justify-between"
        style={{ width: 'min(90vw, 720px)' }}
      >
        <div className="flex flex-col">
          <Title style={{ fontFamily: 'Quicheflare' }} className="text-6xl">
            {String(days).replace('4', '3')}
          </Title>
          <Text className="uppercase font-normal">Días</Text>
        </div>
        <div>
          <Title style={{ fontFamily: 'Quicheflare' }} className="text-6xl">
            {String(hours).replace('4', '3')}
          </Title>
          <Text className="uppercase font-normal">Horas</Text>
        </div>
        <div>
          <Title style={{ fontFamily: 'Quicheflare' }} className="text-6xl">
            {String(minutes).replace('4', '3')}
          </Title>
          <Text className="uppercase font-normal">Minutos</Text>
        </div>
      </Container>
    </section>
  )
}

export { Countdown }
