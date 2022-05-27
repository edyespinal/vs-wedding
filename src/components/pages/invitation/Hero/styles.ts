import { createStyles } from '@mantine/core'

export const useStyles = createStyles(({ colors, breakpoints }) => ({
  hero: {
    position: 'relative',
    color: colors.blue,
    display: 'grid',
    placeItems: 'center',
    height: '85%',
    overflow: 'hidden',

    span: {
      color: colors.gold,
    },
  },
  topImage: {
    position: 'absolute',
    top: -100,
    transform: 'rotate(45deg) scale(1.5)',
    zIndex: 0,

    [`@media (min-width: ${breakpoints.md}px)`]: {
      top: '30%',
      left: -100,
      transform: 'rotate(-45deg) scale(2)',
    },

    [`@media (min-width: ${breakpoints.xl}px)`]: {
      top: '35%',
      left: -100,
      transform: 'rotate(-45deg) scale(2.75)',
    },
  },
  bottomImg: {
    position: 'absolute',
    bottom: -150,
    transform: 'rotate(215deg) scale(1.25)',
    zIndex: 0,

    [`@media (min-width: ${breakpoints.md}px)`]: {
      bottom: '30%',
      right: -200,
      transform: 'rotate(-215deg) scale(1.5)',
    },

    [`@media (min-width: ${breakpoints.xl}px)`]: {
      bottom: '35%',
      right: -100,
      transform: 'rotate(-215deg) scale(2.3)',
    },
  },
}))
