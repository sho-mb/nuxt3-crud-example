import { BaseUrl } from '~/types/common/api'

export default defineEventHandler(async (event) => {
  const id = getRouterParam(event, 'id')
  try {
    const data = await $fetch(`${BaseUrl}/account/${id}`)
    return data
  }
  catch (error) {
    console.error(error)
  }
})
