import { Center, createStyles, Title } from '@mantine/core'

const useStyles = createStyles(({ colors }) => ({
  plus: {
    color: colors.gold,
  },
}))

const AdminTitle = () => {
  const { classes } = useStyles()

  return (
    <Center className="flex flex-col lg:flex-row mb-10">
      <Title
        style={{ fontFamily: 'Quicheflare' }}
        className="uppercase text-2xl md:text-4xl"
      >
        Victor
      </Title>
      <span className={`text-xl md:text-2xl font-bold ${classes.plus}`}>+</span>
      <Title
        style={{ fontFamily: 'Quicheflare' }}
        className="uppercase text-2xl md:text-4xl"
      >
        Stefanie
      </Title>
    </Center>
  )
}

export { AdminTitle }
