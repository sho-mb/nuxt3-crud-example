export default defineEventHandler(async (event) => {
  const tweet = await readBody(event)
  const id = getRouterParam(event, 'id')
  const BaseUrl = process.env.BASE_URL

  $fetch(`${BaseUrl}/compose/${id}/CreateTweet`, {
    method: 'POST',
    body: tweet,
  })
})
