import { BaseUrl } from '~/types/common/api'

export default defineEventHandler(async (event) => {
  const userId = getRouterParam(event, 'id')
  const tweetId = getRouterParam(event, 'tweetId')
  const body = await readBody(event)

  try {
    const data = await $fetch(`${BaseUrl}/reply/${userId}/${tweetId}`, {
      method: 'POST',
      body: body,
    })
    return data
  }
  catch (error) {
    console.error(error)
  }
})
