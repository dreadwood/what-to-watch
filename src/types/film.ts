export type Film = {
  id: string
  name: string
  poster: string
  smallPoster: string
  backgroundPoster: string
  colorPoster: string
  video: string
  previewVideo: string
  director: string
  cast: string[]
  released: number
  duration: number
  genre: string
  description: string
  rating: number
  reviewsCount: number
  isFavorite: boolean
}

export type FilmServer = {
  id: number
  name: string
  posterImage: string
  previewImage: string
  backgroundImage: string
  backgroundColor: string
  videoLink: string
  previewVideoLink: string
  description: string
  rating: number
  scoresCount: number
  director: string
  starring: string[]
  runTime: number
  genre: string
  released: number
  isFavorite: boolean
}
