<template>
  <div>
    <CommonFeedPost
      v-for="tweet in props.tweets"
      :id="tweet.id"
      :key="tweet.id"
      v-model:modal="modal"
      v-model:targetId="targetId"
      :discription="tweet.discription"
      :posted-at="tweet.postedAt"
      :account="tweet.account"
    />
  </div>
  <UModal
    v-model="modal"
    :ui="{ width: 'w-[320px]', rounded: 'rounded-[20px]' } "
  >
    <div class="p-8">
      <Placeholder class="h-48">
        <div class="text-xl font-semibold">
          Delete post?
        </div>
        <div class="text-sm opacity-40 my-3">
          This can’t be undone and it will be removed from your profile, the timeline of any accounts that follow you, and from search results.
        </div>
        <CommonPostButton
          name="Delete"
          :block="true"
          size="xl"
          color="red"
          type="submit"
          class="mb-4"
          @click="deletePost"
        />
        <CommonPostButton
          name="Cancel"
          :block="true"
          size="xl"
          color="white"
          type="submit"
          @click="modal = false"
        />
      </Placeholder>
    </div>
  </UModal>
</template>

<script lang="ts" setup>
import type { Tweet } from '~/types/tweet/tweet'

const modal = defineModel<boolean>('modal')
const targetId = defineModel<number>('tweetId')

const props = defineProps<{
  tweets: Tweet[]
}>()

const emit = defineEmits<{
  (e: 'delete'): void
}>()

const deletePost = () => {
  emit('delete')
}
</script>

<style>

</style>
