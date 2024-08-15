<template>
  <div>
    <CommonFeedPost
      v-for="tweet in props.tweets"
      :id="tweet.id"
      :key="tweet.id"
      :discription="tweet.discription"
      :posted-at="tweet.postedAt"
      :account="tweet.account"
    />
  </div>
</template>

<script lang="ts" setup>
import type { Tweet } from '~/types/tweet/tweet'

const props = defineProps<{
  tweets: Tweet[]
}>()
</script>

<style>

</style>
