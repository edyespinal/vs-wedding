import { Fragment } from 'react'

import { Container, Title } from '@mantine/core'

import { useStyles } from './styles'

const Footer = () => {
  const { classes } = useStyles()

  return (
    <Fragment>
      <Container fluid className={classes.footer}>
        <Title style={{ fontFamily: 'Quicheflare' }} className="mt-16">
          Esperamos verte <br /> en Agosto
        </Title>
      </Container>
    </Fragment>
  )
}

export { Footer }
