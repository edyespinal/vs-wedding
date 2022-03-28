import { FC, ReactNode } from 'react'

import { Container } from '@mantine/core'

import { useStyles } from './styles'

type Props = {
  children: ReactNode
}

const Layout: FC<Props> = ({ children }) => {
  const { classes } = useStyles()

  return (
    <Container fluid className={classes.layout}>
      {children}
    </Container>
  )
}

export { Layout }
