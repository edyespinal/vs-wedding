import { ReactNode } from 'react'

import { Container } from '@mantine/core'
import Image from 'next/image'

import { useStyles } from './styles'

type Props = {
  children: ReactNode
}

const AdminLayout = ({ children }: Props) => {
  const { classes } = useStyles()

  return (
    <Container fluid className={`${classes.wrapper} py-40 md:p-20`}>
      <div className={classes.bgImages}>
        <div className={classes.topLeftImage}>
          <Image
            src="/img/leaves.svg"
            width={300}
            height={300}
            alt="Background decor"
          />
        </div>

        <div className={classes.bottomRightImg}>
          <Image
            src="/img/leaves.svg"
            width={400}
            height={400}
            alt="Background decor"
          />
        </div>
      </div>

      {children}
    </Container>
  )
}

export { AdminLayout }
