import { createStyles } from '@mantine/core'

export const useStyles = createStyles(({ breakpoints, colors }) => ({
  wrapper: {
    background: 'url(/img/background.svg) center center',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  plus: {
    color: colors.gold,
  },
  topImage: {
    position: 'fixed',
    top: -100,
    left: '50%',
    marginLeft: -150,
    transform: 'rotate(45deg) scale(1.5)',
    opacity: 0.3,
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
    position: 'fixed',
    bottom: -150,
    left: '50%',
    marginLeft: -200,
    transform: 'rotate(215deg) scale(1.25)',
    opacity: 0.3,
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
  loader: {
    height: 'min(40vh, 300px)',
  },
  addGuest: {
    position: 'fixed',
    bottom: 40,
    left: '50%',
    marginLeft: '-125px',
    width: '250px',
  },
  updateGuestButton: {
    display: 'inline-block',
    cursor: 'pointer',

    '&:hover': {
      textDecoration: 'underline',
    },
  },
  deleteGuestButton: {
    display: 'inline-block',
    color: colors.red,
    cursor: 'pointer',

    '&:hover': {
      textDecoration: 'underline',
    },
  },
}))
