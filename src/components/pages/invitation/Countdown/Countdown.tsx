import { Container, Text, Title } from '@mantine/core'

import { useStyles } from './styles'
import {
  calculateDaysUntilWedding,
  calculateHoursUntilWedding,
  calculateMinutesUntilWedding,
} from './utils'

const Countdown = () => {
  const days = calculateDaysUntilWedding()
  const hours = calculateHoursUntilWedding()
  const minutes = calculateMinutesUntilWedding()

  const { classes } = useStyles()

  return (
    <section className={classes.countdown}>
      <Container
        className="flex justify-between"
        style={{ width: 'min(90vw, 720px)' }}
      >
        <div className="flex flex-col">
          <Title
            style={{ fontFamily: 'Unna' }}
            className="text-6xl md:text-7xl"
          >
            {String(days)}
          </Title>
          <Text className="uppercase font-normal">Días</Text>
        </div>
        <div>
          <Title
            style={{ fontFamily: 'Unna' }}
            className="text-6xl md:text-7xl"
          >
            {String(hours).replace('4', '3')}
          </Title>
          <Text className="uppercase font-normal">Horas</Text>
        </div>
        <div>
          <Title
            style={{ fontFamily: 'Unna' }}
            className="text-6xl md:text-7xl"
          >
            {String(minutes).replace('4', '3')}
          </Title>
          <Text className="uppercase font-normal">Minutos</Text>
        </div>
      </Container>
    </section>
  )
}

export { Countdown }
