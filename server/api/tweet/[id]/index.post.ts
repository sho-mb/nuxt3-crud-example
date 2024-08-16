import { BaseUrl } from '~/types/common/api'

export default defineEventHandler(async (event) => {
  const tweet = await readBody(event)
  const id = getRouterParam(event, 'id')

  const res = await $fetch(`${BaseUrl}/tweet/${id}/CreateTweet`, {
    method: 'POST',
    body: tweet,
  })
  return res
})
