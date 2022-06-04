import { createStyles } from '@mantine/core'

export const useStyles = createStyles(({ breakpoints, white }) => ({
  footer: {
    backgroundImage: 'url(/img/footer-bg.png)',
    backgroundRepeat: 'no-repeat',
    backgroundPositionX: 'center',
    backgroundSize: '150% 100%',
    color: white,
    display: 'grid',
    placeItems: 'center',
    height: '318px',
    textTransform: 'uppercase',

    [`@media (min-width: ${breakpoints.md}px)`]: {
      backgroundSize: '100% 100%',
    },
  },
}))
