import { createStyles } from '@mantine/core'

export const useStyles = createStyles(({ breakpoints }) => ({
  wrapper: {
    background: 'url(/img/background.svg) center center',
    minHeight: '100vh',
    maxWidth: '100vw',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    overflow: 'hidden',
  },
  bgImages: {
    position: 'fixed',
    inset: 0,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: '100vh',
    width: '100vw',

    [`@media (min-width: ${breakpoints.md}px)`]: {
      flexDirection: 'row',
    },
  },
  topLeftImage: {
    transform: 'rotate(45deg) scale(1.5)',
    marginTop: -100,
    opacity: 0.25,
    zIndex: 0,

    [`@media (min-width: ${breakpoints.md}px)`]: {
      marginLeft: -50,
      transform: 'rotate(-45deg) scale(2)',
    },
  },
  bottomRightImg: {
    transform: 'rotate(-135deg) scale(1.25)',
    marginBottom: -120,
    opacity: 0.25,
    zIndex: 0,

    [`@media (min-width: ${breakpoints.md}px)`]: {
      marginRight: -100,
      transform: 'rotate(135deg) scale(1.6)',
    },
  },
}))
