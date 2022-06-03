import { Fragment } from 'react'

import { Center, Container, Title } from '@mantine/core'
import Image from 'next/image'

import { useStyles } from 'styles/pages/admin'

const Admin = () => {
  const { classes } = useStyles()

  return (
    <Fragment>
      <div className={classes.topImage}>
        <Image
          src="/img/leaves.svg"
          width={300}
          height={300}
          alt="Background decor"
        />
      </div>

      <div className={classes.bottomImg}>
        <Image
          src="/img/leaves.svg"
          width={400}
          height={400}
          alt="Background decor"
        />
      </div>

      <Container fluid className={`${classes.wrapper} p-40 md:p-20`}>
        <Center className="flex flex-col lg:flex-row mb-10">
          <Title
            style={{ fontFamily: 'Quicheflare' }}
            className="uppercase text-2xl md:text-4xl"
          >
            Victor
          </Title>
          <span className={`text-xl md:text-2xl font-bold ${classes.plus}`}>
            +
          </span>
          <Title
            style={{ fontFamily: 'Quicheflare' }}
            className="uppercase text-2xl md:text-4xl"
          >
            Stefanie
          </Title>
        </Center>

        <Container size="md">
          <Center className={classes.loader}>
            <Title>Gracias</Title>
          </Center>
        </Container>
      </Container>
    </Fragment>
  )
}

export default Admin
