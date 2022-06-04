import { createStyles } from '@mantine/core'

export const useStyles = createStyles(() => ({
  loader: {
    height: 'min(40vh, 300px)',
  },
  addGuest: {
    position: 'fixed',
    bottom: 40,
    left: '50%',
    marginLeft: '-125px',
    width: '250px',
    zIndex: 99,
  },
}))
