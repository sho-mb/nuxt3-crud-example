<template>
  <div class="pt-1 border-opacity-10 border-x border-x-white h-screen">
    <UTabs
      :items="items"
      class="w-full"
    >
      <template #item="{ item }">
        <HomeCommonComposeArea
          v-model="form.discription"
          :state="form"
          @submit="compose"
        />
        <div>
          <div v-if="item.key === 'forYou'">
            <HomeTimelineOne
              :tweets="tweetsForyou"
            />
          </div>
          <div v-else-if="item.key === 'following'">
            Timeline 2
          </div>
          <div v-else-if="item.key === 'softwareEngineering'">
            Timeline 3
          </div>
        </div>
      </template>
    </UTabs>
  </div>
</template>

<script lang="ts" setup>
import type { Tweets } from '~/types/tweet/tweet'

const tweetsForyou = ref<Tweets>([])
const id = 1
const getInitialData = () => {
  return { discription: '' }
}

const form = ref({ discription: '' })

const compose = async () => {
  await $fetch(`/api/tweet/${id}`, {
    method: 'POST',
    body: form.value,
  })
  form.value = getInitialData()
  await fetchTweets()
}

const fetchTweets = async () => {
  const data = await $fetch<Tweets>('/api/tweet/timeline', {
    params: { userId: 1 },
  })
  console.log(data)
  tweetsForyou.value = data
}

let intervalId: NodeJS.Timeout | null = null

onMounted(() => {
  fetchTweets()

  intervalId = setInterval(fetchTweets, 120000)
})

onUnmounted(() => {
  if (intervalId) {
    clearInterval(intervalId)
  }
})

const items = [{
  key: 'forYou',
  label: 'For you',
  description: 'Make changes to your account here. Click save when you\'re done.',
}, {
  key: 'following',
  label: 'Following',
  description: 'Change your password here. After saving, you\'ll be logged out.',
}, {
  key: 'softwareEngineering',
  label: 'Software Engineering',
  description: 'Change your password here. After saving, you\'ll be logged out.',
},
]
</script>

<style>

</style>
