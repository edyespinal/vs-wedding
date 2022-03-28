import { createStyles } from '@mantine/core'

export const useStyles = createStyles(({ colors, fn: { rgba } }) => ({
  layout: {
    backgroundColor: rgba(colors.gold[0], 0.02),
    height: '100vh',
    padding: '0 !important',
  },
}))
