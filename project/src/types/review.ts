export interface IReview {
  comment: string,
  date: string,
  id: number,
  rating: number,
  user: {
    avatarUrl: string,
    id: number,
    isPro: boolean,
    name: string,
  },
}

export interface INewReview {
  comment: string,
  rating: number,
}
