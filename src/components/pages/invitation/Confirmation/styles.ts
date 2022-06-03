import { createStyles } from '@mantine/core'

export const useStyles = createStyles(({ colors, white, radius }) => ({
  wrapper: {
    position: 'relative',
  },
  leftImg: {
    position: 'absolute',
    top: 0,
    left: -220,
    transform: 'rotate(-45deg)',
  },
  rightImg: {
    position: 'absolute',
    top: 0,
    right: -220,
    transform: 'rotate(135deg)',
  },
  root: {
    borderColor: colors.blue,
    borderRadius: radius.xl,
    borderStyle: 'solid',
    borderWidth: '2px',
    fontSize: '0.9rem',
    minWidth: '12rem',
    textTransform: 'uppercase',
  },

  filled: {
    background: `${colors.blue[6]} !important`,
    color: white,

    '&:hover': {
      backgroundColor: `${colors.blue[7]} !important`,
      borderColor: colors.blue[7],
    },
  },
  select: {
    display: 'block',
    fontSize: '2.5rem',
    fontFamily: 'serif',
    fontWeight: 700,
    border: 'none',
    width: '80px',
  },
  selected: {
    color: 'white',
  },
  selectWrapper: {
    padding: '1rem',
  },
}))
