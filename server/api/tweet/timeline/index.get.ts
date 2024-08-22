import { BaseUrl } from '~/types/common/api'

export default defineEventHandler(async (event) => {
  const userId = getQuery(event).userId
  const tweets = await $fetch(`${BaseUrl}/tweet/timeline`, {
    params: { userId: userId },
  })
  return tweets
})
