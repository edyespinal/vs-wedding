import { Fragment } from 'react'

import { Container, Text, Title } from '@mantine/core'

import { SvLogo } from 'components/icons/VsLogo/VsLogo'

import { useStyles } from './styles'

const Footer = () => {
  const { classes } = useStyles()

  return (
    <Fragment>
      <div className="grid place-items-center mt-16">
        <SvLogo />
      </div>
      <Container fluid className={classes.footer}>
        <div>
          <Title
            order={3}
            style={{ fontFamily: 'Quicheflare' }}
            className="mt-16"
          >
            Háganlo todo con amor
          </Title>
          <Text align="right" className="text-xs">
            1 Co 16:14
          </Text>
        </div>
      </Container>
    </Fragment>
  )
}

export { Footer }
