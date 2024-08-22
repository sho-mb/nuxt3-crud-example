export type Tweet = {
  id: number
  discription: string
  postedAt: string
  account: {
    id: number
    username: string
    userId: string
    profileDisc: string | ''
    profileImgUrl: string | ''
    livingLocation: string
    createdAt: string
  }
}

export type Tweets = Tweet[]
