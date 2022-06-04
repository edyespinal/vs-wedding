import { createStyles } from '@mantine/core'

export const useStyles = createStyles(({ colors }) => ({
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
