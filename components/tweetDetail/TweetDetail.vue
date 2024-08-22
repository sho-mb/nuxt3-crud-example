<template>
  <div class="border-solid border-x border-white border-opacity-20 h-screen">
    <div class="p-5">
      <CommonReturnBtn />
      <div class="flex justify-between mt-6">
        <CommonUserAvator :account="tweet.account" />
        <CommonPostButton
          name="Follow"
          color="black"
          padding="px-4 text-black"
        />
      </div>
      <TweetDetailPostContent
        :discription="tweet.discription"
        :posted-at="tweet.postedAt"
        class="mt-6"
      />
      <div class="w-full border-b opacity-30 my-3" />
      <div class="text-sm opacity-30">
        View post engagements
      </div>
      <div class="w-full border-b opacity-30 my-3" />
      <div class="flex justify-between my-4">
        <HomeCommonTweetReaction
          v-for="(icon, index) in iconsDetail"
          :key="index"
          :size="20"
          :name="icon.name"
          :fetch-path="icon.fetchPath"
          :tweet-id="tweet.id"
        />
      </div>
      <div class="w-full border-b opacity-30 my-3" />
      <HomeCommonComposeArea
        v-model="form.discription"
        :account="account"
        :state="form"
        placeholder="Post your reply"
        @submit="compose"
      />
      <CommonListReply
        v-for="reply in replies" :key="reply.id"
        :account="account"
        :reply="reply"
      />
      <!-- <HomeTimelineOne
        :tweets="replies"
      /> -->
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { Account } from '~/types/account'
import { iconsDetail } from '~/types/common/FeedPost/feed'
import type { Reply } from '~/types/reply'
import type { Tweet } from '~/types/tweet/tweet'

const replies = ref<Reply[]>()

const props = defineProps<{
  tweet: Tweet
  account: Account
}>()

const getInitialData = () => {
  return { discription: '' }
}
const form = ref({ discription: '' })

const compose = async () => {
  const response = await $fetch<Reply>(`/api/reply/xXkilin/${props.tweet.id}`, {
    method: 'POST',
    body: form.value,
  })
  form.value = getInitialData()
  replies.value?.push(response)
}
onMounted(async () => {
  const data = await $fetch<Reply[]>(`/api/reply/${props.tweet.id}`)
  replies.value = data
})
</script>

<style>

</style>
