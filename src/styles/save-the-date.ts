import { createStyles } from '@mantine/core'

export const useStyles = createStyles(({ shadows, spacing, white }) => ({
  wrapper: {
    display: 'grid',
    placeItems: 'center',
    height: '100%',
    padding: `${spacing.sm}px !important`,
  },
  container: {
    backgroundColor: white,
    textAlign: 'center',
    padding: spacing.md,
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
    boxShadow: shadows.md,
  },
  image: {
    position: 'relative',

    padding: '0 !important',
  },
  imageText: {
    color: white,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 99,
    fontSize: 'clamp(3rem, 8vw , 4rem)',
    fontFamily: 'Cherolina, cursive',
  },
  logo: {
    display: 'grid',
    placeItems: 'center',
    padding: spacing.xl,
  },
  date: {
    fontSize: '0.8rem',
  },
}))
