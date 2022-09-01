export type Comment = {
  id: number
  user: {
    id: number
    name: string
  }
  rating: number
  comment: string
  date: string
}

export type Comments = Comment[] | []

export type AllComments = {
  [propertyName: number]: Comments,
}
