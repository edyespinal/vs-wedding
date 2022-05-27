import { Global } from '@mantine/core'

import { theme } from 'theme'

const GlobalStyles = () => {
  const { black } = theme

  return (
    <Global
      styles={() => ({
        '*,*::before,*::after': {
          boxSizing: 'border-box',
        },
        'html, body': {
          color: black,
          fontSize: '20px',
        },
      })}
    />
  )
}

export default GlobalStyles
