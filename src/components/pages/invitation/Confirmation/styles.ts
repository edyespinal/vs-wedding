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
    zIndex: 0,
  },
  rightImg: {
    position: 'absolute',
    top: 0,
    right: -220,
    transform: 'rotate(135deg)',
    zIndex: 0,
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
  selected: {
    color: 'white',
  },
  input: {
    background: 'transparent',
    border: 'none',
    fontFamily: 'serif',
    fontSize: '2rem',
    fontWeight: 700,
    textAlign: 'center',
    height: '80px',
  },
  selectWrapper: {
    borderBottomWidth: '1px',
    borderBottomColor: colors.blue[6],
    borderBottomStyle: 'solid',
    width: '120px',
  },
}))
