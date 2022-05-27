import { createStyles } from '@mantine/core'

export const useStyles = createStyles(() => ({
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
}))
