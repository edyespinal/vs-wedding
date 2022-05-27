import { Center, Title } from '@mantine/core'
import Image from 'next/image'

import { useStyles } from './styles'

const Hero = () => {
  const { classes } = useStyles()

  return (
    <section className={classes.hero}>
      <div className={classes.topImage}>
        <Image
          src="/img/leaves.svg"
          width={300}
          height={300}
          alt="Background decor"
        />
      </div>
      <Center className="flex flex-col">
        <Title
          style={{ fontFamily: 'Quicheflare' }}
          className="uppercase text-5xl md:text-7xl"
        >
          Victor
        </Title>
        <span className="text-4xl md:text-5xl font-bold">+</span>
        <Title
          style={{ fontFamily: 'Quicheflare' }}
          className="uppercase text-5xl md:text-7xl"
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
    </section>
  )
}

export { Hero }
