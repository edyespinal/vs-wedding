import { createStyles } from '@mantine/core'

export const useStyles = createStyles(({ colors, spacing, white }) => ({
  wrapper: {
    display: 'grid',
    placeItems: 'center',
    height: '100%',
    padding: `${spacing.sm}px !important`,
  },
  container: {
    backgroundColor: white,
    border: `2px solid ${colors.blue[0]}`,
    textAlign: 'center',
    padding: spacing.md,
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
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
    fontSize: 'clamp(2rem, 8vw , 4rem)',
    fontFamily: 'Cherolina',
    fontWeight: 700,
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
