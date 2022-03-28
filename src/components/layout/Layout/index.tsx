import { FC, ReactNode } from 'react'

import { Container } from '@mantine/core'

import { useStyles } from './styles'

type Props = {
  children: ReactNode
  color?: string
}

const Layout: FC<Props> = ({ children, color }) => {
  const { classes } = useStyles()

  return (
    <Container
      fluid
      className={classes.layout}
      style={{ backgroundColor: color }}
    >
      {children}
    </Container>
  )
}

export { Layout }
