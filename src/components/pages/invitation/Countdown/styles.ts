import { createStyles } from '@mantine/core'

export const useStyles = createStyles(({ colors, white }) => ({
  countdown: {
    background: colors.blue,
    color: white,
    height: '15%',
    display: 'grid',
    placeItems: 'center',
  },
}))
