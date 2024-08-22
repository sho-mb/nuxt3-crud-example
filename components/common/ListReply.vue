<template>
  <div class="flex pt-6">
    <UAvatar
      size="md"
      :src="accountData.avatar"
      :alt="accountData.alt"
    />
    <div class="ml-2 w-[90%]">
      <div class="flex justify-between">
        <div class="flex gap-2">
          <div> {{ props.reply.account.username }} </div>
          <div class="opacity-30">@{{ props.reply.account.userId }}</div>
        </div>
        <HomeCommonDropdownMenu
          :id="props.account.id"
          v-model:modal="modal"
          v-model:targetId="targetId"
        />
      </div>
      <div>{{ props.reply.discription }}</div>

      <div class="flex justify-between mt-3">
        <HomeCommonTweetReaction
          v-for="(icon, index) in iconsFeed"
          :key="index"
          :size="20"
          :name="icon.name"
          :fetch-path="icon.fetchPath"
          :tweet-id="reply.tweet.id"
        />
        <div>
          <div class="flex gap-3">
            <HomeCommonTweetReaction
              v-for="(icon, index) in sharedAndBookmark"
              :key="index"
              :name="icon.name"
              :size="20"
              :tweet-id="reply.tweet.id"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { accountData, type Account } from '~/types/account'
import { iconsFeed, sharedAndBookmark } from '~/types/common/FeedPost/feed'
import type { Reply } from '~/types/reply'

const modal = defineModel<boolean>('modal')
const targetId = defineModel<number>('targetId')

const props = defineProps<{
  account: Account
  reply: Reply
}>()
</script>

<style>

</style>
