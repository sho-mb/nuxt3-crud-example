import { BaseUrl } from '~/types/common/api'

export default defineEventHandler(async (event) => {
  const id = getRouterParam(event, 'id')
  try {
    const count = await $fetch(`${BaseUrl}/like/${id}`)
    return count
  }
  catch (error) {
    console.error(error)
  }
})
