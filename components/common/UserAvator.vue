<template>
  <div class="flex items-center w-[90%] justify-between">
    <div class="flex">
      <UAvatar
        size="md"
        :src="accountData.avatar"
        :alt="accountData.alt"
      />
      <div class="text-left text-sm ml-4">
        <div class="font-bold">
          {{ account.username }}
        </div>
        <div class="opacity-40">
          {{ account.userId }}
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { accountData } from '~/types/account'

const props = withDefaults(defineProps<{
  account: {
    id: number
    username: string
    userId: string
    profileDisc: string | ''
    profileImgUrl: string | ''
    livingLocation: string
    createdAt: string
  }
}>(), {
  account: {
    id: 0,
    username: '',
    userId: '',
    profileDisc: '',
    profileImgUrl: '',
    livingLocation: '',
    createdAt: '',
  },
})
console.log(props.account)
</script>

<style>

</style>
