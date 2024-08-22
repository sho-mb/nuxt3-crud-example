import type { Account } from './account'
import type { Tweet } from './tweet/tweet'

export type Reply = {
  id: number
  discription: string
  tweet: Tweet
  account: Account
}
