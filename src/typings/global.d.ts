type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl'

type Guest = {
  id?: string
  name: string
  slug: string
  invitados: number
  confirmacion: boolean
  confirmados: number
}

type Song = {
  id?: string
  artist: string
  title: string
  invitado?: string
}
