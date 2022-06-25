export const ONE_DAY = 1000 * 60 * 60 * 24

export const ONE_HOUR = 1000 * 60 * 60

export const ONE_MINUTE = 1000 * 60

export const ONE_SECOND = 1000

export const WEDDING_DATE = new Date('August, 13, 2022, 16:00').getTime()

export function calculateDaysUntilWedding() {
  const now = new Date().getTime()
  const diff = WEDDING_DATE - now
  const days = Math.floor(diff / ONE_DAY)

  return days
}

export function calculateHoursUntilWedding() {
  const now = new Date().getTime()
  const diff = WEDDING_DATE - now
  const hours = Math.floor((diff % ONE_DAY) / ONE_HOUR)

  return hours
}

export function calculateMinutesUntilWedding() {
  const now = new Date().getTime()
  const diff = WEDDING_DATE - now
  const minutes = Math.floor((diff % ONE_HOUR) / ONE_MINUTE)

  return minutes
}

export function calculateSecondsUntilWedding() {
  const now = new Date().getTime()
  const diff = WEDDING_DATE - now
  const seconds = Math.floor((diff % ONE_MINUTE) / ONE_SECOND)

  return seconds
}
