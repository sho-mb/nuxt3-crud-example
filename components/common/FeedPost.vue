<template>
  <div class="flex w-full p-4">
    <div class="mr-2">
      <UAvatar
        src="https://pbs.twimg.com/profile_images/1815749056821346304/jS8I28PL_400x400.jpg"
        :alt="account.alt"
        size="md"
        class="w-fit"
      />
    </div>
    <div class="w-full">
      <div class="flex justify-between">
        <div class="flex gap-3 items-center">
          <div class="font-semibold">{{ userData.name }}</div>
          <div class="text-md opacity-30 font-light">@{{ userData.accountId }}</div>
          <div class="text-md opacity-30 font-light">• {{ userData.date }}</div>
        </div>
        <div class="opacity-30">
          <Icon
            name="gg:more-alt"
            size="20"
          />
        </div>
      </div>
      <div>Conversation with @realDonaldTrump in 45 minutes!</div>
      <div class="flex justify-between opacity-30 mt-3">
        <CommonIconFlex
          v-for="icon in icons" :key="icon.name"
          :name="icon.name"
          :size="icon.size"
          :count="icon.count"
        />
        <div class="flex gap-3">
          <CommonIconFlex
            v-for="item in sharedAndBookmark" :key="item.name"
            :name="item.name"
            :size="item.size"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { account } from '~/types/account'

const date = new Date()

const month = date.toLocaleString('en-US', { month: 'short' })
const day = date.getDate()

const formattedDate = `${month} ${day}`

const userData = {
  name: 'Elon Musk',
  accountId: 'elonmusk',
  date: formattedDate,
}

const icons = [
  {
    name: 'ri:chat-1-line',
    size: 20,
    count: 23,
  },
  {
    name: 'ri:repeat-fill',
    size: 20,
    count: 23,
  },
  {
    name: 'ri:heart-3-line',
    size: 20,
    count: 40,
  },
  {
    name: 'ri:rhythm-line',
    size: 20,
    count: 600,
  },
]

const sharedAndBookmark = [
  {
    name: 'ri:bookmark-line',
    size: 20,
  },
  {
    name: 'ri:upload-2-line',
    size: 20,
  },
]
</script>

<style>

</style>
