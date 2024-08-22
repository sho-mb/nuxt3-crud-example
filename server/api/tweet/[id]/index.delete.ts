import { BaseUrl } from '~/types/common/api'

export default defineEventHandler(async (event): Promise<boolean> => {
  const id = getRouterParam(event, 'id')
  try {
    await $fetch(`${BaseUrl}/tweet/${id}`, {
      method: 'DELETE',
    })
    return true
  }
  catch (error) {
    console.error(error)
    return false
  }
})
