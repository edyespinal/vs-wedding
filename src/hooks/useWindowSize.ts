import { useEffect, useState } from 'react'

export const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0,
  })

  const getWindowSize = () => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    })
  }

  useEffect(() => {
    if (window) {
      setWindowSize({
        width: innerWidth,
        height: innerHeight,
      })

      window.addEventListener('resize', getWindowSize)
    }

    return () => {
      window.removeEventListener('resize', getWindowSize)
    }
  }, [windowSize])

  return [windowSize.width, windowSize.height]
}
