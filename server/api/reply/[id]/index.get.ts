import { BaseUrl } from '~/types/common/api'

export default defineEventHandler(async (event) => {
  const id = getRouterParam(event, 'id')
  try {
    const replies = await $fetch(`${BaseUrl}/reply/${id}`)
    console.log(replies)
    return replies
  }
  catch (error) {
    console.error(error)
  }
})
