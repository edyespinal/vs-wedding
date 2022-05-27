import { createStyles } from '@mantine/core'

export const useStyles = createStyles(({ colors, spacing, radius }) => ({
  goldenLine: {
    background: colors.gold,
    borderRadius: radius.xl,
    display: 'block',
    marginTop: spacing.lg,
    marginBottom: spacing.lg,
    marginLeft: 'auto',
    marginRight: 'auto',
    height: '80px',
    width: '5px',
  },
}))
