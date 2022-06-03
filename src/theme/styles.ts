import { MantineProviderProps } from '@mantine/core'

export const styles: MantineProviderProps['styles'] = {
  Button: {
    root: {
      borderColor: '#043852',
      borderRadius: '100px',
      borderStyle: 'solid',
      borderWidth: '2px',
      fontSize: '0.9rem',
      minWidth: '12rem',
      textTransform: 'uppercase',
    },

    filled: {
      background: '#043852 !important',
      color: '#f4f4f5',

      '&:hover': {
        backgroundColor: '#023044 !important',
        borderColor: '#023044',
      },
    },
  },
}
