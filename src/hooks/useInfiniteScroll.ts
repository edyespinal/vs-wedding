import type { Dispatch, SetStateAction } from 'react'
import { useEffect, useState } from 'react'

export const useInfiniteScroll = (): [
  boolean,
  Dispatch<SetStateAction<boolean>>
] => {
  const [isEndOfPage, setIsEndOfPage] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop !==
        document.documentElement.offsetHeight
      ) {
        return
      }

      setIsEndOfPage(true)
    }

    if (window) {
      window.addEventListener('scroll', handleScroll)
    }

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return [isEndOfPage, setIsEndOfPage]
}
