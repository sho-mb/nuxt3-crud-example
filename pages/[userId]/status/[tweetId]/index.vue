<template>
  <div>
    <TweetDetail
      :tweet="data"
      :account="account"
    />
  </div>
</template>

<script lang="ts" setup>
import type { Account } from '~/types/account'
import type { Tweet } from '~/types/tweet/tweet'

const router = useRoute()

const userId = router.params.userId
const tweetId = router.params.tweetId

const data = await $fetch<Tweet>(`/api/tweet/${tweetId}`)
const account = await $fetch<Account>(`/api/account/${userId}`)
console.log(data)
</script>

<style>

</style>
